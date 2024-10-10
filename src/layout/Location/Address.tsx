import styled from '@emotion/styled';
import Car from '@/assets/icons/car.svg?react';
import Bus from '@/assets/icons/bus.svg?react';
import Subway from '@/assets/icons/subway.svg?react';
import Parking from '@/assets/icons/parking.svg?react';

const Address = () => {
  return (
    <div data-aos="fade">
      <Way>
        <li>
          <p>
            <Car />
            자차
          </p>
          <p>
            내비게이션 : '웨딩여율리' 또는 '노총회관' 검색 <br />
            서울시 영등포구 국제금융로6길 26
          </p>
        </li>
      </Way>
      <hr />
      <Way>
        <li>
          <p>
            <Bus />
            버스
          </p>
          <p>여의도역 또는 한국거래소(구 증권거래소) 하차 도보 3분</p>
          <ul>
            <li>
              <p style={{ color: '#3c78d8' }}>간선버스</p>
              <span>153, 162, 261, 262, 362, 461, 503, 600, 700, 753</span>
            </li>
            <li>
              <p style={{ color: '#6aa84f' }}>지선버스</p>
              <span>
                11-1, 11-2, 88, 88-1, 83, 510, 530, 5012, 5618, 5623, 5713, 6513, 6628, 6630, 6654,
                7613
              </span>
            </li>
            <li>
              <p style={{ color: '#de3d38' }}>광역버스</p>
              <span>320, 301, 5609, 7007-1</span>
            </li>
          </ul>
        </li>
      </Way>
      <hr />
      <Way>
        <li>
          <p>
            <Subway />
            지하철
          </p>
          <p>
            <b style={{ color: '#7c44c2' }}>5호선</b> · <b style={{ color: '#d0a447' }}>9호선</b>{' '}
            여의도역 5번 출구 (도보 3분)
          </p>
        </li>
      </Way>
      <hr />
      <Way>
        <li>
          <p>
            <Parking />
            주차
          </p>
          <p>
            한국노총빌딩 및 여의도우체국타워 : 하객 2시간 무료
            <br />
            <b>* 연회장 입구 주차권 수령</b>
            <br />
            주차현장 주차 요원 안내를 받아주세요.
          </p>
        </li>
      </Way>
    </div>
  );
};

export default Address;

const Way = styled.ul`
  width: 100%;
  display: var(--el-flex);
  flex-direction: var(--el-column);
  align-items: flex-start;
  text-align: left;
  li > p:first-of-type {
    color: var(--color-point);
  }
  li {
    font-family: var(--font-paragraph);
    font-size: 0.85rem;
    line-height: 1.85;
    color: var(--color-black2);
    opacity: 0.9;
    p:first-of-type {
      font-weight: bold;
      padding: var(--el-between) 0 calc(var(--el-between) * 1.5);
      display: var(--el-flex);
      align-items: var(--el-center);
    }
    p > svg {
      margin-right: var(--el-between);
    }

    & ul {
      padding-top: 1rem;
      li {
        padding: var(--el-between) 0;
        border-bottom: unset;
        font-size: 0.825rem;
        p:first-of-type {
          font-weight: bold;
          padding: 0;
        }
      }
    }
  }
`;
