import { Validator } from "./Validator.mjs";

const form = document.querySelector("form");

const validator = new Validator(form);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  validator.clearErrors();
  validator.validateFields();

  if (!validator.error) this.submit();
});
