import styled from '@emotion/styled';

export const Container = styled.div`
  background: var(--bg-sub2);
`;

export const Wrapper = styled.div`
  max-width: 28.125rem;
  width: 100%;
  overflow: hidden;
  display: var(--el-flex);
  align-items: var(--el-center);
  flex-direction: var(--el-column);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  background: var(--color-white);
`;

export const Wrap = styled.section`
  display: var(--el-flex);
  align-items: var(--el-center);
  flex-direction: var(--el-column);
  padding: calc(var(--el-between) * 8) calc(var(--el-between) * 2.5) calc(var(--el-between) * 4);
  & hr {
    width: 100%;
    border: 0;
    border-top: 1px solid var(--color-point);
    margin-top: 1rem;
  }
`;

export const GalleryWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding-left: 0;
  padding-right: 0;
`;

export const TitleCont = styled.div`
  height: 100%;
  padding: calc(var(--el-between) * 3) 0 calc(var(--el-between) * 6);
`;

