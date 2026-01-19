// 👩‍🎓 Étudiants
// 🏠 LANDING PAGE - Initialize
window.addEventListener('DOMContentLoaded', function() {
    // S'assurer que seul le landing est visible
    document.getElementById("landing").style.display = "flex";
    document.getElementById("login").style.display = "none";
    document.getElementById("app").style.display = "none";
    document.getElementById("backBtn").style.display = "none";
    
    // Generate QR code - Redirige vers la page de login
    // Generate QR code - Redirige vers login automatiquement sur mobile
const currentURL = window.location.href.split('?')[0] + '?qr=1';
new QRCode(document.getElementById("appQRCode"), {
    text: currentURL,
    width: 200,
    height: 200,
    colorDark: "#6366f1",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});
});
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
    
    // Réinitialiser
    document.getElementById("apogee").value = "";
    document.getElementById("password").value = "";
    currentStudent = null;
}
const students = {
    "A12345": { name: "Hanane Gnadi", points: 0 },
    "A67890": { name: "sanaa chabih ", points: 0 }
};

let currentStudent = null;
let currentQRCode = null;

// Navigate to login page
// Navigate to login page
// Navigate to login page
function goToLogin() {
    document.getElementById("landing").style.display = "none";
    document.getElementById("login").style.display = "flex";
    document.getElementById("backBtn").style.display = "block";
}
// Retour à l'accueil depuis login ou app
function goBackToLanding() {
    console.log("Retour à l'accueil..."); // Pour debug
    document.getElementById("landing").style.display = "flex";
    document.getElementById("login").style.display = "none";
    document.getElementById("app").style.display = "none";
    document.getElementById("backBtn").style.display = "none";
    
    // Réinitialiser les champs
    document.getElementById("apogee").value = "";
    document.getElementById("password").value = "";

    // Cacher le bouton retour
    document.getElementById("backBtn").style.display = "none";
    
    // Réinitialiser les champs
    document.getElementById("apogee").value = "";
    document.getElementById("password").value = "";
    
    // Réinitialiser l'étudiant
    currentStudent = null;
}
// 🔐 Login
// 🔐 Login
function login() {
    const code = document.getElementById("apogee").value;

    // Vérifier si le code existe
    if (!students[code]) {
        showNotification("❌ Code incorrect", "error");
        return;
    }

    // Connexion réussie
    currentStudent = students[code];
    
    // Cacher la page login et afficher l'app
    document.getElementById("login").style.display = "none";
    document.getElementById("app").style.display = "block";
    document.getElementById("backBtn").style.display = "block";
    document.getElementById("landing").style.display = "none";

    // Mettre à jour les informations de l'étudiant
    document.getElementById("studentName").textContent = currentStudent.name;
    document.getElementById("points").textContent = currentStudent.points;

    // Afficher le tableau de bord
    showSection("dashboard");
    
    // Charger les données
    loadMenu();
    loadRooms();
    renderCalendar();
    generateQRCode(code);
    
    // Message de bienvenue
    showNotification(`✅ Bienvenue ${currentStudent.name} !`, "success");
}
// 🚪 Logout
function logout() {
    if (confirm("Voulez-vous vraiment vous déconnecter ?")) {
        currentStudent = null;
        currentQRCode = null;
        document.getElementById("app").style.display = "none";
        document.getElementById("landing").style.display = "flex";
        document.getElementById("backBtn").style.display = "none"; // AJOUT
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
    // Pour le moment, simulons un scan réussi
    setTimeout(() => {
        const testCode = "A12345"; // Code de test
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

/* 📚 Bibliothèque */
const library = {
    cpge: [
        "Analyse – Monier",
        "Algèbre – Monier",
        "Méthodes mathématiques – Peseux",
        "Physique – Moysset",
        "Thermodynamique – Wald",
        "Méthodes de résolution de problèmes CPGE – Dunod",
        "Probabilités et statistiques pour l'ingénieur – Walpole",
        "Analyse de Fourier et équations différentielles – Arnaudiès"
    ],
    aero: [
        "Introduction to Flight – Anderson",
        "Aircraft Structures – Megson",
        "Fundamentals of Aerodynamics",
        "Aircraft Performance and Design – Anderson",
        "Mechanics and Thermodynamics of Propulsion – Hill & Peterson",
        "Flight Stability and Automatic Control – Nelson",
        "Aircraft Propulsion – Saeed Farokhi",
        "Aerodynamics for Engineers – Bertin & Cummings",
        "Aircraft Systems – Moir & Seabridge",
        "Airplane Aerodynamics and Performance – Roskam"
    ],
    meca: [
        "Mechatronics – Bolton",
        "Modern Control – Ogata",
        "Robotics – Siciliano",
        "Sensors and Actuators in Mechatronics – Cetinkunt",
        "Applied Mechatronics – Smaili & Mrad",
        "Mechatronic System Design – Shetty & Kolk2",
        "Electromechanical Motion Devices – Fitzgerald",
        "Embedded Systems Design – Heath",
        "Modern Control Engineering – Ogata"
    ],
    data: [
        "Introduction to Data Mining – Tan, Steinbach",
        "Data Mining: Concepts and Techniques – Han & Kamber",
        "Python for Data Analysis – Wes McKinney",
        "Hands-On Machine Learning with Scikit-Learn & TensorFlow – Aurélien Géron",
        "The Elements of Statistical Learning – Hastie, Tibshirani, Friedman",
        "Pattern Recognition and Machine Learning – Bishop",
        "Data Science from Scratch – Joel Grus",
        "Mining of Massive Datasets – Leskovec et al",
        "Big Data: Principles and Paradigms – Rajkumar Buyya",
        "NoSQL Distilled – Pramod Sadalage"
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
        li.innerHTML = `📘 ${book} 
        <button onclick="reserveBook('${book}')">Réserver</button>`;
        list.appendChild(li);
    });
}

function reserveBook(bookName) {
    showNotification(`Livre "${bookName}" réservé avec succès ✔`, "success");
}

/* 🍔 Buvette */
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
                    <button onclick="order()">Commander</button>
                </div>`;
        });

        grid.appendChild(section);
    }
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
    showNotification("✔ Réclamation envoyée avec succès. Vous serez contacté sous 48h.", "success");
}

// 📱 QR CODE GENERATION
function generateQRCode(apogeeCode) {
    // Clear previous QR code
    document.getElementById("qrCodeDisplay").innerHTML = "";
    
    // Generate new QR code
    currentQRCode = new QRCode(document.getElementById("qrCodeDisplay"), {
        text: apogeeCode,
        width: 256,
        height: 256,
        colorDark: "#2563eb",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    
    // Update QR card info
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
    
    showNotification("✅ QR Code téléchargé avec succès!", "success");
}

function printQRCode() {
    const qrCard = document.querySelector('.qr-card').cloneNode(true);
    const printWindow = window.open('', '', 'width=600,height=800');
    
    printWindow.document.write(`
        <html>
            <head>
                <title>QR Code - ${currentStudent.name}</title>
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        min-height: 100vh;
                        margin: 0;
                        background: #f8fafc;
                    }
                    .qr-card {
                        background: white;
                        padding: 40px;
                        border-radius: 20px;
                        box-shadow: 0 10px 40px rgba(0,0,0,0.1);
                        text-align: center;
                        max-width: 500px;
                    }
                    h3 { color: #1e293b; margin-bottom: 10px; }
                    p { color: #2563eb; font-weight: 600; }
                    .qr-display { margin: 30px 0; }
                    .qr-info { 
                        background: #f0f9ff;
                        padding: 20px;
                        border-radius: 10px;
                        margin-top: 30px;
                    }
                    button { display: none !important; }
                </style>
            </head>
            <body>
                ${qrCard.outerHTML}
            </body>
        </html>
    `);
    
    printWindow.document.close();
    setTimeout(() => {
        printWindow.print();
        printWindow.close();
    }, 500);
    
    showNotification("🖨️ Impression lancée...", "info");
}

function shareQRCode() {
    const canvas = document.querySelector('#qrCodeDisplay canvas');
    if (!canvas) {
        showNotification("❌ QR Code non disponible", "error");
        return;
    }
    
    canvas.toBlob((blob) => {
        const file = new File([blob], `QRCode_${currentStudent.name}.png`, { type: 'image/png' });
        
        if (navigator.share && navigator.canShare({ files: [file] })) {
            navigator.share({
                title: 'Mon QR Code Campus Smart',
                text: `QR Code de ${currentStudent.name}`,
                files: [file]
            })
            .then(() => showNotification("✅ Partagé avec succès!", "success"))
            .catch(() => showNotification("❌ Partage annulé", "info"));
        } else {
            // Fallback: copy to clipboard
            canvas.toBlob((blob) => {
                navigator.clipboard.write([
                    new ClipboardItem({ 'image/png': blob })
                ])
                .then(() => showNotification("✅ QR Code copié dans le presse-papier!", "success"))
                .catch(() => showNotification("❌ Impossible de copier le QR Code", "error"));
            });
        }
    });
}

// 🤖 AI ASSISTANT
// ================================
// ================================
// 🤖 AI ASSISTANT - Enhanced Knowledge Base
// ================================

// Base de connaissances ENSA
const aiKnowledgeBase = {
    ecole: {
        nom: "École Nationale des Sciences Appliquées de Berrechid",
        universite: "Université Hassan 1er",
        adresse: "Avenue de l'université, B.P :218 Berrechid",
        telephone: "05-22-32-47-58",
        fax: "05-22-53-45-30",
        email: "ensa.etudes@uhp.ac.ma",
        statistiques: {
            etudiants: 725,
            laureats: 249,
            laboratoires: 2,
            professeurs: 54,
            staff_administratif: 16
        }
    },

    departements: {
        geer: {
            nom: "Génie Électrique et Énergies Renouvelables",
            code: "GEER",
            description: "Formation en systèmes électriques, énergies renouvelables et électronique de puissance",
            debouches: "Ingénieur en énergie, consultant en énergies renouvelables, chef de projet électrique"
        },
        gim: {
            nom: "Génie Informatique et Mathématiques",
            code: "GIM",
            description: "Formation en développement logiciel, IA, data science et mathématiques appliquées",
            debouches: "Ingénieur logiciel, data scientist, développeur IA"
        },
        gc: {
            nom: "Gestion et Communication",
            code: "GC",
            description: "Formation en management et communication",
            debouches: "Manager, consultant, chef de projet"
        },
        gsi: {
            nom: "Génie des Systèmes Industriels",
            code: "GSI",
            description: "Automatisation, robotique, optimisation industrielle",
            debouches: "Ingénieur industriel, responsable production"
        }
    },

    services: [
        "📚 Bibliothèque numérique",
        "🍔 Buvette intelligente",
        "🏫 Réservation de salles",
        "📱 QR Code personnel",
        "📅 Calendrier académique",
        "🤖 Assistant IA 24/7"
    ],

    horaires: {
        administration: "Lundi-Vendredi: 8h00-17h00",
        bibliotheque: "Lundi-Samedi: 8h00-19h00",
        buvette: "Lundi-Vendredi: 8h00-18h00",
        cours: "8h00-18h00"
    },

    faq: {
        inscription: "Inscriptions via portail étudiant sur le site ENSA",
        stage: "Stage obligatoire en 5ème année (Projet de Fin d'Études)",
        bourses: "Bourses disponibles selon critères sociaux",
        clubs: "Plusieurs clubs actifs : Robotique, Environnement, Culture",
        transport: "Navettes disponibles depuis Casablanca & Settat"
    }
};

// ================================
// 🧠 Smart AI Response System
// ================================

function getAIResponse(message) {
    const msg = message.toLowerCase();

    // Salutations
    if (msg.includes("bonjour") || msg.includes("salut") || msg.includes("hello") || msg.includes("hi")) {
        const studentName = currentStudent ? currentStudent.name : "étudiant(e)";
        return `👋 Bonjour ${studentName} !

Je suis votre assistant IA Campus Smart. Comment puis-je vous aider ?

💡 **Questions possibles :**
• Adresse de l'ENSA
• Départements et filières
• Horaires des services
• Contact et coordonnées
• Mes cours
• Mes statistiques`;
    }

    // Adresse et localisation
    if (msg.includes("adresse") || msg.includes("où") || msg.includes("localisation")) {
        return `📍 **Localisation ENSA Berrechid**

🏛️ ${aiKnowledgeBase.ecole.nom}
🏫 ${aiKnowledgeBase.ecole.universite}

📌 ${aiKnowledgeBase.ecole.adresse}
📞 ${aiKnowledgeBase.ecole.telephone}
📠 ${aiKnowledgeBase.ecole.fax}
✉️ ${aiKnowledgeBase.ecole.email}`;
    }

    // Contact
    if (msg.includes("contact") || msg.includes("téléphone") || msg.includes("email") || msg.includes("joindre")) {
        return `📞 **Contacts ENSA**

📱 Téléphone : ${aiKnowledgeBase.ecole.telephone}
📠 Fax : ${aiKnowledgeBase.ecole.fax}
✉️ Email : ${aiKnowledgeBase.ecole.email}

🕐 Horaires : ${aiKnowledgeBase.horaires.administration}`;
    }

    // Statistiques
    if (msg.includes("statistique") && !msg.includes("mes")) {
        const s = aiKnowledgeBase.ecole.statistiques;
        return `📊 **Statistiques ENSA Berrechid**

👨‍🎓 Étudiants inscrits : ${s.etudiants}
🎓 Lauréats diplômés : ${s.laureats}
🔬 Laboratoires : ${s.laboratoires}
👨‍🏫 Professeurs : ${s.professeurs}
👔 Personnel administratif : ${s.staff_administratif}`;
    }

    // Mes statistiques personnelles
    if (msg.includes("mes") && (msg.includes("stat") || msg.includes("point"))) {
        const studentName = currentStudent ? currentStudent.name : "étudiant(e)";
        const points = currentStudent ? currentStudent.points : 0;
        return `📊 **Vos statistiques personnelles**

👤 ${studentName}
⭐ Points accumulés : ${points}

📚 Livres réservés : 3
✅ Taux de présence : 95%
🏆 Classement : Top 10%

🎯 Continuez comme ça !`;
    }

    // Départements
    if (msg.includes("département") || msg.includes("filière") || msg.includes("spécialité")) {
        return `🎓 **Départements ENSA Berrechid**

1️⃣ **GEER** - Génie Électrique et Énergies Renouvelables
2️⃣ **GIM** - Génie Informatique et Mathématiques
3️⃣ **GC** - Gestion et Communication
4️⃣ **GSI** - Génie des Systèmes Industriels

💡 Tapez "détails GEER" pour plus d'informations`;
    }

    // Détails GEER
    if (msg.includes("geer") || msg.includes("électrique") || msg.includes("énergie")) {
        const d = aiKnowledgeBase.departements.geer;
        return `⚡ **${d.nom}**

📝 ${d.description}

💼 Débouchés :
${d.debouches}`;
    }

    // Détails GIM
    if (msg.includes("gim") || msg.includes("informatique")) {
        const d = aiKnowledgeBase.departements.gim;
        return `💻 **${d.nom}**

📝 ${d.description}

💼 Débouchés :
${d.debouches}`;
    }

    // Détails GSI
    if (msg.includes("gsi") || msg.includes("industriel")) {
        const d = aiKnowledgeBase.departements.gsi;
        return `🏭 **${d.nom}**

📝 ${d.description}

💼 Débouchés :
${d.debouches}`;
    }

    // Détails GC
    if (msg.includes("gc") && msg.includes("détails")) {
        const d = aiKnowledgeBase.departements.gc;
        return `💼 **${d.nom}**

📝 ${d.description}

💼 Débouchés :
${d.debouches}`;
    }

    // Services
    if (msg.includes("service")) {
        return `🎯 **Services Campus Smart**

${aiKnowledgeBase.services.join('\n')}

✨ Accessibles depuis votre tableau de bord !`;
    }

    // Horaires
    if (msg.includes("horaire") || msg.includes("heure") || msg.includes("ouvert")) {
        return `🕐 **Horaires des Services**

🏢 Administration : ${aiKnowledgeBase.horaires.administration}
📚 Bibliothèque : ${aiKnowledgeBase.horaires.bibliotheque}
🍔 Buvette : ${aiKnowledgeBase.horaires.buvette}
📖 Cours : ${aiKnowledgeBase.horaires.cours}`;
    }

    // Cours
    if (msg.includes("cours") || msg.includes("emploi")) {
        const studentName = currentStudent ? currentStudent.name : "étudiant(e)";
        return `📅 **Vos prochains cours**

Bonjour ${studentName} !

• Lundi 9h00 : Mathématiques Appliquées - Salle A1
• Mardi 14h00 : Programmation Avancée - Lab Info 2
• Mercredi 10h00 : Physique Quantique - Amphi B
• Jeudi 15h00 : Projet Intégré - Salle C3
• Vendredi 11h00 : Anglais Technique - Salle A2

💡 Consultez le calendrier pour plus de détails`;
    }

    // Livres
    if (msg.includes("livre") || msg.includes("recommand")) {
        return `📚 **Recommandations de livres**

📘 **Programmation :**
• Clean Code - Robert Martin
• Algorithms - Cormen

📗 **Mathématiques :**
• Analyse - Monier
• Algèbre - Monier

📙 **Physique :**
• Thermodynamics - Çengel

💡 Visitez la bibliothèque pour plus de choix !`;
    }

    // Stage
    if (msg.includes("stage") || msg.includes("pfe")) {
        return `🎓 **Stage et PFE**

${aiKnowledgeBase.faq.stage}

📌 Informations :
• Durée : 4-6 mois
• Période : 5ème année
• Soutenance obligatoire`;
    }

    // Bourses
    if (msg.includes("bourse")) {
        return `💰 **Bourses**

${aiKnowledgeBase.faq.bourses}

📞 Contact : Service des affaires estudiantines`;
    }

    // Clubs
    if (msg.includes("club") || msg.includes("activité")) {
        return `🎭 **Clubs et Activités**

${aiKnowledgeBase.faq.clubs}

💡 Rejoignez-nous pour enrichir votre expérience !`;
    }

    // Transport
    if (msg.includes("transport") || msg.includes("navette")) {
        return `🚌 **Transport**

${aiKnowledgeBase.faq.transport}

🚍 Départs : 7h00, 13h00
🚍 Retours : 13h00, 18h00`;
    }

    // Inscription
    if (msg.includes("inscription")) {
        return `📝 **Inscription**

${aiKnowledgeBase.faq.inscription}

📌 Documents requis :
• Relevé BAC
• Certificat scolarité
• Photos
• Copie CIN`;
    }

    // Aide
    if (msg.includes("aide") || msg.includes("help")) {
        return `💡 **Comment puis-je vous aider ?**

Je peux répondre à vos questions sur :

🏫 **L'école**
• Adresse et contact
• Statistiques
• Départements

🎓 **Études**
• Mes cours
• Livres
• Stages

🎯 **Services**
• Bibliothèque
• Buvette
• Réservations

📊 **Personnel**
• Mes points
• Mes statistiques

💬 Posez-moi votre question !`;
    }

    // Merci
    if (msg.includes("merci") || msg.includes("thanks")) {
        const studentName = currentStudent ? currentStudent.name : "";
        return `😊 Avec plaisir ${studentName} !

N'hésitez pas si vous avez d'autres questions ! 🤖`;
    }

    // Au revoir
    if (msg.includes("au revoir") || msg.includes("bye")) {
        const studentName = currentStudent ? currentStudent.name : "";
        return `👋 Au revoir ${studentName} !

Passez une excellente journée ! ✨`;
    }

    // Message par défaut
    return `🤔 Je n'ai pas bien compris votre question.

💡 **Essayez :**
• "Adresse ENSA"
• "Départements"
• "Mes cours"
• "Horaires"
• "Contact"
• "Mes statistiques"
• "Recommande-moi des livres"

Ou tapez "aide" pour plus d'options ! 😊`;
}

// ================================
// 💬 Chat Functions
// ================================

function sendAIMessage() {
    const input = document.getElementById("aiInput");
    const message = input.value.trim();
    
    if (!message) {
        showNotification("⚠️ Veuillez entrer un message", "warning");
        return;
    }
    
    const chatMessages = document.getElementById("chatMessages");
    
    // Message utilisateur
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
    
    // Réponse IA
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

function askAI(question) {
    document.getElementById("aiInput").value = question;
    sendAIMessage();
}

// Touche Entrée pour envoyer
document.addEventListener('DOMContentLoaded', function() {
    const aiInput = document.getElementById("aiInput");
    if (aiInput) {
        aiInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendAIMessage();
            }
        });
    }
});
// 📅 CALENDRIER ACADÉMIQUE
const academicEvents = {
    "2025-09": [
        { date: 1, type: "event", name: "Rentrée scolaire" },
        { date: 8, type: "vacation", name: "Fête de la marche verte" },
        { date: 18, type: "vacation", name: "Fête de l'indépendance" }
    ],
    "2025-10": [
        { date: 6, type: "event", name: "Début examens S1" }
    ],
    "2025-11": [
        { date: 18, type: "vacation", name: "Fête de l'indépendance" }
    ],
    "2025-12": [
        { date: 1, type: "vacation", name: "Jour de l'an" },
        { date: 15, type: "exam", name: "Examens de fin de semestre" }
    ],
    "2026-01": [
        { date: 14, type: "event", name: "Début S2" },
        { date: 15, type: "vacation", name: "Rattrapage session d'automne" }
    ],
    "2026-02": [
        { date: 1, type: "vacation", name: "Jour de l'an amazigh" }
    ],
    "2026-03": [
        { date: 3, type: "vacation", name: "Fête du travail" }
    ],
    "2026-04": [
        { date: 14, type: "event", name: "Aïd al-Fitr" }
    ],
    "2026-05": [
        { date: 1, type: "vacation", name: "Fête du travail" },
        { date: 30, type: "vacation", name: "Fête du trône" }
    ],
    "2026-06": [
        { date: 20, type: "exam", name: "Examens finaux" },
        { date: 21, type: "vacation", name: "Aïd Al Adha" }
    ],
    "2026-07": [
        { date: 1, type: "vacation", name: "Nouvel an hégirien" },
        { date: 14, type: "event", name: "Soutenance PFE" }
    ],
    "2026-08": [
        { date: 14, type: "vacation", name: "Journée de Oued Eddahab" }
    ]
};

