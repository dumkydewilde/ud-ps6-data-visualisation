var svg1 = dimple.newSvg("#chartContainer1", "100%", "700");
var svg2 = dimple.newSvg("#chartContainer2", "100%", "500");

  d3.csv("/data/pldata.csv", function (d) {

      console.log(d[10]);
      chart1Data = d.filter(function(d){return d["Occupation"] !== 'Other' && d["Occupation"] !== "" && d["n"] > 25;});
      var myChart1 = new dimple.chart(svg1, chart1Data);
      myChart1.setMargins("175px", "30px", "150px", "70px");
      //myChart.setBounds(175, 30, 625, 600);
      var x = myChart1.addMeasureAxis("x", "n");
      var y = myChart1.addCategoryAxis("y", "Occupation");
      var s = myChart1.addSeries("ProsperRating..Alpha.", dimple.plot.bar);
      x.tickFormat = '.0f';
      y.addOrderRule("n");
      var lgd = myChart1.addLegend("-120px", "30px", "50px", "-70px");
      s.interpolation = "step";
      s.lineWeight = 1;
      myChart1.draw();

      window.onresize = function () {
        myChart1.draw(0, true);
      };

      d3.selectAll("#chart-controls input[name=mode]").on("change", function() {
        console.log(this.value);
        console.log(myChart1.series);
        myChart1.series.forEach(function(series){
          console.log(series);
          series.shapes.remove();
        });
        myChart1.series.splice(0, 1);
        myChart1.addSeries(this.value, dimple.plot.bar);

        myChart1.draw(500, false);
      });




      console.log(d[10]);
      var category_names = ["Debt Consolidation", "Home Improvement", "Business", "Personal Loan", "Student Use", "Auto", "Other", "Baby&Adoption", "Boat",
                 "Cosmetic Procedure", "Engagement Ring", "Green Loans", "Household Expenses", "Large Purchases", "Medical/Dental", "Motorcycle", "RV", "Taxes",
                 "Vacation", "Wedding Loans"];
     var starting_values = ["Home Improvement", "Business", "Personal Loan", "Student Use", "Auto", "Baby&Adoption", "Boat",
                "Cosmetic Procedure", "Engagement Ring", "Green Loans", "Household Expenses", "Large Purchases", "Medical/Dental", "Motorcycle", "RV", "Taxes",
                "Vacation", "Wedding Loans"];

      chart2Data = dimple.filterData(d, "ListingCategory", category_names);
      console.log(chart2Data[10]);
      var myChart2 = new dimple.chart(svg2, chart2Data);
      var p = myChart2.addMeasureAxis("p", "n");
      p.tickFormat = '.0f';
      var ring = myChart2.addSeries("ListingCategory", dimple.plot.pie);
      ring.innerRadius = "50%";
      var myLegend = myChart2.addLegend("-120px", "30px", "100px", "-70px", "Right");
      myChart2.draw();

      window.onresize = function () {
        myChart2.draw(0, true);
      };
      //Orphan the legend so we can use it for toggling the different values
      myChart2.legends = [];
      myLegend.shapes.select('.dimple-debt-consolidation rect').style("opacity", 0.1);
      myLegend.shapes.select('.dimple-other rect').style("opacity", 0.1);
      myChart2.data = dimple.filterData(chart2Data, "ListingCategory", starting_values);

      myChart2.draw();

      // Get a unique list of Owner values to use when filtering
       var filterValues = starting_values;
       // Get all the rectangles from our now orphaned legend
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
