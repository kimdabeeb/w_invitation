import mainImg from '@/assets/images/img_8.webp?url';
import styled from '@emotion/styled';
import { Wrap } from '@/components/ContentsWrap';
import data from 'data.json';
import { BrideAndGroom } from '@/types/data.ts';

const Intro = () => {
  const { groom, bride } = data.greeting.host;
  const Host = ({ person }: { person: BrideAndGroom }) => {
    return <HostDetails>{person.name}</HostDetails>;
  };

  return (
    <Wrap>
      <MainImg src={mainImg} />
      <Invitation>
        <ul>
          <li>
            우리가 사랑함은 그가 먼저 우리를 사랑하셨음이라
            <br />
            <span>요한일서 4:19</span>
          </li>
          <li>하나님의 떄에 서로 만난 두 사람이</li>
          <li>은혜로 결실을 맺게 되었습니다.</li>
          <li>둘이 하나가 되어 평생 서로를 돕는 배필로</li>
          <li>서약하는 자리에 기도와 축복으로 함께 해주신다면</li>
          <li>더 없는 감사와 기쁨으로간직하겠습니다.</li>
        </ul>
        <HostInfo>
          <p>
            신랑
            <Host person={groom} />
            <span>and</span>신부
            <Host person={bride} />
          </p>
        </HostInfo>
      </Invitation>
      <div
        style={{
          marginTop: '3rem',
          width: '100%',
          aspectRatio: '1/1.5',
          background: '#3c78d8',
        }}></div>
    </Wrap>
  );
};

export default Intro;

const MainImg = styled.img`
  width: 100%;
  max-width: 450px;
  border-radius: 200px 200px 0 0;
`;

const Invitation = styled.div`
  display: var(--el-flex);
  flex-direction: var(--el-column);
  align-items: var(--el-center);
  gap: 70px;
  font-size: var(--font-size);
  & ul li {
    letter-spacing: -0.15px;
    word-spacing: -0.35px;
    line-height: 3;
  }
  li:first-of-type {
    margin-bottom: 3rem;
    line-height: 2.5;
    & span {
      font-size: 0.75rem;
    }
  }
`;

const HostInfo = styled.div`
  font-family: var(--font-subTitle);
  display: var(--el-flex);
  align-items: var(--el-center);
  justify-content: var(--el-center);
  gap: 35px;
  & span {
    font-family: var(--font-subTitleEn);
    padding: 0 var(--el-between);
    font-size: calc(var(--font-size) + 0.175rem);
    letter-spacing: -1px;
  }
`;

const HostDetails = styled.span`
  font-family: var(--font-paragraph);
  padding: 0 var(--el-between);
  white-space: nowrap;
`;
