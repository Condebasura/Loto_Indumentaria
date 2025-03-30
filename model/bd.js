import sqlite3 from "sqlite3";
 let bd = new sqlite3.Database("Productos.bd");
 import { v4 as uuidv4 } from 'uuid';
 import bcrypt from 'bcrypt';
 const saltRounds = 10;

 bd.run('CREATE TABLE IF NOT EXISTS products (id TEXT PRIMARY KEY, producto TEXT ,stock INTEGER, descuento INTEGER, precio INTEGER, cuotas INTEGER , seccion TEXT , subSeccion TEXT , imagen TEXT )');
 bd.run('CREATE TABLE IF NOT EXISTS admin (user TEXT , password TEXT )');
 bd.run('CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT , nombre TEXT ,apellido TEXT, email TEXT, password TEXT )')
 bd.run('CREATE TABLE IF NOT EXISTS favoritos(Usuario TEXT , Producto_id TEXT , PRIMARY KEY (Usuario, Producto_id), FOREIGN KEY(Usuario) REFERENCES usuarios(email), FOREIGN KEY(Producto_id) REFERENCES products(id))')
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

     const consProducto = async (producto)=>{
        try {
            return await new Promise((resolve, reject)=>{
                let sql = 'SELECT *  FROM products WHERE producto LIKE ?';
                let prod = producto;
                
                bd.all(sql, [`%${prod}%`], (err, rows)=>{
                    if(err){
                        console.log("El error del reject",err);
                        reject(err);
                    }else{
                        resolve(rows);
                    
                    }
                })
            })
        } catch (error) {
            console.log("El error del catch",error)
        }
     }

     const ConsultProdID = async (products)=>{

        try {

            if (!products) {
                throw new Error("ID de producto inválido");
            }else{

                return await new Promise((resolve, reject)=>{
                    let sql = 'SELECT * FROM products WHERE id = ?';
                    let prod = products.prod;
                    
                bd.all(sql, [prod], (err, rows)=>{
                    if(err){
                        console.log("El error del reject",err);
                        reject(err);
                    }else{
                        console.log("Resultado de ConsultProdID:", rows);
                        resolve(rows);
                        
                    }
                })
            })
            
        }
            
        } catch (error) {
            console.log({error: "Error al encontrar el id"});
        }
     }

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
            let sql = 'SELECT * FROM products WHERE seccion = "Hombre" AND subSeccion = "Pantalones" ';
            
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
             let sql = 'SELECT * FROM products WHERE seccion = "Hombre" AND subSeccion = "Accesorios"';
             
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
             let sql = 'SELECT * FROM products WHERE seccion = "Mujer" AND subSeccion = "Remeras"';
             
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
             let sql = 'SELECT * FROM products WHERE seccion = "Mujer" AND subSeccion = "Pantalones" ';
             
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
             let sql = 'SELECT * FROM products WHERE seccion = "Mujer" AND subSeccion = "Vestidos" ';
             
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
             let sql = 'SELECT * FROM products WHERE seccion = "Mujer" AND subSeccion = "Accesorios"';
             
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

      const GetProdNenaP = async ()=>{
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

      const GetProdNeneP = async ()=>{
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


// Admin

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



// Usuarios

const ConsultUser = ()=>{
    bd.all('SELECT * FORM usuarios' , (err, rows)=>{
        if(err){
            console.log(err.mensaje)
        }else{
            console.log('usuarios encontrados:' + rows.length);
            rows.forEach((row)=>{
                console.log(row)
            })
        }
    })
};


const CrearUsuario = async (usuario)=>{
 try {
    const hashedPasword = await bcrypt.hash(usuario.password, saltRounds)
    let stmt = bd.prepare('INSERT INTO usuarios(nombre ,apellido, email, password) VALUES(?,?,?,?)');
    stmt.run(usuario.nombre ,usuario.apellido, usuario.email , hashedPasword );
    stmt.finalize();
    return 'usuario creado con exito';

 } catch (error) {
    throw console.log(error)
 }
};

const EmailenUso = (usuario)=>{
    return new Promise((resolve, reject)=>{
        let sql = 'SELECT * FROM usuarios WHERE email = ?';
        let mail = usuario.email;
        bd.get(sql ,[mail], (err , row)=>{
            if(err){
                console.error(err.message);
                reject(err);
            }if(row){
               resolve(true);
            }else{
                resolve(false);
            }
        })
    })
};


const NoCoincide = (usuario)=>{
    return new Promise((resolve , reject)=>{
        let sql = 'SELECT * FROM usuarios WHERE email = ? ';
        
           let email = usuario.email;
           let password = usuario.password;
        bd.get(sql , [email], async (err, row)=>{
            if(err){
                console.error(err.message);
                reject(err);
            } if(!row){
                resolve(false);
                return;
            }
            try {
                const passwordMatch = await bcrypt.compare(password, row.password);
                resolve(passwordMatch);
            } catch (bcryptError) {
                console.error('Error al comparar contraseñas:', bcryptError);
                reject(bcryptError);
            }
        })

    })
};


const DataUser = async (usuario)=>{
    try{
     return  await new Promise((resolve, reject)=>{

         let sql = 'SELECT * FROM usuarios WHERE email = ? ';
         let email =  usuario.email;  
    
    bd.get(sql , [email], (err, row)=>{
        if(err){
            reject(err);
        }else{
            resolve(row);
            
        }
    })
    
})
}catch(err){
console.log(err)
}


};


const UpdatePass = async (usuario)=>{
    try {  
        const hashedPassword = await bcrypt.hash(usuario.password , saltRounds);
        const sql ='UPDATE usuarios SET email = ?, password = ? WHERE email = ?';
        bd.run(sql, [usuario.email , hashedPassword , usuario.email], (err)=>{
            if(err){
                console.log(err.message);
            }else{
                console.log("Se actualizo la contraseña correctamente")
            }
        })
        
    } catch (error) {
        console.log(error.message);
    }
};



const UpdatePerfil = async (usuario)=>{
    try{
        const hashedPassword = await bcrypt.hash(usuario.password , saltRounds);
        const sql = 'UPDATE usuarios SET  nombre = ? , apellido = ? , email = ? , password = ?   WHERE email = ?';
        bd.run(sql , [usuario.nombre , usuario.apellido,usuario.email , hashedPassword, usuario.email] , (err)=>{
            if(err){
                console.log(err.message);
            }else{
                console.log("Se actualizaron los datos correctamente");
            }
        })
    }
    catch(error){
        console.log(error.message)
}
}

const UpdatePerfilSinPassword = async (usuario)=>{
    try{
        
        const sql = 'UPDATE usuarios SET  nombre = ? , apellido = ? , email = ?    WHERE email = ?';
        bd.run(sql , [usuario.nombre , usuario.apellido,usuario.email ,  usuario.email] , (err)=>{
            if(err){
                console.log("Ocurrio un error al querer actualizar" ,err.message);
            }else{
                console.log("Se actualizaron los datos correctamente");
            }
        })
    }
    catch(error){
        console.log(error.message)
}
};


const AddFavorito  = async (usuario)=>{

   try {
    
    const smtm = bd.prepare('INSERT INTO favoritos(Usuario , Producto_id ) VALUES(?,?)');
    smtm.run(usuario.email , usuario.favorito);
    smtm.finalize();
    return "Se agrego favorito";

} catch (error) {
    throw  console.log(error);
    
}
};

const ConsultFavorito = async(favorito)=>{

    try{
        return  await new Promise((resolve, reject)=>{
   
            let sql = 'SELECT * FROM favoritos WHERE Usuario = ? ';
            let Usuario =  favorito.Usuario;  
       
       bd.all(sql , [Usuario], (err, rows)=>{
           if(err){
               reject(err);
           }else{
               resolve(rows);
               
           }
       })
       
   })
   }catch(err){
   console.log({err: "Ocurrio un error al consultar los favoritos"})
   }
}



     export default {bd,
        ConsultProduct,
        consProducto,
        GetProdHomR,
        GetProdHomP,
        GetProdHomA,
        GetProdMujR,
        GetProdMujP,
        GetProdMujV,
        GetProdMujA,
        GetProdNenaR,
        GetProdNenaP,
        GetProdNenaV,
        GetProdNeneR,
          GetProdNeneP,
        InsertProducto,
        consultaUser,
        ConsultUser,
        InsertUser,
        EmailenUso,
        Coincide,
        validaDatos,
        UpdateProd,
        DeleteProd,
        CrearUsuario, 
        NoCoincide,
        DataUser, 
        UpdatePass,
        UpdatePerfil, 
        UpdatePerfilSinPassword,
        AddFavorito,
        ConsultFavorito,
        ConsultProdID,
        


     }