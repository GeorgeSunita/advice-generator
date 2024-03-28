window.onload = function () {
  const adviceDiv = document.querySelector("#advice");
  const adviceBtn = document.querySelector("#getAdviceBtn");
  const adviceHeadingEl = document.querySelector("#heading");
  const displayAdvice = function (advice) {
    adviceHeadingEl.textContent = advice.slip.id;
    adviceDiv.innerHTML = `&quot ${advice.slip.advice} &quot`;
    adviceDiv.classList.add("adDiv");
  };

  adviceBtn.addEventListener("click", function (e) {
    e.preventDefault();

    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then(function (data) {
        console.log(data.slip);
        displayAdvice(data);
      });
  });
};
