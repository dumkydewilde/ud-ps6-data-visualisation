var svg1 = dimple.newSvg("#chartContainer1", "100%", "500");
var svg2 = dimple.newSvg("#chartContainer2", "100%", "500");

  d3.csv("/data/pldata.csv", function (d) {

      console.log(d[10])
      chart1Data = d.filter(function(d){return d["Occupation"] !== 'Other' && d["Occupation"] !== "" && d["n"] > 25});
      var myChart1 = new dimple.chart(svg1, chart1Data);
      myChart1.setMargins("175px", "30px", "150px", "70px");
      //myChart.setBounds(175, 30, 625, 600);
      myChart1.addMeasureAxis("x", "n");
      var y = myChart1.addCategoryAxis("y", "Occupation");
      var s = myChart1.addSeries("ListingCategory", dimple.plot.bar);
      y.addOrderRule("n");
      myChart1.addLegend("-120px", "30px", "100px", "-70px");
      s.interpolation = "step";
      s.lineWeight = 1;
      myChart1.draw();

      window.onresize = function () {
        myChart1.draw(0, true);
      };

      chart2Data = d.filter(function(data){return d["Occupation"] !== 'Other' && d["Occupation"] !== "" && d["n"] > 25});
      var myChart2 = new dimple.chart(svg2, chart2Data);
      myChart2.setMargins("175px", "30px", "150px", "70px");
      //myChart.setBounds(175, 30, 625, 600);
      myChart2.addMeasureAxis("x", "n");
      var y = myChart2.addCategoryAxis("y", "Occupation");
      var s = myChart2.addSeries("ListingCategory", dimple.plot.bar);
      y.addOrderRule("n");
      myChart2.addLegend("-120px", "30px", "100px", "-70px");
      s.interpolation = "step";
      s.lineWeight = 1;
      myChart2.draw();

      window.onresize = function () {
        myChart2.draw(0, true);
      };

    });
