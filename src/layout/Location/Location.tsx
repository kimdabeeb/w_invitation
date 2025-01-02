import data from 'data.json';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
import { CustomEn, Title } from '@/components/ContentsFont';
import { TitleCont, Wrap } from '@/components/ContentsWrap';

const Location = () => {
  const { mapInfo } = data;
  return (
    <div style={{ background: 'var(--bg-sub)' }}>
      <Wrap style={{ paddingBottom: '0' }}>
        <CustomEn data-aos="fade-up">Location</CustomEn>
        <TitleCont data-aos="fade-up">
          <Title style={{ fontWeight: '600' }}>{mapInfo.address1}</Title>
          <Title style={{ fontSize: '.85rem' }}>{mapInfo.address2}</Title>
        </TitleCont>
      </Wrap>
      <Map />
      <Wrap style={{ paddingTop: '0', paddingBottom: 'calc(var(--el-between) * 6)' }}>
        <MapButtons />
        <Address />
      </Wrap>
    </div>
  );
};

export default Location;
