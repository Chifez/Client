import api from '../helper/baseUrl';

// export const createAccount = async (values, navigate) => {
//   const { fullName, email, password, confirmPassword } = values;
//   const response = await api.post("/auth/register", {
//     name: fullName,
//     email: email,
//     password: password,
//     passwordConfirm: confirmPassword,
//   });
//   return response;
// };

export const createAccount = (values, navigate) => {
  const { fullName, email, password, confirmPassword } = values;
  const requestDetails = {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': 'http://localhost:5173',
    },
    body: JSON.stringify({
      name: fullName,
      email: email,
      password: password,
      passwordConfirm: confirmPassword,
    }),
  };
  fetch(
    'https://simplibuy-production.up.railway.app/api/v1/auth/register',
    requestDetails
  ).then((res) => console.log(res));
};
