/** biome-ignore-all lint/performance/noNamespaceImport: <is needed> */
import { zodResolver } from '@hookform/resolvers/zod'
import * as Form from '@radix-ui/react-form'
import { PlusCircle } from 'phosphor-react'
import { useCallback, useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod/v3'
import { TaskContext } from '../../context/task-context'
import { SubmitButton, TaskForm, TaskInput } from './styles'

const TaskFormProp = z.object({
  task: z.string().min(1, { message: 'Task cannot be empty' }),
})

export type TaskFormType = z.infer<typeof TaskFormProp>

export function TaskInputForm() {
  const { addTask } = useContext(TaskContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskFormType>({
    resolver: zodResolver(TaskFormProp),
    defaultValues: {
      task: '',
    },
  })

  const handleCreateNewTask = useCallback(
    (data: TaskFormType) => {
      const newTask = {
        id: crypto.randomUUID(),
        task: data.task,
      }

      addTask(newTask)

      reset()
    },
    [addTask, reset]
  )

  useEffect(() => {
    handleCreateNewTask
  }, [handleCreateNewTask])

  return (
    <TaskForm onSubmit={handleSubmit(handleCreateNewTask)}>
      <Form.Field name="task">
        <Form.Message match="valueMissing">{errors.task?.message}</Form.Message>

        <Form.Control asChild>
          <TaskInput {...register('task')} placeholder="Adicione uma nova tarefa" />
        </Form.Control>
      </Form.Field>

      <Form.Submit asChild>
        <SubmitButton type="submit">
          Criar
          <PlusCircle size={20} />
        </SubmitButton>
      </Form.Submit>
    </TaskForm>
  )
}
