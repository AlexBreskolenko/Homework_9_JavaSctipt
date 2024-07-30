// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.
const inputEll = document.querySelector("#from");
const spanEll = document.querySelector("span");

inputEll.addEventListener("input", (e) => {
  spanEll.textContent = e.target.value;
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.
const btnEll = document.querySelector(".messageBtn");

btnEll.addEventListener("click", () => {
  btnEll.classList.add("animate_animated", "animate_fadeInLeftBig");
  btnEll.style.visibility = "visible";
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const formEl = document.querySelector("form");
const inputEl = formEl.querySelectorAll(".form-control");

formEl.addEventListener("submit", (e) => {
  inputEl.forEach((element) => {
    if (element.value === "") {
      element.classList.add("error");
      const errorEl = document.querySelector(".error");
      errorEl.style.border = "1px solid red";
      e.preventDefault();
    } else {
      errorEl.classList.remove("error");
    }
  });
});
