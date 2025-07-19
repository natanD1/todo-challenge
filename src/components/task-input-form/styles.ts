// biome-ignore lint/performance/noNamespaceImport: <is needed for styled-components>
import * as Form from '@radix-ui/react-form'

import styled from 'styled-components'

export const TaskForm = styled(Form.Root)`
    width: 100%;
    max-width: 736px;

    display: flex;
    gap: 0.5rem;

    margin: 0 auto;
    margin-top: -2rem;

    position: relative;
`

export const TaskInput = styled.input`
    width: 638px;

    border: 0;
    border-radius: 8px;

    padding: 1rem;
    
    background-color: ${(props) => props.theme.colors['gray-500']};
    color: ${(props) => props.theme.colors['gray-300']};

    &:focus{
        box-shadow: 0 0 0 2px ${(props) => props.theme.colors['purple-dark']};
    }
`

export const SubmitButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    padding: 1rem;
    border: 0;
    border-radius: 8px;

    background-color: ${(props) => props.theme.colors['blue-dark']};
    color: ${(props) => props.theme.colors['gray-100']};

    cursor: pointer;

    font-size: 0.875rem;
    font-weight: 700;
`
