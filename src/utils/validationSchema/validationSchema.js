import * as Yup from 'yup';

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export const SignInValidation = Yup.object({
  email: Yup.string()
    .email()
    .matches(/@[^.]*\./, 'invalid email')
    .required('Please enter your email'),
  password: Yup.string()
    .required('Please enter your password')
    .matches(
      passwordRegex,
      'must be 8 of a symbol,a capital letter and a number'
    ),
});

export const ResetPasswordValidation = Yup.object({
  email: Yup.string()
    .email()
    .matches(/@[^.]*\./, 'Enter a valid/registered email')
    .required('Please enter your email'),
});

export const SignupValidation = Yup.object({
  fullName: Yup.string().required('please enter your full name'),
  email: Yup.string()
    .email()
    .matches(/@[^.]*\./, 'invalid email')
    .required('Please enter your email'),
  password: Yup.string()
    .required('Please enter a password')
    .matches(
      passwordRegex,
      'must be 8 of a symbol,a capital letter and a number'
    ),
  confirmPassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password')], 'password mismatch'),
});

export const registerBusinessValidation = Yup.object({});
