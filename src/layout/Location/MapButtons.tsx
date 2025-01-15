import styled from '@emotion/styled';
import data from 'data.json';
import KakaoMap from '@/assets/icons/kakao_map.png?url';
import NaverMap from '@/assets/icons/naver_map.png?url';

const MapButtons = () => {
  const { naverMap, kakaoMap } = data.mapInfo;

  return (
    <MapButton data-aos="fade-up" data-aos-delay="250">
      <Button onClick={() => window.open(naverMap)}><img src={NaverMap} />네이버 지도</Button>
      <Button onClick={() => window.open(kakaoMap)}><img src={KakaoMap} />카카오맵</Button>
    </MapButton>
  );
};

export default MapButtons;

const MapButton = styled.div`
  display: var(--el-flex);
  justify-content: var(--el-center);
`;

const Button = styled.button`
  background: #fff;
  padding: 5px;
  border-radius: 8px;
  width: 40%;
  margin: calc(var(--el-between) * 2) auto calc(var(--el-between) * 2.5);
  font-family: var(--font-paragraph);
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  font-size: var(--font-size);
  display: var(--el-flex);
  align-items: var(--el-center);
  justify-content: center;
  color: var(--color-black2);
  text-decoration: none;
  gap: 9px;
  & img {
    width: 20px;
    aspect-ratio: 1/1;
  }
`.withComponent('a');