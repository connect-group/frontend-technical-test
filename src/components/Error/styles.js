import styled from "styled-components";

export const Container = styled.div`
    border-radius: 4px;
    background-color: #f5f5f5;
    text-align: center;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    svg{
        display: block;
        margin: 0 auto;
    }
    
    span{
        font-size: 13px;
        font-weight: 500;
        letter-spacing: 0.37px;
        text-align: center;
        color: #6d7278;
        margin-top: 13px;
    }
`;
