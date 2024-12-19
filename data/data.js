const products = [
    {
        id: "asdss111",
        name: "Camiseta Titular",
        description: "",
        price: 90000,
        stock: 8,
        image: "/public/camisetatitular.png",
        category: "camisetas"
    },
    
    {
        id: "hashah77",
        name: "Buzo Boca",
        description: "",
        price: 110000,
        stock: 3,
        image: "/public/buzo.jpg",
        category: "buzos"
    },
    
    {
        id: "asdss111",
        name: "Short Boca",
        description: "",
        price: 30000,
        stock: 21,
        image: "/public/short.png",
        category: "shorts"
    },

    {
        id: "asdss111",
        name: "Camperon Boca",
        description: "",
        price: 180000,
        stock: 3,
        image: "/public/camperon.webp",
        category: "camperones"
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