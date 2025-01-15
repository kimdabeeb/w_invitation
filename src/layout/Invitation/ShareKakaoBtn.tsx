import { useEffect } from 'react';
import styled from '@emotion/styled';
import UpNarrow from '@/assets/icons/upnarrow.png?url';
import { SubTitle } from '@/components/ContentsFont';

const ShareKakaoBtn = () => {
  useEffect(() => {
    window.Kakao.cleanup();
    const JAVASCRIPT_ID = import.meta.env.VITE_APP_KAKAOCOPY_CLIENT_ID;
    console.log('카카오 JavaScript 키:', JAVASCRIPT_ID); 

    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(JAVASCRIPT_ID);
    }
  }, []);

  const kakaoBtn = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      //인증이 안되어있는 경우 인증요청
      // if (!kakao.isInitialized()) {
      //   const JAVASCRIPT_ID = import.meta.env.VITE_APP_KAKAOCOPY_CLIENT_ID;
      //   kakao.cleanup(JAVASCRIPT_ID)
      //   kakao.init(JAVASCRIPT_ID);
      // }
      if (!kakao.isInitialized()) {
        console.error('카카오 SDK 초기화가 실패했습니다.');
        return;
      }

      kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '영준 ♥︎ 다빈 결혼합니다.',
          description: ' 2025. 03. 01(토) 오후 3시 40분 웨딩여율리',
          imageUrl: 'https://i.postimg.cc/KzTJs8bR/img-6.png',
          link: {
            webUrl: 'https://w-invitation-yjdb.vercel.app',
            mobileWebUrl: 'https://w-invitation-yjdb.vercel.app',
          },
        },
        buttons: [
          {
            title: '청첩장 보러가기',
            link: {
              webUrl: 'https://w-invitation-yjdb.vercel.app',
              mobileWebUrl: 'https://w-invitation-yjdb.vercel.app',
            },
          },
        ],
      });
    }
  };

  return (
    <KakaoButton onClick={kakaoBtn}>
      <SubTitle>카카오톡으로 전하기</SubTitle>
      <img src={UpNarrow} />
    </KakaoButton>
  );
};

export default ShareKakaoBtn;

const KakaoButton = styled.button`
  width: 100%;
  background: #fce777;
  border: unset;
  outline: none;
  border-radius: var(--el-between);
  font-size: 0.875rem;
  color: var(--color-black);
  padding: calc(var(--el-between) * 1.8) calc(var(--el-between) * 2.5);
  display: var(--el-flex);
  align-items: var(--el-center);
  justify-content: space-between;
  & img {
    width: calc(var(--el-between) * 2);
    height: calc(var(--el-between) * 2);
  }
`;
