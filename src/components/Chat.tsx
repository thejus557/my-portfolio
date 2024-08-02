import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import { Box, Typography } from "@mui/material";
import { IoSend } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";

const DialogComponent = ({
  isOpen,
  closeDialog,
  chat,
  message,
  setMessage,
  handleSend,
}: any) => {
  const root = document.getElementById("root");

  return (
    <Dialog
      open={isOpen}
      onClose={closeDialog}
      fullWidth
      maxWidth="sm"
      container={root}
      sx={{
        backdropFilter: "blur(5px)",
        "& .MuiDialog-paper": {
          minHeight: "60%",
          maxHeight: "80%",
          justifyContent: "space-around",
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>Chat with Surya</span>
        <IoMdCloseCircleOutline onClick={closeDialog} />
      </DialogTitle>
      <DialogContent className="max-h-72 overflow-y-auto">
        {chat.map((msg, index) => (
          <Box
            key={index}
            className={`flex items-center m-2 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <span>{msg.text}</span>
            <Avatar
              className="ml-2"
              src={msg.sender === "user" ? "/user-icon.png" : "/bot-icon.png"}
            />
          </Box>
        ))}
      </DialogContent>
      <DialogActions className="flex items-center px-4 py-2 relative">
        <TextField
          autoFocus
          margin="dense"
          id="message"
          placeholder="Type your message..."
          type="text"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{
            "& .MuiInputBase-root input": {
              paddingRight: "54px",
            },
          }}
        />
        <Typography className="absolute p-4 top-4 right-1">
          <IoSend className="w-16 root-h-16" onClick={handleSend} />
        </Typography>
      </DialogActions>
    </Dialog>
  );
};

export default DialogComponent;
