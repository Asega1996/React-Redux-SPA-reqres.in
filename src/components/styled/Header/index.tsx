import { AppBar, Toolbar } from "@material-ui/core";
import styled from "styled-components";
import theme from "../../../assets/theme";

export const CustomToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

export const CustomAppBar = styled(AppBar)`
  color: ${(props) => props.color ?? theme.MainTextColor};
  background-color: ${theme.MainColor} !important;
`;
