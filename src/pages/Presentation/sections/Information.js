// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// @mui icons
import TouchAppIcon from "@mui/icons-material/TouchApp";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FlipToFrontIcon from "@mui/icons-material/FlipToFront";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import DevicesIcon from "@mui/icons-material/Devices";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/bg-1.jpg";
import bgBack from "assets/images/th.jpg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon={<TouchAppIcon />}
                title={
                  <>
                    El material
                    <br />
                    en tus manos
                  </>
                }
                description="Sabemos que no hay preguntas tontas cuando de aprender se trata. Resuelve cualquier duda por mínima que parezca"
              />
              <RotatingCardBack
                image={bgBack}
                title="El curso que buscas"
                description="Es hora de disfrutar descubriendo nuevos conceptos de la mano de experimentados guías"
                action={{
                  type: "internal",
                  route: "#",
                  label: "Ir al curso",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<ContentCopyIcon />}
                  title="Calidad"
                  description="Es hora de disfrutar descubriendo nuevos conceptos de la mano de experimentados guías"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<FlipToFrontIcon />}
                  title="Experiencia"
                  description="Sabemos que no hay preguntas tontas cuando de aprender se trata. Resuelve cualquier duda por mínima que parezca"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<PriceChangeIcon />}
                  title="Flexibilidad"
                  description="Sabemos que no hay preguntas tontas cuando de aprender se trata. Resuelve cualquier duda por mínima que parezca"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<DevicesIcon />}
                  title="Apoyo siempre"
                  description="Sabemos que no hay preguntas tontas cuando de aprender se trata. Resuelve cualquier duda por mínima que parezca."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
