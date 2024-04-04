import { Box } from "@mui/material";
import Header from "../../components/Header";
// import PieChart from "../../components/PieChart";
import Sidebar from "../../scenes/global/Sidebar";
import Topbar from "../../scenes/global/Topbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import React, { useState } from "react";
import { Typography, TextField, Button, Paper, List, ListItem } from "@mui/material";

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: "Tutor", time: "10:00 AM", message: "¡Hola! ¿En qué puedo ayudarte hoy?" },
    { sender: "Usuario", time: "10:05 AM", message: "Hola, tengo una pregunta sobre la tarea." },
    // Add more example messages as needed
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      const updatedMessages = [
        ...messages,
        { sender: "Usuario", time: currentTime, message: newMessage },
      ];
      setMessages(updatedMessages);
      setNewMessage("");
    }
  };

  return (
    <Box>
      <Paper elevation={3} style={{ height: "400px", overflowY: "auto" }}>
        <List>
          {messages.map((msg, index) => (
            <ListItem key={index} sx={{ textAlign: msg.sender === "Usuario" ? "right" : "left" }}>
              <Typography variant="caption" color="textSecondary">
                {msg.sender} - {msg.time}
              </Typography>
              <Typography variant="body1">{msg.message}</Typography>
            </ListItem>
          ))}
        </List>
      </Paper>
      <Box mt={2}>
        <TextField
          fullWidth
          variant="outlined"
          label="Escribe un mensaje..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage} sx={{ mt: 1 }}>
          Enviar
        </Button>
      </Box>
    </Box>
  );
};

const Pie = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Box m="20px">
              <Header title="Mensajes" subtitle="Comunícate con tu tutor" />
              <Chat />
            </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Pie;
