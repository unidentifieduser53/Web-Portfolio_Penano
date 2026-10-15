document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".current-year").forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });

    const registrationForm = document.getElementById("registrationForm");
    const formMessage = document.getElementById("formMessage");

    if (registrationForm) {
        registrationForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const studentName = document.getElementById("studentName").value.trim();
            const course = document.getElementById("course").value;

            if (studentName === "" || course === "") {
                formMessage.textContent = "Please complete all required fields.";
                return;
            }

            formMessage.textContent =
                "Registration submitted successfully for " + studentName + " (" + course + ").";

            registrationForm.reset();
        });
    }
});
