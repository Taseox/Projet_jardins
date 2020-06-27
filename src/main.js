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
  const progressBars = findProgressBars();
  replaceProgressBars(progressBars);
});

function findProgressBars() {
  return [...document.querySelectorAll(".progress")];
}

function replaceProgressBars(progressBars) {
  for (let progressBar of progressBars) {
    const valueElement = progressBar.querySelector(".progress-bar");
    var value = valueElement.getAttribute("aria-valuenow");
    var canvas = document.createElement("canvas");
    var color = valueElement.getAttribute("class");
    progressBar.replaceWith(canvas);
    createChart(canvas, value, color);
  }
}

function createChart(ctx, value, color) {
  //FAIRE UN IF ICI POUR LA COULEUR!
  new Chart(ctx, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [value, 100 - value],
          backgroundColor: ["white", "white"],
          borderColor: ["#00c9ff", "white"]
        }
      ]
    },
    options: {}
  });
}

const Choreographer = require("choreographer-js");

var choreographer = new Choreographer({
  animations: [
    {
      range: [window.innerWidth / 2, window.innerWidth],
      selector: "#box",
      type: "change",
      style: "backgroundColor",
      to: "#00c9ff"
    }
  ]
});
window.addEventListener("mousemove", function(e) {
  choreographer.runAnimationsAt(e.clientX);
});
