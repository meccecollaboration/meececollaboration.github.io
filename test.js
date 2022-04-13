(async () => {
    const L5 = await fetch(
        '../data/L5_Wrangled.csv'
    ).then(response => response.text());

    const topology = await fetch(
        'https://code.highcharts.com/mapdata/custom/world.topo.json'
    ).then(response => response.json());




    })();