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

const Dashboard = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const courses = [
    {
      title: "Comunicacion",
      description: "Razonamiento verbal",
      imageUrl: "https://laaventurademivida.gob.mx/static/img/projects/estudios2.jpg",
      rating: 4.5,
    },
    {
      title: "Matemática",
      description: "Curso de aritmetica",
      imageUrl:
        "https://crehana-blog.imgix.net/media/filer_public/63/19/63192abb-a860-41d1-bb12-2390039c7bf9/estudiar.jpeg",
      rating: 3.8,
    },
    {
      title: "Comunicacion",
      description: "Razonamiento verbal",
      imageUrl: "https://i.ytimg.com/vi/yZlW8EWFP1A/hqdefault.jpg",
      rating: 2.8,
    },
    {
      title: "Pensamiento logico",
      description: "Desarrollo de problemas",
      imageUrl:
        "https://occ-mkt.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2018/11/por-qu%C3%A9-estudiar-comunicaci%C3%B3n.jpg",
      rating: 3.8,
    },
    {
      title: "Comunicacion",
      description: "Comprension lectora",
      imageUrl: "https://www.usi.org.uy/data/f/c/noticias/1644/640x0/curso-comunicacion.jpg",
      rating: 4.2,
    },
    {
      title: "Comunicacion",
      description: "Razonamiento verbal",
      imageUrl:
        "https://escuelamastermedia.es/wp-content/uploads/2022/09/cursos-de-comunicacion.jpg",
      rating: 3.6,
    },
    {
      title: "Geometria",
      description: "Curso de geometria",
      imageUrl: "https://assets.entrepreneur.com/images/misc/1613404960_mates3.jpg?width=1000",
      rating: 4.6,
    },
    {
      title: "Algebra",
      description: "Curso de algebra lineal",
      imageUrl:
        "https://www.tec.ac.cr/hoyeneltec/sites/default/files/styles/colorbox/public/media/img/main/matem_tec_matricula_expresiones_algebraicas.jpg",
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

export default Dashboard;
