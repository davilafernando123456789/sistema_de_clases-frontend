import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
import SignIn from "layouts/pages/authentication/sign-in";
import Register from "pages/LandingPages/Register/register";
import RegisterTeachers from "pages/LandingPages/Register/registerTeacher";
import RegisterApoderado from "pages/LandingPages/Register/registerApoderado";
import RegisterUsers from "pages/LandingPages/Register/registerUser";
import HomeIcon from "@mui/icons-material/Home";
import RegisterHoras from "pages/LandingPages/Register/registerCalendarTeacher";
import Home from "src2/scenes/dashboard/index";
import Line from "src2/scenes/line/index";
import Calendario from "src2/scenes/calendar/calendar";
import Pie from "src2/scenes/pie/index";
import Profesores from "src2/scenes/team/index";
import Invoices from "src2/scenes/invoices/index";
import Form from "src2/scenes/form/index";
// Sections
import PageHeaders from "layouts/sections/page-sections/page-headers";
import Features from "layouts/sections/page-sections/featuers";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import ViewDayIcon from "@mui/icons-material/ViewDay";
import ArticleIcon from "@mui/icons-material/Article";
import BookIcon from "@mui/icons-material/Book";
// import { Calendar } from "@fullcalendar/core";
const routes = [
  {
    name: "Nosotros",
    route: "/presentation",
    icon: <HomeIcon />,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Conocenos",
        route: "/presentation",
        icon: <HomeIcon />,
        collapse: [
          {
            name: "Quienes somos",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "Contacto",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
          {
            name: "Nuestro equipo",
            route: "/pages/landing-pages/author",
            component: <Author />,
          },
        ],
      },
      {
        name: "Cuenta",
        collapse: [
          {
            name: "Iniciar sesion",
            route: "/pages/authentication/sign-in",
            component: <SignIn />,
          },
          {
            name: "Registrarse",
            route: "/pages/LandingPages/Register/register",
            component: <Register />,
          },
        ],
      },
    ],
  },
  {
    name: "Cursos",
    icon: <BookIcon />,
    collapse: [
      {
        name: "Cursos ofrecidos",
        description: "See all sections",
        dropdown: true,
        collapse: [
          {
            name: "Matematica",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "Comunicación",
            route: "/sections/page-sections/features",
            component: <Features />,
          },
          {
            name: "Ciencia y tecnología",
            route: "/sections/page-sections/features",
            component: <Features />,
          },
        ],
      },
    ],
  },
  {
    name: "Sobre nosotros",
    icon: <ArticleIcon />,
    collapse: [
      {
        name: "Registrarse como profesor",
        route: "/registerTeacher",
        component: <RegisterTeachers />,
      },
      {
        name: "Registrars calendario",
        route: "/pages/LandingPages/Register/registerHoras",
        component: <RegisterHoras />,
      },
      {
        name: "Registrars apoderado",
        route: "/registerApoderado",
        component: <RegisterApoderado />,
      },
      {
        name: "Registrars calendario",
        route: "/home",
        component: <Home />,
      },
      // {
      //   name: " Dashboard",
      //   route: "/Dashboard",
      //   component: <Dashboard />,
      // },
      {
        name: " Calendar",
        route: "/Calendario",
        component: <Calendario />,
      },
      {
        name: " Pie",
        route: "/Pie",
        component: <Pie />,
      },
      {
        name: " Line",
        route: "/Line",
        component: <Line />,
      },
      {
        name: " Invoices",
        route: "/Invoices",
        component: <Invoices />,
      },
      {
        name: " Form",
        route: "/form",
        component: <Form />,
      },
      {
        name: " Profesores",
        route: "/Profesores",
        component: <Profesores />,
      },
      {
        name: "Registrarse",
        route: "/registerUser",
        component: <RegisterUsers />,
      },
    ],
  },
];

export default routes;
