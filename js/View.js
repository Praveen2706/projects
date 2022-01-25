import { controlData } from "./controler.js";

class View {
  _parentEl = document.querySelectorAll("li");
  _iyal = document.querySelector(".iyal-distribution");
  _iyalHead = document.querySelector(".iyal-head");

  _eventListener(element, elToList) {
    element.addEventListener("click", () => {
      elToList.classList.toggle("hidden");
    });
  }

  iyalLister() {
    this._eventListener(this._iyalHead, this._iyal);
  }

  adhikaramLister() {
    this._parentEl.forEach((el) => {
      if (el.dataset.num) {
        el.addEventListener("click", (e) => {
          const number = e.target.dataset.num;
          document
            .querySelector(`.adhikaram${number}`)
            .classList.toggle("hidden");
        });
      } else {
        el.addEventListener("click", (e) => {
          const n = parseInt(e.target.className);
          if (document.querySelector(".kural")) {
            document.querySelector(".kural").remove();
          } else {
            controlData(n);
          }
        });
      }
    });
  }

  kural(list) {
    let words = "";
    for (let i = 0; i < 10; i++) {
      words += `
      <p class="kural-head">குறள் ${list[i].number}:</p>
      <p>${list[i].line1}</p>
      <p>${list[i].line2}</p>
      <p class="kural-explanation">உரை:</p>
      <p>${list[i].tam_exp}</p>
      `;
    }
    return words;
  }

  renderResults(list, n) {
    const element = document.getElementsByClassName(`${n}`)[0];
    element.insertAdjacentHTML(
      "afterend",
      `
    <div class = 'kural'>
    ${this.kural(list)}
    </div>`
    );
  }
}

export default new View();
