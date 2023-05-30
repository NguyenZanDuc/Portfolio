import { Step, Task } from "@/core/validator/taskSchema";
import { revalidateTag } from "next/cache";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default async function StepDone(stepId: string){
    const stepChild = await prisma.step.update({
        where: {
            id: stepId
        },
        data: {
            done: true,
        }
    })
    await UpdateParentStep(stepChild.stepId)
    
    revalidateTag('task id...')
}
const UpdateParentStep = async (stepParentId: string|null) => {
    if(stepParentId == null) return
    const step = await prisma.step.findFirst({
        where: {
            id: stepParentId
        },
        include: {
            steps: true
        }
    })
    console.log(step)
    if(step == null) return
    if(step.steps.every(step => step.done)){
      const stepparent =  await prisma.step.update({
            where: {
                id: stepParentId
            },
            data: {
                done: true,
            }
        })
        console.log(stepparent)
        if(stepparent.stepId != null) await UpdateParentStep(stepparent.stepId);
    }
}