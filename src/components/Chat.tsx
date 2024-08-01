import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";
import { IoSend } from "react-icons/io5";
const DialogComponent = ({
  isOpen,
  closeDialog,
  chat,
  message,
  setMessage,
  handleSend,
}: any) => {
  return (
    <Dialog open={isOpen} onClose={closeDialog} fullWidth maxWidth="sm">
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>Chat with Surya</span>
        <IconButton
          edge="end"
          color="inherit"
          onClick={closeDialog}
          aria-label="close"
        >
          X
        </IconButton>
      </DialogTitle>
      <DialogContent className="max-h-72 overflow-y-auto">
        {chat.map((msg, index) => (
          <Box
            key={index}
            className={`flex items-center mb-2 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <Avatar
              className="mr-2"
              src={msg.sender === "user" ? "/user-icon.png" : "/bot-icon.png"}
            />
            <span>{msg.text}</span>
          </Box>
        ))}
      </DialogContent>
      <DialogActions className="flex items-center px-4 py-2">
        <TextField
          autoFocus
          margin="dense"
          id="message"
          placeholder="Type your message..."
          type="text"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          onClick={handleSend}
          color="primary"
          variant="text"
          sx={{
            width: "fit-content",
            height: "fit-content",
          }}
        >
          <IoSend />
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogComponent;
