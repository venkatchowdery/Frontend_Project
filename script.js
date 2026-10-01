// ================= LOGIN =================

function login(event) {

    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "patient" && password === "1234") {

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid username or password!");

    }
}


// ================= LOGOUT =================

function logout() {

    window.location.href = "index.html";

}


// ================= SEARCH DOCTORS =================

function searchDoctors() {

    const searchValue =
        document.getElementById("doctorSearch").value.toLowerCase();

    const specialization =
        document.getElementById("specializationFilter").value;

    const doctors =
        document.querySelectorAll(".doctor-card");

    doctors.forEach(function(doctor) {

        const doctorName =
            doctor.querySelector("h2").textContent.toLowerCase();

        const doctorSpecialization =
            doctor.dataset.specialization;

        const nameMatch =
            doctorName.includes(searchValue);

        const specializationMatch =
            specialization === "all" ||
            doctorSpecialization === specialization;

        if (nameMatch && specializationMatch) {

            doctor.style.display = "block";

        } else {

            doctor.style.display = "none";

        }

    });

}


// ================= FILTER =================

function filterDoctors() {

    searchDoctors();

}


// ================= DOCTOR DETAILS =================

function showDoctor(
    name,
    specialization,
    experience,
    days,
    time,
    room
) {

    document.getElementById("modalName").textContent = name;

    document.getElementById("modalSpecialization").textContent =
        specialization;

    document.getElementById("modalExperience").textContent =
        experience;

    document.getElementById("modalDays").textContent =
        days;

    document.getElementById("modalTime").textContent =
        time;

    document.getElementById("modalRoom").textContent =
        room;

    document.getElementById("doctorModal").style.display = "flex";

}


// ================= CLOSE POPUP =================

function closeModal() {

    document.getElementById("doctorModal").style.display = "none";

}


// ================= APPOINTMENT =================

function bookAppointment() {

    window.location.href = "appointment.html";

}


// ================= CLOSE MODAL WHEN CLICKING OUTSIDE =================

window.onclick = function(event) {

    const modal = document.getElementById("doctorModal");

    if (event.target === modal) {

        modal.style.display = "none";

    }

};
function submitAppointment(event) {

    event.preventDefault();

    const patient =
        document.getElementById("patientName").value;

    const doctor =
        document.getElementById("doctorName").value;

    const date =
        document.getElementById("appointmentDate").value;

    const time =
        document.getElementById("appointmentTime").value;


    // Save appointment details
    localStorage.setItem("patient", patient);
    localStorage.setItem("doctor", doctor);
    localStorage.setItem("date", date);
    localStorage.setItem("time", time);


    // Generate appointment ID
    const appointmentId =
        "CAH" + Math.floor(10000 + Math.random() * 90000);

    localStorage.setItem("appointmentId", appointmentId);


    // Open confirmation page
    window.location.href = "confirmation.html";
}
// ================= CONFIRMATION DATA =================

if (window.location.pathname.includes("confirmation.html")) {

    document.getElementById("confirmPatient").textContent =
        localStorage.getItem("patient");

    document.getElementById("confirmDoctor").textContent =
        localStorage.getItem("doctor");

    document.getElementById("confirmDate").textContent =
        localStorage.getItem("date");

    document.getElementById("confirmTime").textContent =
        localStorage.getItem("time");

    document.getElementById("appointmentId").textContent =
        localStorage.getItem("appointmentId");
}
// ================= MY APPOINTMENT =================

if (document.getElementById("myAppointment")) {

    const patient = localStorage.getItem("patient");
    const doctor = localStorage.getItem("doctor");
    const date = localStorage.getItem("date");
    const time = localStorage.getItem("time");

    if (patient && doctor && date && time) {

        document.getElementById("myPatient").textContent = patient;
        document.getElementById("myDoctor").textContent = doctor;
        document.getElementById("myDate").textContent = date;
        document.getElementById("myTime").textContent = time;

    } else {

        document.getElementById("myAppointment").style.display = "none";

    }
}
