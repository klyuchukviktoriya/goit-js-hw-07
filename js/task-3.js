const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", (event) => {

    if (event.currentTarget.value.trim() !== "") {
        output.textContent = event.currentTarget.value.trim();
    } else {
        output.textContent = "Anonymous";
    }
    console.log(event.currentTarget.value);
});

const h1 = output.parentNode;
h1.classList.add("hello");