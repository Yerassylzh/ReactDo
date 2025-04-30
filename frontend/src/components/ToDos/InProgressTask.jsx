import React from "react";

function InProgressTask({ task, onComplete, id }) {
  return (
    <div
      data-task-id={task.id}
      data-task-ind={id}
      className="flex px-2 py-2 flex-row items-center w-full bg-gray-100"
    >
      <input type="checkbox" className="absolute" onChange={onComplete} />
      <div className="px-5 text-gray-700 w-full rounded-[3px]">{task.text}</div>
      <div className="text-[13px] text-gray-600 w-full flex flex-col items-end">
        <div className="">Deadline at</div>
        <div className="">{task.formatted_deadline}</div>
      </div>
    </div>
  );
}

export default InProgressTask;
