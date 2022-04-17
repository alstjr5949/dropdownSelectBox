const selectBtn = document.querySelector(".selectBtn");
const langListBox = document.querySelector(".lang");

const selectBtnClick = () => {
  selectBtn.classList.toggle("up");
  langListBox.classList.toggle("hidden");
};

const listClick = (event) => {
  if (event.target.nodeName === "BUTTON") {
    selectBtn.innerText = event.target.innerText;
    selectBtn.classList.toggle("up");
    langListBox.classList.toggle("hidden");
  }
};

langListBox.addEventListener("click", listClick);

selectBtn.addEventListener("click", selectBtnClick);
