export class Validator {
  constructor(form) {
    this.form = form;
    this.error = false;
  }

  validateFields() {
    this.validateInputs();
    this.validateTextareas();
  }

  validateInputs() {
    const inputs = this.form.querySelectorAll("input");

    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        input.nextElementSibling.classList.remove("d-none");
        this.error = true;
      }
    });
  }

  validateTextareas() {
    const textareas = this.form.querySelectorAll("textarea");

    textareas.forEach((textarea) => {
      if (textarea.value.trim() === "") {
        textarea.nextElementSibling.classList.remove("d-none");
        this.error = true;
      }
    });
  }

  clearErrors() {
    this.error = false;
    this.form
      .querySelectorAll(".text-danger")
      .forEach((error) => error.classList.add("d-none"));
  }
}
