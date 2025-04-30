import React from "react";
import DownArrow from "../common/DownArrowSvg";
import $ from "jquery";
import { useToast } from "../../context/useToast";
import { api } from "../../api";
import InProgressTask from "./InProgressTask";
import ExpiredTask from "./ExpiredTask";
import CompletedTask from "./CompletedTask";
import { useCallback } from "react";

function InProgressTaskGroup({ tasks, markTaskAsCompleted }) {
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
        className={`w-full rounded-2xl bg-yellow-500 text-[17px] text-white px-5 py-2 flex justify-between items-center`}
      >
        <div className="text-white">In progress</div>
        <DownArrow color={"white"} onClick={handleContentExpansion} />
      </div>
      <div className="flex-col w-full gap-2 rounded-[5px] hidden justify-start items-center">
        {tasks.length > 0 ? (
          tasks.map((task, id) => (
            <InProgressTask
              task={task}
              key={id}
              id={id}
              onComplete={markTaskAsCompleted}
            />
          ))
        ) : (
          <div className="px-2text-gray-700 text-[15px]">No todos found</div>
        )}
      </div>
    </div>
  );
}

export default InProgressTaskGroup;
