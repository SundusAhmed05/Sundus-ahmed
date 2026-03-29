function handleSubmit(event) {
    event.preventDefault();

    document.getElementById("successPopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("successPopup").style.display = "none";
    document.querySelector("form").reset();
}