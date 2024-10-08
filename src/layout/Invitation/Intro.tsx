import mainImg from '@/assets/images/img_3.webp?url';
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
      <Wrap
        data-aos="fade"
        style={{ padding: 'calc(var(--el-between) * 3) calc(var(--el-between) * 2) 0' }}>
        <MainImg src={mainImg} />
        <Invitation data-aos="fade">
          <ul>
            <li data-aos="fade-right" data-aos-delay="100">
              우리가 사랑함은 그가 먼저 우리를 사랑하셨음이라
              <br />
              <span data-aos="fade-right" data-aos-delay="200">
                요한일서 4:19
              </span>
            </li>
            <li data-aos="fade-right" data-aos-delay="800">
              하나님의 떄에 서로 만난 두 사람이
            </li>
            <li data-aos="fade-right" data-aos-delay="1200">
              은혜로 결실을 맺게 되었습니다.
            </li>
            <li data-aos="fade-right" data-aos-delay="1600">
              둘이 하나가 되어 평생 서로를 돕는 배필로
            </li>
            <li data-aos="fade-right" data-aos-delay="2000">
              서약하는 자리에 기도와 축복으로 함께 해주신다면
            </li>
            <li data-aos="fade-right" data-aos-delay="2400">
              더 없는 감사와 기쁨으로간직하겠습니다.
            </li>
          </ul>
          <HostInfo
            data-aos="fade"
            data-aos-delay="2700"
            // data-aos-offset="700"
          >
            <p>
              신랑
              <Host person={groom} />
              <span>and</span>신부
              <Host person={bride} />
            </p>
          </HostInfo>
        </Invitation>
      </Wrap>
      <div
        data-aos="fade"
        data-aos-delay="3000"
        // data-aos-offset="700"
        style={{
          width: '100%',
          aspectRatio: '1/1.75',
          background: '#3c78d8',
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
  margin-top: calc(var(--el-between) * 6);
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
`;

const HostInfo = styled.div`
  font-family: var(--font-subTitle);
  display: var(--el-flex);
  align-items: var(--el-center);
  justify-content: var(--el-center);
  margin-bottom: calc(var(--el-between) * 4);
  & span {
    font-family: var(--font-subTitleEn);
    padding: 0 var(--el-between);
    font-size: calc(var(--font-size) + 2.5);
    letter-spacing: -1px;
  }
`;

const HostDetails = styled.b`
  font-size: calc(var(--font-size) + 2.5);
  font-family: var(--font-paragraph);
  font-weight: 600;
  padding: 0 var(--el-between);
`;
