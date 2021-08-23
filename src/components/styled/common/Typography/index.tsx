import { Typography } from "@material-ui/core";
import styled from "styled-components";
import theme from "assets/theme";

export const CustomTypography = styled(Typography)<{
  textcolor?: string;
  align?: string;
}>`
  color: ${(props) => props.textcolor ?? theme.MainTextColor};
  align: ${(props) => props.align ?? "inherit"};
`;
