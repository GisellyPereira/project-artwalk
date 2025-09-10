import "@fortawesome/fontawesome-free/css/all.min.css";
import "../css/style.css";

import { logoArtwalk } from "./imgs";

function renderImageHeader() {
  const imgLogos = document.querySelectorAll(".logo-artwalk-header");
  
  imgLogos.forEach(img => {
    img.src = logoArtwalk;
  });
}

renderImageHeader();
