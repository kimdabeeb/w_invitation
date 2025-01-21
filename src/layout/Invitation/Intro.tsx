import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import data from '../../data.json';
import mainImg from '@/assets/images/img_1.webp?url';
import subImg from '@/assets/images/img_12.jpg?url';
import { Paragraph3 } from '@/components/ContentsFont';
import { Wrap } from '@/components/ContentsWrap';
import { BrideAndGroom } from '@/types/data.ts';


const Intro = () => {
  const { groom, bride } = data.greeting.host;

  const fullText = ['love', 'one', 'another'];
  const [text, setText] = useState<string[]>([]);
  const [wordIndex, setWordIndex] = useState<number>(0);  // 단어 인덱스
  const [charIndex, setCharIndex] = useState<number>(0); 
  const [isImageLoaded, setIsImageLoaded] = useState(false); 

  useEffect(() => {
    const img = new Image();
    img.src = mainImg;
    img.onload = () => {
      setIsImageLoaded(true); 
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (wordIndex < fullText.length) {
        const currentWord = fullText[wordIndex];
        
        setText((prevText) => {
          const newText = [...prevText];
          if (newText[wordIndex] === undefined) {
            newText[wordIndex] = '';
          }
          newText[wordIndex] += currentWord[charIndex];
          return newText;
        });

        if (charIndex < currentWord.length - 1) {
          setCharIndex((prev) => prev + 1);
        } else {
          setCharIndex(0);
          setWordIndex((prev) => prev + 1);
        }
      } else {
        // 모든 단어가 출력되면 interval 종료
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [wordIndex, charIndex]); 


  const Host = ({ person }: { person: BrideAndGroom }) => {
    return <HostDetails>{person.name}</HostDetails>;
  };

  return (
    <>
      <Wrap style={{ padding: 'calc(var(--el-between) * 3.8) calc(var(--el-between) * 2.5) 0'}}>
        <Main className="main">
          {/* <MainImg src={mainImg}/> */}
          {/* <Paragraph3>love<br/>one<br/>another</Paragraph3> */}
            {/* <div>{text.map((word, index) => (
              <Paragraph3 key={index}>{word}</Paragraph3>
              ))}
            </div>          
            <Bubble>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
          </Bubble> */}

          {isImageLoaded && (
            <>
              <div>{text.map((word, index) => (
                <Paragraph3 key={index}>{word}</Paragraph3>
              ))}
              </div>          
              <Bubble>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
              </Bubble>
            </>
          )}
        </Main>
        <Invitation data-aos="fade">
          <li data-aos="fade" data-aos-delay="100">
            우리가 사랑함은 그가 먼저 우리를 사랑하셨음이라
            <br />
            <span>
              요한일서 4:19
            </span>
          </li>
          <li data-aos="fade" data-aos-delay="200">
            하나님의 때에 서로 만난 두 사람이
          </li>
          <li data-aos="fade" data-aos-delay="300">
            은혜로 결실을 맺게 되었습니다.
          </li>
          <li data-aos="fade" data-aos-delay="400">
            둘이 하나가 되어 평생 서로를 돕는 배필로
          </li>
          <li data-aos="fade" data-aos-delay="500">
            서약하는 자리에 기도와 축복으로 함께 해주신다면
          </li>
          <li data-aos="fade" data-aos-delay="600">
            더 없는 감사와 기쁨으로 간직하겠습니다.
          </li>
        </Invitation>
        <HostInfo data-aos="fade" data-aos-offset="250">
          <p>groom</p>
          <Host person={groom} />
          <span>&</span>
          <p>bride</p>
          <Host person={bride} />
        </HostInfo>
      </Wrap>
      <SubImg data-aos="fade" data-aos-offset="250" src={subImg} />
    </>
  );
};

export default Intro;

// const MainImg = styled.img`
//   width: 100%;
//   max-width: 450px;
//   border-radius: 200px 200px 0 0;
//   position: relative;
// `;

const SubImg = styled.img`
  width: 100%;
  max-width: 450px;
  margin-top: 1rem;
  /* aspect-ratio: 1/1.75; */
`;

const Main = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  top: 0;
  left: 0;
  aspect-ratio: 1 / 1.35;
  background-image: url(${mainImg}) /* Placeholder */;
  backface-visibility: visible;
  background-position: center;
  background-size: contain;
  border-radius: 200px 200px 0 0;
  &.loaded {
    background-image: url(${mainImg}); /* 고해상도 */
  }
    > div:first-of-type {
      position: absolute;
      top: -1.6rem; 
      width: 100%;
      > p {
        text-align: center;
        text-transform: capitalize;
        line-height: 1.65;
        font-size: 2.65rem;
        color: #3389d9;
      }
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
    height: 25px;
    width: 25px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    position: absolute;
    animation: animate 10s linear infinite;
    will-change: transform, opacity; 
  }
  .bubble:nth-of-type(1) {
        top: 20%;
        left: 20%;
        animation-delay: 8s;
      }
      .bubble:nth-of-type(2) {
        top: 60%;
        left: 80%;
        animation-delay: 10s;
      }
      .bubble:nth-of-type(3) {
        top: 40%;
        left: 40%;
        animation-delay: 3s;
      }
      .bubble:nth-of-type(4) {
        top: 66%;
        left: 30%;
        animation-delay: 7s;
      }
      .bubble:nth-of-type(5) {
        top: 90%;
        left: 10%;
        animation-delay: 9s;
      }
      .bubble:nth-of-type(6) {
        top: 50%;
        left: 50%;
        animation-delay: 5s;
      }
      .bubble:nth-of-type(7) {
        top: 75%;
        left: 60%;
        animation-delay: 8s;
      }
`
