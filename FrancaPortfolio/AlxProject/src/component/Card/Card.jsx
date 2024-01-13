import { Card } from "@mui/material";

function Cards() {
  return (
    <>
      <Card
        style={{
          width: "23%",
          height: "65%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ flex: ".7", background: "red" }}></div>
        <div style={{ flex: ".3", background: "yellow" }}></div>
      </Card>
    </>
  );
}

export default Cards;
