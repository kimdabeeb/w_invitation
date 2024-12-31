import { ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import ExpandMore from '@/assets/icons/expand_more.svg?react';
interface IAccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion = ({ title, children }: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionCont data-aos="fade-up" data-aos-delay="1000">
      <AccordionTitle isActive={isOpen} onClick={toggleAccordion}>
        <p>{title}에게</p>
        <span>
          <ExpandMore />
        </span>
      </AccordionTitle>
      {isOpen && <AccordionBox>{children}</AccordionBox>}
    </AccordionCont>
  );
};

export default Accordion;

const AccordionCont = styled.div`
  display: var(--el-flex);
  flex-direction: var(--el-column);
  margin-bottom: calc(var(--el-between) * 2);
`;

const AccordionTitle = styled.div<{ isActive: boolean }>`
  display: var(--el-flex);
  align-items: var(--el-center);
  justify-content: space-between;
  padding: calc(var(--el-between) * 1.5) calc(var(--el-between) * 2);
  background-color: var(--color-white);
  border-radius: var(--el-between);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  font-size: var(--font-size);
  cursor: pointer;
  & > p {
    color: #4c4c4c;
    font-size: .85rem;
  }
  & > span {
    align-self: baseline;
    display: contents;
    cursor: pointer;
    user-select: none;
    transition: all 0.3s ease-in-out;
    transform: ${(props) => (props.isActive ? 'rotate(180deg)' : undefined)};
    }
`;

const AccordionBox = styled.div`
  font-size: 0.8125rem;
  text-align: justify;
  padding: calc(var(--el-between) * 2) calc(var(--el-between) / .65);
  background-color: var(--bg-main);
  border-radius: 0 0 var(--el-between) var(--el-between);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  position: relative;
  top: -5px;
  div:last-of-type {
    margin-bottom: 0;
  }
`;
