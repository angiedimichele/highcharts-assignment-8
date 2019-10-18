Highcharts.chart('container', {
  chart: {
    type: 'tilemap',
    inverted: true,
    height: '80%'
  },

  accessibility: {
    description: 'The tile map of the United States shows the number of rapes on college campuses in 2017 at the largest universities in that state or the flagship university of that state. The lowest number of rapes on a college campus is at the University of the District of Columbia with 0. The highest number is 116 at the University of Nebraska-Lincoln.'
  },

  title: {
    text: 'Number of Rapes on U.S. College Campuses in 2017'
  },

  subtitle: {
    text: 'Source: <a href="https://ope.ed.gov/campussafety/#/institution/search">U.S. Department of Education Campus Safety and Security Data</a>'
  },

  xAxis: {
    visible: false
  },

  yAxis: {
    visible: false
  },

  colorAxis: {
    dataClasses: [{
      from: 0,
      to: 9,
      color: '#F9EDB3',
      name: '< 10'
    }, {
      from: 10,
      to: 30,
      color: '#FFC428',
      name: '10-30'
    }, {
      from: 35,
      to: 50,
      color: '#FF7987',
      name: '35-50'
    }, {
      from: 70,
      to: 200,
      color: '#FF2371',
      name: '70-200'
    }]
  },

  tooltip: {
    headerFormat: '',
    pointFormat: 'The number of rapes at <b>{point.name}</b> is <b>{point.value}.</b>'
  },

  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: '{point.hc-a2}',
        color: '#000000',
        style: {
          textOutline: false
        }
      }
    }
  },

  series: [{
    name: '',
    data: [{
      'hc-a2': 'AL',
      name: 'University of Alabama',
      region: 'South',
      x: 6,
      y: 7,
      value: 22
    }, {
      'hc-a2': 'AK',
      name: 'University of Alaska Anchorage',
      region: 'West',
      x: 0,
      y: 0,
      value: 1
    }, {
      'hc-a2': 'AZ',
      name: 'University of Arizona',
      region: 'West',
      x: 5,
      y: 3,
      value: 10
    }, {
      'hc-a2': 'AR',
      name: 'University of Arkansas',
      region: 'South',
      x: 5,
      y: 6,
      value: 9
    }, {
      'hc-a2': 'CA',
      name: 'University of California-Berkeley',
      region: 'West',
      x: 5,
      y: 2,
      value: 20
    }, {
      'hc-a2': 'CO',
      name: 'University of Colorado Boulder',
      region: 'West',
      x: 4,
      y: 3,
      value: 16
    }, {
      'hc-a2': 'CT',
      name: 'University of Connecticut',
      region: 'Northeast',
      x: 3,
      y: 11,
      value: 16
    }, {
      'hc-a2': 'DE',
      name: 'University of Delaware',
      region: 'South',
      x: 4,
      y: 9,
      value: 3
    }, {
      'hc-a2': 'DC',
      name: 'University of the District of Columbia',
      region: 'South',
      x: 4,
      y: 10,
      value: 0
    }, {
      'hc-a2': 'FL',
      name: 'University of Florida',
      region: 'South',
      x: 8,
      y: 8,
      value: 11
    }, {
      'hc-a2': 'GA',
      name: 'University of Georgia',
      region: 'South',
      x: 7,
      y: 8,
      value: 13
    }, {
      'hc-a2': 'HI',
      name: 'University of Hawaii at Manoa',
      region: 'West',
      x: 8,
      y: 0,
      value: 7
    }, {
      'hc-a2': 'ID',
      name: 'University of Idaho',
      region: 'West',
      x: 3,
      y: 2,
      value: 2
    }, {
      'hc-a2': 'IL',
      name: 'University of Illinois at Chicago',
      region: 'Midwest',
      x: 3,
      y: 6,
      value: 9
    }, {
      'hc-a2': 'IN',
      name: 'Indiana University-Bloomington',
      region: 'Midwest',
      x: 3,
      y: 7,
      value: 20
    }, {
      'hc-a2': 'IA',
      name: 'University of Iowa',
      region: 'Midwest',
      x: 3,
      y: 5,
      value: 24
    }, {
      'hc-a2': 'KS',
      name: 'University of Kansas',
      region: 'Midwest',
      x: 5,
      y: 5,
      value: 12
    }, {
      'hc-a2': 'KY',
      name: 'University of Kentucky',
      region: 'South',
      x: 4,
      y: 6,
      value: 13
    }, {
      'hc-a2': 'LA',
      name: 'Louisiana State University and Agricultural & Mechanical College',
      region: 'South',
      x: 6,
      y: 5,
      value: 10
    }, {
      'hc-a2': 'ME',
      name: 'University of Maine',
      region: 'Northeast',
      x: 0,
      y: 11,
      value: 11
    }, {
      'hc-a2': 'MD',
      name: 'University of Maryland-College Park',
      region: 'South',
      x: 4,
      y: 8,
      value: 29
    }, {
      'hc-a2': 'MA',
      name: 'University of Massachusetts-Amherst',
      region: 'Northeast',
      x: 2,
      y: 10,
      value: 15
    }, {
      'hc-a2': 'MI',
      name: 'University of Michigan-Ann Arbor',
      region: 'Midwest',
      x: 2,
      y: 7,
      value: 15
    }, {
      'hc-a2': 'MN',
      name: 'University of Minnesota-Twin Cities',
      region: 'Midwest',
      x: 2,
      y: 4,
      value: 19
    }, {
      'hc-a2': 'MS',
      name: 'Mississippi',
      region: 'South',
      x: 6,
      y: 6,
      value: 6
    }, {
      'hc-a2': 'MO',
      name: 'University of Missouri-Columbia',
      region: 'Midwest',
      x: 4,
      y: 5,
      value: 11
    }, {
      'hc-a2': 'MT',
      name: 'University of Montana',
      region: 'West',
      x: 2,
      y: 2,
      value: 5
    }, {
      'hc-a2': 'NE',
      name: 'University of Nebraska-Lincoln',
      region: 'Midwest',
      x: 4,
      y: 4,
      value: 116
    }, {
      'hc-a2': 'NV',
      name: 'University of Nevada-Reno',
      region: 'West',
      x: 4,
      y: 2,
      value: 2
    }, {
      'hc-a2': 'NH',
      name: 'University of New Hampshire',
      region: 'Northeast',
      x: 1,
      y: 11,
      value: 35
    }, {
      'hc-a2': 'NJ',
      name: 'Rutgers University-New Brunswick',
      region: 'Northeast',
      x: 3,
      y: 10,
      value: 30
    }, {
      'hc-a2': 'NM',
      name: 'University of New Mexico',
      region: 'West',
      x: 6,
      y: 3,
      value: 18
    }, {
      'hc-a2': 'NY',
      name: 'University at Buffalo',
      region: 'Northeast',
      x: 2,
      y: 9,
      value: 3
    }, {
      'hc-a2': 'NC',
      name: 'North Carolina State University at Raleigh',
      region: 'South',
      x: 5,
      y: 9,
      value: 15
    }, {
      'hc-a2': 'ND',
      name: 'University of North Dakota',
      region: 'Midwest',
      x: 2,
      y: 3,
      value: 7
    }, {
      'hc-a2': 'OH',
      name: 'Ohio State University',
      region: 'Midwest',
      x: 3,
      y: 8,
      value: 71
    }, {
      'hc-a2': 'OK',
      name: 'University of Oklahoma-Norman Campus',
      region: 'South',
      x: 6,
      y: 4,
      value: 10
    }, {
      'hc-a2': 'OR',
      name: 'University of Oregon',
      region: 'West',
      x: 4,
      y: 1,
      value: 15
    }, {
      'hc-a2': 'PA',
      name: 'Pennsylvania State University',
      region: 'Northeast',
      x: 3,
      y: 9,
      value: 37
    }, {
      'hc-a2': 'RI',
      name: 'University of Rhode Island',
      region: 'Northeast',
      x: 2,
      y: 11,
      value: 15
    }, {
      'hc-a2': 'SC',
      name: 'University of South Carolina-Columbia',
      region: 'South',
      x: 6,
      y: 8,
      value: 9
    }, {
      'hc-a2': 'SD',
      name: 'University of South Dakota',
      region: 'Midwest',
      x: 3,
      y: 4,
      value: 4
    }, {
      'hc-a2': 'TN',
      name: 'University of Tennessee-Knoxville',
      region: 'South',
      x: 5,
      y: 7,
      value: 25
    }, {
      'hc-a2': 'TX',
      name: 'University of Texas at Austin',
      region: 'South',
      x: 7,
      y: 4,
      value: 12
    }, {
      'hc-a2': 'UT',
      name: 'University of Utah',
      region: 'West',
      x: 5,
      y: 4,
      value: 11
    }, {
      'hc-a2': 'VT',
      name: 'University of Vermont',
      region: 'Northeast',
      x: 1,
      y: 10,
      value: 13
    }, {
      'hc-a2': 'VA',
      name: 'University of Virginia',
      region: 'South',
      x: 5,
      y: 8,
      value: 12
    }, {
      'hc-a2': 'WA',
      name: 'University of Washington-Seattle Campus',
      region: 'West',
      x: 2,
      y: 1,
      value: 14
    }, {
      'hc-a2': 'WV',
      name: 'West Virginia University',
      region: 'South',
      x: 4,
      y: 7,
      value: 12
    }, {
      'hc-a2': 'WI',
      name: 'University of Wisconsin-Madison',
      region: 'Midwest',
      x: 2,
      y: 5,
      value: 13
    }, {
      'hc-a2': 'WY',
      name: 'University of Wyoming',
      region: 'West',
      x: 3,
      y: 3,
      value: 21
    }]
  }]
});

Highcharts.chart('second_chart', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Rapes on College Campuses in Florida, 2015-2017'
    },
    subtitle: {
        text: 'Source: <a href="https://ope.ed.gov/campussafety/#/datafile/list">U.S. Department of Education Campus Safety and Security Data</a>'
    },
    xAxis: {
        categories: ['University of Florida', 'Florida State University', 'University of North Florida', 'University of South Florida', 'University of West Florida'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rapes on campus',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' rapes '
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: 15,
        y: 65,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: '2015',
        data: [16, 24, 2, 0, 4]
    }, {
        name: '2016',
        data: [20, 16, 5, 1, 5]
    }, {
        name: '2017',
        data: [17, 22, 9, 1, 3]
    }]
});
