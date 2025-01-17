import styled from '@emotion/styled';
import Copy from '@/assets/icons/copy.svg?react';
import kakaopay from '@/assets/icons/kakaopay.svg?url';
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
    <AccordionCont>
      <Info>
        <Relation>{relation}</Relation>
        <Name>{name}</Name>
      </Info>
      <DetailsWrapper>
      <Details>
        <AccountMethod>
          {bank} {account} <CopyButton onClick={handleCopy}>
          <Copy />
          </CopyButton>
        </AccountMethod>
      </Details>
        {kakaopayAccount && (
          <Details id='kakaobtn'>
            <AccountButton href={kakaopayAccount} target="_blank" rel="noreferrer">
              <KakaopayImg src={kakaopay} alt="kakaopay" />
            </AccountButton>
          </Details>
        )}
      </DetailsWrapper>
    </AccordionCont>
  );
};

export default AccountWrap;

const AccordionCont = styled.div`
  background: var(--color-white);
  padding: calc(var(--el-between)* 1.5);
  border-radius: var(--el-between);
  margin-bottom: calc(var(--el-between)* 2);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;  
  color: var(--color-black2);
`;

const Info = styled.div`
  display: var(--el-flex);
  align-items: var(--el-center);
  justify-content: space-between;
`;

const Relation = styled.span`
  font-size: .8rem;
  color: #444;
`;

const Name = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--color-black);
  letter-spacing: .35px;
`;

const DetailsWrapper = styled.div`
  /* display: var(--el-flex); */
  gap: var(--el-between);
  flex-wrap: wrap;
`;

const Details = styled.div`
  flex: 1;
  display: var(--el-flex);
  align-items: var(--el-center);
  justify-content: space-between;
  white-space: nowrap;
  letter-spacing: .3px;
  font-size: 0.75rem;
  background: var(--color-white2);
  margin-top: calc(var(--el-between)* 3);
  padding: var(--el-between) calc(var(--el-between) * 1.2);
  border-radius: var(--el-between);
`;

const AccountMethod = styled.div`
  display: var(--el-flex);
  align-items: var(--el-center);
  justify-content: space-between;
`;

const CopyButton = styled.button`
  border: none;
  border-radius: 5px;
  padding-top: 0.2em;
  cursor: pointer;
  outline: none;
  box-shadow: none;
  background: var(--color-white2); 
`;

const AccountButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  /* padding-left: var(--el-between); */
  width: auto;
  cursor: pointer;
  gap: 2px;
  color: #1a1a1a;
  text-decoration: none;
  outline: none;
  box-shadow: none;
  margin: 0 auto;
`.withComponent('a');

const KakaopayImg = styled.img`
  background: var(--color-white2); 
`;



