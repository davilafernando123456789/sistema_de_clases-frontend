import React from "react";
import { useState } from "react";
import { Box, Typography, Rating, Card, CardContent, CardMedia, useTheme } from "@mui/material";
// import { Routes } from "react-router-dom";
import Topbar from "../../scenes/global/Topbar";
import Sidebar from "../../scenes/global/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
// import { ThemeContext } from "../../theme";
import { tokens } from "../../theme";
// eslint-disable-next-line react/prop-types
const CourseCard = ({ title, description, imageUrl, rating }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Card>
      <CardMedia component="img" height="140" image={imageUrl} alt={title} />
      <CardContent>
        <Typography variant="h6" gutterBottom style={{ color: colors.primary[500] }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Box mt={2}>
          <Rating name="course-rating" value={rating} precision={0.5} readOnly />
        </Box>
      </CardContent>
    </Card>
  );
};

const teachers = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const courses = [
    {
      title: "Jorge Castañeda",
      description: "Base de datos",
      imageUrl:
        "https://insadechile.com/wp-content/uploads/2019/09/5m-que-caracteriza-a-los-profesores-eficaces-768x437.jpg",
      rating: 4.5,
    },
    {
      title: "Silvia Montoya",
      description: "Ingenieria de requerimientos",
      imageUrl: "https://www.formacionyestudios.com/wp-content/uploads/2019/08/profe.jpg",
      rating: 3.8,
    },
    {
      title: "Brunella",
      description: "Marketing y comercializacion...",
      imageUrl: "https://www.votatuprofesor.com/images/profesor2-votatuprofesor.com.jpg",
      rating: 2.8,
    },
    {
      title: "Jaime Farfan",
      description: "Base de datos",
      imageUrl:
        "https://miprofeclases.org.pe/wp-content/uploads/2018/09/PROFESOR-DE-MATEMATICA-EN-SA-ISIDRO.-1024x682.jpg",
      rating: 3.8,
    },
    {
      title: "Ana Mendoza",
      description: "Informatica",
      imageUrl:
        "https://www.educaciontrespuntocero.com/wp-content/uploads/2016/02/auxina-profesores-PIEZAS-03.jpg",
      rating: 4.2,
    },
    {
      title: "Teobaldo Diaz",
      description: "Soluciones en la nube",
      imageUrl:
        "https://escuelamastermedia.es/wp-content/uploads/2022/09/cursos-de-comunicacion.jpg",
      rating: 3.6,
    },
    {
      title: "Jaime Gomez",
      description: "Construccion y pruebas de software",
      imageUrl: "https://assets.entrepreneur.com/images/misc/1613404960_mates3.jpg?width=1000",
      rating: 4.6,
    },
    {
      title: "Americo Casanova",
      description: "Innovacion",
      imageUrl:
        "https://3.bp.blogspot.com/-Z_Gp-NMzAc0/WB4e8Jp4RxI/AAAAAAAAHs0/xAf2O0SjdfkzRJ17r7IALF6X2XO_p37lwCLcB/s1600/bigstock-professor-65634070.jpg",
      rating: 3.1,
    },
    // Add more courses as needed
  ];

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Box m="20px">
              {/* HEADER */}
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h4" color="text.primary">
                  Bienvenido a cursos
                </Typography>
                <box></box>
              </Box>

              {/* COURSE CARDS */}
              <Box
                display="grid"
                gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                gap={2}
              >
                {courses.map((course, index) => (
                  <CourseCard key={index} {...course} />
                ))}
              </Box>
            </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default teachers;
