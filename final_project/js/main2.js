// define the two different charts
var svg1 = dimple.newSvg("#chartContainer1", "100%", "700");
var svg2 = dimple.newSvg("#chartContainer2", "100%", "500");

  d3.csv("/data/pldata.csv", function (d) {

      //CHART 1
      // Because the chart is more about the people behind the loans, we'll
      // filter out elements that are none descriptive
      chart1Data = d.filter(function(d){return d["Occupation"] !== 'Other' &&
        d["Occupation"] !== "" && d["Occupation"] !== "Professional" && d["n"] > 20;});
      var myChart1 = new dimple.chart(svg1, chart1Data);
      myChart1.setMargins("175px", "30px", "150px", "70px");
      var x = myChart1.addMeasureAxis("x", "n");
      var y = myChart1.addCategoryAxis("y", "Occupation");
      var s = myChart1.addSeries("ProsperRating..Alpha.", dimple.plot.bar);
      x.tickFormat = '.0f';
      //Make sure our chart is ordered nicely
      y.addOrderRule("n");
      s.addOrderRule("ProsperRating..Alpha.")
      var lgd = myChart1.addLegend("-120px", "30px", "50px", "-70px");
      myChart1.draw();

      window.onresize = function () {
        myChart1.draw(0, true);
      };

      //Add the interactivity from the radio buttons
      d3.selectAll("#chart-controls input[name=mode]").on("change", function() {

        //Remove the previous bars before we add the new set of stacked bars
        myChart1.series.forEach(function(series){
          series.shapes.remove();
        });
        //We splice the series so new values do not get added to our existing legend.
        myChart1.series.splice(0, 1);
        myChart1.addSeries(this.value, dimple.plot.bar);
        //Redraw with the new series.
        myChart1.draw(500, false);
      });




      //CHART 2
      //The categories we want to use
      var category_names = ["Debt Consolidation", "Home Improvement", "Business",
        "Personal Loan", "Student Use", "Auto", "Other", "Baby&Adoption", "Boat",
        "Cosmetic Procedure", "Engagement Ring", "Green Loans", "Household Expenses",
        "Large Purchases", "Medical/Dental", "Motorcycle", "RV", "Taxes",
        "Vacation", "Wedding Loans"];

      //The categories without 'Debt consolidation' and 'other' so we can focus
      //on the details.
     var starting_values = ["Home Improvement", "Business", "Personal Loan",
        "Student Use", "Auto", "Baby&Adoption", "Boat", "Cosmetic Procedure",
        "Engagement Ring", "Green Loans", "Household Expenses", "Large Purchases",
        "Medical/Dental", "Motorcycle", "RV", "Taxes", "Vacation", "Wedding Loans"];

      chart2Data = dimple.filterData(d, "ListingCategory", category_names);

      var myChart2 = new dimple.chart(svg2, chart2Data);
      var p = myChart2.addMeasureAxis("p", "n");
      p.tickFormat = '.0f';
      var ring = myChart2.addSeries("ListingCategory", dimple.plot.pie);
      //A ring works nicer for a kind of 'playful' interactivity
      ring.innerRadius = "50%";
      var myLegend = myChart2.addLegend("-120px", "30px", "100px", "-70px", "Right");
      myChart2.draw();

      window.onresize = function () {
        myChart2.draw(0, true);
      };
      //Orphan the legend so we can use it for toggling the different values
      //without changing the legend
      myChart2.legends = [];

      //We manually filter out and visually turn of the two largest parts of the data set
      myLegend.shapes.select('.dimple-debt-consolidation rect').style("opacity", 0.1);
      myLegend.shapes.select('.dimple-other rect').style("opacity", 0.1);
      myChart2.data = dimple.filterData(chart2Data, "ListingCategory", starting_values);

      myChart2.draw();

      var filterValues = starting_values;
       // Get all the rectangles from the orphaned legend
       myLegend.shapes.selectAll("rect")
         // Add a click event to each rectangle
         .on("click", function (e) {
           // This indicates whether the item is already visible or not
           var hide = false;
           var newFilters = [];
           // If the filters contain the clicked shape hide it
           filterValues.forEach(function (f) {
             if (f === e.aggField.slice(-1)[0]) {
               hide = true;
             } else {
               newFilters.push(f);
             }
           });

           // Hide the shape or show it
           if (hide) {
             d3.select(this).style("opacity", 0.1);
           } else {
             newFilters.push(e.aggField.slice(-1)[0]);
             d3.select(this).style("opacity", 0.9);
           }

           filterValues = newFilters;

           myChart2.data = dimple.filterData(chart2Data, "ListingCategory", filterValues);

           myChart2.draw(800);

         });



  });
