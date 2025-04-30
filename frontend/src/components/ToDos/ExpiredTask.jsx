import React from "react";

function ExpiredTask({ task }) {
  return (
    <div className="flex px-2 py-2 flex-row items-center w-full bg-gray-100">
      <div className="px-2 text-gray-700 w-full rounded-[3px]">{task.text}</div>
      <div className="text-[13px] text-gray-600 w-full flex flex-col items-end">
        <div className="">Expired at</div>
        <div className="">{task.formatted_deadline}</div>
      </div>
    </div>
  );
}

export default ExpiredTask;
