import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
  return (
    <div>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={5000}
        customTransition="all .5"
        transitionDuration={500}
        removeArrowOnDeviceType={["desktop", "mobile"]}
        autoPlay={true}
      >
        <div className="items">Item 1</div>
        <div className="item">Item 2</div>
        <div className="it">Item 3</div>
        {/* <div className="items">Item 4</div> */}
      </Carousel>
    </div>
  );
};
export default Swipper;
