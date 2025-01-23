const products = [
    {
        id: "Gmt1",
        name: "Camiseta Titular",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia officiis voluptatem eum quasi a repellendus omnis sunt libero exercitationem enim repellat esse minima, asperiores natus voluptate fugit velit labore quisquam?",
        price: 90000,
        stock: 8,
        image: "/public/camisetatitular.png",
        category: "camisetas"
    },
    
    {
        id: "Gmt2",
        name: "Buzo Boca",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia officiis voluptatem eum quasi a repellendus omnis sunt libero exercitationem enim repellat esse minima, asperiores natus voluptate fugit velit labore quisquam?",
        price: 110000,
        stock: 3,
        image: "/public/buzo.jpg",
        category: "buzos"
    },
    
    {
        id: "Gmt3",
        name: "Short Boca",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia officiis voluptatem eum quasi a repellendus omnis sunt libero exercitationem enim repellat esse minima, asperiores natus voluptate fugit velit labore quisquam?",
        price: 30000,
        stock: 21,
        image: "/public/short.png",
        category: "shorts"
    },

    {
        id: "Gmt4",
        name: "Camperon Boca",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia officiis voluptatem eum quasi a repellendus omnis sunt libero exercitationem enim repellat esse minima, asperiores natus voluptate fugit velit labore quisquam?",
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