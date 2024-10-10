import styled from '@emotion/styled';
import Copy from '@/assets/icons/copy.svg?react';
import kakaopay from '@/assets/icons/kakaopay.webp?url';
import toss from '@/assets/icons/toss.webp?url';

interface IAccountProps {
  name: string;
  relation: string;
  bank: string;
  account: string;
  kakaopayAccount?: string;
  tossAccount?: string;
}
const AccountWrap = ({
  name,
  relation,
  bank,
  account,
  kakaopayAccount,
  tossAccount,
}: IAccountProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(account).then(
      () => {
        alert('계좌번호가 복사되었습니다.');
      },
      () => {
        alert('계좌번호 복사에 실패했습니다.');
      },
    );
  };

  return (
    <>
      <Info>
        <Relation>{relation}</Relation>
        <Name>{name}</Name>
      </Info>
      <Details>
        {bank} {account}
        <AccountMethod>
          {kakaopayAccount && (
            <AccountButton href={kakaopayAccount} target="_blank" rel="noreferrer">
              <KakaopayImg src={kakaopay} alt="kakaopay" />
            </AccountButton>
          )}
          {tossAccount && (
            <AccountButton href={tossAccount} target="_blank" rel="noreferrer">
              <TossImg src={toss} alt="toss" />
            </AccountButton>
          )}
          <CopyButton onClick={handleCopy}>
            <Copy fill="#a5a5a5" />
          </CopyButton>
        </AccountMethod>
      </Details>
    </>
  );
};

export default AccountWrap;

const Info = styled.div`
  display: var(--el-flex);
  align-items: var(--el-center);
  gap: 8px;
  line-height: 1.4;
`;

const Relation = styled.span`
  font-size: .875rem;
  color: #444;
`;

const Name = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
`;

const Details = styled.div`
  display: var(--el-flex);
  align-items: var(--el-center);
  justify-content: space-between;
  white-space: nowrap;
  font-size: 0.875rem;
`;

const AccountMethod = styled.div`
  display: var(--el-flex);
  align-items: baseline;
  justify-content: flex-end;
`;

const CopyButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 0.1em 0.2em;
  cursor: pointer;
  gap: 2px;
  outline: none;
  box-shadow: none;
  background: white;
`;

const AccountButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 5px 0;
  padding: 0 0.8em;
  width: inherit;
  cursor: pointer;
  gap: 2px;
  color: #1a1a1a;
  text-decoration: none;
  outline: none;
  box-shadow: none;
  background: white;
`.withComponent('a');

const KakaopayImg = styled.img`
  width: 50px;
`;

const TossImg = styled.img`
  width: 70px;
`;


