import styled from '@emotion/styled';
import Accordion from './Accordion.tsx';
import AccountDetail from './AccountDetail.tsx';
import data from '../../data.json';
import { Title } from '@/components/ContentsFont.tsx';

const Account = () => {
  const { hostInfo } = data;
  return (
    <AccountWrap>
        <hr data-aos="fade-up" />
          <Title
            data-aos="fade-up"
            style={{ fontWeight: 'bold' }}>
            마음 전하실 곳
          </Title>
          <Title
            data-aos="fade-up"
            style={{ fontSize: '0.8125rem', marginTop: '.5rem' }}>
            참석이 어려우신 분들을 위해 기재하였습니다 <br />
            너그러운 마음으로 양해부탁드립니다
          </Title>
      {hostInfo.map((host) => {
        return (
            <Accordion title={host.host} key={host.host}>
              {host.accountInfo.map((account) => {
                return (
                  <AccountDetail
                    key={account.name}
                    name={account.name}
                    relation={account.relation}
                    bank={account.bank}
                    account={account.account}
                    kakaopayAccount={account.kakaopayAccount}
                    tossAccount={account.tossAccount}
                  />
                );
              })}
            </Accordion>
        );
      })}
    </AccountWrap>
  );
};

export default Account;

const AccountWrap = styled.div`
  width: 100%;
  display: var(--el-flex);
  flex-direction: var(--el-column);
  background: var(--color-white2);
  padding: calc(var(--el-between) * 7) calc(var(--el-between) * 4.5);
  hr {
    width: 2.25rem;
    background: var(--color-white2);
    margin: calc(var(--el-between) * 4) auto;
  }
  > div:nth-of-type(1) {
    margin: calc(var(--el-between) * 4) auto calc(var(--el-between) * 2);
  } 
`;
