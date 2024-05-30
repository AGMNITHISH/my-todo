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
