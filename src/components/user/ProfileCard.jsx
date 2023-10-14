import React from "react";

const ProfileCard = () => {
  return (
    <>
<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-10 md:pl-10 min-h-full mt-10 place-items-center mb-5">

    <div className="card flex w-80 md:w-96 bg-base-100 shadow-sm border-[1px] border-gray-300">
      <div className="flex p-5  ">
          <div className="left flex-1 ">
            <img className="object-cover w-28 h-20" src="/img/slide4.png" alt="" />
          </div>
          <div className="right flex-[2] ">
            <h3 className="text-xl text-gray-900 text-left font-normal">Transaction</h3>
            <p className="">Lorem ipsum dolor sit adipisicing elit. Qui quae beatae la</p>

          </div>
      </div>
    </div>
    <div className="card flex w-80 md:w-96 bg-base-100 shadow-sm border-[1px] border-gray-300">
      <div className="flex p-5  ">
          <div className="left flex-1 ">
            <img className="object-cover w-28 h-20" src="/img/slide4.png" alt="" />
          </div>
          <div className="right flex-[2] ">
            <h3 className="text-xl text-gray-900 text-left font-normal">Transaction</h3>
            <p className="">Lorem ipsum dolor sit adipisicing elit. Qui quae beatae la</p>

          </div>
      </div>
    </div>
    <div className="card flex w-80 md:w-96 bg-base-100 shadow-sm border-[1px] border-gray-300">
      <div className="flex p-5  ">
          <div className="left flex-1 ">
            <img className="object-cover w-28 h-20" src="/img/slide4.png" alt="" />
          </div>
          <div className="right flex-[2] ">
            <h3 className="text-xl text-gray-900 text-left font-normal">Transaction</h3>
            <p className="">Lorem ipsum dolor sit adipisicing elit. Qui quae beatae la</p>

          </div>
      </div>
    </div>

</div>
<hr />

    </>
  );
};

export default ProfileCard;
