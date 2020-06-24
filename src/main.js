import $ from "jquery";
window.$ = $;
import "bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/cerulean/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './main.css';
import "jquery-smooth-scroll";

$(document).ready(() => {
    $("a").smoothScroll();
});