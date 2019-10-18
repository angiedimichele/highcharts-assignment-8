// code for a basic bar chart
// see https://www.highcharts.com/demo/bar-basic

Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Raspberries','Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Angie and Gabbie\'s house'
      }
    },
    series: [{
      name: 'Angie',
      data: [6, 1, 0, 4]
    }, {
      name: 'Gabbie',
      data: [6, 5, 7, 3]
    }]
  });
