var config = {
    style: 'mapbox://styles/masolano2003/cmg24sznk001z01sc7dfk1ta8',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoibWFzb2xhbm8yMDAzIiwiYSI6ImNtZnk2M2FtOTBmdXkyanNoaTZxMjJoYncifQ.Zvo4DVs_LSM16DNnkLtj6w',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Puntos Cardinales de la Península Ibérica',
    subtitle: 'Un viaje geográfico por los extremos de la Península: Norte, Sur, Este y Oeste.',
    byline: 'By Milene Solano',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Estaca de Bares',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Cabo_-_Punta_Estaca_de_Bares.JPG/1024px-Cabo_-_Punta_Estaca_de_Bares.JPG',
            description: 'El punto más septentrional de la Península Ibérica, situado en Galicia. Un lugar de gran belleza natural y un importante observatorio ornitológico.',
            location: {
                center: [-7.68777778, 43.79027778],
                zoom: 10.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Punta de Tarifa',
            image: 'https://es.wikipedia.org/wiki/Punta_de_Tarifa#/media/Archivo:Tarifa_SPOT_1165.jpg',
            description: 'El punto más meridional de la Europa continental, en Cádiz. Aquí se encuentran el Océano Atlántico y el Mar Mediterráneo, y es un lugar clave para la observación de aves migratorias.',
            location: {
            center: [-5.6102777777778, 36.004166666667],
                zoom: 10.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Cap de Creus',
            image: 'https://es.wikipedia.org/wiki/Cabo_de_Creus#/media/Archivo:Cabo_de_Creus.jpg',
            description: 'El punto más oriental de la Península Ibérica, en Cataluña. Un paisaje rocoso y salvaje que inspiró a Salvador Dalí, parte de un parque natural marítimo-terrestre',
            location: {
                center: [3.3219444444444, 42.319166666667],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Cabo da Roca',
            image: 'https://es.wikipedia.org/wiki/Cabo_de_la_Roca#/media/Archivo:Cabo_da_Roca_-_Sintra_-_060415_08.JPG',
            description: 'El punto más occidental de la Europa continental, en Portugal. Un acantilado impresionante con un faro, donde la tierra termina y el mar comienza.',
            location: {
                center: [-9.50056, 38.78083],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
