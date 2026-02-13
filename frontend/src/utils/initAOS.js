import AOS from "aos";
import "aos/dist/aos.css";

export const initAOS = () => {
  AOS.init({
    duration: 1200,
    easing: "ease-in-out",
    once: false,
  });
};
