import React from 'react';
import ProtectedLayout from '../../components/ProtectedLayout';
import Toggle from '../../components/dashboard/Toggle';
import Main from './Main';

const Dashboard = () => {
  const tabs = [{ title: 'Active' }, { title: 'offline' }];
  return (
    <section className="bg-[#dfeffa] flex flex-col gap-3 h-screen overflow-hidden font-ERegular py-2 px-5 ">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-xl font-Esemi">Good morning Roban Store</h2>
          <p className="text-lg font-ERegular">
            Ready to make some cool cash today?
          </p>
        </div>
        <section className="flex items-center gap-14 ">
          <div className=" bg-[#C2C2C3] rounded-md py-1 px-2 font-semibold text-sm">
            <Toggle tabs={tabs} />
          </div>
          <section className="flex items-center gap-5">
            <div className="w-8 h-8">
              <img
                src="/bell.svg"
                alt="notification"
                className="w-full h-full"
              />
            </div>

            <div className="w-10 h-10 rounded-full border border-black overflow-hidden">
              <img src="/user.jfif" alt="profile" className="w-full h-full" />
            </div>
          </section>
        </section>
      </header>
      <Main />
    </section>
  );
};

export default Dashboard;
