
const card = document.querySelector(".card");

document.addEventListener("mousemove", (e) => {
  rotateElement(e, card);
});

function rotateElement(event, element) {
  // get mouse position
  const x = event.clientX;
  const y = event.clientY;
  // console.log(x, y)

  // find the middle
  const middleX = window.innerWidth / 3;
  const middleY = window.innerHeight / 1.6;
  // console.log(middleX, middleY)

  // get offset from middle as a percentage
  // and tone it down a little
  const offsetX = ((x - middleX) / middleX) * 35;
  const offsetY = ((y - middleY) / middleY) * 35;
  // console.log(offsetX, offsetY);

  // set rotation
  element.style.setProperty("--rotateX", -1 * offsetY + "deg");
  element.style.setProperty("--rotateY", offsetX + "deg");
}



