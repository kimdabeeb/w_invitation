import styled from '@emotion/styled';
import UpNarrow from '@/assets/icons/upnarrow.png?url';
import { SubTitle } from '@/components/ContentsFont';

function ShareKakaoBtn() {
  const sendUrl = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        const kakapClientId = import.meta.env.VITE_APP_KAKAOCOPY_CLIENT_ID;
        kakao.init(kakapClientId);
      }

      kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: 'kakao share btn',
          description: 'kakao url share button ☺️',
          imageUrl:
            'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
          link: {
            mobileWebUrl: 'http://localhost:5173/',
            webUrl: 'http://localhost:5173/',
          },
        },
        buttons: [
          {
            title: '자세히 보기',
            link: {
              mobileWebUrl: 'http://localhost:5173/',
              webUrl: 'http://localhost:5173/',
            },
          },
        ],
      });
    }
  };

  return (
    <KakaoButton onClick={sendUrl}>
      <SubTitle>카카오톡으로 전하기</SubTitle>
      <img src={UpNarrow} />
    </KakaoButton>
  );
}

export default ShareKakaoBtn;

const KakaoButton = styled.button`
  width: 100%;
  background: #fce777;
  border: unset;
  outline: none;
  border-radius: var(--el-between);
  font-size: 0.875rem;
  padding: calc(var(--el-between) * 1.8) calc(var(--el-between) * 2.5);
  display: var(--el-flex);
  align-items: var(--el-center);
  justify-content: space-between;
  & img {
    width: calc(var(--el-between) * 2);
    height: calc(var(--el-between) * 2);
  }
`;
