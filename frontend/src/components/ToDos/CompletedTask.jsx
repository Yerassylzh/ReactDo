import React from "react";

function CompletedTask({ task }) {
  return (
    <div className="flex px-2 py-2 flex-row items-center w-full bg-gray-100">
      <div className="px-2 text-gray-700 w-full rounded-[3px] line-through">
        {task.text}
      </div>
      <div className="text-[13px] text-gray-600 w-full flex justify-end">
        {task.formatted_completed_at}
      </div>
    </div>
  );
}

export default CompletedTask;
