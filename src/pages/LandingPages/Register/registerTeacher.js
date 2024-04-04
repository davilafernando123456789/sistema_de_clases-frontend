import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import routes from "routes";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import axios from "axios";

function TeacherSignUp() {
  const navigate = useNavigate();
  const [profesor, setProfesor] = useState({
    email: "",
    usuario: "",
    password: "",
    nombre: "",
    apellido: "",
    fecha_nac: "",
    telefono: "",
    genero: "",
    foto: "",
    dni: "",
  });
  const [penales, setPenales] = useState({
    fecha_registro: "",
    descripcion: "",
    resolucion: "",
  });
  const [educativos, setEducativos] = useState({
    nombre: "",
    institucion: "",
    pais_institucion: "",
    fecha_obtencion: "",
    nivel_educacion: "",
  });

  const [direccion, setDireccion] = useState({
    calle: "",
    distrito: "",
    ciudad: "",
    codigo_postal: "",
  });

  const registerAntecedentesEducativos = async (antecedentesEducativosData) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/antecedentes_educativos",
        antecedentesEducativosData
      );

      if (response.status === 201) {
        console.log("Antecedentes Educativos registrados exitosamente:", response.data);
        return response.data.id;
      } else {
        console.error("Error al registrar antecedentes educativos:", response.data.error);
        return null;
      }
    } catch (error) {
      console.error("Error al registrar antecedentes educativos:", error.message);
      return null;
    }
  };

  const registerAntecedentesPenales = async (antecedentesPenalesData) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/antecedentes_penales",
        antecedentesPenalesData
      );

      if (response.status === 201) {
        console.log("Antecedentes Penales registrados exitosamente:", response.data);
        return response.data.id;
      } else {
        console.error("Error al registrar antecedentes penales:", response.data.error);
        return null;
      }
    } catch (error) {
      console.error("Error al registrar antecedentes penales:", error.message);
      return null;
    }
  };

  const registerDireccionApoderado = async (direccionApoderadoData) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/direccion",
        direccionApoderadoData
      );

      if (response.status === 201) {
        console.log("Dirección del Apoderado registrada exitosamente:", response.data);
        return response.data.id;
      } else {
        console.error("Error al registrar dirección del apoderado:", response.data.error);
        return null;
      }
    } catch (error) {
      console.error("Error al registrar dirección del apoderado:", error.message);
      return null;
    }
  };

  const handleSignUp = async () => {
    try {
      // Registrar antecedentes penales
      const Antecedentes_penales_id = await registerAntecedentesPenales(penales);

      if (!Antecedentes_penales_id) {
        console.error("Error al registrar antecedentes penales");
        return;
      }

      // Registrar antecedentes educativos
      const Antecedentes_educativos_id = await registerAntecedentesEducativos(educativos);

      if (!Antecedentes_educativos_id) {
        console.error("Error al registrar antecedentes educativos");
        return;
      }

      // Registrar dirección del apoderado
      const Direccion_id = await registerDireccionApoderado(direccion);

      if (!Direccion_id) {
        console.error("Error al registrar dirección del apoderado");
        return;
      }

      // Completar datos del profesor con IDs de antecedentes, dirección y educativos
      const profesorCompleto = {
        ...profesor,
        Antecedentes_penales_id,
        Antecedentes_educativos_id,
        Direccion_id,
      };

      // Registrar al profesor con todos los datos
      const responseProfesor = await axios.post(
        "http://localhost:4000/api/profesores",
        profesorCompleto
      );

      if (responseProfesor.status !== 201) {
        console.error("Error al registrar profesor:", responseProfesor.data.error);
        return;
      }

      // Profesor registrado exitosamente
      console.log("Profesor registrado exitosamente:", responseProfesor.data);

      // Después de registrar al profesor, puedes redirigir a la página principal
      navigate("/pages/LandingPages/Register/registerHoras");
    } catch (error) {
      console.error("Error al registrar profesor:", error.message);
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
                Registro de Profesores
              </MKTypography>
            </MKBox>
            <MKBox pt={3} pb={3} px={3} width="100%">
              <MKBox component="form" role="form" width="100%">
                <MKBox mb={2}>
                  <MKInput
                    type="text"
                    label="Nombre"
                    fullWidth
                    value={profesor.nombre}
                    onChange={(e) => setProfesor({ ...profesor, nombre: e.target.value })}
                  />
                </MKBox>
                <MKBox mb={2} display="flex">
                  <MKBox mr={2} flex={1}>
                    <MKInput
                      type="text"
                      label="apellido"
                      fullWidth
                      value={profesor.apellido}
                      onChange={(e) => setProfesor({ ...profesor, apellido: e.target.value })}
                    />
                  </MKBox>
                  <MKBox ml={2} flex={1}>
                    <MKInput
                      type="email"
                      label="Email"
                      fullWidth
                      value={profesor.email}
                      onChange={(e) => setProfesor({ ...profesor, email: e.target.value })}
                    />
                  </MKBox>
                </MKBox>
                <MKBox mb={2} display="flex">
                  <MKBox mr={2} flex={1}>
                    <MKInput
                      type="text"
                      label="Usuario"
                      fullWidth
                      value={profesor.usuario}
                      onChange={(e) => setProfesor({ ...profesor, usuario: e.target.value })}
                    />
                  </MKBox>
                  <MKBox ml={2} flex={1}>
                    <MKInput
                      type="password"
                      label="Contraseña"
                      fullWidth
                      value={profesor.password}
                      onChange={(e) => setProfesor({ ...profesor, password: e.target.value })}
                    />
                  </MKBox>
                </MKBox>
                <MKBox mb={2}>
                  <MKInput
                    type="date"
                    label="Fecha de nacimiento"
                    fullWidth
                    value={profesor.fecha_nac}
                    onChange={(e) => setProfesor({ ...profesor, fecha_nac: e.target.value })}
                  />
                </MKBox>
                <MKBox mb={2}>
                  <MKInput
                    type="text"
                    label="Telefono"
                    fullWidth
                    value={profesor.telefono}
                    onChange={(e) => setProfesor({ ...profesor, telefono: e.target.value })}
                  />
                </MKBox>
                <MKBox mb={2}>
                  <MKInput
                    type="text"
                    label="Especialidad"
                    fullWidth
                    value={profesor.especialidad}
                    onChange={(e) => setProfesor({ ...profesor, especialidad: e.target.value })}
                  />
                </MKBox>
                <MKBox mb={2}>
                  <MKInput
                    type="text"
                    label="Genero"
                    fullWidth
                    value={profesor.genero}
                    onChange={(e) => setProfesor({ ...profesor, genero: e.target.value })}
                  />
                </MKBox>
                <MKBox mb={2}>
                  <MKInput
                    type="text"
                    label="Foto"
                    fullWidth
                    value={profesor.foto}
                    onChange={(e) => setProfesor({ ...profesor, foto: e.target.value })}
                  />
                </MKBox>
                <MKBox mb={2}>
                  <MKInput
                    type="number"
                    label="DNI"
                    fullWidth
                    value={profesor.dni}
                    onChange={(e) => setProfesor({ ...profesor, dni: e.target.value })}
                  />
                </MKBox>
                {/* Datos relacionados con Antecedentes Educativos */}
                <div>
                  <h2>Antecedentes Educativos</h2>
                  <MKBox mb={2}>
                    <MKInput
                      type="text"
                      label="Nombre"
                      fullWidth
                      value={educativos.nombre}
                      onChange={(e) => setEducativos({ ...educativos, nombre: e.target.value })}
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      type="text"
                      label="Institución"
                      fullWidth
                      value={educativos.institucion}
                      onChange={(e) =>
                        setEducativos({ ...educativos, institucion: e.target.value })
                      }
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      type="text"
                      label="País de la Institución"
                      fullWidth
                      value={educativos.pais_institucion}
                      onChange={(e) =>
                        setEducativos({ ...educativos, pais_institucion: e.target.value })
                      }
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      type="text"
                      label="Fecha de la obtención"
                      fullWidth
                      value={educativos.fecha_obtencion}
                      onChange={(e) =>
                        setEducativos({ ...educativos, fecha_obtencion: e.target.value })
                      }
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      type="text"
                      label="Nivel de Educación"
                      fullWidth
                      value={educativos.nivel_educacion}
                      onChange={(e) =>
                        setEducativos({ ...educativos, nivel_educacion: e.target.value })
                      }
                    />
                  </MKBox>
                  {/* Agrega más campos según tus necesidades */}
                </div>
                <div>
                  <h2>Antecedentes Penales</h2>
                  <MKBox mb={2}>
                    <MKInput
                      type="text"
                      label="Fecha de Registro"
                      fullWidth
                      value={penales.fecha_registro}
                      onChange={(e) => setPenales({ ...penales, fecha_registro: e.target.value })}
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      type="text"
                      label="Descripción"
                      fullWidth
                      value={penales.descripcion}
                      onChange={(e) => setPenales({ ...penales, descripcion: e.target.value })}
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      type="text"
                      label="Descripción"
                      fullWidth
                      value={penales.resolucion}
                      onChange={(e) => setPenales({ ...penales, resolucion: e.target.value })}
                    />
                  </MKBox>
                  {/* Agrega más campos según tus necesidades */}
                </div>
                <div>
                  <h2>Dirección</h2>
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
                      type="number"
                      label="Código Postal"
                      fullWidth
                      value={direccion.codigo_postal}
                      onChange={(e) =>
                        setDireccion({ ...direccion, codigo_postal: e.target.value })
                      }
                    />
                  </MKBox>
                  {/* Agrega más campos según tus necesidades */}
                </div>
                <MKBox mt={4} mb={1}>
                  <MKButton variant="gradient" color="info" fullWidth onClick={handleSignUp}>
                    REGISTRARSE
                  </MKButton>
                </MKBox>
                <MKBox mt={3} mb={1} textAlign="center">
                  <MKTypography variant="button" color="text">
                    ¿Ya tienes una cuenta?{" "}
                    <MKTypography
                      component={Link}
                      to="/pages/authentication/sign-in"
                      variant="button"
                      color="info"
                      fontWeight="medium"
                      textGradient
                    >
                      Iniciar Sesión
                    </MKTypography>
                  </MKTypography>
                </MKBox>
              </MKBox>
            </MKBox>
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
}

export default TeacherSignUp;
