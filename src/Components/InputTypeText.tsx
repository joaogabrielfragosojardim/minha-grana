import styled from "styled-components";

interface Props {
  label: String;
  placeholder: string;
  setBankName: Function;
}

export const InputTypeText = ({ label, placeholder, setBankName }: Props) => {
  return (
    <>
      <label>{label}</label>
      <InputText
        placeholder={placeholder}
        maxLength={50}
        onChange={(e) => {
          setBankName(e.target.value);
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
