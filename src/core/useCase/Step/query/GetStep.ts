import { PrismaClient } from "@prisma/client"

export default function GetStep(id:string){
    const prisma = new PrismaClient()
    return prisma.step.findFirst({
        where: {
            id: id
        },
        include: {  
            steps: true
        }
    })
}