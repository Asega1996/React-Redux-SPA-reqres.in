import React from "react";
import {
  Container,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
import { ILoginForm } from "types/forms/login";
import { Controller, useForm } from "react-hook-form";
import { CustomCard } from "components/styled/common/Card";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { CustomGrid } from "components/styled/common/Grid";
import { CustomTypography } from "components/styled/common/Typography";
import theme from "assets/theme";
import { CustomButton } from "components/styled/common/Button";
import { useDispatch } from "react-redux";
import { authzActions } from "store/reducers/authz";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const defaultValues = { email: "", password: "" };

const schema = yup.object().shape({
  email: yup
    .string()
    .required("este campo es obligatorio")
    .email("este campo debe de ser un correo electronico"),
  password: yup.string().required("este campo es obligatorio"),
});

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const dispatch = useDispatch();

  const { handleSubmit, control, errors } = useForm<ILoginForm>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const makeLogin = (formValues: ILoginForm) => {
    dispatch(authzActions.request(formValues));
  };

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={2} md={3} lg={3} xl={3} />
        <Grid item xs={12} sm={8} md={6} lg={6} xl={6}>
          <CustomCard m="25">
            <form
              noValidate
              onSubmit={handleSubmit(makeLogin)}
              autoComplete="off"
            >
              <CustomGrid mt="25" spacing={2} container>
                <CustomGrid mb="10" textalign="center" spacing={2} container>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <CustomTypography
                      textcolor={theme.SecondaryTextColor}
                      variant="h5"
                      align="center"
                    >
                      Iniciar Sesión
                    </CustomTypography>
                  </Grid>
                </CustomGrid>
                <Grid item xs={1} sm={1} md={1} lg={2} xl={2} />
                <Grid item xs={10} sm={10} md={10} lg={8} xl={8}>
                  <Controller
                    control={control}
                    name="email"
                    rules={{ required: true }}
                    render={({ onChange, onBlur }) => (
                      <TextField
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        variant="outlined"
                        fullWidth
                        placeholder="Email"
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={2} xl={2} />
                <Grid item xs={1} sm={1} md={1} lg={2} xl={2} />
                <Grid item xs={10} sm={10} md={10} lg={8} xl={8}>
                  <Controller
                    control={control}
                    name="password"
                    rules={{ required: true }}
                    render={({ onChange, onBlur }) => (
                      <OutlinedInput
                        error={!!errors.password}
                        fullWidth
                        placeholder="Contraseña"
                        type={!showPassword ? "password" : "text"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {!showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={2} xl={2} />
                <Grid item xs={12} sm={12} md={12} lg={2} xl={2} />
                <CustomGrid
                  textalign="center"
                  item
                  mb="15"
                  xs={12}
                  sm={12}
                  md={12}
                  lg={8}
                  xl={8}
                >
                  <CustomButton type="submit">Login</CustomButton>
                </CustomGrid>
                <Grid item xs={12} sm={12} md={12} lg={2} xl={2} />
              </CustomGrid>
            </form>
          </CustomCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
