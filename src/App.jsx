// import Layout from "./components/layout";
import CreateAccount from './pages/createAccount';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Verify from './pages/verify';
import Login from './pages/signIn';
import Register from './pages/registerBussiness';
import Dashboard from './pages/dashBoard';
import Message from './pages/Message';
import Setting from './pages/Settings';
import Purchase from './pages/Purchase';
import History from './pages/History';
import Error from './pages/404/Error';
import OrdersContent from './components/dashboard/OrdersContent';
import ResetPassword from './pages/ResetPassword';
import ProtectedLayout from './components/ProtectedLayout';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Chat from './pages/Message/Chat';
import { useEffect } from 'react';
import { useBoundedStore } from '../store/store';

function App() {
  const navigate = useNavigate();
  const auth = useBoundedStore((state) => state.user);
  // useEffect(() => {
  //   if (auth) {
  //     navigate("/dashboard/home");
  //   } else {
  //     navigate("/");
  //   }
  // }, []);
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/createaccount" element={<CreateAccount />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedLayout />}>
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/dashboard/orders" element={<OrdersContent />} />
        <Route path="/dashboard/messages" element={<Message />} />
        <Route path="dashboard/messages/chat/:id" element={<Chat />} />
        <Route path="/dashboard/purchase" element={<Purchase />} />
        <Route path="/dashboard/settings" element={<Setting />} />
        <Route path="/dashboard/history" element={<History />} />
        <Route path="*" element={<Error />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
// AiFillHome
export default App;
