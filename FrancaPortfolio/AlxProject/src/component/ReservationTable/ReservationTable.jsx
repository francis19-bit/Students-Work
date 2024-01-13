import { Divider } from "@mui/material";
import Buttons from "../Buttons/Buttons";
import { CustomTextField } from "../customTextField/CustomTextField";

function ReservationTable() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Flex */}
        <div
          style={{
            flex: ".1",
            display: "flex",
            // alignContent: "center",
            justifyContent: "center",
            // background: "pink",
          }}
          id="reserve"
        >
          <Divider sx={{ width: "2px", height: "15vh", background: "black" }} />
        </div>
        {/* Reservation Text Field Header */}
        <div
          style={{
            flex: ".2",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // background: "red",
            gap: "2em",
          }}
        >
          <div style={{ fontSize: "50px" }}>RESERVATIONS</div>
          <small>Book your table online now</small>
        </div>
        {/* Reservation Text Field */}
        <div
          style={{
            flex: ".7",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5em",
            paddingTop: "2vh",
          }}
        >
          <CustomTextField helperText={"Name"} />
          <CustomTextField helperText={"Phone"} />
          <CustomTextField helperText={"Number of persons"} />
          <div
            style={{
              paddingTop: "6vh",
            }}
          >
            <Buttons NameBtn={"Make Reservation"} />
          </div>
        </div>
        {/* End of Flex */}
      </div>
    </>
  );
}

export default ReservationTable;
