import styled from '@emotion/styled';
import data from 'data.json';
import NaverMap from '@/assets/icons/naver_map.png?url';
import KakaoMap from '@/assets/icons/kakao_map.png?url';

const MapButtons = () => {
  const { naverMap, kakaoMap } = data.mapInfo;

  return (
    <MapButton>
      <Button onClick={() => window.open(naverMap)}><img src={NaverMap} />네이버 지도</Button>
      <Button onClick={() => window.open(kakaoMap)}><img src={KakaoMap} />카카오맵</Button>
    </MapButton>
  );
};

export default MapButtons;

const MapButton = styled.div`
  display: var(--el-flex);
  justify-content: var(--el-center);
  margin: var(--el-between);
  gap: var(--el-between);
`;

const Button = styled.button`
  width: 50%;
  margin: calc(var(--el-between) * 1.25) 0;
  font-family: var(--font-paragraph);
  outline: none;
  box-shadow: none;
  font-size: var(--font-size);
  display: var(--el-flex);
  align-items: var(--el-center);
  justify-content: var(--el-center);
  color: var(--color-black2);
  text-decoration: none;
  gap: 15px;
  & img {
    width: 25px;
    aspect-ratio: 1/1;
  }
`.withComponent('a');