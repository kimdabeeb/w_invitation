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
    <AccordionCont data-aos="fade-up">
      <AccordionTitle isActive={isOpen} onClick={toggleAccordion}>
        <p>{title}에게</p>
        <span>
          <ExpandMore fill="#ddd" />
        </span>
      </AccordionTitle>
      {isOpen && <AccordionBox>{children}</AccordionBox>}
    </AccordionCont>
  );
};

export default Accordion;

const AccordionCont = styled.div`
  height: 100%;
  margin-bottom: calc(var(--el-between) * 2);
`;

const AccordionTitle = styled.div<{ isActive: boolean }>`
  display: var(--el-flex);
  align-items: var(--el-center);
  justify-content: space-between;
  padding: var(--el-between)  calc(var(--el-between) * 2);
  background-color: var(--color-white);
  border-radius: var(--el-between);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  transition: all 0.3s ease-in-out;
  font-size: 0.8125rem;
  cursor: pointer;
  & > p {
    color: #a6a6a6;
  }
  & svg {
    cursor: pointer;
    user-select: none;
    transition: all 0.3s ease-in-out;
    transform: ${(props) => (props.isActive ? 'rotate(180deg)' : undefined)};
  }
`;

const AccordionBox = styled.div`
  font-size: 0.8125rem;
  text-align: justify;
  padding: var(--el-between) calc(var(--el-between) * 2.5) calc(var(--el-between) * 2.5);
  background-color: var(--color-white);
  border-radius: 0 0 var(--el-between) var(--el-between);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  > div:nth-of-type(2) { border-top: 1px solid #ddd; border-bottom: 1px solid #ddd;} 
`;
