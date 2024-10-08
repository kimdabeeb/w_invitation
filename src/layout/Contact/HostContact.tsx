import React from 'react';
import styled from '@emotion/styled';
import data from '../../data.json';
import { BrideAndGroomParents } from '@/types/data.ts';

const HostContact = () => {
  const { groom, bride } = data.greeting.host;
  return (
    <HostCont data-aos="fade">
      <HostInfo person={groom} />
      <HostInfo person={bride} />
    </HostCont>
  );
};

export default HostContact;

const HostInfo = ({ person }: { person: BrideAndGroomParents }) => {
  return (
    <div data-aos="fade">
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
  padding: calc(var(--el-between) * 4.5);
  background: var(--bg-sub);
  font-family: var(--font-title);
  > div:nth-of-type(2) {
    border-top: 1px solid #ddd;
    margin-top: 1rem;
    padding-top: 2rem;
  }

  & div:nth-of-type(3) > div {
    font-weight: 400;
  }

  > span:nth-of-type(1) > p:last-child::before {
    content: 'groom';
    font-size: 0.75rem;
    font-weight: 400;
    position: absolute;
    top: -5px;
    right: 35px;
  }

  > span:nth-of-type(2) > p:last-child::before {
    content: 'bride';
    font-size: 0.75rem;
    font-weight: 400;
    position: absolute;
    top: -5px;
    right: 35px;
  }
`;

const HostDetails = styled.div`
  display: var(--el-flex);
  align-items: var(--el-center);
  justify-content: space-between;
  gap: 6px;
  /* padding: 0 calc(var(--el-between) * 7); */
  font-weight: bold;
  /* text-align: var(--el-center); */
  white-space: nowrap;
`;

const RelationText = styled.div`
  display: var(--el-flex);
  align-items: var(--el-center);
  gap: 6px;
  margin: 0;
  line-height: 2;
  width: 50px;
  color: #757575;
`;

const HighlightedName = styled.span`
  display: var(--el-flex);
  justify-content: space-between;
  & p {
    font-size: 0.9375rem;
    color: #262626;
  }
  & p:last-child {
    font-weight: bold;
    position: relative;
  }
`;

const Relation = styled.div`
  width: inherit;
`;
