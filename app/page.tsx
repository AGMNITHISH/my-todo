import AddTodo from "@/components/shared/AddTodo";
import React from "react";
import ShowTodo from "@/components/shared/ShowTodo";
import { prisma } from "@/utils/prisma";

const MainPage = async () => {
  const fetchData = await prisma.todo.findMany({
    select: {
      id: true,
      createdAt: true,
      title: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <AddTodo />
      <ShowTodo todoData={fetchData} />
    </div>
  );
};

export default MainPage;
