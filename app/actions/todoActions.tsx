"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/utils/prisma";

export async function create(formdata: FormData) {
  const input = formdata.get("input") as string | null;
  if (input !== null) {
    await prisma.todo.create({
      data: {
        title: input,
      },
    });
    revalidatePath("/");
  }
}

export async function getAllTodos() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      createdAt: true,
      id: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}
