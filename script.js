/* Bio Buttons */

let colors = ["#24d05a", "#eb4888", "#10a2f5", "#e9bc3f"];

(function() {
  setBioEventListener();
})();

function setBioEventListener() {
  Array.from(document.getElementsByTagName("button")).forEach(e => {
    e.addEventListener("click", bioToggle);
  });
}

function bioToggle(e) {
  let bioType = e.target;
  let color = #f4aeb8;
  off(bioType);
  bioType.style.cssText = `border-color: ${color}; color: ${color}; font-weight: bold;`;
  let bioTypeElement = document.getElementsByClassName(bioType.id)[0];
  if (bioTypeElement !== undefined) bioTypeElement.classList.add("show");
}

function off(bioType) {
  Array.from(document.getElementsByTagName("button")).forEach(butt => {
    butt.style.borderColor = "#96979c";
    butt.style.color = "#96979c";
  });
  Array.from(document.getElementsByClassName("bio")).forEach(e => {
    e.classList.remove("show");
  });
}
