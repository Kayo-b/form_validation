class Validation {

    constructor() {
        this.form = document.querySelector("form");
        this.email = document.getElementById("mail");
        this.emailError = document.querySelector("#mail + span.error");
        this.country = document.getElementById("country");
        this.countryError = document.querySelector("#country + span.error");
        this.zip = document.getElementById("zip");
        this.zipError = document.querySelector("#zip + span.error");
        this.psw = document.getElementById("psw");
        this.pswError = document.querySelector("#psw + span.error");
        this.pswConf = document.getElementById("pswConf");
        this.pswConfError = document.querySelector("#pswConf + span.error");
    }

    emailVal() {
        this.email.addEventListener("input", (e) => {
            if(this.email.validity.valid) {
                this.emailError.textContent = "";
                this.emailError.className = "error";
            } else {
                this.showError();
            }
        })
    }

    textVal() {
        this.country.addEventListener("input", (e) => {
            if(this.country.validity.valid) {
                this.countryError.textContent = "";
                this.countryError.className = "error";
            } else {
                this.showErrorCountry();         
            }
        })
    }

    zipVal() {
        this.zip.addEventListener("input", (e) => {
            if(this.zip.validity.valid) {
                this.zipError.textContent = "";
                this.zipError.className = "error";
            } else {
                this.showErrorZip();         
            }
        })
    }


    pswVal() {
        this.psw.addEventListener("input", (e) => {
            if(this.psw.validity.valid) {
                this.pswError.textContent = "";
                this.pswError.className = "error";
                if(this.pswConf.value != this.psw.value) {
                    this.pswConfError.textContent = "Passwords don't match";
                } else {
                    this.pswConfError.textContent = ""
                }
            } else {
                if(this.psw.validity.valid) {
                    if(this.pswConf.value != this.psw.value) {
                    this.pswConfError.textContent = "Passwords don't match";
                } else {
                    this.pswConfError.textContent = ""
                }
                this.showErrorPsw();
            }
                  
            }
        })
    }


    pswConfVal() {
        this.pswConf.addEventListener("input", (e) => {
            if(this.pswConf.validity.valid) {
                this.pswConfError.textContent = "";
                this.pswConfError.className = "error";
                this.showErrorPswConf();
            } else {
                this.showErrorPswConf();         
            }
        })
    }

    formVal() {
        this.form.addEventListener("submit", (e) => {
            if(!this.email.validity.valid) {
                this.showError();
                e.preventDefault();
            }
            if(!this.country.validity.valid) {
                this.showErrorCountry();
                e.preventDefault();
            }
            if(!this.zip.validity.valid) {
                this.showErrorZip();
                e.preventDefault();
            }
            if(!this.psw.validity.valid) {
                this.showErrorPsw();
                e.preventDefault();
            }
            if(this.pswConf.value != this.psw.value) {
                this.showErrorPswConf();
                e.preventDefault();
            }
            
        })
    }

    showError() {
        if(this.email.validity.valueMissing) {
            this.emailError.textContent = "You need to enter an e-mail adress.";
        } else if(this.email.validity.typeMismatch) {
            this.emailError.textContent = "Entered value needs to be an e-mail address";
        } else if(this.email.validity.tooShort) {
            this.emailError.textContent = `Email should be at least ${this.email.minLength} characters; you entered ${this.email.value.length}.`
        }
        this.emailError.className = "error active";
    }

    showErrorCountry() {
        if(this.country.validity.valueMissing) {
            this.countryError.textContent = "You need to enter your country";
        } else if(this.country.validity.typeMismatch) {
            this.countryError.textContent = "Entered value needs to be composed only of letters(A-z)";
        } else if(this.country.validity.tooShort) {
            this.countryError.textContent = `Country name should be at least ${this.country.minLength} characters, you entered ${this.country.value.length}.`
        }
        this.countryError.className = "error active";
    }

    showErrorZip() {
        if(this.zip.validity.valueMissing) {
            this.zipError.textContent = "You need to enter your Zipcode";
        } else if(this.zip.validity.typeMismatch) {
            this.zipError.textContent = "Entered value needs to be composed only of numbers)";
        } else if(this.zip.validity.tooShort) {
            this.zipError.textContent = `Zipcode should be at least ${this.zip.minLength} characters, you entered ${this.zip.value.length}.`
        }
        this.zipError.className = "error active";
    }

    showErrorPsw() {
        if(this.psw.validity.valueMissing) {
            this.pswError.textContent = "You need to enter your Password";
        } else if(this.psw.validity.typeMismatch) {
            this.pswError.textContent = "Entered value needs to be composed only of numbers)";
        } else if(this.psw.validity.tooShort) {
            this.pswError.textContent = `Zipcode should be at least ${this.psw.minLength} characters, you entered ${this.psw.value.length}.`
        }
        this.pswError.className = "error active";
        this.showErrorPswConf(); 
    }

    showErrorPswConf() {
        if(this.pswConf.value != this.psw.value) {
            this.pswConfError.textContent = "Passwords don't match";
            
        }
        //this.pswConfError.className = "error active";
        
    }


}

const validation = new Validation;
validation.formVal();
validation.emailVal();
validation.showError();
validation.textVal();
validation.zipVal();
validation.pswVal();
validation.pswConfVal();