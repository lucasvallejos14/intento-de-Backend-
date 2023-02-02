class ProductManager {

    constructor () {
       
        this.id = 0
        this.products = []
        
    }


    //  crear id unico

    // static IdUnico(){
    //     if (this.creandoId){
    //         this.creandoId++
    //     }
    //     else{
    //         this.creandoId = 1
    //     }
    //     return this.creandoId
    // }
       

    addProduct(titulo, descripcion, precio, imagen, stock, code) {


        
        this.products.find( (codigo) => {

            return  codigo.code === code

        })

        // validando que no me figuren arrays vacios 

        if(titulo != "" || descripcion != "" || precio != ""  || imagen != ""   || stock != ""  || id != "" || code != "" ){
 
                console.log (this.products)

                this.id++

                this.products.push({
                    titulo : titulo,
                    descripcion : descripcion,
                    precio : precio,
                    imagen : imagen,
                    stock : stock, 
                    id : this.id,
                    code : code,
                } )
             
        } else{

          return console.log("Error de lectura de datos.")
        }

       


    }
     
    
    getProductsById(id) {
        return this.products.find( products => { products.id ===id;
        })

        
    }

    getProducts(){
        return this.products 
        
    }
}
    

 let productos = new ProductManager();

productos.addProduct("Coca-Cola", "Sabor Original", "$100", "https://jumboargentina.vtexassets.com/arquivos/ids/441468/Coca-Cola-25-L-3-17483.jpg?v=636528846231600000",1)
productos.addProduct("Sprite", "Clasica", "$100", "https://www.repartienda.com/wp-content/uploads/2020/05/IMG_8513.jpg", 20, 2)
productos.addProduct("Fanta", "Naranja", "$100", "https://ardiaprod.vtexassets.com/arquivos/ids/228481/Gaseosa-Fanta-naranja-15-Lts-_1.jpg?v=637959904131930000", 20, 3)
productos.addProduct("Cepita", "Sabor Naranja", "$150", "https://d2r9epyceweg5n.cloudfront.net/stores/001/312/763/products/jugo-cepita-naranja-litro-11-9cffefafb7e519f40115981375287957-1024-1024.jpg", 20, 4 )

console.log(productos)

const copia = productos.getProductsById();

console.log(copia)







const fs = require ("fs")
const { json } = require("stream/consumers")

const producto1 = {
    id:1,
    nombre: "Coca-Cola",
    descripcion: "Sabor Original",
    precio: "$100",
    imagen: "https://jumboargentina.vtexassets.com/arquivos/ids/441468/Coca-Cola-25-L-3-17483.jpg?v=636528846231600000",
    stock: 20,
    code: "ab1",

}

const ProductManager = async () => {
    await fs.promises.writeFile('./productos.txt' , "Estos son los productos en venta: ")

    let lista = await fs.promises.readFile ('./productos.txt' , 'utf-8')

    console.log (lista)

    await fs.promises.appendFile ( './productos.txt', JSON.stringify(producto1))

    lista = await fs.promises.readFile ('./productos.txt' , 'utf-8')
    
    let product = JSON.parse (lista)

    if(product.some ( producto =>  producto.id === 1 )) {

        product = product.find(producto => producto.id !== 1)
 
         console.log(product)
         
     } else{
 
         console.log("error")
 
     }
    
    if(product.some ( producto =>  producto.id === 1 )) {

       product = product.filter(producto => producto.id !== 1)

        console.log(product)
        
    } else{

        console.log("error")

    }

    productos.push ({
        id:3,
        nombre: "Coca-Cola",
        descripcion: "Sabor Original",
        precio: "$100",
        imagen: "https://jumboargentina.vtexassets.com/arquivos/ids/441468/Coca-Cola-25-L-3-17483.jpg?v=636528846231600000",
        stock: 20,
        code: "ab3",

    })

    await fs.proimises.writeFile('./productos.txt', JSON.stringify(product))

}

ProductManager()


JSON.stringify(productos)



const http = require ('http')

const PORT = 4000

const server = http.createServer((request,  response) => {
    response.end ( 'este es mi primer servidorrrr')
})


server.listen(PORT, () =>{
    console.log('server on port ${PORT}')
})

import express from 'express'

const app = express()



app.get('/products', (req, res) => {

    res.end(productos)
})

app.get('/' , (req, res) => {

    res.send ("hola")

})

app.listen (PORT, () => {

    console.log('server on port ${PORT}')

})

