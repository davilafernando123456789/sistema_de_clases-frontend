// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={100}
              suffix="+"
              title="Profesores"
              description="Éxito académico al alcance de tu pantalla: profesores expertos dispuestos a guiarte paso a paso en tu proceso de aprendizaje."
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={50}
              suffix="+"
              title="Estudiantes aprendiendo"
              description="Nos adaptamos a tu ritmo porque sabemos que cada estudiante aprende diferente. ¡Progresa con confianza junto a nosotros!"
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={4}
              title="Lideres"
              description="Expertos comprometidos con tu éxito, porque creemos que todo estudiante tiene talento y potencial para destacar."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
