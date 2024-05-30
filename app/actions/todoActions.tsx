"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/utils/prisma";

export async function create(formdata: FormData) {
  const input = formdata.get("input") as string;

  if (!input.trim()) {
    return;
  }

  await prisma.todo.create({
    data: {
      title: input,
    },
  });
  revalidatePath("/");
}

export async function edit(formdata: FormData) {
  const inputId = formdata.get("inputId") as string;
  const newTitle = formdata.get("newTitle") as string;
  if (!inputId || !newTitle) return;
  await prisma.todo.update({
    where: {
      id: inputId,
    },
    data: {
      title: newTitle,
    },
  });

  revalidatePath("/");
}

export async function deletetodo(id: string) {
  const deleteid = id;
  await prisma.todo.delete({
    where: {
      id: deleteid,
    },
  });
  revalidatePath("/");
}
export async function changeTodoState(id: string, isCompleted: boolean) {
  const changeTodoId = id;
  const updatedStatus = !isCompleted;
  await prisma.todo.update({
    where: {
      id: changeTodoId,
    },
    data: {
      isCompleted: updatedStatus,
    },
  });
  revalidatePath("/");
}
