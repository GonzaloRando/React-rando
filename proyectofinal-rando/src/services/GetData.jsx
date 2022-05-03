const data =[
    {
        "id": 1,
        "name": "Apx1000", 
        "price": 1000,
        "image":"",
        "stock": 20,
        "quantity": 0
    },
    {
        "id": 2,
        "name": "Apx2000",
        "price": 2000,
        "image": "",
        "stock": 10,
        "quantity": 0
    },
    {
        "id": 3,
        "name": "Apx1500",
        "price": 2500,
        "image": "",
        "stock": 20,
        "quantity": 0
    },
    {
        "id": 4,
        "name": "Apx2500",
        "price": 3000,
        "image": "",
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