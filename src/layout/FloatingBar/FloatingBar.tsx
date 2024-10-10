import styled from '@emotion/styled';
import Upward from '@/assets/icons/upward.svg?react';

const FloatingBar = ({ isVisible }: { isVisible: boolean }) => {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Nav isVisible={isVisible}>
      <Button onClick={handleScroll}>
        <Upward fill="#808080" />
      </Button>
    </Nav>
  );
};

export default FloatingBar;

const Nav = styled.nav<{ isVisible: boolean }>`
  min-width: 65px;
  position: fixed;
  bottom: 15px;
  right: 5px;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
`;

const Button = styled.button`
  padding: 6px;
  border-radius: 50%;
  background: #fff;
  outline: none;
  box-shadow: none;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  color: #1a1a1a;
`.withComponent('a');