"user-strict";

const dropDownFunctionForHeading = function (number) {
  document
    .querySelector(`.question-` + number)
    .addEventListener(`click`, function () {
      if (
        document.querySelector(`.answer-` + number).classList.contains(`hidden`)
      ) {
        // Opens dropdown //
        document.querySelector(`.answer-` + number).classList.remove(`hidden`);
        document
          .querySelector(`.question-` + number)
          .classList.add(`weight-color`);
        document.querySelector(`.arrow-` + number).classList.add(`rotate`);
      } else {
        // Closes dropdown //
        document.querySelector(`.answer-` + number).classList.add(`hidden`);
        document
          .querySelector(`.question-` + number)
          .classList.remove(`weight-color`);
        document.querySelector(`.arrow-` + number).classList.remove(`rotate`);
      }
    });
};

dropDownFunctionForHeading(`one`);
dropDownFunctionForHeading(`two`);
dropDownFunctionForHeading(`three`);
dropDownFunctionForHeading(`four`);
dropDownFunctionForHeading(`five`);


$(document).ready(function () {
  $(window).scrollTop(1);
});

