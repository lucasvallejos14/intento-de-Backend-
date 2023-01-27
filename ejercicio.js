class ProductManager {

    constructor () {
       
        this.id = 0
        this.products = []
        
    }


       

    addProduct(titulo, descripcion, precio, imagen, stock, code) {


        
        this.products.find( (codigo) => {

            return  codigo.code === code

        })

        

        this.products.push({
            titulo : titulo,
            descripcion : descripcion,
            precio : precio,
            imagen : imagen,
            stock : stock, 
            id : this.id,
            code : code,
        } )

       if(titulo === this.titulo  || descripcion === this.description  || precio === this.precio  || imagen ===  this.imagen  || stock === this.stock  || id === this.id  || code === this.code){

            console.log (this.products)
            
       } else{
         console.log("Error de lectura de datos.")
       }

    }
     
    
    getProductsById(id) {
        return this.products.find( products => { products.id ===id;
        })

        
    }

    getProductsById(){
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