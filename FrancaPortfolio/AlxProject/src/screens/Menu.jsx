import MenuCard from "../component/Card/MenuCard";
import Footer from "../component/Footer/Footer";
import ReservationTable from "../component/ReservationTable/ReservationTable";
import ScreensHead from "../component/screensHeader/ScreensHead";

function Menu() {
  return (
    <>
      <div className="body">
        {/* GRIDING SYSTEM */}
        <div className="gridBody">
          {/* GRIDING COMPONENTS */}

          {/* Contain the page header */}
          <div className="firstGrid" style={{ display: "flex" }}>
            <ScreensHead
              Home={"Home"}
              Menu={"Menu"}
              // About={"About"}
              Contact={"Contact"}
              Tasty={"Tasty's"}
              Haven={"Haven"}
              MakeReservation={"Make Reservation"}
            />
          </div>
          {/* End of page header */}
          <div className="secondGrid"></div>
          <div
            className="thirdGrid"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {/* Flex */}
            <div
              style={{
                flex: ".7",
                background: "peru",
                display: "flex",
                alignItems: "center",
                // justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                  gap: "2em",
                }}
              >
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
              </div>
            </div>
            <div
              style={{
                flex: ".3",
                background: "pink",
              }}
            >
              <ReservationTable />
            </div>
            {/* End Of Flex */}
          </div>
          <div className="fourthGrid">
            <Footer />
          </div>
          {/* END OF GRIDING COMPONENTS */}
        </div>
        {/* END OF GRIDING SYSTEM */}
      </div>
    </>
  );
}

export default Menu;
