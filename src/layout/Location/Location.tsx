import data from '../../data.json';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
import { Wrap, TitleCont } from '@/components/ContentsWrap';
import { Title, CustomEn } from '@/components/ContentsFont.tsx';

const Location = () => {
  const { mapInfo } = data;
  return (
    <div style={{ background: 'var(--bg-sub)' }}>
      <Wrap style={{ paddingBottom: '0' }}>
        <div data-aos="fade-up">
          <CustomEn>Location</CustomEn>
          <TitleCont>
            <Title style={{ fontWeight: '600' }}>{mapInfo.address1}</Title>
            <Title style={{ fontSize: '.85rem' }}>{mapInfo.address2}</Title>
          </TitleCont>
        </div>
      </Wrap>
      <Map />
      <Wrap data-aos="fade-up" style={{ paddingTop: '0' }}>
        <MapButtons />
        <Address />
      </Wrap>
    </div>
  );
};

export default Location;
