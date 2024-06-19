// auth.middleware.ts

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).json({ error: 'Unauthorized - Invalid token' });
        }
        const token = authorization.split(' ')[1];
        try {
            const decodedToken = jwt.verify(token, 'secret') as { id: string };
            console.log('decodedToken: ', decodedToken);

            if (decodedToken.id) {
                req['id'] = { adminId: decodedToken.id };
                next();
            } else {
                return res.status(401).json({ error: 'Unauthorized - Invalid token' });
            }
        } catch (error) {
            console.error('Error verifying token:', error);
            return res.status(400).json({ error: 'Invalid token' });
        }
    }
}
