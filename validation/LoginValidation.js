import validator from 'express-validator'
const {check,validationresult} =validator 
  
const LoginValidation=[
  check('username')
  .notEmpty().withMessage('username must be required')
  .isLength({min:4}).withMessage('username must be greater than for charcater'),
  check('password')
  .notEmpty().withMessage('password must be required')
  .isLength({min:4}).withMessage('password must be at least 4 characters')
  
];

export default LoginValidation;