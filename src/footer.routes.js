// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "DUCOCLASS",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "#",
    },
    {
      icon: <TwitterIcon />,
      link: "#",
    },
    {
      icon: <GitHubIcon />,
      link: "#",
    },
    {
      icon: <YouTubeIcon />,
      link: "#",
    },
  ],
  menus: [
    {
      name: "Nosotros",
      items: [
        { name: "Acerca de nosotros", href: "#" },
        { name: "Ubicacion", href: "#" },
        { name: "Contacto", href: "#" },
        { name: "blog", href: "#" },
      ],
    },
    {
      name: "Paginas",
      items: [
        { name: "Home", href: "#" },
        { name: "Cursos", href: "#" },
        { name: "Profesores", href: "#" },
      ],
    },
    {
      name: "Ayuda",
      items: [
        { name: "Contacto", href: "#" },
        { name: "Acerca de", href: "#" },
        { name: "Nuestra plataforma", href: "#" },
        { name: "Otros", href: "#" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "Terminos y condiciones", href: "#" },
        { name: "Politicas y privacidad", href: "#" },
        { name: "Licencias (EULA)", href: "#" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Todos los derechos reservados &copy; {date} DUCOCLASS
    </MKTypography>
  ),
};
