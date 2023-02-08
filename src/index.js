import  express  from "express";

import { ProductManager } from "./ProductManager";

const app = express()

const PORT = 8080


const productManager = new ProductManager('src/productos.txt')

app.use(express.json())

app.use(express.urlencoded({extended: true}))

//rutas

//obtener todos los productos
app.get('/product', async (req, res)=> {

    const {titulo} = req.query;

    console.log(titulo)

    const productos = await productManager.getProducts()

    console.log(productos)

    res.send(JSON.stringify(productos))
})

//me devuelve el id del elemento
app.get('/product/:id', async (req, res)=>{

    const producto =await productManager.getProductsById(req.params.id)
    
    console.log(producto)
    res.send(JSON.stringify(productos))
})

//envio de un producto 
app.post('/product' ,async (req, res) => {

    let mensaje = await productManager.addProduct(req.body)

    res.send(mensaje)
})