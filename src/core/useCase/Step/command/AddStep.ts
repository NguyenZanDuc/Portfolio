import { Step, Task } from "@/core/validator/taskSchema";
import { revalidateTag } from "next/cache";
import { PrismaClient } from "@prisma/client";

export default async function AddStep(stepId: string, step: Omit<Step, "done">){
    const prisma = new PrismaClient()
    await prisma.step.update({
        where: {
            id: stepId
        },
        data: {
            steps: {
                create: {
                    title: step.title,
                    done: false,
                    time: step.time,
                }
            }
        }
    })
    
    revalidateTag('task id...')
}