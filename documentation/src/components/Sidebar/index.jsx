import { navbarMenu } from "@mock/navbar";
import { Box, Typography } from "@mui/material";
import _ from "lodash";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenChildKey, setOpenKey } from "redux/reducers/menus.slice";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();

  const { activeMenu, openKey, openChildKey } = useSelector(
    (state) => state.menus
  );

  return (
    <Box
      sx={{
        background: "#202123",
        height: "100vh",
      }}
    >
      {_.map(navbarMenu, (item, Index) => {
        return (
          <Box key={Index}>
            <Box
              sx={{
                background:
                  openKey === item.key && item.childrens.length === 0
                    ? "white"
                    : "",
                p: "15px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              onClick={() => {
                if (openKey === item.key) dispatch(setOpenKey(""));
                else dispatch(setOpenKey(item.key));
                dispatch(setOpenChildKey(""));
              }}
            >
              <Box>
                {item.childrens.length !== 0 ? (
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color:
                        openKey !== item.key
                          ? "white"
                          : item.childrens.length > 0
                          ? "white"
                          : "#343541",
                    }}
                  >
                    {item.label}
                  </Typography>
                ) : (
                  <NavLink
                    to={item.path}
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      textDecoration: "none",
                      color:
                        openKey !== item.key
                          ? "white"
                          : item.childrens.length > 0
                          ? "white"
                          : "#343541",
                    }}
                  >
                    {item.label}
                  </NavLink>
                )}
              </Box>

              {item.childrens.length !== 0 ? (
                openKey === item.key ? (
                  <UpOutlined
                    style={{
                      color:
                        openKey !== item.key
                          ? "white"
                          : item.childrens.length > 0
                          ? "white"
                          : "black",
                    }}
                  />
                ) : (
                  <DownOutlined
                    style={{
                      color:
                        openKey !== item.key
                          ? "white"
                          : item.childrens.length > 0
                          ? "white"
                          : "black",
                    }}
                  />
                )
              ) : null}
            </Box>
            {openKey === item.key &&
              _.map(item.childrens, (child, index) => {
                return (
                  <NavLinkCustom
                    key={index}
                    path={`${item.path}/${child.path}`}
                    active={openChildKey}
                    item={child}
                    handleClick={() => dispatch(setOpenChildKey(child.key))}
                  />
                );
              })}
          </Box>
        );
      })}
    </Box>
  );
};

export default Sidebar;

const NavLinkCustom = ({ path, active, item, handleClick }) => {
  return (
    <NavLink
      to={path}
      style={{
        textDecoration: "none",
        fontSize: "15px",
        fontWeight: "400",
        color: active !== item.key ? "white" : "black",
      }}
      onClick={handleClick}
    >
      <Box
        sx={{
          background: active === item.key && "white",
          p: "8px 0 8px 30px",
        }}
        // key={index}
      >
        {item.label}
      </Box>
    </NavLink>
  );
};
