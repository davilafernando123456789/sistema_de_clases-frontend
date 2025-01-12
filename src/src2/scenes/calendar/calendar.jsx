import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
// import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Header from "../../components/Header";
import Topbar from "../../scenes/global/Topbar";
import Sidebar from "../../scenes/global/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
// import { ColorModeContext } from "../../theme";
import { tokens } from "../../theme";
// import { Routes } from "react-router-dom";

const Calendar = () => {
  const [theme, colorMode] = useMode();
  const [currentEvents, setCurrentEvents] = useState([]); // Assuming useMode returns a boolean
  const [isSidebar, setIsSidebar] = useState(true);
  const colors = tokens(theme.palette.mode);

  const handleDateClick = (selected) => {
    const title = prompt("Ingresa la clase programada");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
      selected.event.remove();
    }
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Box m="20px">
              <Header title="Calendario" subtitle="Aqui podra ver sus clases programadas" />

              <Box display="flex" justifyContent="space-between">
                {/* CALENDAR SIDEBAR */}
                <Box
                  flex="1 1 20%"
                  backgroundColor={colors.primary[400]}
                  p="15px"
                  borderRadius="4px"
                >
                  <Typography variant="h5">Clases</Typography>
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
                      right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                    }}
                    initialView="dayGridMonth"
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    select={handleDateClick}
                    eventClick={handleEventClick}
                    eventsSet={(events) => setCurrentEvents(events)}
                    initialEvents={[
                      {
                        id: "12315",
                        title: "Clase de matemática",
                        date: "2022-09-14",
                      },
                      {
                        id: "5123",
                        title: "Clase de Comunicación",
                        date: "2022-09-28",
                      },
                    ]}
                  />
                </Box>
              </Box>
            </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
export default Calendar;
