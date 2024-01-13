import { Divider } from "@mui/material";
import ScreensHead from "../component/screensHeader/ScreensHead";
import Swip from "../features/Swip";
import { useEffect, useState } from "react";
import Buttons from "../component/Buttons/Buttons";
import Cards from "../component/Card/Card";

function Home() {
  const url =
    "https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=italian%20wedding%20soup";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "fa92966ad4msh1f6b2f217151953p1dedadjsnbe3f3d0d9eb2",
      "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
    },
  };
  const [foodData, setFoodData] = useState([]);
  console.log(foodData);

  useEffect(() => {
    const dataRetrieve = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setFoodData(result);
      } catch (error) {
        console.error(error);
      }
    };
    dataRetrieve();
  }, []);

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
              About={"About"}
              Contact={"Contact"}
              Tasty={"Tasty's"}
              Haven={"Haven"}
              MakeReservation={"Make Reservation"}
            />
          </div>
          {/* End of page header */}
          <div className="secondGrid">
            <Swip />
          </div>
          <div
            className="thirdGrid"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {/* Flex */}
            <div
              style={{
                flex: ".23",
                background: "red",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  flex: ".2",
                  // background: "yellow",
                  // textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <small style={{ paddingTop: "5%" }}>ABOUT US</small>
              </div>
              <div
                style={{
                  flex: ".6",
                  // background: "blue",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "30px",
                  }}
                >
                  WE ARE A NEW YORK'S PREMIER EGGS SPECIALTY <br /> RESTAURANT
                  FOUNDED BY JACK BLOOM. WE HAVE A <br /> DEDICATED MENU
                  SHOWCASING THE VERSATILITY AND <br /> DELICIOUSNESS OF EGGS IN
                  ALL THEIR FORMS, FROM <br /> CLASSIC OMELETTES AND EGG
                  SANDWICHES TO MORE <br /> UNIQUE CREATIONS LIKE OUR EGG AND
                  AVOCADO TOAST OR <br /> OUR SMOKED SALMON AND SCRAMBLED EGGS
                </div>
              </div>
              {/* Divider */}
              <div
                style={{
                  flex: ".2",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Divider
                  sx={{ width: "2px", height: "15vh", background: "black" }}
                />
              </div>
            </div>
            <div
              style={{
                flex: ".23",
                background: "cyan",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Menu, list & BTN */}
              <div
                style={{
                  flex: ".30",
                  // background: "yellow",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "1.5em",
                }}
              >
                <div style={{ fontSize: "3em" }}>MENU</div>
                <small>
                  Taste the versatility and deliciousness of eggs in all their
                  forms
                </small>
                <Buttons NameBtn={"Full Menu"} width={"20%"} />
              </div>
              {/* Cards */}
              <div
                style={{
                  flex: ".70",
                  // background: "blue",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1em",
                }}
              >
                <Cards />
                <Cards />
                <Cards />
                <Cards />
              </div>
            </div>
            {/* End Of Flex */}
            <div
              style={{
                flex: ".54",
                background: "peru",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Flex */}
              <div
                style={{
                  flex: ".5",
                  // background: "pink",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    flex: ".1",
                    background: "white",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  {/* Divider */}
                  <Divider
                    sx={{ width: "2px", height: "15vh", background: "black" }}
                  />
                </div>
                {/* location area */}
                <div
                  style={{
                    flex: ".15",
                    background: "blue",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "1em",
                  }}
                >
                  <div style={{ fontSize: "60px" }}>LOCATION</div>
                  <small>Where you can find us</small>
                </div>
                {/* Map area */}
                <div
                  style={{
                    flex: ".75",
                    background: "yellow",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {/* Table */}
                  <div
                    style={{
                      flex: ".5",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "70%",
                        gap: ".8em",
                        paddingTop: "3vh",
                      }}
                    >
                      {/* CONTACT */}
                      <h2 style={{ float: "left" }}>Contact</h2>
                      <Divider sx={{ width: "100%" }} />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: "2em",
                        }}
                      >
                        <h4>Phone</h4>
                        <div>(555) 555-1234</div>
                      </div>
                      <Divider sx={{ width: "100%" }} />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: "2em",
                        }}
                      >
                        <h4>Address</h4>
                        <div>Nigeria</div>
                      </div>

                      {/* OPENING HOURS */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                          gap: ".8em",
                          paddingTop: "8vh",
                        }}
                      >
                        <h2 style={{ float: "left" }}>OPENING HOURS</h2>
                        <Divider sx={{ width: "100%" }} />
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "2em",
                          }}
                        >
                          <h4>Monday-Friday</h4>
                          <div>9:00 AM - 10:00 PM</div>
                        </div>
                        <Divider sx={{ width: "100%" }} />
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "2em",
                          }}
                        >
                          <h4>Saturday</h4>
                          <div>9:00 AM - 18:00 PM</div>
                        </div>
                        <Divider sx={{ width: "100%" }} />
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "2em",
                          }}
                        >
                          <h4 style={{ color: "pink" }}>Sunday</h4>
                          <div style={{ color: "pink" }}>Closed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Map */}
                  <div style={{ flex: ".5", background: "white" }}></div>
                </div>
              </div>
              <div
                style={{
                  flex: ".5",
                  background: "green",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Flex */}
                <div
                  style={{
                    flex: ".1",
                    display: "flex",
                    // alignContent: "center",
                    justifyContent: "center",
                    background: "pink",
                  }}
                >
                  <Divider
                    sx={{ width: "2px", height: "15vh", background: "black" }}
                  />
                </div>
                <div
                  style={{
                    flex: ".2",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "red",
                    gap: "2em",
                  }}
                >
                  <div style={{ fontSize: "50px" }}>RESERVATIONS</div>
                  <small>Book your table online now</small>
                </div>
                <div style={{ flex: ".7" }}></div>
                {/* End of Flex */}
              </div>
              {/* End Of Flex */}
            </div>
          </div>
          <div className="fourthGrid"></div>
          {/* END OF GRIDING COMPONENTS */}
        </div>
        {/* END OF GRIDING SYSTEM */}
      </div>
    </>
  );
}

export default Home;
