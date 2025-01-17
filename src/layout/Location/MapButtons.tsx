import styled from '@emotion/styled';
import data from 'data.json';
import KakaoMap from '@/assets/icons/kakao_map.png?url';
import NaverMap from '@/assets/icons/naver_map.png?url';

const MapButtons = () => {
  const { naverMap, kakaoMap } = data.mapInfo;
  const handleOpenMap = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    // <MapButton data-aos="fade-up" data-aos-delay="250">
    //   <Button onClick={() => window.open(naverMap)}><img src={NaverMap} />네이버 지도</Button>
    //   <Button onClick={() => window.open(kakaoMap)}><img src={KakaoMap} />카카오맵</Button>
    // </MapButton>
    <MapButton data-aos="fade-up" data-aos-delay="250">
      <Button onClick={() => handleOpenMap(naverMap)}>
        <img src={NaverMap} />네이버 지도
      </Button>
      <Button onClick={() => handleOpenMap(kakaoMap)}>
        <img src={KakaoMap} />카카오맵
      </Button>
    </MapButton>
  );
};

export default MapButtons;

const MapButton = styled.div`
  display: var(--el-flex);
  justify-content: var(--el-center);
  padding: calc(var(--el-between) * 3) 0 calc(var(--el-between) * 2);
  width: 100%;
  justify-content: space-between;
`;

const Button = styled.button`
  background: #fff;
  padding: 5px;
  border-radius: 8px;
  width: 100%;
  margin: 0 calc(var(--el-between) * 1);
  font-family: var(--font-paragraph);
  outline: none;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
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