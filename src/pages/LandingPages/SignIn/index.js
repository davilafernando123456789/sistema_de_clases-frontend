import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

// Material Kit 2 React page layout routes
import routes from "routes";

// Images
import bgImage from "assets/images/fondo_logueo.jpg";

function SignInBasic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [usuario, setUsuario] = useState({
    usuario: "",
    password: "",
  });
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const navigate = useNavigate();

  const handleIniciarSesion = async () => {
    try {
      // Realiza la solicitud a la API para autenticar al usuario
      const response = await fetch("http://localhost:4000/api/usuarios/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usuario: usuario.usuario, password: usuario.password }),
      });

      if (!response.ok) {
        // Si la respuesta no es exitosa, muestra un mensaje de error
        console.error("Error al autenticar usuario:", response.statusText);
        setSuccessMessage("Usuario o contraseña invalidos");
        // Puedes mostrar un mensaje de error en tu interfaz aquí
        return;
      }

      const data = await response.json();
      if (data.mensaje === "OK") {
        // Si la autenticación es exitosa
        if (data.rol === 1) {
          // Rol 1 (alumno): redirige a la ruta /home
          navigate("/home");
        } else if (data.rol === 2) {
          // Rol 2 (profesor): redirige a la ruta /calendario
          navigate("/calendario");
        } else {
          console.error("Rol desconocido:", data.rol);
          setSuccessMessage("No se encontró el rol");
        }
      } else {
        // Si la autenticación no es exitosa, muestra un mensaje de error
        console.error("Credenciales incorrectas:", data.mensaje);
        setSuccessMessage("Credenciales incorrectas");
      }
    } catch (error) {
      // Si hay un error en la solicitud, muestra un mensaje de error
      console.error("Error en la solicitud:", error.message);
      setSuccessMessage("Hubo un error en la solicitud");
    }
  };

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "/pages/authentication/sign-in",
          label: "Registrarse",
          color: "secondary",
        }}
        transparent
        light
      />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Iniciar sesion
                </MKTypography>
                <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <FacebookIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GitHubIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GoogleIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                </Grid>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput
                      type="text"
                      label="Usuario"
                      fullWidth
                      value={usuario.usuario}
                      onChange={(e) => setUsuario({ ...usuario, usuario: e.target.value })}
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      type="password"
                      label="Password"
                      fullWidth
                      value={usuario.password}
                      onChange={(e) => setUsuario({ ...usuario, password: e.target.value })}
                    />
                  </MKBox>
                  <div>{setSuccessMessage && <p>{successMessage}</p>}</div>
                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Recordar credenciales
                    </MKTypography>
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton
                      variant="gradient"
                      color="info"
                      fullWidth
                      onClick={handleIniciarSesion}
                    >
                      INICIAR SESION
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      ¿No tiene cuenta?{" "}
                      <MKTypography
                        component={Link}
                        to="/pages/LandingPages/Register/register"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Registrarse
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
    </>
  );
}

export default SignInBasic;
