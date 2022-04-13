
// create function to get filter the selected country and choose specific text o visualise

// L5 Data preparation


//  TODO CHOLORPLETH START 

(async () => {

    // L5 Data preparation
        const data = await fetch(
            '../data/L5_Wrangled.json'
        ).then(response => response.json());

        const topology = await fetch(
            'https://code.highcharts.com/mapdata/custom/world.topo.json'
        ).then(response => response.json());
    
        Highcharts.getJSON('../data/L5_Wrangled.json', function (data) {
    
            // Initialize the chart
            Highcharts.mapChart('container', {
                chart: {
                    map: topology
                },
    
                title: {
                    text: 'Zoom in on country by double click'
                },
    
                mapNavigation: {
                    enabled: true,
                    enableDoubleClickZoomTo: true
                },
    
                colorAxis: {
                    min: 0,
                    max: 100,
                    type: 'linear',
                    minColor: '#FFE6E6',
                    maxColor: '#FF0D0D'
                },
    
                series: [{
                    data: data,
                    joinBy: ['iso-a3', 'ISO-alpha-3'], // left for Geojson Right for our data
                    name: 'Very Serious threat',
                    states: {
                        hover: {
                            color: '#a4edba'
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        format: '{point.properties.name}'
                    },
                    tooltip: {
                        valueSuffix: '%'
                    }
                }]
            });
        });
    
        // Pre-select a country
        // mapChart.get('us').select();
    
    })();
    
    //  TODO CHOLORPLETH START 
    
    
    //  TODO WORD CLOUD START 
    
    const text = 'One largest campaigns Gen Less campaign (formerly Energywise), provided  Energy Efficiency Conservation Authority. Gen Less aims reduce energy use, especially energy generated  fossil fuels,  encouraging New Zealanders make climate-conscious decisions. campaigns website provides  number resources private homeowners businesses actively reduce their climate impacts; example, there are tools measure ones own emissions concrete examples emission reduction strategies. Another Government initiative designed empower New Zealanders reduce their climate footprints, was  2020 campaign called Say No Wasted Energy, which encourages New Zealanders say no carbon intensive activities such as unnecessary business flights or driving work. Another government-supported organization Toitū Envirocare, which provides certification emission reduction tools small businesses increase awareness their sustainable business practices. government has introduced Environmental Choice New Zealand Ecolabel  certification encourage more awareness climate change through consumer purchases. Green Ribbon Awards have been awarded  Ministry Environment since 1990, have included  category reducing greenhouse gas emissions since 2010. Awards have been used raise public awareness best practices  emission reduction activities. However, Awards had not been held since 2017 at time this review.New Zealand has  strong focus on promoting electric cars better driving habits. Efficient Low Emissions Transport Programme  Energy Efficiency Conservation Authority offers resources information on how choose vehicles with lower emissions.He Waka Eke Noa - Primary Sector Climate Action Partnership  partnership reduce primary sector emissions. Farmers learn measure, manage, reduce on-farm agricultural greenhouse gas emissions adapt climate change. ',
        lines = text.split(/[,\. ]+/g),
        data = lines.reduce((arr, word) => {
            let obj = Highcharts.find(arr, obj => obj.name === word);
            if (obj) {
                obj.weight += 1;
            } else {
                obj = {
                    name: word,
                    weight: 1
                };
                arr.push(obj);
            }
            return arr;
        }, []);
    
    Highcharts.chart('wordcloudcontainer', {
        accessibility: {
            screenReaderSection: {
                beforeChartFormat: '<h5>{chartTitle}</h5>' +
                    '<div>{chartSubtitle}</div>' +
                    '<div>{chartLongdesc}</div>' +
                    '<div>{viewTableButton}</div>'
            }
        },
        series: [{
            type: 'wordcloud',
            data,
            name: 'Occurrences'
        }],
        title: {
            text: "Wordcloud of New Zealand's country profiles"
        }
    });
    
    //  TODO WORD CLOUD END
    
    