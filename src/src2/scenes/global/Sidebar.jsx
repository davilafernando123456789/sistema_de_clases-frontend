import React, { useState } from "react";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const menuItems = [
    { title: "Home", path: "/home" },
    { title: "Calendario", path: "/calendario" },
    { title: "Cursos", path: "/home" },
    { title: "Profesores", path: "/profesores" },
    { title: "Mensajes", path: "/pie" },
    { title: "Perfil", path: "/line" },
    { title: "Cerrar sesión", path: "/pages/authentication/sign-in" },
    // { title: "Form", path: "/form" },
  ];

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Box>
          <Typography variant="h1" color="inherit">
            DUCOCLASS
          </Typography>
        </Box>

        <Box flexGrow={1} />

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {menuItems.map((item) => (
            <Button key={item.title} color="inherit" component={Link} to={item.path}>
              {item.title}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton onClick={handleDrawerOpen} color="inherit">
            <MenuOutlinedIcon />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
            <List>
              {menuItems.map((item) => (
                <ListItem button key={item.title} onClick={handleDrawerClose}>
                  <ListItemText primary={item.title} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
