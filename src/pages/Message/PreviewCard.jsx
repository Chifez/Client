import React from 'react';

const PreviewCard = () => {
  return (
    <div>
      <div>
        <p className="text-sm mb-2">
          Indomie Super pack
          <br />
          NGN 250
        </p>
        <p className="text-xs">https://Simpliby.store/pay/Indomie</p>
      </div>
      <div class="flex-1 m-1 rounded-md bg-blue-300 overflow-hidden">
        <span className="flex items-start">
          <img
            src="../../../img3.png"
            alt="img"
            className="w-20 h-20 object-cover"
          />
          <p className="text-sm p-2">Indomie Super pack</p>
        </span>
      </div>
    </div>
  );
};

export default PreviewCard;
