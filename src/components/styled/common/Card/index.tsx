import { Card } from "@material-ui/core";
import theme from "assets/theme";
import styled from "styled-components";

export const CustomCard = styled(Card)<{
  m: string;
}>`
  margin: ${(props) => props.m ?? 10}px !important;
  box-shadow: 0px 2px 1px -1px ${theme.SecondaryColor},
    0px 1px 1px 0px ${theme.SecondaryColor},
    0px 1px 3px 0px ${theme.SecondaryColor} !important;
`;
