// import React from "react";
// import Carousel from "react-multi-carousel";
// import Surprise from "./Surprise";



// const responsive = {
//   desktop: {
//     breakpoint: {
//       max: 3000,
//       min: 1024,
//     },

//     items: 3,
//     slidesToSlide: 2,
//     partialVisibilityGutter: 40,
//   },

//   mobile: {
//     breakpoint: {
//       max: 464,
//       min: 0,
//     },

//     items: 1,
//     slidesToSlide: 1,
//     partialVisibilityGutter: 30,
//   },

//   tablet: {
//     breakpoint: {
//       max: 1024,
//       min: 200,
//     },

//     items: 2,
//     slidesToSlide: 2,
//     partialVisibilityGutter: 30,
//   },
// };

// const CarouselNew = ({ deviceType }) => {

//   return (
// <Carousel
//   swipeable={true}
//   draggable={true}
//   showDots={true}
//   responsive={responsive}
//   ssr={false} // means to render carousel on server-side.
//   infinite={true}
//   autoPlay={false}
//   keyBoardControl={true}
//   customTransition="all .5"
//   transitionDuration={1000}
//   containerClass="carousel-container"
//   removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={deviceType}
//   dotListClass="custom-dot-list-style"
//   itemClass="carousel-item-padding-40-px"
// >
//   <div> <Surprise /></div>
//   <div> <Surprise /></div>
//   <div> <Surprise /></div>
//   <div> <Surprise /></div>
// </Carousel>
//   );
// };

// export default CarouselNew;
