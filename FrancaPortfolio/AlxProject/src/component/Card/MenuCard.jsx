import { Avatar, Card } from "@mui/material";

function MenuCard() {
  return (
    // <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
    <Card
      sx={{
        display: "flex",
        // alignItems: "center",
        width: "40%",
        height: "30vh",
        // gap: "2em",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          flex: ".4",
          // background: "red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar sx={{ width: "90%", height: "80%" }} />
      </div>
      <div
        style={{
          flex: ".6",
          // background: "yellow",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: ".5em",
        }}
      >
        <div style={{ display: "flex", gap: "1em" }}>
          <div style={{ fontSize: "20px" }}>name</div>
          <div>......................</div>
          <small>$</small>
        </div>
        <div style={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, enim.
        </div>
      </div>
    </Card>
    // </div>
  );
}

export default MenuCard;
