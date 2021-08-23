import React from "react";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { usersActions } from "store/reducers/users";
import { CustomTypography } from "components/styled/common/Typography";
import { RootState } from "store/reducers";
import { User } from "types/entity/user";
import { CustomCard } from "components/styled/common/Card";
import theme from "assets/theme";
import { CustomGrid } from "components/styled/common/Grid";
import { CustomContainer } from "components/styled/common/Container";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

const UsersList = () => {
  const [query, setQuery] = React.useState("");
  const dispatch = useDispatch();
  const { requestUsers, fetching } = useSelector(
    (state: RootState) => state.users
  );

  React.useEffect(() => {
    dispatch(usersActions.request(query));
  }, [dispatch, query]);

  return (
    <CustomContainer mb="70">
      <Grid container>
        <CustomGrid
          mt="20"
          mb="10"
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
        >
          <CustomTypography
            variant="h5"
            align="center"
            textcolor={theme.SecondaryTextColor}
          >
            Usuarios
          </CustomTypography>
        </CustomGrid>
        {fetching && <CircularProgress />}

        <CustomGrid ml="20" container>
          <Grid item lg={12} sm={12} md={12} xs={12} xl={12}>
            <CustomTypography textcolor={theme.SecondaryTextColor}>
              {`Mostrando ${
                requestUsers.per_page * (requestUsers.page - 1) + 1
              } -
          ${requestUsers.per_page * requestUsers.page} de ${
                requestUsers.total
              }`}
            </CustomTypography>
          </Grid>
        </CustomGrid>
        {requestUsers.data &&
          !fetching &&
          requestUsers.data.map((elem: User, index: number) => (
            <Grid key={index} item xl={3} lg={3} md={4} sm={6} xs={12}>
              <CustomCard m="15">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={`${elem.first_name}-${elem.last_name}`}
                    height="auto"
                    image={elem.avatar}
                    title={`${elem.first_name}-${elem.last_name}`}
                  />
                  <CardContent>
                    <CustomTypography
                      textcolor={theme.SecondaryColor}
                      gutterBottom
                      variant="h5"
                    >
                      {`${elem.first_name} ${elem.last_name}`}
                    </CustomTypography>
                    <CustomTypography
                      textcolor={theme.SecondaryTextColor}
                      variant="body2"
                      color="textSecondary"
                    >{`Email: ${elem.email}`}</CustomTypography>
                  </CardContent>
                </CardActionArea>
              </CustomCard>
            </Grid>
          ))}
      </Grid>
      <Grid container item>
        <Grid lg={6} sm={6} md={6} xs={6} xl={6} item />
        <CustomGrid
          lg={6}
          sm={6}
          md={6}
          xs={6}
          xl={6}
          container
          textalign="center"
          alignItems="center"
          item
        >
          {requestUsers.page !== 1 && (
            <div onClick={() => setQuery(`?page=${requestUsers.page - 1}`)}>
              <NavigateBeforeIcon />
            </div>
          )}

          <CustomTypography textcolor={theme.SecondaryTextColor}>
            {requestUsers.page}
          </CustomTypography>

          {requestUsers.page !== requestUsers.total_pages && (
            <div onClick={() => setQuery(`?page=${requestUsers.page + 1}`)}>
              <NavigateNextIcon />
            </div>
          )}
        </CustomGrid>
      </Grid>
    </CustomContainer>
  );
};

export default UsersList;
