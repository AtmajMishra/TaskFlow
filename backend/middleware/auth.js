import jwt from 'jsonwebtoken';
import User from '../models/userModel.js'

const JWT_SECRET=process.env.JWT_SECRET || 'your_jwt_secret_here';

export default async function authMiddleware(req,res,next)
{ // GRAB THE BEARER TOKEN FROM AUTHORIZATION HEADER

    const authHeader=req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer '))
    {
        return res.status(401).json({success:false, message:"Not Authorized, token missing"})
    }

}
