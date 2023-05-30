import React from 'react'

type Props = {}
type Step = {
    id: number,
    title: string,
    steps: Step[]
}
type DailyGoal = {
    id: number,
    title: string,
    steps: Step[]
}
const dailyGoals: DailyGoal[] = [
    {
        id: 1,
        title: 'Daily Goal 1',
        steps: [
            {
                id: 1,
                title: 'Step 1',
                steps: [
                    {
                        id: 1,
                        title: 'Step 1-1',
                        steps: []
                    },
                    {
                        id: 2,
                        title: 'Step 1-2',
                        steps: []
                    }
                ]
            },
            {
                id: 2,
                title: 'Step 2',
                steps: [
                    {
                        id: 1,
                        title: 'Step 2-1',
                        steps: []
                    },
                    {
                        id: 2,
                        title: 'Step 2-2',
                        steps: []
                    }
                ]
            },
            {
                id: 3,
                title: 'Step 3',
                steps: []
            }
        ]
    }
]
const page = (props: Props) => {
  return (
    <div>
        <h1>Daily Goal Tracker</h1>
        {dailyGoals.map((dailyGoal) => {
            return <StepCompoent step={dailyGoal} level={0} />
        }
        )}
    </div>
  )
}

export default page

const StepCompoent = (props: {step: Step, level: number}) => {
    let curentLevel = props.level + 2
        const cl = `translate-x-10`
    return (
        <div className={cl}>
            {props.step.title}- {curentLevel}
            {props.step.steps.map((step) => {
                return <StepCompoent step={step} level={curentLevel} />
            })}
        </div>
    )
}