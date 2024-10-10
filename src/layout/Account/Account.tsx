import styled from '@emotion/styled';
import data from '../../data.json';
import AccountDetail from './AccountDetail.tsx';
import Accordion from './Accordion.tsx';
import { TitleCont } from '@/components/ContentsWrap';
import { Title } from '@/components/ContentsFont.tsx';

const Account = () => {
  const { hostInfo } = data;
  return (
    <AccountWrap data-aos="fade">
      <TitleCont>
        <Title data-aos="fade-up" style={{ fontWeight: 'bold' }}>마음 전하실 곳</Title>
        <hr data-aos="fade-up" />
        <Title data-aos="fade-up" style={{ fontSize: '0.875rem' }}>
          참석이 어려우신 분들을 위해 기재하였습니다 <br />
          너그러운 마음으로 양해부탁드립니다
        </Title>
      </TitleCont>
      {hostInfo.map((host) => {
        return (
          <Accordion data-aos="fade-up" title={host.host} key={host.host}>
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
  background: var(--color-white2);
  padding: calc(var(--el-between) * 5) calc(var(--el-between) * 2.5);
  hr {
    width: 2.25rem;
    height: 1px;
    background: var(--color-black2);
    margin: 2rem auto;
  }
`;

