import sqlite3 from "sqlite3";
 let bd = new sqlite3.Database("Productos.bd");
 import { v4 as uuidv4 } from 'uuid';

 bd.run('CREATE TABLE IF NOT EXISTS products (id TEXT PRIMARY KEY, producto TEXT ,stock INTEGER, descuento INTEGER, precio INTEGER, cuotas INTEGER , seccion TEXT , subSeccion TEXT , imagen TEXT )');
 
 const ConsultProduct = ()=>{
 
         bd.all('SELECT * FROM products', (err, rows)=>{
             if(err){
                 console.log(err.message)
             }else{
                 console.log('productos encontrados: ' + rows.length);
                 rows.forEach((row)=>{
                     console.log(row)
                     
                 })
             }
            
       });
     
     };


     const getProducts = async ()=>{
       try {
        return await new Promise((resolve, reject)=>{
            let sql = 'SELECT * FROM products';
            
            bd.all(sql,[], (err,row)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(row);
                }
            })
        })
        
       } catch (error) {
        console.log(error);
       }
     };

    const InsertProducto = async (products)=>{
        try{
        const id = uuidv4();
            console.log(id);
            let stmt = bd.prepare('INSERT INTO products(id,producto,stock, descuento , precio , cuotas , seccion , subSeccion , imagen) VALUES(?,?,?,?,?,?,?,?,?)');
         stmt.run(id, products.producto,products.stock, products.descuento , products.precio , products.cuotas , products.seccion , products.subSeccion , products.imagen);
            stmt.finalize();
            return "Producto ingresado con exito";

        }catch(err){
            console.log("Error", err)
        }
    };


     export default {bd,
        ConsultProduct,
        getProducts,
        InsertProducto,
       
     }