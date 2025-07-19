import { ClipboardText, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { Header } from '../components/header/header'
import { TaskInputForm } from '../components/task-input-form/task-input-form'
import { TaskContext } from '../context/task-context'
import {
  Checkbox,
  DeleteButton,
  EmptyTaskContainer,
  TaskCard,
  TaskContainer,
  TaskSummary,
  TaskText,
  TitleSummary,
} from './styles'

export function Home() {
  const { tasks, removeTask, handleToggleTask } = useContext(TaskContext)

  const countTasks = tasks.length
  const checkedCount = tasks.filter((t) => t.checked).length

  return (
    <>
      <Header />
      <TaskInputForm />
      <TaskContainer>
        <TaskSummary>
          <TitleSummary variant="created">
            Tarefas criadas <span>{countTasks}</span>
          </TitleSummary>
          <TitleSummary variant="finished">
            Concluídas{' '}
            <span>
              {checkedCount} de {countTasks}
            </span>
          </TitleSummary>
        </TaskSummary>

        {tasks.length === 0 && (
          <EmptyTaskContainer>
            <ClipboardText size={64} />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong> Crie tarefas e organize seus itens a fazer
            </p>
          </EmptyTaskContainer>
        )}

        {tasks.map((item) => (
          <TaskCard key={item.id}>
            <div>
              <Checkbox checked={item.checked} onChange={() => handleToggleTask(item.id)} type="checkbox" />
              <TaskText checked={item.checked}>{item.task}</TaskText>
            </div>

            <DeleteButton onClick={() => removeTask(item.id)}>
              <Trash size={24} />
            </DeleteButton>
          </TaskCard>
        ))}
      </TaskContainer>
    </>
  )
}
