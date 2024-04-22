class FormSubmit {
    constructor(settings) {
      this.settings = settings;
      this.form = document.querySelector(settings.form);
      this.successMessage = document.querySelector(settings.success);
      this.errorMessage = document.querySelector(settings.error);
      if (this.form) {
        this.url = this.form.getAttribute("action");
      }
      this.sendForm = this.sendForm.bind(this);
    }
  
    displaySuccess() {
      this.form.reset(); 
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
      this.settings.button.disabled = true;
      this.settings.button.innerHTML = "Enviando...";
    }
  
    init() {
      if (this.form) this.form.addEventListener("submit", this.sendForm);
      return this;
    }
  }
  
  const formSubmit = new FormSubmit({
    form: ".contact-form",
    success: ".success",
    error: ".error",
    button: document.querySelector(".contact-form button"),
  });
  formSubmit.init();