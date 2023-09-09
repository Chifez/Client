import { useState } from 'react';
import { Switch, Tab } from '@headlessui/react';

const Toggle = ({ width, tabs, extraclass }) => {
  const [enabled, setEnabled] = useState(1);
  const Toggle = (state) => {
    setEnabled(state);
  };

  return (
    <Tab.Group className={width}>
      <Tab.List className="flex flex-row w-full">
        {tabs.map((item, idx) => (
          <Tab
            onClick={() => Toggle(idx)}
            className={`w-full px-11 py-2 text-center rounded-md ${
              enabled == idx ? `bg-white text-[#00398E]` : `text-[#222222B2]`
            } ${extraclass}`}
          >
            {item.title}
          </Tab>
        ))}
      </Tab.List>
    </Tab.Group>
  );
};
export default Toggle;
