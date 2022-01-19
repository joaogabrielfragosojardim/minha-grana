import { HexColorPicker } from "react-colorful";
import styled from "styled-components";
import { IBankAccount } from "./AddAccountModal";

interface InputProps {
  label: string;
  bankAccount: IBankAccount;
  setBankAccount: Function;
}

export const InputTypeColor = ({
  label,
  bankAccount,
  setBankAccount,
}: InputProps) => {
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <HexColorPicker
        color={bankAccount.color}
        onChange={(color) => {
          setBankAccount({ ...bankAccount, color: color });
        }}
      />
    </>
  );
};

export const InputLabel = styled.label`
  margin-bottom: 10px;
`;
