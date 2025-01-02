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
  width: 50%;
  margin: calc(var(--el-between) * 2) 0 calc(var(--el-between) * 3);
  font-family: var(--font-paragraph);
  outline: none;
  box-shadow: none;
  font-size: var(--font-size);
  display: var(--el-flex);
  align-items: var(--el-center);
  color: var(--color-black2);
  text-decoration: none;
  gap: 10px;
  & img {
    width: 25px;
    aspect-ratio: 1/1;
  }
`.withComponent('a');