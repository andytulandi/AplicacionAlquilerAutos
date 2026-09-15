import jwt from 'jsonwebtoken';
export function verificarToken(req, res, next) {
const authHeader = req.headers.authorization;
const [scheme, ...tokenParts] = (authHeader || '').trim().split(/\s+/);
const token = tokenParts.join(' ').replace(/^['"]|['"]$/g, '');
if (!scheme || scheme.toLowerCase() !== 'bearer' || !token) {
return res.status(401).json({ mensaje: 'Token no proporcionado' });
}
jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
if (err) {
const mensaje = err.name === 'TokenExpiredError'
? 'Token expirado'
: 'Token invalido';
return res.status(403).json({ mensaje });
}
req.cliente = payload; // queda disponible en el resto de la peticion
next();
});
}