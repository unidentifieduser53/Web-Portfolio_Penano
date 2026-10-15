
const studentName = document.getElementById("studentName");
const studentImage = document.getElementById("studentImage");
const nameInput = document.getElementById("nameInput");
const yearSelect = document.getElementById("yearSelect");
const clickBtn = document.getElementById("clickBtn");
const dblClickBtn = document.getElementById("dblClickBtn");
const changeImageBtn = document.getElementById("changeImageBtn");
const pressBtn = document.getElementById("pressBtn");
const statusText = document.getElementById("status");
const image = document.getElementById("image");

clickBtn.addEventListener("click", function () {

    studentName.innerHTML = "Future Akyat bahay";
    statusText.innerHTML = "Yung double try mo.";
    clickBtn.style.backgroundColor = "red";

});



dblClickBtn.addEventListener("dblclick", function () {

    studentName.style.color = "green ";
    statusText.innerHTML = "Isa pa nga.";

});



studentImage.addEventListener("mouseover", function () {

    studentImage.style.transform = "scale(1.1)";
    statusText.innerHTML = "Wag mo tatanggalin.";

});




studentImage.addEventListener("mouseout", function () {

    studentImage.style.transform = "scale(1)";
    statusText.innerHTML = "balik mo yan sa pic, patulog nako.";

});

changeImageBtn.addEventListener("click", function(){
    studentImage.setAttribute = ("src", "Images/student1.jpg");
});


pressBtn.addEventListener("mousedown", function () {

    pressBtn.style.backgroundColor = "red";
    pressBtn.style.transform = "scale(0.95)";
    statusText.innerHTML = "Mouse mo mabigat.";

});




pressBtn.addEventListener("mouseup", function () {

    pressBtn.style.backgroundColor = "blueviolet";
    pressBtn.style.transform = "scale(1)";
    statusText.innerHTML = "Mouse mo nawala.";

});




nameInput.addEventListener("focus", function () {

    nameInput.style.backgroundColor = "lightyellow";
    statusText.innerHTML = "Nuksss sige nga click mo ulet sa labas.";

});




nameInput.addEventListener("blur", function () {

    nameInput.style.backgroundColor = "white";
    statusText.innerHTML = "Hala mali, click mo ulet";

});




yearSelect.addEventListener("change", function () {

    statusText.innerHTML = "Year selected: " + yearSelect.value;

});




nameInput.addEventListener("input", function () {

    studentName.innerHTML = nameInput.value || "Dwightyyyy";
    statusText.innerHTML = "Saglet nag tatype yung tao...";

});

