import { Task } from "@/core/validator/taskSchema";
import { revalidateTag } from "next/cache";
import { PrismaClient } from "@prisma/client";

export default async function CreateTask(task: Omit<Task, "done">){
    const prisma = new PrismaClient()
    await prisma.task.create({
        data: {
            ...task,
            done: false
        }
    })
    revalidateTag('tasks')
}