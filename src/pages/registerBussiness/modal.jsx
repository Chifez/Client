import React from 'react';
import { FiCheck } from 'react-icons/fi';
import Button from '../../components/button';
import { useNavigate } from 'react-router-dom';
import { useBoundedStore } from '../../../store/store';

const Modal = () => {
  const navigate = useNavigate();
  const closeModal = useBoundedStore((state) => state.closeModal);
  return (
    <>
      <div
        className=" flex flex-col items-center gap-2 justify-center w-[35%] h-[60%] bg-white rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="bg-[#00398E] border-8 border-[rgba(0, 57, 142, 0.1)] w-36 h-36 rounded-full flex items-center justify-center">
          <FiCheck className="h-16 w-16 text-white" />
        </span>
        <h1 className="text-center font-semibold">
          Congratulations,
          <br />
          you have sucessfully been verified
        </h1>
        <Button
          name="start selling"
          extraclass="w-[13rem] h-[3rem] rounded-lg mt-5"
          handleClick={() => {
            closeModal();
            navigate('/dashboard/home');
          }}
        />
      </div>
    </>
  );
};

export default Modal;
