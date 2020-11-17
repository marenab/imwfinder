
const config = {
    style: "mapbox://styles/mapbox/light-v10",
    accessToken: "pk.eyJ1IjoibWFwYm94LWNvbW11bml0eSIsImEiOiJja2htZ3BqaWExZHR6MnlwNWw2aDE4ZmcxIn0.JHov2_fYwcvxVqkRYZ83Dg",
    CSV: "https://docs.google.com/spreadsheets/d/1LXzo17g6GsnBT5qY4hTFiMp34oqjD1Drz1waUZ_1Q-Q/gviz/tq?tqx=out:csv&sheet=Sheet1",
    center: [-120.234, 47.398], //Lng, Lat
    zoom: 6, //Default zoom
    title: "IMW2020 demo",
    description: "This is a example",
    sideBarInfo: ["Location_Name", "County", "City", "Type"],
    popupInfo: ["Location_Name"],
    filters: [
        {
            type: "dropdown",
            title: "Devices: ",
            columnHeader: "Devices_available",
            listItems: [
                'Computer',
                'Wi-Fi',
                'Adaptive Laptops'
            ]
        },
        {
            type: "checkbox",
            title: "Devices2: ",
            columnHeader: "Devices_available",
            listItems: ["Computer", "Wi-Fi", "Adaptive Laptops"]
        }
    ]

};
