import data from 'data.json';
import { Container as MapDiv, Marker, NaverMap, useNavermaps } from 'react-naver-maps';

const Map = () => {
  const { lat, lon } = data.mapInfo;
  const navermaps = useNavermaps();

  return (
      <MapDiv data-aos="fade-up" data-aos-delay="150"
        style={{
          width: '100%',
          height: '240px',
        }}>
        <NaverMap
          defaultCenter={new navermaps.LatLng(lat, lon)}
          defaultZoom={15}
          draggable={false}
          pinchZoom={false}
          scrollWheel={false}
          keyboardShortcuts={false}>
          <Marker defaultPosition={new navermaps.LatLng(lat, lon)} />
        </NaverMap>
      </MapDiv>
  );
};

export default Map;
