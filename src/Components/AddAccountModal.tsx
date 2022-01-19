import styled from "styled-components";
import { keyframes } from "styled-components";

import { AiOutlineClose } from "react-icons/ai";
import { InputTypeText } from "./InputTypeText";
import { InputTypeColor } from "./InputTypeColor";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAccounts } from "../Store/BankAccounts/BankAccounts.actions";

interface BankTitle {
  colorBankTitle: string;
  bankName: string;
}

interface PropsModal {
  modalOpen: boolean;
  setModalOpen?: Function;
}

export interface IBankAccount {
  name: string;
  color: string;
}

export const AddAccountModal = ({ modalOpen, setModalOpen }: PropsModal) => {
  const [bankAccount, setBankAccount] = useState<IBankAccount>({
    name: "",
    color: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const randomColors = ["#622a9d", "#fa7500", "#00fa04", "#d60000"];
    const colorLength = Math.floor(Math.random() * randomColors.length);
    setBankAccount((prev: IBankAccount) => {
      return {
        ...prev,
        color: randomColors[colorLength],
      };
    });
  }, []);

  const handleButton = () => {
    dispatch(addAccounts(bankAccount));
  };

  const handleBankName = (name: string) => {
    setBankAccount((prev: IBankAccount) => {
      return {
        ...prev,
        name: name,
      };
    });
  };

  return (
    <>
      <BackgroundModal modalOpen={modalOpen}>
        <Modal>
          <ModalTitle>
            <h3>Add an account</h3>
            <CloseModal
              onClick={() => {
                setModalOpen && setModalOpen(false);
              }}
            >
              <AiOutlineClose />
            </CloseModal>
          </ModalTitle>
          <Divider>
            <form>
              <ContainerInputs>
                <InputTypeText
                  label={"Bank Name"}
                  placeholder={"type a bank name"}
                  handleBankName={handleBankName}
                />
              </ContainerInputs>
              <ContainerInputs>
                <InputTypeColor
                  label="Choose a color"
                  setBankAccount={setBankAccount}
                  bankAccount={bankAccount}
                />
              </ContainerInputs>
            </form>
            <ContainerBigBank>
              <div>
                <TitleBigBank
                  colorBankTitle={bankAccount.color}
                  bankName={bankAccount.name}
                >
                  {bankAccount.name === "" ? "Bank Name..." : bankAccount.name}
                </TitleBigBank>
              </div>
              <AddBankAccountDiv>
                <AddBankAccount onClick={handleButton}>
                  Add Account
                </AddBankAccount>
              </AddBankAccountDiv>
            </ContainerBigBank>
          </Divider>
        </Modal>
      </BackgroundModal>
    </>
  );
};

export const BackgroundModal = styled.div<PropsModal>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: ${(props) => (props.modalOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

export const ModalAnimationOn = keyframes`
from {
  opacity: 0;
  transform: translate3d(0, -80px, 0)
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0)
}
`;

export const ModalAnimationOut = keyframes`
from {
  opacity: 1;
  transform: translate3d(0, 0, 0)
}
to {
  opacity: 0;
  transform: translate3d(0, -80px, 0)
}
`;

export const Modal = styled.div`
  background-color: white;
  padding: 35px;
  border-radius: 15px;
  animation: ${ModalAnimationOn} 1s;
`;

export const ModalTitle = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;

  svg {
    font-size: 24px;
  }
`;

export const CloseModal = styled.button`
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 0px;
`;

export const ContainerBigBank = styled.div`
  padding: 0px 50px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  div {
    &:first-child {
      height: 280px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const TitleBigBank = styled.h3<BankTitle>`
  color: ${(props) => (props.bankName ? props.colorBankTitle : "gray")};
  font-size: 28px;
  border-bottom: ${(props) =>
    props.bankName ? `solid 2px ${props.colorBankTitle}` : ""};
`;

export const AddBankAccountDiv = styled.div`
  text-align: right;
`;

export const AddBankAccount = styled.button`
  background-color: #100f12;
  border: none;
  color: white;
  padding: 10px;
  border-radius 15px;
  align-self: end;
  justify-self: end;
  cursor: pointer;
`;
