var svg1 = dimple.newSvg("#chartContainer1", "100%", "800");

  d3.csv("/data/pldata.csv", function (d) {

      
      chart1Data = d.filter(function(d){return d["Occupation"] !== 'Other' && d["Occupation"] !== "" && d["n"] > 10;});
      var myChart1 = new dimple.chart(svg1, chart1Data);
      myChart1.setMargins("175px", "30px", "30px", "70px");
      //myChart.setBounds(175, 30, 625, 600);
      var x = myChart1.addMeasureAxis("x", "n");
      var y = myChart1.addCategoryAxis("y", "Occupation");
      var s = myChart1.addSeries(null, dimple.plot.bar);
      y.addOrderRule("n");
      x.tickFormat = '.0f';
      s.interpolation = "step";
      s.lineWeight = 1;
      myChart1.draw();

      window.onresize = function () {
        myChart1.draw(0, true);
      };


  });
