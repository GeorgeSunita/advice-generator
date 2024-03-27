window.onload = function () {
  const adviceDiv = document.getElementById("advice");
  const formEl = document.getElementById("submit");
  const adviceHeadingEl = document.getElementById("heading");
  const displayAdvice = function (advice) {
    adviceHeadingEl.textContent = advice.slip.id;
    adviceDiv.textContent = '"' + advice.slip.advice + '"';
    adviceDiv.classList.add("adDiv");
  };

  formEl.addEventListener("submit", function (e) {
    e.preventDefault();

    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then(function (data) {
        console.log(data.slip);
        displayAdvice(data);
      });
  });
};
