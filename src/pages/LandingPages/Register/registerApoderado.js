// RegisterApoderado.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import routes from "routes";
import Grid from "@mui/material/Grid";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import axios from "axios";
import MKTypography from "components/MKTypography";

function RegisterApoderado() {
  const navigate = useNavigate();
  const [apoderado, setApoderado] = useState({
    dni: "",
    nombre: "",
    apellido: "",
    email: "",
    fecha_nac: "",
    genero: "",
    telefono: "",
  });

  const [direccion, setDireccion] = useState({
    calle: "",
    distrito: "",
    ciudad: "",
    codigo_postal: "",
  });

  const handleRegisterApoderado = async () => {
    try {
      const responseDireccion = await axios.post("http://localhost:4000/api/direccion", direccion);

      if (responseDireccion.status !== 201) {
        console.error("Error al registrar dirección:", responseDireccion.data.error);
        return;
      }

      const direccionId = responseDireccion.data.id;

      const apoderadoCompleto = {
        ...apoderado,
        Direccion_id: direccionId,
      };

      const responseApoderado = await axios.post(
        "http://localhost:4000/api/apoderados",
        apoderadoCompleto
      );

      if (responseApoderado.status !== 201) {
        console.error("Error al registrar apoderado:", responseApoderado.data.error);
        return;
      }

      // Apoderado y dirección registrados exitosamente
      console.log("Dirección registrada exitosamente:", responseDireccion.data);
      console.log("Apoderado registrado exitosamente:", responseApoderado.data);

      // Después de registrar al apoderado y la dirección, puedes redirigir a la página principal
      navigate("/registerUser");
    } catch (error) {
      console.error("Error al registrar apoderado:", error.message);
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
                Registro Apoderado
              </MKTypography>
            </MKBox>
            <MKBox>
              {/* Campos del apoderado */}
              <MKBox mb={2}>
                <MKInput
                  type="text"
                  label="DNI del Apoderado"
                  fullWidth
                  value={apoderado.dni}
                  onChange={(e) => setApoderado({ ...apoderado, dni: e.target.value })}
                />
              </MKBox>
              <MKBox mb={2}>
                <MKInput
                  type="text"
                  label="Nombre del Apoderado"
                  fullWidth
                  value={apoderado.nombre}
                  onChange={(e) => setApoderado({ ...apoderado, nombre: e.target.value })}
                />
              </MKBox>
              <MKBox mb={2}>
                <MKInput
                  type="text"
                  label="Apellido del Apoderado"
                  fullWidth
                  value={apoderado.apellido}
                  onChange={(e) => setApoderado({ ...apoderado, apellido: e.target.value })}
                />
              </MKBox>
              <MKBox mb={2}>
                <MKInput
                  type="email"
                  label="Correo del Apoderado"
                  fullWidth
                  value={apoderado.email}
                  onChange={(e) => setApoderado({ ...apoderado, email: e.target.value })}
                />
              </MKBox>
              <MKBox mb={2}>
                <MKInput
                  type="text"
                  label="Fecha de Nacimiento del Apoderado"
                  fullWidth
                  value={apoderado.fecha_nac}
                  onChange={(e) => setApoderado({ ...apoderado, fecha_nac: e.target.value })}
                />
              </MKBox>
              <MKBox mb={2}>
                <MKInput
                  type="text"
                  label="Género del Apoderado"
                  fullWidth
                  value={apoderado.genero}
                  onChange={(e) => setApoderado({ ...apoderado, genero: e.target.value })}
                />
              </MKBox>
              <MKBox mb={2}>
                <MKInput
                  type="text"
                  label="Teléfono del Apoderado"
                  fullWidth
                  value={apoderado.telefono}
                  onChange={(e) => setApoderado({ ...apoderado, telefono: e.target.value })}
                />
              </MKBox>
              <MKTypography variant="h4" fontWeight="medium" color="black" mb={2}>
                Dirección
              </MKTypography>
              <MKBox mb={2}>
                <MKInput
                  type="text"
                  label="Calle"
                  fullWidth
                  value={direccion.calle}
                  onChange={(e) => setDireccion({ ...direccion, calle: e.target.value })}
                />
              </MKBox>
              <MKBox mb={2}>
                <MKInput
                  type="text"
                  label="Distrito"
                  fullWidth
                  value={direccion.distrito}
                  onChange={(e) => setDireccion({ ...direccion, distrito: e.target.value })}
                />
              </MKBox>
              <MKBox mb={2}>
                <MKInput
                  type="text"
                  label="Ciudad"
                  fullWidth
                  value={direccion.ciudad}
                  onChange={(e) => setDireccion({ ...direccion, ciudad: e.target.value })}
                />
              </MKBox>
              <MKBox mb={2}>
                <MKInput
                  type="text"
                  label="Código Postal"
                  fullWidth
                  value={direccion.codigo_postal}
                  onChange={(e) => setDireccion({ ...direccion, codigo_postal: e.target.value })}
                />
              </MKBox>

              <MKBox mt={4} mb={1}>
                <MKButton
                  variant="gradient"
                  color="info"
                  fullWidth
                  onClick={handleRegisterApoderado}
                >
                  REGISTRAR APODERADO
                </MKButton>
              </MKBox>
            </MKBox>
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
}
export default RegisterApoderado;
