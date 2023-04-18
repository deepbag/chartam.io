import React from "react";
import {
  Drawer,
  Container,
  Grid,
  Zoom,
  Fab,
  Typography,
  Box,
} from "@mui/material";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { SlidersOutlined } from "@ant-design/icons";
import { navbarMenu } from "@mock/navbar";
import { NavLink } from "react-router-dom";
import _ from "lodash";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { setOpenChildKey, setOpenKey } from "redux/reducers/menus.slice";

const SidebarOuts = ({ children }) => {
  const theme = useTheme();
  const downsm = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();

  const [isOpenDrawer, setIsOpenDrawer] = React.useState(false);

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const { activeMenu, openKey, openChildKey } = useSelector(
    (state) => state.menus
  );

  return (
    <Container
      maxWidth={false}
      sx={{
        m: {
          xs: 0,
        },
        p: {
          xs: 0,
        },
      }}
    >
      <Header />
      <Grid container>
        {!downsm && (
          <Grid item lg={2}>
            <Sidebar />
          </Grid>
        )}

        <Grid
          item
          lg={downsm ? 12 : 10}
          sx={{
            height: "100vh",
            overflowY: "scroll",
            p: "20px 20px 80px 20px",
          }}
        >
          {children}
        </Grid>
      </Grid>

      {/* MOBILE MENU DRAWER */}
      {downsm && (
        <Zoom
          in={true}
          timeout={transitionDuration}
          style={{
            background: "#343541",
            boxShadow: "none",
            zIndex: 500,
            bottom: "90px",
            right: "22px",
          }}
          unmountOnExit
          onClick={() => setIsOpenDrawer(!isOpenDrawer)}
        >
          <Fab
            sx={{
              position: "absolute",
              bottom: 16,
              right: 16,
            }}
          >
            <SlidersOutlined
              style={{
                fontSize: "25px",
                color: "white",
              }}
            />
          </Fab>
        </Zoom>
      )}
      <Drawer
        anchor="bottom"
        open={isOpenDrawer}
        onClose={() => setIsOpenDrawer(!isOpenDrawer)}
        style={{ zIndex: 100 }}
      >
        <Box sx={{ p: 3 }}>
          {_.map(navbarMenu, (item, Index) => {
            return (
              <>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    if (openKey === item.key) dispatch(setOpenKey(""));
                    else dispatch(setOpenKey(item.key));
                    dispatch(setOpenChildKey(""));
                    if (item?.childrens?.length === 0) {
                      setIsOpenDrawer(!isOpenDrawer);
                    }
                  }}
                >
                  {item.childrens.length !== 0 ? (
                    <Typography
                      sx={{
                        fontSize: "17px",
                        fontWeight: "400",
                      }}
                    >
                      {item.iconM}
                      {item.label}
                    </Typography>
                  ) : (
                    <NavLink
                      to={item.path}
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        textDecoration: "none",
                      }}
                    >
                      {item.iconM}
                      {item.label}
                    </NavLink>
                  )}
                  {item.childrens.length !== 0 &&
                    (openKey === item.key ? (
                      <UpOutlined style={{}} />
                    ) : (
                      <DownOutlined style={{}} />
                    ))}
                </Box>

                <Box
                  sx={{ my: 2 }}
                  onClick={() => setIsOpenDrawer(!isOpenDrawer)}
                >
                  {openKey === item.key &&
                    _.map(item.childrens, (child, index) => {
                      return (
                        <NavLink
                          to={`${item.path}/${child.path}`}
                          style={{
                            textDecoration: "none",
                            fontSize: "16px",
                            fontWeight: "400",
                            color: "black",
                          }}
                        >
                          <Box
                            sx={{
                              p: "8px 0 8px 30px",
                            }}
                          >
                            {child.iconM}
                            {child.label}
                          </Box>
                        </NavLink>
                      );
                    })}
                </Box>
              </>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
};

export default SidebarOuts;
