import ShareKakaoBtn from '@/utils/ShareKakaoBtn';
import styled from '@emotion/styled';
import Copy from '@/assets/icons/copy.svg?react';
import { SubTitle, CustomEn } from '@/components/ContentsFont';

const ShareBox = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(
      () => {
        alert('주소가 복사되었습니다.');
      },
      () => {
        alert('주소 복사에 실패했습니다.');
      },
    );
  };
  return (
    <>
      <div
        data-aos="fade"
        data-aos-delay="400"
        style={{
          width: '100%',
          aspectRatio: '1/1.75',
          background: '#afc8d4',
        }}></div>
      <SnsCont>
        <ShareKakaoBtn />
        <CopyButton type="button" onClick={handleCopy}>
          <SubTitle>청첩장 주소 복사하기</SubTitle>
          <Copy fill="#000" />
        </CopyButton>
        <CustomEn>Copyright 2024. kimdabeen All rights reserved.</CustomEn>
      </SnsCont>
    </>
  );
};

export default ShareBox;

const SnsCont = styled.div`
  padding: calc(var(--el-between) * 4) calc(var(--el-between) * 3) var(--el-between);
  display: var(--el-flex);
  flex-direction: var(--el-column);
  align-items: var(--el-center);
  gap: 12px;
  > p {
    opacity: 1;
    font-size: 0.625rem;
    margin-top: calc(var(--el-between) * 4);
  }
`;

const CopyButton = styled.button`
  width: 100%;
  background: var(--bg-main);
  border: unset;
  outline: none;
  border-radius: var(--el-between);
  font-size: 0.875rem;
  padding: calc(var(--el-between) * 1.8) calc(var(--el-between) * 2.5);
  display: var(--el-flex);
  align-items: var(--el-center);
  justify-content: space-between;
  cursor: pointer;
`;
