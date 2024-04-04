// RegisterAlumno.js
import React, { useState } from "react";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import axios from "axios";
import routes from "routes";
import Grid from "@mui/material/Grid";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import MKTypography from "components/MKTypography";
// import routes from "routes";
function RegisterAlumno() {
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const [alumno, setAlumno] = useState({
    email: "",
    usuario: "",
    password: "",
    nombre: "",
    apellido: "",
    genero: "",
    telefono: "",
    fecha_nac: "",
  });

  const handleRegisterAlumno = async () => {
    try {
      // Lógica de registro del alumno aquí

      // Enviar datos al servidor
      const response = await axios.post("http://localhost:4000/api/alumnos", alumno);

      // Verificar la respuesta del servidor
      if (response.status === 201) {
        // Alumno creado exitosamente
        console.log("Alumno registrado exitosamente:", response.data);
        setSuccessMessage("¡Alumno registrado exitosamente!");
        // Después de registrar al alumno, puedes redirigir a la página principal
        navigate("/home");
      } else {
        console.error("Error al registrar alumno:", response.data.error);
      }
    } catch (error) {
      console.error("Error al registrar alumno:", error.message);
    }
  };

  return (
    <>
      <DefaultNavbar
        position="absolute"
        routes={routes}
        action={{
          type: "internal",
          route: "/pages/authentication/sign-in",
          label: "Iniciar session",
          color: "secondary",
        }}
        sticky
        darkNavigation
        dark={true}
      />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          bgColor: "secondary",
        }}
      />
      <MKBox px={1} top={120} width="100%" height="50vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="50%">
          <Grid item xs={12} md={8} lg={6}>
            <MKBox
              variant="gradient"
              bgColor="primary"
              borderRadius="lg"
              coloredShadow="primary"
              mx={2}
              mt={-3}
              p={1}
              mb={1}
              textAlign="center"
            >
              <MKTypography variant="h4" fontWeight="medium" color="white" mb={2}>
                Registro de Alumno
              </MKTypography>
            </MKBox>
            <MKBox>
              {/* Campos del alumno */}
              <MKBox mb={2}>
                <MKInput
                  type="text"
                  label="Email del Alumno"
                  fullWidth
                  value={alumno.email}
                  onChange={(e) => setAlumno({ ...alumno, email: e.target.value })}
                />
              </MKBox>
              <MKBox mb={2}>
                <MKInput
                  type="text"
                  label="Nombre de Usuario del Alumno"
                  fullWidth
                  value={alumno.usuario}
                  onChange={(e) => setAlumno({ ...alumno, usuario: e.target.value })}
                />
              </MKBox>
              <MKBox mb={2}>
                <MKInput
                  type="password"
                  label="Contraseña del Alumno"
                  fullWidth
                  value={alumno.password}
                  onChange={(e) => setAlumno({ ...alumno, password: e.target.value })}
                />
              </MKBox>
              <MKBox mb={2}>
                <MKInput
                  type="text"
                  label="Nombre del Alumno"
                  fullWidth
                  value={alumno.nombre}
                  onChange={(e) => setAlumno({ ...alumno, nombre: e.target.value })}
                />
              </MKBox>
              <MKBox mb={2}>
                <MKInput
                  type="text"
                  label="Apellido del Alumno"
                  fullWidth
                  value={alumno.apellido}
                  onChange={(e) => setAlumno({ ...alumno, apellido: e.target.value })}
                />
              </MKBox>
              <MKBox mb={2}>
                <MKInput
                  type="text"
                  label="Género del Alumno"
                  fullWidth
                  value={alumno.genero}
                  onChange={(e) => setAlumno({ ...alumno, genero: e.target.value })}
                />
              </MKBox>
              <MKBox mb={2}>
                <MKInput
                  type="text"
                  label="Teléfono del Alumno"
                  fullWidth
                  value={alumno.telefono}
                  onChange={(e) => setAlumno({ ...alumno, telefono: e.target.value })}
                />
              </MKBox>
              <MKBox mb={2}>
                <MKInput
                  type="text"
                  label="Fecha de Nacimiento del Alumno"
                  fullWidth
                  value={alumno.fecha_nac}
                  onChange={(e) => setAlumno({ ...alumno, fecha_nac: e.target.value })}
                />
              </MKBox>
              <MKBox mt={4} mb={1}>
                <MKButton variant="gradient" color="info" fullWidth onClick={handleRegisterAlumno}>
                  REGISTRAR ALUMNO
                </MKButton>
                <div>{setSuccessMessage && <p>{successMessage}</p>}</div>
              </MKBox>
            </MKBox>
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
}

export default RegisterAlumno;