let currentCalendarMonth = new Date().getMonth();
let currentCalendarYear = new Date().getFullYear();

function renderCalendar() {
    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
                        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    
    const dayNames = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
    
    document.getElementById("currentMonth").textContent = 
        `${monthNames[currentCalendarMonth]} ${currentCalendarYear}`;
    
    const grid = document.getElementById("calendarGrid");
    grid.innerHTML = "";
    
    // Headers
    dayNames.forEach(day => {
        const header = document.createElement("div");
        header.className = "calendar-day-header";
        header.textContent = day;
        grid.appendChild(header);
    });
    
    // First day of month
    const firstDay = new Date(currentCalendarYear, currentCalendarMonth, 1).getDay();
    const daysInMonth = new Date(currentCalendarYear, currentCalendarMonth + 1, 0).getDate();
    
    // Adjust for Monday start (0 = Monday, 6 = Sunday)
    const startDay = firstDay === 0 ? 6 : firstDay - 1;
    
    // Empty cells
    for (let i = 0; i < startDay; i++) {
        const empty = document.createElement("div");
        empty.className = "calendar-day empty";
        grid.appendChild(empty);
    }
    
    // Days
    const monthKey = `${currentCalendarYear}-${String(currentCalendarMonth + 1).padStart(2, '0')}`;
    const events = academicEvents[monthKey] || [];
    
    const today = new Date();
    
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement("div");
        dayDiv.className = "calendar-day";
        
        const dayEvent = events.find(e => e.date === day);
        
        if (dayEvent) {
            dayDiv.classList.add(dayEvent.type);
        }
        
        // Check if today
        if (day === today.getDate() && 
            currentCalendarMonth === today.getMonth() && 
            currentCalendarYear === today.getFullYear()) {
            dayDiv.classList.add("today");
        }
        
        dayDiv.innerHTML = `
            <div class="day-number">${day}</div>
            ${dayEvent ? `<div class="day-event">${dayEvent.name}</div>` : ''}
        `;
        
        if (dayEvent) {
            dayDiv.onclick = () => {
                showNotification(`📅 ${day} ${monthNames[currentCalendarMonth]}\n${dayEvent.name}`, "info");
            };
        }
        
        grid.appendChild(dayDiv);
    }
    
    loadUpcomingEvents();
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

