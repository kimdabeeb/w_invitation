import React from 'react';
import styled from '@emotion/styled';
import data from '../../data.json';
import { BrideAndGroomParents } from '@/types/data.ts';

const HostContact = () => {
  const { groom, bride } = data.greeting.host;
  return (
    <HostCont data-aos="fade-up" data-aos-duration="2000">
      <HostInfo person={groom} />
      <HostInfo person={bride} />
    </HostCont>
  );
};

export default HostContact;

const HostInfo = ({ person }: { person: BrideAndGroomParents }) => {
  return (
    <div data-aos="fade-up" data-aos-offset="0" data-aos-duration="2000">
      <HostDetails>
        {person.parents && (
          <>
            {person.parents.map((parent, index) => (
              <React.Fragment key={index}>
                {index > 0 && ' · '}
                {parent.name}
              </React.Fragment>
            ))}
          </>
        )}
        <RelationText>
          <div>의</div>
          <Relation>{person.relation}</Relation>
        </RelationText>
      </HostDetails>
      <HighlightedName>
        <p>{person.position}</p>
        <p>{person.name}</p>
      </HighlightedName>
    </div>
  );
};


const HostCont = styled.div`
  display: var(--el-flex);
  flex-direction: var(--el-column);
  gap: 25px;
  padding: calc(var(--el-between) * 8) calc(var(--el-between) * 6.5);
  background: var(--bg-main);
  font-family: var(--font-subTitle);
  color: var(--color-black);
  > div:nth-of-type(2) {
    border-top: 1px solid var(--bg-sub2);
    margin-top: 1rem;
    padding-top: 2rem;
  }
  > div:nth-of-type(1) > span:nth-of-type(1) > p:last-child::before {
    content: 'groom';
    font-size: 0.75rem;
    font-family: var(--font-subTitleEn);
    position: absolute;
    top: -5px;
    right: 15px;
    transform: translateX(-50%);
  }

  > div:nth-of-type(2) > span:nth-of-type(1) > p:last-child::before {
    content: 'bride';
    font-size: 0.75rem;
    font-family: var(--font-subTitleEn);
    position: absolute;
    top: -5px;
    right: 15px;
    transform: translateX(-50%);
  }
`;

const HostDetails = styled.div`
  /* font-size: 1rem; */
  word-spacing: 5px;
  display: var(--el-flex);
  align-items: var(--el-center);
  justify-content: space-between;
  white-space: nowrap;
  margin-bottom: calc(var(--el-between) * 2.25);
  font-size: .825rem;
`;

const RelationText = styled.div`
  display: var(--el-flex);
  align-items: var(--el-center);
  justify-content: space-between;
  margin: 0;
  line-height: 2;
  width: 50px;
  color: #757575;
`;

const HighlightedName = styled.span`
  display: var(--el-flex);
  justify-content: space-between;
  & p {
    font-size: .825rem;
    color: #262626;
  }
  & p:last-child {
    font-weight: bold;
    position: relative;
  }
`;

const Relation = styled.div`
  width: inherit;
  margin-left: var(--el-between);
`;
