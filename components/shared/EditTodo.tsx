"use client";
import React, { useState } from "react";
import Button from "../ui/Button";
import { TiEdit } from "react-icons/ti";
import Form from "../ui/Form";
import Input from "../ui/Input";
import { editTodointerface } from "./ShowTodo";
import { edit } from "@/app/actions/todoActions";

const EditTodo: React.FC<editTodointerface> = (todo) => {
  const [editTodo, setEditTodo] = useState<boolean>(false);
  return (
    <div>
      <Button
        text={<TiEdit />}
        onClick={() => setEditTodo(!editTodo)}
        actionButton
      />
      {editTodo && (
        <>
          <Form action={edit} onSubmit={() => setEditTodo(!editTodo)}>
            <Input type="hidden" name="inputId" value={todo.todo.id} />
            <Input type="text" name="newTitle" placeholder="Edit todo..." />
            <Button type="submit" text="Save" />
          </Form>
        </>
      )}
    </div>
  );
};

export default EditTodo;
