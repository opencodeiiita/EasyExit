  import {
    response_200,
    response_201,
    response_400,
    response_404,
    response_500,
  } from '../utils/responseCodes.js';
  import { hash_password, getJwt } from '../utils/password.js';
  import User from '../models/user.model.js';
  import validator from 'validator';
  
  export async function logIn(req, res) {
     const { email, role } = req.body;

    console.log(email + " " + role)

    if (!(email && role && req.body.password))

      return response_400(res, 'Some parameters are missing!');

    const password = await hash_password(req.body.password);

  

    try {

      const checkUser = await User.findOne({ email: email, role:role });

      console.log(checkUser)

      if (!checkUser) return response_404(res, "User Doesn't exist");

      const checkPassword = password === checkUser.passwordHash;

      if (!checkPassword) return response_400(res, 'Password is incorrect');

      const jwtToken = getJwt({ id: checkUser._id, email: email });

      return response_200(res, 'Log In Succesful', {

        name: checkUser.name,

        email: email,

        role: checkUser.role,

        secret: jwtToken,

      });

    } catch (error) {

      return response_500(res, 'Internal server error', error);

    }
  }
  export async function signUp(req, res) {
    const { name, email, role } = req.body;

    if (!(name && email && role && req.body.password))

      return response_400(res, 'Some parameters are missing!');

  

    if (req.body.password.length < 6)

      return response_400(res, 'Password must be longer than 6 letters');

  

    if (!validator.isEmail(email)) return response_400(res, 'Email is invalid');

    const checkUser = await User.findOne({ email: email });

    if (checkUser) return response_400(res, 'Email already in use');

    const password = await hash_password(req.body.password);

    let newUser = User({

      email,

      name,

      role,

      passwordHash: password

    });

    try {

      newUser = await newUser.save();

      const jwtToken = getJwt({ id: newUser._id, email: newUser.email });

      return response_201(res, 'Sign Up Successful', {

        name,

        email,

        role,

        secret: jwtToken,

      });

    } catch (error) {

      return response_500(res, 'Internal server error', error);

    }
    
  }
