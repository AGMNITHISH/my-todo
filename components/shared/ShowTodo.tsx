"use client";
import { getAllTodos } from "@/app/actions/todoActions";
import React, { useEffect, useState } from "react";

export interface todo {
  title: string | null;
  id: string;
  createdAt: Date;
}

export interface ShowTodoProps {
  todoData: todo[];
}

const ShowTodo: React.FC<ShowTodoProps> = ({ todoData }) => {
  return (
    <div className="w-full">
      <div className="flex gap-5 border items-start w-full m-4 p-2">
        <div className="w-96">Title</div>
        <div className="w-96">createdAt</div>
        <div className="w-96">ID</div>
      </div>
      {todoData.map((todo, ind) => {
        return (
          <div
            key={ind}
            className="flex gap-5 border items-start w-full m-4 p-2"
          >
            <div className="w-96">{todo.title}</div>
            <div className="w-96">{todo.createdAt.toString()}</div>
            <div className="w-96">{todo.id}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowTodo;
