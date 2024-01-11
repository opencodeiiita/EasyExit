import {
    response_200,
    response_400,
} from '../utils/responseCodes.js';
import { hash_password } from '../utils/password.js';

export async function getUserProfile(req, res) {
    return response_200(res, 'User data', {
        name: req.user.name,
        email: req.user.email,
        role: req.user.role
    });
}

export async function updatePassword(req, res) {
    if (!(req.body.oldPassword && req.body.newPassword))
        return response_400(res, 'All request parameters not provided');
    const password = await hash_password(req.body.oldPassword);
    if (password !== req.user.passwordHash)
        return response_400(res, 'Wrong Password');
    if (req.body.newPassword.length < 6)
        return response_400(res, 'New password length too short');
    req.user.passwordHash = await hash_password(req.body.newPassword);
    await req.user.save();
    return response_200(res, 'Password updated');
}
