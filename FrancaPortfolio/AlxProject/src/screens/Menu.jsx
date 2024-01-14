import { useEffect, useState } from "react";
import MenuCard from "../component/Card/MenuCard";
import Footer from "../component/Footer/Footer";
import ReservationTable from "../component/ReservationTable/ReservationTable";
import ScreensHead from "../component/screensHeader/ScreensHead";

function Menu() {
  var [foodData, setFoodData] = useState([]);
  console.log("API", foodData);

  // **********************USEEFFECT
  useEffect(() => {
    const fetchAllMeals = async () => {
      const meals = [];
      for (let i = 97; i < 123; i++) {
        try {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?f=${String.fromCharCode(
              i
            )}`
          );

          const data = await response.json();
          meals.push(data.meals);
        } catch (error) {
          console.log("Error:", error);
        }
      }
      // console.log(item);

      var filterAll = meals
        .filter((data) => data !== null)
        .flatMap((data) => data.map((item) => item));

      setFoodData(filterAll);
    };
    fetchAllMeals();
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
              // About={"About"}
              // Contact={"Contact"}
              Tasty={"Tasty's"}
              Haven={"Haven"}
              MakeReservation={"Make Reservation"}
            />
          </div>
          {/* End of page header */}
          <div
            className="secondGrid"
            style={{
              color: "wheat",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: "8em" }}>check out our menu</div>
            <small style={{ fontSize: "2em" }}>
              Eggstraordinary flavors for any appetite
            </small>
          </div>
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
                {foodData.slice(0, 16).map((data, index) => {
                  const {
                    strMeal,
                    strArea,
                    idMeal,
                    strIngredient1,
                    strMealThumb,
                    strCategory,
                  } = data;
                  return (
                    <>
                      <MenuCard
                        key={index}
                        dishName={strMeal}
                        src={strMealThumb}
                        amount={idMeal}
                      />
                    </>
                  );
                })}
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
