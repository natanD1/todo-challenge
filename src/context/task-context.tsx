import { createContext, type ReactNode, useState } from 'react'

interface DataTask {
  id: string
  task: string
  checked?: boolean
}

interface TaskContextType {
  tasks: DataTask[]
  addTask: (task: DataTask) => void
  removeTask: (data: string) => void
  handleToggleTask: (id: DataTask['id']) => void
}

export const TaskContext = createContext({} as TaskContextType)

interface TaskProviderProps {
  children: ReactNode
}

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<DataTask[]>([])

  function addTask(data: DataTask) {
    setTasks((prev) => [...prev, data])
  }

  function removeTask(id: DataTask['id']) {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  function handleToggleTask(id: DataTask['id']) {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, checked: !task.checked } : task)))
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        handleToggleTask,
        removeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
