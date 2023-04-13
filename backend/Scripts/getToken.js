import jsw from 'jsonwebtoken';

const getToken = (user) => {
    const token = jsw.sign({data: user}, process.env.SECRET_WORD_JWT, {expiresIn: '1h'})

    return token;
}


export { getToken };