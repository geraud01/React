import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
`

export const Heading1 = styled.h1`
    font-size: 1.5rem;
    color: #e99;

    span {
        display: block;
        font-size: 80%;
        color: #99e;
    }
`

export const Loader = styled.div`
    height: 50px;
    width: 50px;
    display: block;
    margin: 0 auto;
    border-top: 4px solid #99e;
    border-right: 4px solid transparent;
    border-radius: 50%;
    animation: 1s ${spin} infinite;
`