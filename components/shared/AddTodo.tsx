import React from "react";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { create } from "@/app/actions/todoActions";

const AddTodo = () => {
  return (
    <Form action={create} className="w-1/2 mx-auto">
      <div className="flex">
        <Input name="input" placeholder="Add todo..." type="text" />
        <Button type="submit" text="Add" />
      </div>
    </Form>
  );
};

export default AddTodo;
