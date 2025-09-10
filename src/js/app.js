import "@fortawesome/fontawesome-free/css/all.min.css";
import "../css/style.css";


import { logoArtwalk } from "./imgs";

function renderImageHeader() {
    const imgLogo = document.querySelector(".logo-artwalk-header");
    imgLogo.src = logoArtwalk;
}

renderImageHeader();


