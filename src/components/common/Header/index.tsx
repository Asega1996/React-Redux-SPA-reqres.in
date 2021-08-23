import React from "react";
// UI Components Import
import {
  ClickAwayListener,
  Grow,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

import { isLogged } from "utils/authz";
import { CustomAppBar, CustomToolbar } from "components/styled/Header";
import { useDispatch, useSelector } from "react-redux";
import { authzActions } from "store/reducers/authz";
import { RootState } from "store/reducers";
import CloseIcon from "@material-ui/icons/Close";
import { CustomAlert } from "components/styled/Alert";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const openProfile = Boolean(anchorEl);
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.authz);
  const [infoVisible, setInfoVisible] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const closeSeason = () => {
    dispatch(authzActions.reset());
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };

  const handleClickMenu = () => {
    return isLogged(token) ? setOpen(true) : setInfoVisible(true);
  };

  const navigateTo = () => {
    // Empty, this SPA only contains 1 scree for logged users
    handleCloseMenu();
    return null;
  };

  return (
    <CustomAppBar position="static">
      <CustomToolbar>
        <IconButton
          onClick={handleClickMenu}
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>

        {/* Short menu, in case that the application includes more than 6/7 menus should refator to improve UX/IX */}
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseMenu}>
                  <MenuList autoFocusItem={open} id="menu-list-grow">
                    <MenuItem onClick={() => navigateTo()}>Listado</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        {isLogged(token) && (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={openProfile}
              onClose={handleClose}
            >
              <MenuItem onClick={closeSeason}>Cerrar sesión</MenuItem>
            </Menu>
          </div>
        )}
      </CustomToolbar>
      {infoVisible && (
        <CustomAlert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setInfoVisible(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          color="info"
        >
          Debes de tener una sesión abierta para ver el menú de la aplicación.
        </CustomAlert>
      )}
    </CustomAppBar>
  );
};

export default Header;
