import React from "react";
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Header from "../../components/Header";
import { useMode } from "../../theme";
import Sidebar from "../../scenes/global/Sidebar";
import Topbar from "../../scenes/global/Topbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext } from "../../theme";

const Line = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = React.useState(true);

  const userProfile = {
    name: "Nombre del Alumno",
    email: "alumno@example.com",
    courses: ["Matemáticas", "Ciencias", "Historia"],
    // Agrega más información del perfil según tus necesidades
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Box m="20px">
              <Header
                title="Bienvenido a tu perfil"
                subtitle="Aquí puedes realizar cambios en él"
              />
              <Box height="75vh" display="flex" alignItems="center" justifyContent="center">
                <Paper elevation={3} p={5} style={{ maxWidth: "600px", width: "100%" }}>
                  <Avatar sx={{ width: 100, height: 100, mb: 2, ml: 2, mt: 2 }} />

                  {/* Agregar margen interno (padding) a los elementos individuales */}
                  <Box p={2}>
                    <Typography variant="h5" mb={2}>
                      {userProfile.name}
                    </Typography>
                  </Box>

                  <Box p={2}>
                    <Typography variant="subtitle1" color="textSecondary" mb={3}>
                      {userProfile.email}
                    </Typography>
                  </Box>

                  <Divider />

                  {/* Agregar margen interno (padding) a la lista */}
                  <List>
                    <ListItem>
                      <ListItemText primary="Cursos:" secondary={userProfile.courses.join(", ")} />
                    </ListItem>
                    {/* Agregar más ListItem con información adicional del perfil */}
                  </List>
                </Paper>
              </Box>
            </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Line;
