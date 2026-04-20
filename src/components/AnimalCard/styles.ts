import styled from "@emotion/styled";



export const AnimalCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  min-width: 400px;
  padding: 30px;
  background: rgb(42, 19, 71);
  color: rgb(248, 250, 250);
  border-radius: 12px;
  font-size: 24px;

  > img {
    width: 200px;
  }
`;


export const Title = styled.h2`
  font-size: 32px;
  margin: 0;
`;

export const Text = styled.p`
  font-size: 18px;
  margin: 0;
`;

export const Image = styled.img`
  width: 150px;
  border-radius: 8px;
`;