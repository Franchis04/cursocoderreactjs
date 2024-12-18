const products = [
    {
        id: "asdss111",
        name: "Pelota Cuerva",
        description: "",
        price: 40000,
        stock: 8,
        image: "/public/pelotauno1.jpg",
        category: "pelotas"
    },
    
    {
        id: "hashah77",
        name: "Camiseta Titular",
        description: "",
        price: 90000,
        stock: 3,
        image: "/public/camisetauno1.webp",
        category: "camisetas"
    },
    
    {
        id: "asdss111",
        name: "Botines Cuervos",
        description: "",
        price: 65000,
        stock: 21,
        image: "/public/botinesuno1.webp",
        category: "botines"
    },
    ]
    
    
    const getProducts = () => {
        return new Promise((resolve, reject) =>{
            setTimeout(() =>{
                resolve(products)
            }, 2000)
        })
    }
    
    export {getProducts}