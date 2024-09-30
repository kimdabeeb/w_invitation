import styled from '@emotion/styled';

export const Title = styled.p`
  font-family: 'GowunBatang', serif;
  font-size: 2.5rem;
`;

export const SubTitle = styled.p`
  font-family: 'GowunDodum';
`;

export const Paragraph = styled.p`
  font-family: 'SUIT', sans-serif;
  white-space: pre-line;
`;

export const CustomEn = styled.p`
  font-family: 'SometimesTimes';
`;

export const Caption = styled.p<{ textAlign?: string }>`
  font-weight: 200;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  white-space: pre-line;
`;
