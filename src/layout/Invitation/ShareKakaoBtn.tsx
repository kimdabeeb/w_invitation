// import styled from '@emotion/styled';
// import UpNarrow from '@/assets/icons/upnarrow.png?url';
// import { SubTitle } from '@/components/ContentsFont';

// const ShareKakaoBtn = () => {
//   const kakaoBtn = () => {
//     if (window.Kakao) {
//       const kakao = window.Kakao as any;

//       if (!kakao.isInitialized()) {
//         const kakaoClientId = import.meta.env.VITE_APP_KAKAOCOPY_CLIENT_ID;
//         kakao.init(kakaoClientId);
//       }

//       kakao.Share.sendDefault({
//         objectType: 'feed',
//         content: {
//           title: 'kakao share btn',
//           description: 'kakao url share button ☺️',
//           imageUrl:
//             'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
//           link: {
//             mobileWebUrl: 'https://w-invitation-yjdb.vercel.app/',
//             webUrl: 'https://w-invitation-yjdb.vercel.app/',
//           },
//         },
//         buttons: [
//           {
//             title: '자세히 보기',
//             link: {
//               mobileWebUrl: 'https://w-invitation-yjdb.vercel.app/',
//               webUrl: 'https://w-invitation-yjdb.vercel.app/',
//             },
//           },
//         ],
//       });
//     }
//   };

//   return (
//     <KakaoButton onClick={kakaoBtn}>
//       <SubTitle>카카오톡으로 전하기</SubTitle>
//       <img src={UpNarrow} />
//     </KakaoButton>
//   );
// };

// export default ShareKakaoBtn;

// const KakaoButton = styled.button`
//   width: 100%;
//   background: #fce777;
//   border: unset;
//   outline: none;
//   border-radius: var(--el-between);
//   font-size: 0.875rem;
//   color: var(--color-black);
//   padding: calc(var(--el-between) * 1.8) calc(var(--el-between) * 2.5);
//   display: var(--el-flex);
//   align-items: var(--el-center);
//   justify-content: space-between;
//   & img {
//     width: calc(var(--el-between) * 2);
//     height: calc(var(--el-between) * 2);
//   }
// `;
