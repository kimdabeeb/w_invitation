import styled from '@emotion/styled';
import data from '../../data.json';
import mainImg from '@/assets/images/img_13.jpeg?url';
import subImg from '@/assets/images/img_14.webp?url';
//import weddingVideo from '@/assets/video/weddingVideo.mp4'
import { Paragraph3 } from '@/components/ContentsFont';
import { Wrap } from '@/components/ContentsWrap';
import { BrideAndGroom } from '@/types/data.ts';


const Intro = () => {
  const { groom, bride } = data.greeting.host;
  const Host = ({ person }: { person: BrideAndGroom }) => {
    return <HostDetails>{person.name}</HostDetails>;
  };

  return (
    <>
      <Wrap style={{ padding: 'calc(var(--el-between) * 3) calc(var(--el-between) * 3) 0' }}>
        <Main>
          {/* <video muted autoPlay loop width={450}>
            <source src={weddingVideo} type="video/mp4" />
          </video> */}
          <MainImg data-aos="fade" src={mainImg} />
          <Paragraph3>love<br/>one<br/>another</Paragraph3>
          <Bubble>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
          </Bubble>
        </Main>
        <Invitation data-aos="fade">
          <li data-aos="fade">
            우리가 사랑함은 그가 먼저 우리를 사랑하셨음이라
            <br />
            <span data-aos="fade">
              요한일서 4:19
            </span>
          </li>
          <li data-aos="fade" >
            하나님의 때에 서로 만난 두 사람이
          </li>
          <li data-aos="fade">
            은혜로 결실을 맺게 되었습니다.
          </li>
          <li data-aos="fade">
            둘이 하나가 되어 평생 서로를 돕는 배필로
          </li>
          <li data-aos="fade">
            서약하는 자리에 기도와 축복으로 함께 해주신다면
          </li>
          <li data-aos="fade">
            더 없는 감사와 기쁨으로 간직하겠습니다.
          </li>
        </Invitation>
        <HostInfo data-aos="fade" data-aos-offset="150">
          <p>groom</p>
          <Host person={groom} />
          <span>&</span>
          <p>bride</p>
          <Host person={bride} />
        </HostInfo>
      </Wrap>
      <SubImg data-aos="fade" src={subImg} />
    </>
  );
};

export default Intro;

const MainImg = styled.img`
  width: 100%;
  max-width: 450px;
  border-radius: 200px 200px 0 0;
  position: relative;
`;

const SubImg = styled.img`
  width: 100%;
  max-width: 450px;
  /* aspect-ratio: 1/1.75; */
`;

const Main = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  top: 0;
  left: 0;
    p {
      position: absolute;
      top: -20px;
      width: 100%;
      text-align: center;
      text-transform: capitalize;
      line-height: 1.55;
      letter-spacing: 2px;
      font-size: 4rem;
      color: #a9d4ff;
    }
`;

const Invitation = styled.ul`
  padding-top: calc(var(--el-between) * 6);
  li {
    font-size: calc(var(--font-size) / 1.2);
    word-spacing: -0.35px;
    line-height: 3;
    color: var(--color-black);
  }
  li:first-of-type {
    margin-bottom: calc(var(--el-between) * 6);
    line-height: 2.4;
    & span {
      font-size: calc(var(--font-size) / 1.325);
    }
  }
  li:last-of-type {
    margin-bottom: calc(var(--el-between) * 2);
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
    font-size: calc(var(--font-size) / 1.25);
    letter-spacing: -1.5px;
  }
  span {
    font-family: var(--font-subTitleEn);
    padding: 0 var(--el-between);
    margin-right: var(--el-between);
  }
`;


const HostDetails = styled.b`
  font-size: calc(var(--font-size) / 1.2);
 // font-family: var(--font-paragraph);
  padding: 0 var(--el-between);
`;

const Bubble = styled.div`
  .bubble {
    height: 40px;
    width: 40px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    position: absolute;
    animation: animate 10s linear infinite;
  }
  .bubble:nth-of-type(1) {
    top: 20%;
    left: 20%;
    animation-duration: 8s;
  }
  .bubble:nth-of-type(2) {
    top: 60%;
    left: 80%;
    animation-duration: 10s;
  }
  .bubble:nth-of-type(3) {
    top: 40%;
    left: 40%;
    animation-duration: 3s;
  }
  .bubble:nth-of-type(4) {
    top: 66%;
    left: 30%;
    animation-duration: 7s;
  }
  .bubble:nth-of-type(5) {
    top: 90%;
    left: 10%;
    animation-duration: 9s;
  }
  .bubble:nth-of-type(6) {
    top: 50%;
  left: 50%;
    animation-duration: 5s;
  }
  .bubble:nth-of-type(7) {
    top: 75%;
    left: 60%;
    animation-duration: 8s;
  }
  @keyframes animate {
    0% {
      transform: scale(0) translateY(0) rotate(70deg);
    }
    100% {
      transform: scale(1.1) translateY(-50px) rotate(360deg);
    }
}
`