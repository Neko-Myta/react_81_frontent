import styled from "@emotion/styled";

export const Lesson10Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    min-height: 100vh;
    padding: 40px;
    background: linear-gradient(135deg, #1e293b, #0f172a);
    min-width: 100vh;
    width: 100%
`;

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-width: 320px;
    padding: 20px;
    border-radius: 12px;
    background: #1e293b;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
`;

export const Result = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    min-width: 350px;
    min-height: 200px;
    border-radius: 12px;
    background: #0f172a;
    border: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 20px;
    color: #e2e8f0;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
`;

