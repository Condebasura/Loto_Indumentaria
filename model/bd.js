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


// Crear una consulta para seleccionar los productos por cada seccion
const GetProdHomR = async ()=>{
    try {
        return await new Promise((resolve, reject)=>{
            let sql = 'SELECT * FROM products WHERE seccion = "Hombre" AND subSeccion = "Remeras"';
            bd.all(sql,[], (err, row)=>{
                if(err){
                    console.log(err);
                    reject(err);


                }else{
                    resolve(row);
                }
            })
        })
    } catch (error) {
        console.log(error);
    }
}


     const GetProdHomP = async ()=>{
       try {
        return await new Promise((resolve, reject)=>{
            let sql = 'SELECT * FROM products WHERE seccion = "Hombres" AND subSeccion = "Pantalones" ';
            
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

     const GetProdHomA = async ()=>{
        try {
         return await new Promise((resolve, reject)=>{
             let sql = 'SELECT * FROM products WHERE seccion = "Hombres" AND subSeccion = "Accesorios"';
             
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

      const GetProdMujR = async ()=>{
        try {
         return await new Promise((resolve, reject)=>{
             let sql = 'SELECT * FROM products WHERE seccion = "Mujeres" AND subSeccion = "Remeras"';
             
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


      const GetProdMujP = async ()=>{
        try {
         return await new Promise((resolve, reject)=>{
             let sql = 'SELECT * FROM products WHERE seccion = "Mujeres" AND subSeccion = "Pantalones" ';
             
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

      const GetProdMujV = async ()=>{
        try {
         return await new Promise((resolve, reject)=>{
             let sql = 'SELECT * FROM products WHERE seccion = "Mujeres" AND subSeccion = "Vestidos" ';
             
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


      const GetProdMujA = async ()=>{
        try {
         return await new Promise((resolve, reject)=>{
             let sql = 'SELECT * FROM products WHERE seccion = "Mujeres" AND subSeccion = "Accesorios"';
             
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


      const GetProdNenaR = async ()=>{
        try {
         return await new Promise((resolve, reject)=>{
             let sql = 'SELECT * FROM products WHERE seccion = "Niña" AND subSeccion = "Remeras" ';
             
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

      const GetProdNanaP = async ()=>{
        try {
         return await new Promise((resolve, reject)=>{
             let sql = 'SELECT * FROM products WHERE seccion = "Niña" AND subSeccion = "Pantalones" ';
             
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

      const GetProdNenaV = async ()=>{
        try {
         return await new Promise((resolve, reject)=>{
             let sql = 'SELECT * FROM products WHERE seccion = "Niña" AND subSeccion = "Vestidos" ';
             
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

      
      const GetProdNeneR = async ()=>{
        try {
         return await new Promise((resolve, reject)=>{
             let sql = 'SELECT * FROM products WHERE seccion = "Niño" AND subSeccion = "Remeras" ';
             
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

      const GetProdNaneP = async ()=>{
        try {
         return await new Promise((resolve, reject)=>{
             let sql = 'SELECT * FROM products WHERE seccion = "Niño" AND subSeccion = "Pantalones" ';
             
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
};

const Coincide = (User)=>{
    return new Promise((resolve, reject)=>{
        let sql = 'SELECT * FROM admin WHERE user = ?';
        let user = User.user;
        let password = User.password;
        bd.get(sql, [user], async (err,row)=>{
            if(err){
                console.log(err.message);
                reject(err);
            }if(!row){
                resolve(false);
                return;
            }
            try {
                const PasswordMatch = await bcrypt.compare(password, row.password);
                resolve(PasswordMatch);
            } catch (btrypterror) {
                console.log("error al comparar contraseñas:", btrypterror)
            }
        })
    })
}

const validaDatos =(id)=>{

    return new Promise((resolve , reject)=>{

        let sql = 'SELECT * FROM products WHERE id = ?';
        
        bd.get(sql , [id], (err , row )=> {
        
            if(err){
                console.error(err.message);
                reject(err);
                
            }if(row){
                console.log(row);
                resolve(row)
                
               
            } 
            
            
        });
    })
};





const UpdateProd = async(products)=>{
    try {
        const sql = 'UPDATE products SET id = ?, producto = ?, stock = ? , descuento = ? , precio = ? , cuotas = ?, seccion = ? , subSeccion = ?, imagen = ? WHERE id = ? ';
        bd.run(sql, [ products.id,products.producto , products.stock, products.descuento , products.precio , products.cuotas ,products.seccion , products.subSeccion, products.imagen , products.id ], (err)=>{
            if(err){
                console.log(err.message)
            }else{
                console.log("El producto se actualizo correctamente")
            }
        })
    } catch (error) {
        console.log(error.message)
    }
}


const DeleteProd = (id)=>{
    let sql = 'DELETE FROM products WHERE id = ?';
    bd.run(sql, [id], (err)=>{
        if(err){
            console.log("Ocurrio un error al querer eliminar el producto")
           
        }else{
console.log("Producto eliminado con exito")
        }
    })
};

     export default {bd,
        ConsultProduct,
        GetProdHomR,
        GetProdHomP,
        GetProdHomA,
        GetProdMujR,
        GetProdMujP,
        GetProdMujV,
        GetProdMujA,
        GetProdNenaR,
        GetProdNanaP,
        GetProdNenaV,
        GetProdNeneR,
          GetProdNaneP,
        InsertProducto,
        consultaUser,
        InsertUser,
        Coincide,
        validaDatos,
        UpdateProd,
        DeleteProd,
     }