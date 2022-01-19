import styled from "styled-components";

interface Props {
  label: String;
  placeholder: string;
  handleBankName: Function;
}

export const InputTypeText = ({ label, placeholder, handleBankName }: Props) => {
  return (
    <>
      <label>{label}</label>
      <InputText
        placeholder={placeholder}
        maxLength={25}
        onChange={(e) => {
          handleBankName(e.target.value);
        }}
      />
    </>
  );
};

export const InputText = styled.input`
  padding: 10px;
  margin-top: 10px;
  border-radius 15px;
  border: solid 1px gray;
  width: 100%
`;
