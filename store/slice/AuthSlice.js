import api from '../../src/utils/functions/helper/baseUrl';
export const AuthSlice = (set) => ({
  user: false,
  userID: null,
  error: false,
  loading: false,
  message: '',
  login: async (values, navigate) => {
    const { email, password } = values;
    set({ loading: true });
    try {
      const res = await api.post('/auth/login', {
        email,
        password,
      });
      set({ userID: res.data.id });
      set({ user: true });
      set({ loading: false });
      navigate('/dashboard');
    } catch (error) {
      set({ error: true }), set({ message: error.message });
      set({ loading: false });
      console.log(error);
    }
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
    } catch (error) {
      set({ error: true }), set({ message: error.message });
      set({ loading: false });
      console.log(error);
    }
  },
  logout: async (navigate) => {
    set({ loading: true });
    try {
      const res = await api.get('/auth/logout');
      set({ userID: null });
      set({ loading: false });
      set({
        message: res.data.message,
      });
      navigate('/');
    } catch (error) {
      set({ error: true }), set({ message: error.message });
      set({ loading: false });
      console.log(error);
    }
  },
  verifyUser: async (otp, navigate) => {
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
  forgotPassword: async (email, navigate) => {
    set({ loading: true });
    try {
      const res = await api.post('/auth/forgotpassword', {
        email,
      });
      if (res.data.success) {
        set({ user: true });
        set({ loading: false });
        navigate('/verify');
      }
    } catch (error) {
      set({ error: true }), set({ message: error.message });
      set({ loading: false });
      console.log(error);
    }
  },
  createPassword: async (password, confirmPassword, navigate) => {
    set({ loading: true });
    try {
      const res = await api.patch('/auth/resetpassword', {
        userid: userID,
        password,
        passwordConfirm: confirmPassword,
      });
      if (res.data.success) {
        set({ user: true });
        set({ loading: false });
        navigate('/login');
      }
    } catch (error) {
      set({ error: true }), set({ message: error.message });
      set({ loading: false });
      console.log(error);
    }
  },
});
