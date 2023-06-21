/* var pintar = function () {
    this.style.backgroundColor = "yellow";
};
ele = document.getElementById("ele1");
ele.addEventListener("click", pintar);
 */

function pintar(elemento, color = "green") {
    elemento.style.backgroundColor = color;
}
  
var ele = document.getElementById("ele1");
ele.addEventListener("click", function() {
    pintar(this, "yellow");
});