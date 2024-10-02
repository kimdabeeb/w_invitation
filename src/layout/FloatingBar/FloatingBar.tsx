// import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
// import { increment, onValue, ref, update } from 'firebase/database';
// import { realtimeDb } from 'firebase.ts';
import Upward from '@/assets/icons/upward.svg?react';

const FloatingBar = ({ isVisible }: { isVisible: boolean }) => {

  // TODO: count 기능 사용 원할시 firebase realtime db 연결!
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  // TODO: realtime db 에 likes 객체 추가.
  //   const dbRef = ref(realtimeDb, 'likes');
  //   onValue(dbRef, (snapshot) => {
  //     setCount(Number(snapshot.val()));
  //   });
  // }, []);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Nav isVisible={isVisible}>
      <Button onClick={handleScroll}>
        <Upward fill="#ddd" />
      </Button>
    </Nav>
  );
};

export default FloatingBar;

const Nav = styled.nav<{ isVisible: boolean }>`
  min-width: 65px;
  position: fixed;
  bottom: 30px;
  right: 0;
  gap: 5px;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  flex-direction: var(--el-center);
  align-items: var(--el-center);
  justify-content: var(--el-center);
`;

const Button = styled.button`
  padding: 6px;
  border-radius: 50%;
  border: 1px solid #eee;
  outline: none;
  box-shadow: none;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  color: #1a1a1a;
`.withComponent('a');