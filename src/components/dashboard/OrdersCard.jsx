import React from 'react';
import Button from '../shared/Button';
import { useBoundedStore } from '../../../store/store';

const OrdersCard = () => {
  const openModal = useBoundedStore((state) => state.openModal);

  return (
    <div className="bg-white flex flex-row items-center justify-between p-4 w-[60vw] rounded-md my-3">
      <span className="flex items-center gap-2">
        <div className="w-12 h-12 rounded-full border overflow-hidden">
          <img src="/user1.png" alt="user" className="w-full h-full" />
        </div>
        <div>
          <p className="font-Esemi text-[18px] capitalize">Adaobi ejike</p>
          <p className="text-gray-500 font-Esemi">Item ID: SS765D7</p>
          <p className="text-gray-500 font-Esemi">Time: 3:45pm</p>
        </div>
      </span>
      <Button
        name="View details"
        extraclass="px-6 py-2 rounded-md"
        handleClick={() => openModal()}
      />
    </div>
  );
};
export default OrdersCard;
