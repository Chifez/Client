import api from '../../src/utils/functions/helper/baseUrl';
import { toast } from 'react-toastify';

export const AuthSlice = (set) => ({
  user: true,
  userID: null,
  error: false,
  loading: false,
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
      set({ error: true }), set({ loading: false });
      toast.error(error.message);
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
      set({ loading: false });
      navigate('/verify');
    } catch (error) {
      set({ error: true });
      set({ loading: false });
      toast.error(error.message);
      console.log(error);
    }
  },
  logout: async (navigate) => {
    set({ loading: true });
    try {
      const res = await api.get('/auth/logout');
      set({ userID: null });
      set({ loading: false });
      navigate('/');
    } catch (error) {
      set({ error: true });
      set({ loading: false });
      toast.error(error.message);
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
      set({ error: true });
      set({ loading: false });
      toast.error(error.message);
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
      set({ error: true });
      set({ loading: false });
      toast.error(error.message);
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
      set({ error: true });
      set({ loading: false });
      toast.error(error.message);
      console.log(error);
    }
  },
});
