const checkAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){
        next()
    }else{
        res.status(400).json({ error: 'El usuario no ha iniciado sesión.' });
    }
}

export { checkAuthenticated };