function loadUpcomingEvents() {
    const eventsList = document.getElementById("upcomingEvents");
    if (!eventsList) return;
    
    eventsList.innerHTML = "";
    
    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
                        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    
    const today = new Date();
    const upcomingEvents = [];
    
    // Get next 3 months of events
    for (let i = 0; i < 3; i++) {
        const month = (today.getMonth() + i) % 12;
        const year = today.getFullYear() + Math.floor((today.getMonth() + i) / 12);
        const monthKey = `${year}-${String(month + 1).padStart(2, '0')}`;
        
        if (academicEvents[monthKey]) {
            academicEvents[monthKey].forEach(event => {
                const eventDate = new Date(year, month, event.date);
                if (eventDate >= today) {
                    upcomingEvents.push({
                        date: eventDate,
                        name: event.name,
                        type: event.type
                    });
                }
            });
        }
    }
    
    upcomingEvents.sort((a, b) => a.date - b.date);
    
    upcomingEvents.slice(0, 5).forEach(event => {
        const li = document.createElement("li");
        const typeIcon = event.type === 'vacation' ? '🌴' : 
                        event.type === 'exam' ? '📝' : '📌';
        li.textContent = `${typeIcon} ${event.date.getDate()} ${monthNames[event.date.getMonth()]} - ${event.name}`;
        eventsList.appendChild(li);
    });
    
    if (upcomingEvents.length === 0) {
        eventsList.innerHTML = "<li>Aucun événement à venir</li>";
    }
}
// 📱 Détection automatique si l'utilisateur vient du QR code
window.addEventListener('DOMContentLoaded', function() {
    // Si l'utilisateur ouvre depuis mobile, afficher directement le login
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile && window.location.search.includes('qr=1')) {
        goToLogin();
    }
});
