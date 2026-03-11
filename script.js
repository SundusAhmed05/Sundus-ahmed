function handleSubmit(event) {
    event.preventDefault();

    // Show the popup
    document.getElementById("successPopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("successPopup").style.display = "none";
    document.querySelector("form").reset();
}