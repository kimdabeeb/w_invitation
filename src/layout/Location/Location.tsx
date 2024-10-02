import data from 'data.json';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
import { Wrap, TitleCont } from '@/components/ContentsWrap';
import { Title, CustomEn } from '@/components/ContentsFont.tsx';

const Location = () => {
  const { mapInfo } = data;
  return (
    <Wrap style={{ background: 'var(--bg-sub)' }}>
      <CustomEn>Location</CustomEn>
      <TitleCont>
        <Title style={{ fontWeight: '600' }}>{mapInfo.address1}</Title>
        <Title style={{ fontSize: '.85rem' }}>{mapInfo.address2}</Title>
      </TitleCont>
      <Map />
      <MapButtons />
      <Address />
    </Wrap>
  );
};

export default Location;
