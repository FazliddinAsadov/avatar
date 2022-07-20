const inpApi = document.querySelector("#inpApi");
const btn = document.querySelector("[data-api]");
const imageBox = document.querySelector(".image");
const selects = document.querySelector("#mySelect");

console.log(selects);

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const idx = selects.selectedIndex;
  console.log(idx);
  const ans = document.getElementsByTagName("option")[idx].value;
  console.log(ans);

  const inpVal = inpApi.value;
  const image = document.createElement("img");
  image.setAttribute(
    "src",
    `https://avatars.dicebear.com/api/${ans}/${inpVal}.svg`
  );
  image.setAttribute("width", "250");
  image.setAttribute("height", "250");
  image.style.borderRadius = "100%";
  image.style.background = "blue";

  imageBox.appendChild(image);
});
