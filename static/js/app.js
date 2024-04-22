class FormSubmit {
    constructor(settings) {
      this.settings = settings;
      this.form = document.querySelector(settings.form);
      this.formButton = document.querySelector(settings.button);
      if (this.form) {
        this.url = this.form.getAttribute("action");
      }
      this.sendForm = this.sendForm.bind(this);
    }
  
    displaySuccess() {
      this.form.reset(); // Reset the form fields
      this.successMessage.style.display = "block";
      this.errorMessage.style.display = "none";
    }
  
    displayError() {
      this.errorMessage.style.display = "block";
      this.successMessage.style.display = "none";
    }
  
    getFormObject() {
      const formObject = {};
      const fields = this.form.querySelectorAll("[name]");
      fields.forEach((field) => {
        formObject[field.getAttribute("name")] = field.value;
      });
      return formObject;
    }
  
    async sendForm(event) {
      try {
        event.preventDefault();
        this.onSubmission();
        await fetch(this.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(this.getFormObject()),
        });
        this.displaySuccess();
      } catch (error) {
        this.displayError();
        throw new Error(error);
      }
    }
  
    onSubmission() {
      this.formButton.disabled = true;
      this.formButton.innerText = "Enviando...";
    }
  
    init() {
      if (this.form) this.form.addEventListener("submit", this.sendForm);
      return this;
    }
  }
  
  const formSubmit = new FormSubmit({
    form: ".contact-form",
    button: ".contact-form button",
    success: ".success",
    error: ".error",
  });
  formSubmit.init();
  