import mainImg from '@/assets/images/img_6.webp?url';
import styled from '@emotion/styled';
import { Wrap } from '@/components/ContentsWrap';
import data from '../../data.json';
import { BrideAndGroom } from '@/types/data.ts';

const Intro = () => {
  const { groom, bride } = data.greeting.host;
  const Host = ({ person }: { person: BrideAndGroom }) => {
    return <HostDetails>{person.name}</HostDetails>;
  };

  return (
    <>
      <Wrap style={{ padding: 'calc(var(--el-between) * 3) calc(var(--el-between) * 2) 0' }}>
        <MainImg data-aos="fade" src={mainImg} />
        <Invitation data-aos="fade">
          <li data-aos="fade" data-aos-delay="0">
            우리가 사랑함은 그가 먼저 우리를 사랑하셨음이라
            <br />
            <span data-aos="fade" data-aos-delay="300">
              요한일서 4:19
            </span>
          </li>
          <li data-aos="fade" data-aos-delay="500">
            하나님의 때에 서로 만난 두 사람이
          </li>
          <li data-aos="fade" data-aos-delay="1000">
            은혜로 결실을 맺게 되었습니다.
          </li>
          <li data-aos="fade" data-aos-delay="1500">
            둘이 하나가 되어 평생 서로를 돕는 배필로
          </li>
          <li data-aos="fade" data-aos-delay="2000">
            서약하는 자리에 기도와 축복으로 함께 해주신다면
          </li>
          <li data-aos="fade" data-aos-offset="100" data-aos-delay="2500">
            더 없는 감사와 기쁨으로 간직하겠습니다.
          </li>
        </Invitation>
        <HostInfo data-aos-offset="500" data-aos-duration="2000" data-aos="fade">
          신랑
          <Host person={groom} />
          <p>and</p>신부
          <Host person={bride} />
        </HostInfo>
      </Wrap>
      <div
        data-aos="fade"
        style={{
          width: '100%',
          aspectRatio: '1/1.75',
          background: '#eee',
        }}></div>
    </>
  );
};

export default Intro;

const MainImg = styled.img`
  width: 100%;
  max-width: 450px;
  aspect-ratio: 1/1.75;
  border-radius: 200px 200px 0 0;
`;

const Invitation = styled.ul`
  padding-top: calc(var(--el-between) * 6);
  li {
    font-size: calc(var(--font-size) / 1.125);
    letter-spacing: -0.15px;
    word-spacing: -0.35px;
    line-height: 3;
  }
  li:first-of-type {
    margin-bottom: calc(var(--el-between) * 6);
    line-height: 2.4;
    & span {
      font-size: calc(var(--font-size) / 1.2);
    }
  }
  li:last-of-type {
    margin-bottom: calc(var(--el-between) * 4);
  }
`;

const HostInfo = styled.div`
  font-family: var(--font-subTitle);
  display: var(--el-flex);
  align-items: var(--el-center);
  justify-content: var(--el-center);
  padding: calc(var(--el-between) * 5) 0 calc(var(--el-between) * 3);
  p {
    font-family: var(--font-subTitleEn);
    padding: 0 var(--el-between);
    font-size: calc(var(--font-size) + 2.5);
    letter-spacing: -1px;
    margin-right: var(--el-between);
  }
`;


const HostDetails = styled.b`
  font-size: calc(var(--font-size) + 2.5);
 // font-family: var(--font-paragraph);
  padding: 0 var(--el-between);
`;
