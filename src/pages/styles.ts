import styled from 'styled-components'

export const TaskContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`
export const TaskSummary = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
`
interface SummarySpanProps {
  variant: 'created' | 'finished'
}

export const TitleSummary = styled.h3<SummarySpanProps>`
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.6;
  color: ${(props) => (props.variant === 'created' ? props.theme.colors.blue : props.theme.colors.purple)};

  span {
    color: ${(props) => props.theme.colors['gray-200']};
    background-color: ${(props) => props.theme.colors['gray-400']};
    padding: 0.25rem 0.5rem;
    border-radius: 10px;
    font-weight: 700;
    margin-left: 0.5rem;
  }
`
export const TaskCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.theme.colors['gray-500']};
  border: 1px solid ${(props) => props.theme.colors['gray-400']};
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors['gray-400']};
  }

  > div{
    display: flex;
    align-items: center;
    gap: 1rem;
  }

`

export const DeleteButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors['gray-300']};
  cursor: pointer;
  line-height: 0;
  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.danger};
  }
`
interface TaskTextProps {
  checked?: boolean
}

export const TaskText = styled.p<TaskTextProps>`
  color: ${(props) => (props.checked ? props.theme.colors['gray-300'] : props.theme.colors['gray-100'])};
  font-size: 1rem;
  line-height: 1.6;
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
`

export const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.blue};
  appearance: none;
  background-color: transparent;
  cursor: pointer;

  &:checked {
    background-color: ${(props) => props.theme.colors['purple-dark']};
    border-color: ${(props) => props.theme.colors.purple};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0.5rem;
      height: 0.5rem;
      background-color: white;
      border-radius: 50%;
    }
  }
`

export const EmptyTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 4rem;
  border-top: 2px solid ${(props) => props.theme.colors['gray-300']};
  border-radius: 8px;
  color: ${(props) => props.theme.colors['gray-300']};

  padding: 2rem;

  p {
    text-align: center;
    max-width: 320px;
  }

`
