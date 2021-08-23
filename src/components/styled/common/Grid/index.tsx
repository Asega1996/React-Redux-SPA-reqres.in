import { Grid } from "@material-ui/core";
import styled from "styled-components";

export const CustomGrid = styled(Grid)<{
  mt?: string;
  ml?: string;
  mr?: string;
  mb?: string;
  textalign?: string;
  alignitems?: string;
}>`
  ${(props) => props.mt && `margin-top: ${props.mt}px !important;`}
  ${(props) => props.mb && `margin-bottom: ${props.mb}px !important;`}
  ${(props) => props.mr && `margin-right: ${props.mr}px !important;`}
  ${(props) => props.ml && `margin-left: ${props.ml}px !important;`}
  ${(props) => props.textalign && `text-align: ${props.textalign} !important;`}
  ${(props) =>
    props.alignitems && `align-items: ${props.alignitems} !important;`}
`;
