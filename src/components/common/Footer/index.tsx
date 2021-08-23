import theme from "assets/theme";
import { CustomDivider } from "components/styled/common/Divider";
import { CustomTypography } from "components/styled/common/Typography";
import { CustomFooter } from "components/styled/Footer";
import React from "react";

const Footer = () => {
  return (
    <CustomFooter>
      <CustomDivider mt="0" mb="20" dividercolor={theme.SecondaryColor} />
      <CustomTypography align="center" textcolor={theme.SecondaryTextColor}>
        Prueba técnica - Alejandro Segovia Gallardo
      </CustomTypography>
    </CustomFooter>
  );
};

export default Footer;
