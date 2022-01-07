import { HexColorPicker } from "react-colorful";
import styled from "styled-components";

interface Props {
  label: string;
  bankColor: string;
  setBankColor: Function;
}

export const InputTypeColor = ({ label, bankColor, setBankColor }: Props) => {
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <HexColorPicker
        color={bankColor}
        onChange={(color) => {
          setBankColor(color);
        }}
      />
    </>
  );
};

export const InputLabel = styled.label`
  margin-bottom: 10px;
`;
