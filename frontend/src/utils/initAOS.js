import AOS from "aos";
import "aos/dist/aos.css";

export const initAOS = () => {
  AOS.init({
    duration: 2000,
    easing: "ease-in-out",
    once: false,
  });
};
