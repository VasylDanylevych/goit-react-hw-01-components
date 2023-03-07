import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.div`
  text-align: center;
  background-color: yellow;
  font-weight: 700;
`;

export const Stats = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding-left: 0;
  font-weight: 500;
  & li {
    display: flex;
    gap: 5px;
    flex-direction: column;
    align-items: center;
  }
`;

export const Avatar = styled.img`
  width: 200px;
  height: 100%;
`;
