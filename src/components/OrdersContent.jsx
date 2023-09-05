import React from 'react';
import Toggle from './Toggle';

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
    <div className="flex flex-col items-center justify-between w-screen p-3">
      <div className=" bg-[#C2C2C3] rounded-md py-1 px-2 font-semibold text-sm">
        <Toggle width="w-[500px]" tabs={tabs} extraclass="text-sm" />
      </div>
      <main>items</main>
    </div>
  );
};

export default OrdersContent;
