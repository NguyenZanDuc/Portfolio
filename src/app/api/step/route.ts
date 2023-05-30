import AddStep from "@/core/useCase/Step/command/AddStep";
import StepDone from "@/core/useCase/Step/command/StepDone";
import GetStep from "@/core/useCase/Step/query/GetStep";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const steps= await GetStep("6476146fc8feec025f241f95")
    return NextResponse.json(steps);
}
export async function POST(request: Request) {
    await AddStep("6476146fc8feec025f241f95",{
        title: "step 1-1",
        time: 10
    })
    return NextResponse.json({message: "success"});
}
export async function PUT(request: Request) {
    await StepDone("64762859963ced82f4d74f9f")
    return NextResponse.json({message: "id done"});
}