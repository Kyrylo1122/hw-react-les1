import styled from "styled-components";

export const Title = styled.h2`
  color: ${(p) => p.theme.colors.text};
`;
export const Text = styled.p`
  color: ${(p) => p.theme.colors.secondText};
  margin-top: ${(p) => p.theme.space[4]}px;
`;
export const Stats = styled.span`
  color: ${(p) => p.theme.colors.secondText};
`;
export const Amount = styled.span`
  color: ${(p) => p.theme.colors.black};
  font-weight: ${(p) => p.theme.fontWeights.bold};
`;
