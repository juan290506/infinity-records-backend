import userModel from "../schemas/user.schemas.mjs";

const createUser = async ( req, res ) => {
    const inputData = req.body;  //estraigo el objeto enviado

    //try:Controla las excepciones de la consulta a la base de datos 

    try {
    const registeredUser = await userModel.create(inputData);

    console.log(registeredUser)                                      //imprime en la consola
    res.send(registeredUser);                                       //enviando  la respuesta al cliente

    }
    catch (error) {
        console.error(error);
        res.json({msg:"Error: No se pudo registrar el producto"});
    }

}

const getAllUser = async (req, res) => {

    try {
        const data = await userModel.find({});
        res.json(data);
    }
    catch (error){
        console.error(error);
        res.json({msg: "Error: No se pudo obtener el listado de productos"})

    }


    
}


//exponer las funcionalidades para ser usadas por otros archivos
export{
    createUser,
    getAllUser
}