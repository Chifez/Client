import api from '../../src/utils/functions/helper/baseUrl';
export const AuthSlice = (set) => ({
  user: false,
  userID: null,
  error: false,
  loading: false,
  message: '',
  login: (values, navigate) => {
    console.log(values), set({ user: true });
    navigate('/dashboard/home');
  },
  createUser: async (values, navigate) => {
    const { fullName, email, password, confirmPassword } = values;
    set({ loading: true });
    try {
      const response = await api.post('/auth/register', {
        name: fullName,
        email: email,
        password: password,
        passwordConfirm: confirmPassword,
      });
      set({ userID: response.data.data });
      set({ message: response.data.message });
      set({ loading: false });
      navigate('/verify');
      console.log(response, response.data.message, response.data.data);
      return response;
    } catch (error) {
      set({ error: true }), set({ message: error.message });
      set({ loading: false });
      console.log(error);
    }
  },
  logout: () => {},
  verifyUser: async (otp) => {
    set({ loading: true });
    try {
      const res = await api.post('/auth/verify', {
        userid: userID,
        otp: otp,
      });
      if (res.data.success) {
        set({ user: true });
        set({ loading: false });
        navigate('/register');
      }
    } catch (error) {
      set({ error: true }), set({ message: error.message });
      set({ loading: false });
      console.log(error);
    }
  },
});
