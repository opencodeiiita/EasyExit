import jwt from 'jsonwebtoken';

import {
    response_401,
    response_400,
    response_500,
} from '../utils/responseCodes.js';
import User from '../models/user.model.js';

const studentMiddleware = async (req, res, next) => {
    
};

export default studentMiddleware;