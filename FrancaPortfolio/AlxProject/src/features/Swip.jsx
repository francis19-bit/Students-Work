import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import image1 from "../assets/fresh-cocktails-with-ice-lemon-lime-fruits-generative-ai.jpg";
import image2 from "../assets/healthy-vegetable-soup-cooked-with-fresh-meat-generated-by-ai.jpg";
import image3 from "../assets/pexels-viktoria-slowikowska-5677794.jpg";
import Buttons from "../component/Buttons/Buttons";

const Swipper = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const images = [image1, image2, image3];

  return (
    <div>
      <div
        style={{
          position: "absolute",
          color: "white",
          zIndex: "30",
          textAlign: "center",
          paddingLeft: "26%",
          paddingTop: "40vh",
          fontSize: "80px",
        }}
      >
        <h3> Flavors for all!</h3>
        <Buttons NameBtn={"VIEW MENU"} />
      </div>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={5000}
        customTransition="all .20s"
        transitionDuration={5000}
        removeArrowOnDeviceType={["desktop", "mobile"]}
        autoPlay={true}
        pauseOnHover={false}
      >
        {images?.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              style={{
                width: "100%",
                height: "100vh",
                position: "relative",
                // backgroundImage: `${image}`,
                // backgroundSize: "cover",
                // backgroundPosition: "center",
              }}
            />
          </div>
        ))}

        {/* <div className="items">Item 4</div> */}
      </Carousel>
    </div>
  );
};
export default Swipper;
