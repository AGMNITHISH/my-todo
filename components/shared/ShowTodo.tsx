"use client";

import React from "react";
import { MdDeleteForever } from "react-icons/md";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
import ChangeTodoState from "./ChangeTodoState";

export interface todo {
  title: string | null;
  id: string;
  createdAt: Date;
  isCompleted: boolean;
}
export interface editTodointerface {
  todo: todo;
}
export interface ShowTodoProps {
  todoData: todo[];
}

const ShowTodo: React.FC<ShowTodoProps> = ({ todoData }) => {
  return (
    <div className="w-1/2  mx-auto">
      {todoData.map((todo, ind) => {
        return (
          <div key={ind} className="bg-slate-200 m-4 p-2 rounded-md flex  ">
            <span className="px-4 cursor-pointer">
              <ChangeTodoState todo={todo} />
            </span>
            <span
              className={`flex ${
                todo.isCompleted ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.title}
            </span>{" "}
            {/* {todo.createdAt.toString()} */}
            <span className="px-2 cursor-pointer">
              <EditTodo todo={todo} />
            </span>
            <span className="px-1 cursor-pointer">
              <DeleteTodo todo={todo} />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ShowTodo;
