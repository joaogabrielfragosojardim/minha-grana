import { AddAccountModal } from "./AddAccountModal";

import { useState } from "react";

import styled from "styled-components";

export const AddAccount = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Text>
        You don't have accounts...{" "}
        <ButtonAddAccount onClick={() => setModalOpen(true)}>
          click here to add an account
        </ButtonAddAccount>
      </Text>
      <AddAccountModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
};

export const ButtonAddAccount = styled.button`
  background-color: transparent;
  border: none;
`;

export const Text = styled.h3`
  font-size: 18px;
  button {
    font-size: 18px;
    font-weight: bold;
    border-bottom: 2px solid black;

    &:hover {
      cursor: pointer;
    }
  }
`;
