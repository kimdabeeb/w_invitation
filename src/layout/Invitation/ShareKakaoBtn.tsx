import styled from '@emotion/styled';
import UpNarrow from '@/assets/icons/upnarrow.png?url';
import { SubTitle } from '@/components/ContentsFont';

const ShareKakaoBtn = () => {
  const kakaoBtn = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      //인증이 안되어있는 경우 인증요청
      if (!kakao.isInitialized()) {
        const JAVASCRIPT_ID = import.meta.env.VITE_APP_KAKAOCOPY_CLIENT_ID;
        kakao.init(JAVASCRIPT_ID);
      }

      kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '영준 ♥︎ 다빈이의 청첩장',
          description: '저희 결혼을 축복해주셔서 감사드립니다 ☻',
          imageUrl:
            'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
          link: {
            webUrl: 'https://w-invitation-yjdb.vercel.app/',
            mobileWebUrl: 'https://w-invitation-yjdb.vercel.app/',
          },
        },
        buttons: [
          {
            title: '청첩장 보러가기',
            link: {
              webUrl: 'https://w-invitation-yjdb.vercel.app/',
              mobileWebUrl: 'https://w-invitation-yjdb.vercel.app/',
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
