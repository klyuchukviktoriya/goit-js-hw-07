const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formShits = {};
    formData.forEach((value, key) => {
        formShits[key] = value.trim();
    })


    if (Object.values(formShits).some(value => value === "")) {
        alert("All form fields must be filled in");
    } else {
        console.log(formShits);
        form.reset();
    }
}