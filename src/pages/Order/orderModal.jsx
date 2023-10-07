import React from 'react';
import Button from '../../components/shared/Button';

const data = [
  {
    name: '50 ml Nivea roll on',
    price: '$60',
  },
  {
    name: ' Smart collection perfume ',
    price: '$30',
  },
  {
    name: ' Paracetamol antidote',
    price: ' $40',
  },
  {
    name: 'Pears powder',
    price: '$50',
  },
];
const OrderModal = ({ items }) => {
  return (
    <div
      className="relative flex flex-col items-center gap-2 justify-center w-[35%] h-[70%] bg-white rounded-3xl text-sm"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="h-full flex flex-col items-start p-10">
        <div className="flex items-center gap-3 pb-2">
          <img src="/user1.png" alt="user" className="w-16 h-16" />
          <span>
            <h1 className="text-lg font-semibold">Offor Ebuka</h1>
            <h1 className="font-semibold text-[#434041]">08177546975</h1>
          </span>
        </div>
        <span className="overflow-y-auto no-scrollbar pb-10">
          <div className="pb-1 w-full">
            <p className="text-[#00398E]">items</p>
            {data.map((item, index) => {
              return (
                <span className="flex justify-between font-inter font-[500] text-[#434041]">
                  <h1>{item.name}</h1>
                  <h1>{item.price}</h1>
                </span>
              );
            })}
          </div>
          <div className="py-1">
            <p className="text-[#00398E]">Amount</p>
            <h1 className="font-semibold text-[#434041]">$180</h1>
          </div>
          <div className="py-1">
            <p className="text-[#B39FFB]">Status</p>
            <p className="font-semibold text-[#434041]">paid</p>
          </div>
          <div className="py-1">
            <p className="text-[#00398E]">Ticket ID</p>
            <h1 className="font-semibold text-[#434041]">JIS10SK</h1>
          </div>
          <div className="py-1">
            <p className="text-[#00398E]">Pickup time</p>
            <h1 className="font-semibold text-[#434041]">
              5:35pm sunday,30th january 2023
            </h1>
          </div>
        </span>
      </div>
      <div className="px-10 bg-white py-2 absolute bottom-5 w-full flex gap-2 items-center justify-center">
        <Button name="Accept" extraclass="py-1 px-10 rounded-md" />
        <Button name="Reject" extraclass="py-1 px-10 rounded-md" />
      </div>
    </div>
  );
};

export default OrderModal;
