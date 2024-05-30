"use client";
import React from "react";
import { MdDeleteForever } from "react-icons/md";
import Button from "../ui/Button";
import { editTodointerface } from "./ShowTodo";
import { deletetodo } from "@/app/actions/todoActions";

const DeleteTodo: React.FC<editTodointerface> = (todo) => {
  const handleDelete = (id: string): void => {
    console.log("id", id);
    deletetodo(id);
  };
  return (
    <div>
      <Button
        text={<MdDeleteForever />}
        type="button"
        actionButton
        onClick={() => handleDelete(todo.todo.id)}
      />
    </div>
  );
};

export default DeleteTodo;
