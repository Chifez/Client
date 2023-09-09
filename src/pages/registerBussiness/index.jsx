import { useEffect } from 'react';
import Register from './registerForm';
import RegisterModal from './modal';
import Modal from '../../components/shared/modal';
import { useBoundedStore } from '../../../store/store';
import { useNavigate } from 'react-router-dom';

const index = () => {
  const auth = useBoundedStore((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth) return navigate('/');
  }, []);
  return (
    <div className="relative">
      <Register />
      <Modal>
        <RegisterModal />
      </Modal>
    </div>
  );
};

export default index;
