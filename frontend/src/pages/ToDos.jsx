import React, { useContext, useEffect, useState } from "react";

import { useAuth } from "../context/useAuth";
import { api } from "../api";
import OverlayLoader from "../utils/OverlayLoader";
import { useToast } from "../context/useToast";
import InProgressTaskGroup from "../components/ToDos/InProgressTaskGroup";
import CompletedTaskGroup from "../components/ToDos/CompletedTaskGroup";
import ExpiredTaskGroup from "../components/ToDos/ExpiredTaskGroup";
import { useCallback } from "react";

export const ToDos = () => {
  const [tasks, setTasks] = useState(null);
  const { showToast } = useToast();

  const getTasks = useCallback(async () => {
    try {
      let response = await api.get("todos/", {});
      return response.data;
    } catch (error) {
      console.log(`An error occured when getting tasks ${error}`);
      return [];
    }
  }, []);

  useEffect(() => {
    const assignTasks = async () => {
      let tasks = await getTasks();
      setTasks(tasks);
    };
    assignTasks();
  }, []);

  const markTaskAsCompleted = useCallback(
    async (e) => {
      if (tasks === null) {
        return;
      }

      try {
        const taskId = e.target.closest("[data-task-id]").dataset.taskId;
        const taskInd = e.target.closest("[data-task-ind]").dataset.taskInd;
        let response = await api.post("complete_task/", {
          id: taskId,
        });
        if (response.status === 200) {
          showToast("Task was marked as completed", true);
          setTasks({
            EXPIRED: tasks.EXPIRED,
            DONE:
              tasks.DONE.length > 0
                ? [...tasks.DONE, tasks.IN_PROGRESS[taskInd]]
                : [tasks.IN_PROGRESS[taskInd]],
            IN_PROGRESS: tasks.IN_PROGRESS.filter(
              (task, ind) => ind != taskInd
            ),
          });
        } else {
          showToast("An error occured when marking task as completed", false);
        }
      } catch (error) {
        console.log(error);
        showToast("An error occured when marking task as completed", false);
      }
    },
    [tasks]
  );

  if (tasks === null) {
    return <OverlayLoader />;
  }

  return (
    <main className="flex flex-col justify-start items-center p-10 gap-3">
      <InProgressTaskGroup
        tasks={tasks.IN_PROGRESS}
        setTasks={setTasks}
        markTaskAsCompleted={markTaskAsCompleted}
      />
      <CompletedTaskGroup tasks={tasks.DONE} />
      <ExpiredTaskGroup tasks={tasks.EXPIRED} />
    </main>
  );
};
