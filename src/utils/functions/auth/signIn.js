export const signIn = (values, navigate) => {
  const { fullName, email, password, confirmPassword } = values;
  return navigate("/");
};
