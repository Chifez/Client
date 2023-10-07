import React from 'react';
import Toggle from './Toggle';
import OrdersCard from './OrdersCard';
import OrderModal from '../../pages/Order/orderModal';
import Modal from '../shared/modal';

const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const OrdersContent = () => {
  const tabs = [
    {
      title: 'Incoming orders',
    },
    {
      title: 'Accepted orders',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-between h-screen overflow-y-auto w-screen p-3 bg-[#dfeffa]">
      <div className="w-full flex justify-end my-2">
        <section className="flex items-center gap-5">
          <div className="w-8 h-8">
            <img src="/bell.svg" alt="notification" className="w-full h-full" />
          </div>

          <div className="w-10 h-10 rounded-full border border-black overflow-hidden">
            <img src="/user.jfif" alt="profile" className="w-full h-full" />
          </div>
        </section>
      </div>
      <div className=" bg-[#C2C2C3] rounded-md py-1 px-2 font-semibold text-sm">
        <Toggle
          width="w-[35vw]"
          tabs={tabs}
          extraclass="text-[17px] font-bold font-Esemi"
        />
      </div>

      <main className="mt-5 h-[80vh] overflow-scroll no-scrollbar">
        {data.map(() => (
          <OrdersCard />
        ))}
      </main>
      <Modal>
        <OrderModal />
      </Modal>
    </div>
  );
};

export default OrdersContent;
