import { Avatar, Card } from "@mui/material";

function Cards() {
  return (
    <>
      <Card
        style={{
          width: "23%",
          height: "65%",
          display: "flex",
          flexDirection: "column",
          border: "red solid 5px",
        }}
      >
        <div
          style={{
            flex: ".7",
            // background: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ width: "60%", height: "23vh" }} />
        </div>
        <div
          style={{
            flex: ".3",
            // background: "yellow",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h6>hello</h6>
        </div>
      </Card>
    </>
  );
}

export default Cards;
