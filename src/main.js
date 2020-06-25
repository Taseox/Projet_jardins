/* eslint-disable no-unused-vars */
import $ from "jquery";
window.$ = $;
import "bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/cerulean/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./main.css";
import "jquery-smooth-scroll";
import Chart from "chart.js";

$(document).ready(() => {
  $("a").smoothScroll();
});

var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  type: "doughnut",

  data: {
    labels: ["Force", "Agilité", "Intelligence", "Dexterité"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)"
        ],
        data: [10, 3, 1, 4]
      }
    ]
  },
  options: {}
});
