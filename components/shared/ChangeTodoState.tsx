import React from "react";
import Button from "../ui/Button";
import { MdPublishedWithChanges } from "react-icons/md";
import { editTodointerface } from "./ShowTodo";
import { changeTodoState } from "@/app/actions/todoActions";

const ChangeTodoState: React.FC<editTodointerface> = (todo) => {
  return (
    <div>
      <Button
        type="button"
        text={<MdPublishedWithChanges />}
        actionButton
        onClick={() => changeTodoState(todo.todo.id, todo.todo.isCompleted)}
      />
    </div>
  );
};

export default ChangeTodoState;
