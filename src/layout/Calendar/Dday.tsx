import { useEffect, useState } from "react";
import styled from '@emotion/styled';

const Dday = () => {

  // const date = new Date('2025-03-01 15:40:00').getTime();
  const date = '2025-03-01 15:40:00'
  const countdownday = new Date(date).getTime();
  const [Calculatedate,setCalculatedate] = useState(countdownday - new Date().getTime());  //가져온 시간 - 현재 시간

    useEffect(() => {
        setInterval(() => {
          setCalculatedate(countdownday - new Date().getTime());
        },1000);
    })
    const day = Math.floor((Calculatedate / (1000 * 60 * 60 * 24)));
    const hours = Math.floor((Calculatedate / (1000 * 60 * 60) % 24));
    const min = Math.floor((Calculatedate / (1000 * 60) % 60));
    const sec = Math.floor((Calculatedate / 1000 % 60));

    return (
        <Day data-aos="fade-up" data-aos-duration="1300">
          <ul>
            <li>
              <Number>{day}</Number>
              <Text>days</Text>
            </li>
            <li>
              <Number>{hours}</Number>
              <Text>hours</Text>
            </li>
            <li>
              <Number>{min}</Number>
              <Text>minutes</Text>
            </li>
            <li>
              <Number>{sec}</Number>
              <Text>seconds</Text>
            </li>
          </ul>
          <p>영준 ♥︎ 다빈이의 결혼식이  <span>{day}일</span> 남았습니다.</p>
        </Day>
    );
};

const Day = styled.div`
  margin: var(--el-between) auto 0;
  font-size: 1rem;
  ul {
    display: var(--el-flex);
    row-gap: calc(var(--el-between) * 2);
    column-gap: var(--el-between);
    li {
      width: 100%;
      background: var(--color-white);
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      font-family: var(--font-paragraph);
      font-size: calc(var(--el-between) * 1.35);
      flex-grow: 1;
      border-radius: var(--el-between);
      padding: calc(var(--el-between) * 1.25) 0; 
    }
  }
  > p {
    font-family: var(--font-paragraph);
    font-size: calc(var(--el-between) * 1.5);
    margin: calc(var(--el-between) * 3.5) auto 0;
    span {
      color: var(--color-point);
      font-weight: bold;
    }
  }
`

const Number = styled.p`
  font-size: 1.5rem;
  line-height: 2;
`
const Text = styled.p`
  color: var(--color-black2);
  opacity: .4;
  text-transform: uppercase;
`

export default Dday;
