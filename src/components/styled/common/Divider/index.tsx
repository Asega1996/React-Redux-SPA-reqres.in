import { Divider } from "@material-ui/core";
import styled from "styled-components";
import theme from "assets/theme";

export const CustomDivider = styled(Divider)<{
  pr?: string;
  pl?: string;
  mt?: string;
  mb?: string;
  dividercolor: string;
}>`
  background-color: ${(props) =>
    props.dividercolor ?? theme.MainTextColor} !important;
  padding-left: ${(props) => props.pl ?? "0"}px !important;
  padding-right: ${(props) => props.pr ?? "0"}px !important;
  margin-top: ${(props) => props.mt ?? "0"}px !important;
  margin-bottom: ${(props) => props.mb ?? "0"}px !important;
`;
