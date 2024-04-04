import React, { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { useNavigate } from "react-router-dom";
import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import Header from "../../../components/Header";
import { tokens } from "../../../src2/theme";
import MKBox from "components/MKBox";
// import Home from "src2/App";
// import MKTypography from "components/MKTypography";
// import MKInput from "components/MKInput";
// import routes from "routes";
import MKButton from "components/MKButton";
const Calendar = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const navigate = useNavigate();

  const handleDateClick = (selected) => {
    const title = prompt("Introduzca descipcion(Opcional)");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    // Verifica si el usuario ingresó un título o no
    const hasTitle = title && title.trim().length > 0;

    if (hasTitle) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    } else {
      // Si no se proporciona un título, aún puedes agregar el evento sin título
      calendarApi.addEvent({
        id: `${selected.dateStr}-SinTitulo`,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(`¿Estás seguro de que quieres borrar el evento? '${selected.event.title}'`)
    ) {
      selected.event.remove();
    }
  };

  const handleSaveHorario = async () => {
    try {
      // Lógica para guardar los horarios seleccionados
      const selectedEvents = currentEvents.map((event) => ({
        titulo: event.title,
        inicio: event.start.toISOString(), // Formatear fecha a ISO
        fin: event.end.toISOString(), // Formatear fecha a ISO
      }));

      // Salida de consola para verificar los datos justo antes de enviarlos al servidor
      console.log("Datos a enviar al servidor:", selectedEvents);

      // Enviar selectedEvents al servidor
      const response = await fetch("http://localhost:4000/api/horarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedEvents),
      });

      if (response.ok) {
        console.log("Horarios guardados exitosamente");
        setSuccessMessage("Profesor registrado exitosamente!");
        navigate("/calendario");
        // Aquí puedes realizar cualquier acción adicional después de guardar los horarios
      } else {
        console.error("Error al guardar horarios");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  return (
    <Box m="20px">
      <Header
        title="Registro de horario"
        subtitle="Selecciones el horario que mejor se le adapte para que brindes tus clases"
      />

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box flex="1 1 20%" backgroundColor={colors.primary[400]} p="15px" borderRadius="4px">
          <Typography variant="h5">Programado</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="timeGridWeek"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
          />
        </Box>
      </Box>
      <Box
        mx="auto" // Esto centra horizontalmente el componente
        width="33%" // Ocupa 1/3 del ancho total
      >
        <MKBox mt={5} mb={1}>
          <MKButton variant="gradient" color="info" fullWidth onClick={handleSaveHorario}>
            REGISTRAR
          </MKButton>
        </MKBox>
        <div>{setSuccessMessage && <p>{successMessage}</p>}</div>
      </Box>
    </Box>
  );
};

export default Calendar;
