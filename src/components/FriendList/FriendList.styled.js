import styled from 'styled-components';

export const Container = styled.ul`
  margin: 0;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  gap: 8px;
`;

export const Marker = styled.span`
  display: block;
  margin-right: 15px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? 'green' : 'red')};
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 200px;
  padding: 10px;
  font-weight: 600;
  border: 1px solid;
  border-radius: 4px;
  & img {
    margin-right: 15px;
  }
`;