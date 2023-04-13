import jwt from 'jsonwebtoken';

const authorization = (req, res, next) => {
    
    const authorization = req.headers.authorization;
    
    if(!authorization){
        res.status(400).json({ error: 'No estas autorizado para ingresar a la página.'})
    }

    jwt.verify(authorization, process.env.SECRET_WORD_JWT, (error) => {
        if(error){
            res.status(400).json({ error: 'Token incorrecto!'})
        }
     
    })

    next()    
}



export { authorization };