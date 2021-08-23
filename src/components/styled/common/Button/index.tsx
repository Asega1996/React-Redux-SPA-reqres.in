import { Button } from "@material-ui/core";
import theme from "assets/theme";
import styled from "styled-components";

export const CustomButton = styled(Button)<{
  bgcolor?: string;
  textcolor?: string;
}>`
  background-color: ${(props) => props.bgcolor ?? theme.MainColor} !important;
  color: ${(props) => props.textcolor ?? theme.MainTextColor} !important;
`;
