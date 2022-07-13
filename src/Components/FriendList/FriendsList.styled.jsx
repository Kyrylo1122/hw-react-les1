import styled from "styled-components";
export const Status = styled.span`
  width: 10px;
  height: 10px;
  display: block;
  background-color: ${(p) => (p.isOnline ? "green" : "red")};
  border-radius: ${(p) => p.theme.radii.round};
`;
