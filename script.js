function showPage(pageName) {
    const pages = document.querySelectorAll('.page');
    const buttons = document.querySelectorAll('.nav-btn');
    
    pages.forEach(page => page.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(pageName).classList.add('active');
    event.target.classList.add('active');
}

function toggleMessage() {
    const message = document.getElementById('toggleMessage');
    message.classList.toggle('show');
}

function showUserInfo() {
    const name = "Arshbhatta Bhaumik";
    const registrationNumber = "230953166";
    const phoneNumber = "932xxxxxxx";
    
    alert(`Name: ${name}\nRegistration Number: ${registrationNumber}\nPhone Number: ${phoneNumber}`);
}