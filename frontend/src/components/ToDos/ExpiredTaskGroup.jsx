import React, { useCallback } from "react";
import DownArrow from "../common/DownArrowSvg";
import $ from "jquery";
import ExpiredTask from "./ExpiredTask";

function ExpiredTaskGroup({ tasks }) {
  const handleContentExpansion = useCallback((e) => {
    let statusHeader = $(e.target.closest('[data-role="status-header"]'));
    let content = statusHeader.siblings().first();

    if (content.hasClass("hidden")) {
      content.removeClass("hidden fade-out").addClass("flex fade-in");
    } else {
      content.removeClass("fade-in").addClass("fade-out");
      setTimeout(() => {
        content.addClass("hidden");
      }, 300);
    }
  }, []);

  return (
    <div className="flex flex-col gap-3 w-full">
      <div
        data-role="status-header"
        className={`w-full bg-red-500 text-[17px] text-white px-5 py-2 flex justify-between items-center`}
      >
        <div className="text-white">Expired</div>
        <DownArrow color={"white"} onClick={handleContentExpansion} />
      </div>
      <div className="flex-col w-full gap-2 rounded-[5px] hidden justify-start items-center">
        {tasks.length > 0 ? (
          tasks.map((task, id) => <ExpiredTask task={task} key={id} />)
        ) : (
          <div className="px-2text-gray-700 text-[15px]">No todos found</div>
        )}
      </div>
    </div>
  );
}

export default ExpiredTaskGroup;
