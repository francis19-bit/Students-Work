import Fab from "@mui/material/Fab";

function Buttons({ NameBtn, width, onClick }) {
  return (
    <>
      <Fab
        variant="extended"
        sx={{ height: "8vh", width: `${width}` }}
        size="large"
        onClick={onClick}
      >
        {NameBtn}
      </Fab>
    </>
  );
}

export default Buttons;
