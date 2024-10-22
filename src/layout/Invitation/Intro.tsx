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
        <Invitation data-aos-delay="200">
          <ul>
            <li data-aos="fade" data-aos-delay="0">
              우리가 사랑함은 그가 먼저 우리를 사랑하셨음이라
              <br />
              <span data-aos="fade" data-aos-delay="500">
                요한일서 4:19
              </span>
            </li>
            <li data-aos="fade" data-aos-delay="1000">
              하나님의 때에 서로 만난 두 사람이
            </li>
            <li data-aos="fade" data-aos-delay="1500">
              은혜로 결실을 맺게 되었습니다.
            </li>
            <li data-aos="fade" data-aos-delay="2000">
              둘이 하나가 되어 평생 서로를 돕는 배필로
            </li>
            <li data-aos="fade" data-aos-delay="2500">
              서약하는 자리에 기도와 축복으로 함께 해주신다면
            </li>
            <li data-aos="fade" data-aos-delay="3000">
              더 없는 감사와 기쁨으로 간직하겠습니다.
            </li>
            {/* <li
              data-aos="fade"
              data-aos-offset="600"
              data-aos-duration="3000"
              data-aos-delay="50000000">
              신랑
              <Host person={groom} />
              <span>and</span>
              신부
              <Host person={bride} />
            </li> */}
          </ul>
          {/* <HostInfo data-aos="fade" data-aos-offset="400">
            <p>
              신랑
              <Host person={groom} />
              <span>and</span>신부
              <Host person={bride} />
            </p>
          </HostInfo> */}
        </Invitation>
        <HostInfo data-aos="fade" data-aos-delay="400" data-aos-duration="2000">
          <p>
            신랑
            <Host person={groom} />
            <span>and</span>신부
            <Host person={bride} />
          </p>
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

const Invitation = styled.div`
  display: var(--el-flex);
  flex-direction: var(--el-column);
  align-items: var(--el-center);
  gap: 60px;
  font-size: calc(var(--font-size) - 2);
  padding: calc(var(--el-between) * 6) 0 calc(var(--el-between) * 3);
  & ul li {
    font-size: calc(var(--font-size) / 1.085);
    letter-spacing: -0.15px;
    word-spacing: -0.35px;
    line-height: 3;
  }
  li:first-of-type {
    margin-bottom: calc(var(--el-between) * 6);
    line-height: 2;
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
  margin-bottom: calc(var(--el-between) * 4);
  line-height: 3;
  span {
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
