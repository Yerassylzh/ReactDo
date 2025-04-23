import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import { api } from "../api";
import OverlayLoader from "../utils/OverlayLoader";

export const ToDos = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState(null);

  const getTasks = async () => {
    try {
      let response = await api.get("/api/todos/", {});
      return response.data;
    } catch (error) {
      console.log(`An error occured when getting tasks ${error}`);
      return [];
    }
  };

  useEffect(() => {
    const assignTasks = async () => {
      setTasks(await getTasks());
    };
    assignTasks();
  }, []);

  if (tasks === null) {
    return <OverlayLoader />;
  }

  return tasks.length > 0 ? (
    <ol>
      {tasks.map((task) => (
        <li>task</li>
      ))}
    </ol>
  ) : (
    <p>No todos found</p>
  );
};
