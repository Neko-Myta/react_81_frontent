import styled from "@emotion/styled";

export const InputComponent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;

    max-width: 400px;
    padding: 20px;
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
    font-size: 18px;
    color: rgb(211, 48, 189);
`;

export const InputField = styled.input`
    padding: 12px; 
    width: 100%; 
    border: 1px solid rgb(200, 200, 200);
    border-radius: 4px;
    font-size: 18px;
    outline: none;
    &::placeholder {
        color: rgb(150, 150, 150);
    }
`;

export const Error = styled.div`
color: red;
height: 18px;
`