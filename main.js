import "./style.scss";
import { initAll } from "@ogcio/ogcio-ds";

document.addEventListener("DOMContentLoaded", function () {
  const contentWrapper = document.querySelector(".poc-govie");
  contentWrapper.style.display = "block"; // Show content when DOM is loaded
});

initAll();
