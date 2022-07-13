import styled from "styled-components";
export const TransactionLayer = styled.td`
  background-color: ${(p) => p.theme.colors.grey};
  padding: ${(p) => p.theme.space[4]}px;
`;
export const Column = styled.th`
  padding: ${(p) => p.theme.space[4]}px;
  border: ${(p) => p.theme.borders.normal};
`;
