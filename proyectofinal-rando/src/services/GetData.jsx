const data =[
    {
        "id": 1,
        "name": "Apx1000", 
        "price": 1000,
        "image":"https://www.motorolasolutions.com/content/dam/msi/images/products/two-way-radios/apx/APX1000/APX_1000_Image1_LG.jpg#1",
        "detail": "Banda de frecuencia VHF, UHF, 700 MHz, 800 MHz",
        "stock": 20,
        "quantity": 0
    },
    {
        "id": 2,
        "name": "Apx2000",
        "price": 2000,
        "image": "https://www.motorolasolutions.com/content/dam/msi/images/es_xl/APX_2000.jpg",
        "detail": "Banda de frecuencia VHF, UHF, 700 MHz, 800 MHz",
        "stock": 10,
        "quantity": 0
    },
    {
        "id": 3,
        "name": "Apx1500",
        "price": 2500,
        "image": "https://www.motorolasolutions.com/content/dam/msi/images/business/products/two-way_radios/portable_radios/apx_1500/_images/apx1500_main_324x324_lg.jpg",
        "detail": "Banda de frecuencia VHF, UHF, 700 MHz, 800 MHz",
        "stock": 20,
        "quantity": 0
    },
    {
        "id": 4,
        "name": "Apx2500",
        "price": 3000,
        "image": "https://www.motorolasolutions.com/content/dam/msi/images/business/products/two-way_radios_-_public_safety/mobile_radios_gps/apx_4500/_images/_staticfiles/apx_4500_trunion.png#1",
        "detail": "Banda de frecuencia VHF, UHF, 700 MHz, 800 MHz",
        "stock": 20,
        "quantity": 0
    }
    ]

    const getData = new Promise((resolve)=>{
        setTimeout(()=>{
        resolve(data);
    }, 2000)
    });
    export default getData;