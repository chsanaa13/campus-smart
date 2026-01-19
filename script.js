// 👩‍🎓 Étudiants
const students = {
    "A12345": { name: "Hanane Gnadi", points: 0 },
    "A67890": { name: "sanaa chabih", points: 0 }
};

let currentStudent = null;
let currentQRCode = null;

// 🏠 LANDING PAGE - Initialize
window.addEventListener('DOMContentLoaded', function() {
    console.log("Page loaded");
    
    // S'assurer que seul le landing est visible
    document.getElementById("landing").style.display = "flex";
    document.getElementById("login").style.display = "none";
    document.getElementById("app").style.display = "none";
    document.getElementById("backBtn").style.display = "none";
    
    // Generate QR code after ensuring library is loaded
    setTimeout(generateLandingQR, 1000);
});

function generateLandingQR() {
    const qrElement = document.getElementById("appQRCode");
    if (!qrElement) {
        console.error("QR element not found");
        return;
    }
    
    if (typeof QRCode === 'undefined') {
        console.error("QRCode library not loaded");
        return;
    }
    
    // Clear any existing QR code
    qrElement.innerHTML = "";
    
    try {
        const qrURL = "https://chsanaa13.github.io/campus-smart/";
        new QRCode(qrElement, {
            text: qrURL,
            width: 200,
            height: 200,
            colorDark: "#6366f1",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        console.log("QR Code generated successfully");
    } catch (error) {
        console.error("Error generating QR code:", error);
    }
}

// Navigate to login page
function goToLogin() {
    document.getElementById("landing").style.display = "none";
    document.getElementById("login").style.display = "flex";
    document.getElementById("app").style.display = "none";
    document.getElementById("backBtn").style.display = "block";
}

// Retour à l'accueil
function goBackToLanding() {
    document.getElementById("landing").style.display = "flex";
    document.getElementById("login").style.display = "none";
    document.getElementById("app").style.display = "none";
    document.getElementById("backBtn").style.display = "none";
    
    document.getElementById("apogee").value = "";
    document.getElementById("password").value = "";
    currentStudent = null;
}

// 🔐 Login
function login() {
    const code = document.getElementById("apogee").value;

    if (!students[code]) {
        showNotification("❌ Code incorrect", "error");
        return;
    }

    currentStudent = students[code];
    
    document.getElementById("login").style.display = "none";
    document.getElementById("app").style.display = "block";
    document.getElementById("backBtn").style.display = "block";
    document.getElementById("landing").style.display = "none";

    document.getElementById("studentName").textContent = currentStudent.name;
    document.getElementById("points").textContent = currentStudent.points;

    showSection("dashboard");
    
    loadMenu();
    loadRooms();
    renderCalendar();
    generateQRCode(code);
    
    showNotification(`✅ Bienvenue ${currentStudent.name} !`, "success");
}

// 🚪 Logout
function logout() {
    if (confirm("Voulez-vous vraiment vous déconnecter ?")) {
        currentStudent = null;
        currentQRCode = null;
        document.getElementById("app").style.display = "none";
        document.getElementById("landing").style.display = "flex";
        document.getElementById("backBtn").style.display = "none";
        document.getElementById("apogee").value = "";
        document.getElementById("password").value = "";
        showNotification("👋 À bientôt !", "info");
    }
}

// 🔄 Switch Login Tab
function switchLoginTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.login-method').forEach(method => method.classList.remove('active'));
    
    if (tab === 'manual') {
        document.querySelector('.tab-btn:first-child').classList.add('active');
        document.getElementById('manualLogin').classList.add('active');
    } else {
        document.querySelector('.tab-btn:last-child').classList.add('active');
        document.getElementById('qrLogin').classList.add('active');
    }
}

// 📷 Scan QR Code
function scanQRCode() {
    showNotification("📷 Fonctionnalité de scan en cours de développement...", "info");
    setTimeout(() => {
        const testCode = "A12345";
        if (students[testCode]) {
            document.getElementById("apogee").value = testCode;
            login();
        }
    }, 2000);
}

// 🔀 Navigation
function showSection(id) {
    document.querySelectorAll(".box").forEach(b => b.style.display = "none");
    document.getElementById(id).style.display = "block";
}

// 📚 Bibliothèque
const library = {
    cpge: [
        "Analyse – Monier",
        "Algèbre – Monier",
        "Méthodes mathématiques – Peseux",
        "Physique – Moysset",
        "Thermodynamique – Wald"
    ],
    aero: [
        "Introduction to Flight – Anderson",
        "Aircraft Structures – Megson",
        "Fundamentals of Aerodynamics"
    ],
    meca: [
        "Mechatronics – Bolton",
        "Modern Control – Ogata",
        "Robotics – Siciliano"
    ],
    data: [
        "Introduction to Data Mining – Tan",
        "Data Mining: Concepts and Techniques – Han & Kamber",
        "Python for Data Analysis – Wes McKinney"
    ],
    info: [
        "Algorithms – Cormen",
        "Clean Code – Martin",
        "Networks – Tanenbaum"
    ],
    energy: [
        "Thermodynamics – Çengel",
        "Heat Transfer – Incropera"
    ],
    auto: [
        "Engines – Heywood",
        "Vehicle Dynamics – Gillespie"
    ]
};

function showBooks(field) {
    const list = document.getElementById("booksByField");
    list.innerHTML = "";

    if (!field) return;

    library[field].forEach(book => {
        const li = document.createElement("li");
        li.innerHTML = `📘 ${book} <button onclick="reserveBook('${book}')">Réserver</button>`;
        list.appendChild(li);
    });
}

function reserveBook(bookName) {
    showNotification(`Livre "${bookName}" réservé avec succès ✔`, "success");
}

// 🍔 Buvette
const menu = {
    Pizza: [
        { name: "Pizza Margherita", price: 19 },
        { name: "Pizza 4 Fromages", price: 23 }
    ],
    Sandwich: [
        { name: "Sandwich Fromage", price: 12 },
        { name: "Sandwich Poulet", price: 15 }
    ],
    Tacos: [
        { name: "Tacos Poulet", price: 22 },
        { name: "Tacos Mixte", price: 25 }
    ],
    Boisson: [
        { name: "Eau", price: 5 },
        { name: "Jus", price: 7 }
    ]
};

function loadMenu() {
    const grid = document.getElementById("menuGrid");
    grid.innerHTML = "";

    for (let category in menu) {
        const section = document.createElement("div");
        section.className = "menu-section";
        section.innerHTML = `<h3>${category}</h3>`;

        menu[category].forEach(item => {
            section.innerHTML += `
                <div class="menu-item">
                    <span>${item.name} - ${item.price} DH</span>
                    <button onclick="order('${item.name}')">Commander</button>
                </div>`;
        });

        grid.appendChild(section);
    }
}

function order(itemName) {
    showNotification(`✅ ${itemName} commandé avec succès !`, "success");
}

// 🏫 Salles
const rooms = [
    { name: "Salle A1", free: true },
    { name: "Salle B2", free: false },
    { name: "Salle C3", free: true }
];

function loadRooms() {
    const roomList = document.getElementById("roomList");
    if (!roomList) return;

    roomList.innerHTML = "";
    rooms.forEach((room, index) => {
        const li = document.createElement("li");
        li.innerHTML = room.free
            ? `${room.name} ✅ Libre <button onclick="reserveRoom(${index})">Réserver</button>`
            : `${room.name} ❌ Occupée`;
        roomList.appendChild(li);
    });
}

function reserveRoom(index) {
    rooms[index].free = false;
    loadRooms();
    showNotification(`Salle ${rooms[index].name} réservée avec succès ✔`, "success");
}

// 📝 Submit Reclamation
function submitReclamation() {
    const text = document.getElementById("reclamationText").value;
    if (!text.trim()) {
        showNotification("⚠️ Veuillez décrire votre réclamation", "warning");
        return;
    }
    document.getElementById("reclamationText").value = "";
    showNotification("✔ Réclamation envoyée avec succès.", "success");
}

// 📱 QR CODE GENERATION
function generateQRCode(apogeeCode) {
    const qrElement = document.getElementById("qrCodeDisplay");
    if (!qrElement) return;
    
    qrElement.innerHTML = "";
    
    if (typeof QRCode === 'undefined') {
        console.error("QRCode library not available");
        return;
    }
    
    currentQRCode = new QRCode(qrElement, {
        text: apogeeCode,
        width: 256,
        height: 256,
        colorDark: "#2563eb",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    
    document.getElementById("qrStudentName").textContent = currentStudent.name;
    document.getElementById("qrStudentCode").textContent = `Code: ${apogeeCode}`;
    document.getElementById("qrPoints").textContent = currentStudent.points;
}

function downloadQRCode() {
    const canvas = document.querySelector('#qrCodeDisplay canvas');
    if (!canvas) {
        showNotification("❌ QR Code non disponible", "error");
        return;
    }
    
    const link = document.createElement('a');
    link.download = `QRCode_${currentStudent.name.replace(/\s+/g, '_')}.png`;
    link.href = canvas.toDataURL();
    link.click();
    
    showNotification("✅ QR Code téléchargé !", "success");
}

function printQRCode() {
    showNotification("🖨️ Impression lancée...", "info");
}

function shareQRCode() {
    showNotification("📤 Fonctionnalité de partage disponible prochainement", "info");
}

// 🤖 AI ASSISTANT
function sendAIMessage() {
    const input = document.getElementById("aiInput");
    const message = input.value.trim();
    
    if (!message) {
        showNotification("⚠️ Veuillez entrer un message", "warning");
        return;
    }
    
    const chatMessages = document.getElementById("chatMessages");
    
    const userMsg = document.createElement("div");
    userMsg.className = "ai-message";
    userMsg.innerHTML = `
        <div class="ai-avatar" style="background: linear-gradient(135deg, #3b82f6, #2563eb);">👤</div>
        <div class="message-content" style="background: linear-gradient(135deg, #f0fdf4, #dcfce7); border-color: #10b981;">
            <p><strong>Vous</strong></p>
            <p>${message}</p>
        </div>
    `;
    chatMessages.appendChild(userMsg);
    
    input.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    setTimeout(() => {
        const response = getAIResponse(message);
        
        const aiMsg = document.createElement("div");
        aiMsg.className = "ai-message";
        aiMsg.innerHTML = `
            <div class="ai-avatar">🤖</div>
            <div class="message-content">
                <p><strong>Assistant IA</strong></p>
                <p style="white-space: pre-line;">${response}</p>
            </div>
        `;
        chatMessages.appendChild(aiMsg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 800);
}

function getAIResponse(message) {
    const msg = message.toLowerCase();
    
    if (msg.includes("bonjour") || msg.includes("salut")) {
        return `👋 Bonjour ! Comment puis-je vous aider ?`;
    }
    
    if (msg.includes("cours")) {
        return `📅 Vos prochains cours:\n• Lundi 9h00 : Mathématiques\n• Mardi 14h00 : Programmation\n• Mercredi 10h00 : Physique`;
    }
    
    if (msg.includes("livre")) {
        return `📚 Recommandations:\n• Clean Code - Robert Martin\n• Algorithms - Cormen`;
    }
    
    return `🤔 Je peux vous aider avec:\n• Vos cours\n• Recommandations de livres\n• Informations ENSA`;
}

function askAI(question) {
    document.getElementById("aiInput").value = question;
    sendAIMessage();
}

// 📅 CALENDRIER
let currentCalendarMonth = new Date().getMonth();
let currentCalendarYear = new Date().getFullYear();

function renderCalendar() {
    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
                        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    
    document.getElementById("currentMonth").textContent = 
        `${monthNames[currentCalendarMonth]} ${currentCalendarYear}`;
    
    const grid = document.getElementById("calendarGrid");
    grid.innerHTML = "";
    
    const dayNames = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
    dayNames.forEach(day => {
        const header = document.createElement("div");
        header.className = "calendar-day-header";
        header.textContent = day;
        grid.appendChild(header);
    });
    
    const firstDay = new Date(currentCalendarYear, currentCalendarMonth, 1).getDay();
    const daysInMonth = new Date(currentCalendarYear, currentCalendarMonth + 1, 0).getDate();
    const startDay = firstDay === 0 ? 6 : firstDay - 1;
    
    for (let i = 0; i < startDay; i++) {
        const empty = document.createElement("div");
        empty.className = "calendar-day empty";
        grid.appendChild(empty);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement("div");
        dayDiv.className = "calendar-day";
        dayDiv.innerHTML = `<div class="day-number">${day}</div>`;
        grid.appendChild(dayDiv);
    }
}

function changeMonth(direction) {
    currentCalendarMonth += direction;
    
    if (currentCalendarMonth > 11) {
        currentCalendarMonth = 0;
        currentCalendarYear++;
    } else if (currentCalendarMonth < 0) {
        currentCalendarMonth = 11;
        currentCalendarYear--;
    }
    
    renderCalendar();
}

// 🔔 NOTIFICATIONS
function showNotification(message, type = "info") {
    alert(message);
}
