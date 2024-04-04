import React from "react";
import { useNavigate } from "react-router-dom";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import routes from "routes";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import teacherImage from "assets/images/examples/testimonial-6-2.jpg";
import SimpleFooter from "examples/Footers/SimpleFooter";
// import bgImage from "assets/images/examples/testimonial-6-2.jpg";

function TeacherSignUp() {
  const navigate = useNavigate();

  const handleRegisterTeacher = () => {
    // Lógica para registrar profesor
    navigate("/registerTeacher");
  };

  const handleRegisterStudent = () => {
    // Lógica para registrar alumno
    navigate("/registerApoderado");
  };

  return (
    <>
      <DefaultNavbar
        position="absolute"
        routes={routes}
        action={{
          type: "internal",
          route: "/pages/authentication/sign-in",
          label: "Iniciar sesión",
          color: "secondary",
        }}
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MKBox
          width="50%"
          height="100%"
          sx={{
            overflow: "hidden",
            marginLeft: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <img
            src={teacherImage}
            alt="Teacher"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
          />
        </MKBox>

        {/* Mitad derecha con los botones */}
        <MKBox width="50%" p={2}>
          <MKBox
            variant="gradient"
            borderRadius="lg"
            coloredShadow="primary"
            textAlign="center"
            height="100%"
            p={5}
          >
            <MKTypography variant="h4" fontWeight="medium" color="secondary" mb={2}>
              Registrate
            </MKTypography>
            <MKButton variant="gradient" color="info" fullWidth onClick={handleRegisterTeacher}>
              Soy Profesor
            </MKButton>
            <MKTypography variant="body2" color="white" mt={2}></MKTypography>
            <MKTypography variant="body2" color="white" mt={2}></MKTypography>
            <MKButton variant="gradient" color="primary" fullWidth onClick={handleRegisterStudent}>
              Soy Alumno
            </MKButton>
          </MKBox>
        </MKBox>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter dark />
      </MKBox>
    </>
  );
}

export default TeacherSignUp;
