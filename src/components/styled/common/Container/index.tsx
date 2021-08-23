import { Container } from "@material-ui/core";
import styled from "styled-components";

export const CustomContainer = styled(Container)<{
  mt?: string;
  mb?: string;
}>`
  margin-top: ${(props) => props.mt ?? 0}px !important;
  margin-bottom: ${(props) => props.mb ?? 0}px !important;
`;
