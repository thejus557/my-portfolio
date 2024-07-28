import { Drawer, Box, Typography } from "@mui/material";
import { RxCross2 } from "react-icons/rx";

const container = window.document.body;

interface SibebarProps {
  drawerState: boolean;
  onToggle: () => void;
  navItemsList: Array<string>;
}

const Sidebar = ({ drawerState, onToggle, navItemsList }: SibebarProps) => {
  return (
    <Drawer
      container={container}
      variant="temporary"
      open={drawerState}
      onClose={onToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: "100%" },
      }}
    >
      <Box
        sx={{
          margin: "36px",
          marginRight: "24px",
          textAlign: "end",
        }}
      >
        <RxCross2
          fontSize={36}
          className="mx-2 mt-4 block"
          onClick={onToggle}
        />
      </Box>
      <Box
        sx={{
          margin: "36px",
          display: "flex",
          flexDirection: "column",
          gap: 5,
          alignItems: "center",
        }}
      >
        {navItemsList.map((e) => (
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
          >
            {e}
          </Typography>
        ))}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
