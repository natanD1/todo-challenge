import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    height: 12.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    background-color: ${(props) => props.theme.colors['gray-700']};

    > h1 {
        font-size: 2.5rem;
        font-weight: 900;
        color: ${(props) => props.theme.colors.blue};
    
        > span {
            color: ${(props) => props.theme.colors.purple};
        }
    }
`
