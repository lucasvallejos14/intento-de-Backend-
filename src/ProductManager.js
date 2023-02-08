export class ProductManager {

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
productos.addProduct("Coca-Cola Zero", "cero azucar", "$100", "https://www.casa-segal.com/wp-content/uploads/2020/03/coca-cola-sin-azucares-15L-almacen-gaseosas-casa-segal-mendoza-600x600.jpg",1)
productos.addProduct("Sprite Zero", "cero azucar", "$100", "https://www.grupoelnene.com.ar/7322-large_default/sprite-zero-15lt.jpg", 20, 2)
productos.addProduct("Fanta", "uva", "$100", "https://www.distribuidoracaue.com.br/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/r/e/refrigerante-fanta-uva-2-litros.jpg?v=1", 20, 3)
productos.addProduct("Cepita", "Sabor durazno", "$150", "https://jumboargentina.vtexassets.com/arquivos/ids/752384/Jugo-Cepita-Durazno-20995cc-1-916613.jpg?v=638011210918270000", 20, 4 )
