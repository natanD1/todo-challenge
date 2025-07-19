import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { TaskProvider } from './context/task-context'
import { Home } from './pages/home'
import { defaultTheme } from './styles/default-theme'
import { GlobalStyle } from './styles/global-style'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <TaskProvider>
          <Routes>
            <Route element={<Home />} path="/" />
          </Routes>
        </TaskProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
