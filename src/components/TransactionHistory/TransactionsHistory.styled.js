import styled from 'styled-components';

export const Container = styled.table`
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;
`;

export const TabletHead = styled.thead`
  & th {
    padding: 10px;
    border: 1px solid;
    background-color: tomato;
  }
`;

export const TabletBody = styled.tbody`
  & td {
    padding: 10px;
    border: 1px solid;
  }
`;