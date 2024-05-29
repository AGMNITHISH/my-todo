"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/utils/prisma";

export async function create(formdata: FormData) {
  const input = formdata.get("input") as string;

  await prisma.todo.create({
    data: {
      title: input,
    },
  });
  revalidatePath("/");
}
