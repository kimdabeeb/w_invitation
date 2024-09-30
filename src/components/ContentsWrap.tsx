import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 28.125rem;
  display: var(--el-flex);
  align-items: var(--el-center);
  justify-content: var(--el-center);
  background: var(--bg-body);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;

export const Wrapper = styled.div``;

export const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.375rem;
`;

export const GalleryWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding-left: 0;
  padding-right: 0;
`;
