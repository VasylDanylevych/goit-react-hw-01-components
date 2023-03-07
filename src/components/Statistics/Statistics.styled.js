import styled from 'styled-components';

export const Container = styled.section`
  padding: 30px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const List = styled.ul`
  width: 400px;
  padding-left: 0;
  display: flex;
  gap: 8px;
  border: 1px solid black;
  border-radius: 4px;
`;

export const Item = styled.li`
  display: flex;
  flex-grow: 1;
  gap: 5px;
  flex-direction: column;
  align-items: center;
  background-color: tomato;
  padding: 5px 0;
`;