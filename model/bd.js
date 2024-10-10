import sqlite3 from "sqlite3";
 let bd = new sqlite3.Database("Productos.bd");
 import { v4 as uuidv4 } from 'uuid';
 import bcrypt from 'bcrypt';
 const saltRounds = 10;

 bd.run('CREATE TABLE IF NOT EXISTS products (id TEXT PRIMARY KEY, producto TEXT ,stock INTEGER, descuento INTEGER, precio INTEGER, cuotas INTEGER , seccion TEXT , subSeccion TEXT , imagen TEXT )');
 bd.run('CREATE TABLE IF NOT EXISTS admin (user TEXT , password TEXT )');
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

const consultaUser = async()=>{
    const query = 'SELECT COUNT(*) AS count FROM admin  ' ;

  return await new Promise((resolve, reject) =>{
    bd.get(query, [], (err, row)=>{
        if(err){
            reject(err);
        }else{
            resolve(row.count > 0)
        };
    });
  });
};

const InsertUser = async (User)=>{
    try{
        const hashedPasword = await bcrypt.hash(User.password , saltRounds);
        let stmt = bd.prepare('INSERT INTO admin(user , password) VALUES(?,?)');
        stmt.run(User.user , hashedPasword);

        stmt.finalize();
        return 'usuario registrado con exito';

    }catch(error){
      throw  console.log(error);
    }
}
     export default {bd,
        ConsultProduct,
        getProducts,
        InsertProducto,
        consultaUser,
        InsertUser,
     }