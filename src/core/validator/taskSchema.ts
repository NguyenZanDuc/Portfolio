import * as yup from 'yup';
// validator for task schema and step schema
export const taskSchema = yup.object({
    title: yup.string().required(),
    description: yup.string(),
    done: yup.boolean().notRequired().default(false),
})
export const stepSchema = yup.object({
    title: yup.string().required(),
    time: yup.number().required().nullable(),
    done: yup.boolean().nullable().default(false),
})
export type Task = yup.InferType<typeof taskSchema>;
export type Step = yup.InferType<typeof stepSchema>;