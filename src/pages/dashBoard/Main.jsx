import React from 'react';
import Card from '../../components/Card';
import TransactionList from '../../components/TransactionList';
import { Link } from 'react-router-dom';

const Main = () => {
  const cardlist = [
    {
      name: 'orders',
      link:'/dashboard/orders',
      icon: 'order.png',
      desc: 'View incoming requests from interested buyers',
      extraStyle: 'border border-dashed border-[black] bg-transparent',
    },
    {
      name: 'Add new products',
      link:'/dashboard/add',
      icon: '/addProduct.png',
      desc: 'View exixting products,Edit or delete item',
      extraStyle: 'border border-dashed border-[black] bg-transparent',
    },
    {
      name: 'View Products',
      link:'/dashboard/view',
      icon: '/viewProduct.png',
      desc: 'Update your store by adding new items to your shelf',
      extraStyle: 'border border-dashed border-[black] bg-transparent',
    },
    {
      name: 'Records',
      link:'/dashboard/records',
      icon: '/Records.png',
      desc: 'View transaction details of all products you reserve',
      extraStyle: 'bg-[white] shadow-xl',
    },
  ];
  const Payment = [
    {
      name: 'Payments',
      icon: '/payment.png',
      desc: 'Request for withdrawal and get paid.',
      extraStyle: `py-10 bg-[#00398E] text-[white] `,
    },
  ];
  return (
    <div className="flex-1 grid grid-rows-2 gap-5 max-h-[80vh] w-full">
      <div className="row-span-1 grid grid-cols-4 gap-6">
        {cardlist.map((item, idx) => (
          <Link to={item.link}>
            <Card props={item} key={idx} />
          </Link>
        ))}
      </div>
      <div className="row-span-1 grid grid-cols-5 gap-14 ">
        <div className="col-span-2">
          {Payment.map((item, idx) => (
            <Card props={item} key={idx} />
          ))}
        </div>

        <TransactionList />
      </div>
    </div>
  );
};

export default Main;
