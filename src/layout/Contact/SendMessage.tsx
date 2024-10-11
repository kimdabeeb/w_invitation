import styled from '@emotion/styled';
import { TitleCont } from '@/components/ContentsWrap';
import { CustomEn, Title, Paragraph } from '@/components/ContentsFont';

const SendMessage = () => {
  return (
    <Information data-aos="fade">
      <CustomEn data-aos="fade-up" data-aos-duration="2000">INFORMATION</CustomEn>
      <TitleCont data-aos="fade-up" data-aos-duration="2000">
          <Title style={{ lineHeight: '2.5', fontWeight: 'bold' }}>안내</Title>
          <Title>웨딩홀 사전 안내를 드립니다</Title>
      </TitleCont>
      <Notice data-aos="fade-up" data-aos-duration="2000">
        <Paragraph>
          환경보호를 위해 화환을 정중히 사양하고있습니다. <br />
          보내주신 마음만 감사히 받겠습니다. 😊
        </Paragraph>
      </Notice>
    </Information>
  );
};

export default SendMessage;

export const Information = styled.div`
  height: 100%;
  background: var(--bg-body);
  padding: calc(var(--el-between) * 8) calc(var(--el-between) * 2.5);
`;

export const Notice = styled.div`
  aspect-ratio: 1/0.65;
  background: #fff;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  position: relative;
  > p {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    white-space: pre-wrap;
    word-break: keep-all;
    padding: 0 30px;
    text-align: var(--el-center);
    box-sizing: border-box;
    color: var(--color-point);
    line-height: 2;
    margin: 0;
    font-weight: 500;
    letter-spacing: -.5px;
  }
`;
