import styled from '@emotion/styled';
import Upward from '@/assets/icons/upward.svg?react';

const FloatingBar = ({ isVisible }: { isVisible: boolean }) => {
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