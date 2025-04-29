import React, { useCallback, useContext, useEffect, useState } from "react";
import { useAuth } from "../context/useAuth";
import { api } from "../api";
import { useToast } from "../context/useToast";
import { useNavigate } from "react-router-dom";
import $ from "jquery";

export const CreateToDo = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleCreateTodo = useCallback(async (e) => {
    const todo = $("#todo").val();
    const datetime = $("#datetime").val();

    if (todo.length === 0) {
      showToast("Enter a task", false);
      return;
    }

    if (datetime.length === 0) {
      showToast("Enter date and time", false);
      return;
    }

    try {
      $("#submit").attr("disabled", "true");
      let response = await api.post("create/", {
        todo: todo,
        deadline_at: datetime,
      });

      if (response.status === 200) {
        showToast("Todo was added successfully", true);
        navigate("/todos/");
      } else {
        showToast("An error occured when adding todo", false);
      }
    } catch (error) {
      console.log(`An error occured when adding todo ${error}`);
      showToast("An error occured when adding todo", false);
    }
    $("#submit").removeAttr("disabled");
  }, []);

  return (
    <main className="p-7 gap-3 flex flex-col justify-center items-center">
      <div className="xl:w-[400px] md:w-[300px] sm:w-[300px]">
        <input
          type="text"
          id="todo"
          className="w-full border-gray-500 border-1 hover:border-blue-500 focus:border-blue-500 outline-none pt-2 pb-2 pl-2 pr-2 rounded-[5px]"
          placeholder="Describe a task"
        />
      </div>
      <div className="flex justify-start items-center gap-5">
        <input
          type="datetime-local"
          id="datetime"
          className="px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700"
        />
        <button
          id="submit"
          type="submit"
          className="bg-blue-600 text-white pl-5 pr-5 pt-2 pb-2 cursor-pointer hover:bg-blue-700 rounded-[5px]"
          onClick={handleCreateTodo}
        >
          Create
        </button>
      </div>
    </main>
  );
};
