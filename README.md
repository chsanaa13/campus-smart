<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Campus Smart - Powered by AI</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<!-- LOGO ENSA -->
<img src="logo-ensa-berrechid.png" alt="ENSA Logo" style="position: fixed; top: 15px; right: 15px; height: 50px; width: auto; z-index: 1000; filter: drop-shadow(0 4px 10px rgba(0,0,0,0.3));">

<!-- BOUTON RETOUR -->
<button class="back-btn" id="backBtn" onclick="goBackToLanding()" style="display: none;">← Retour</button>

<!-- 🏠 LANDING PAGE -->
<div id="landing" class="landing-page" style="display: flex;">
    <div class="landing-content">
        <div class="landing-header">
            <div class="ai-badge">
                <span class="sparkle">✨</span> Powered by AI <span class="sparkle">✨</span>
            </div>
            <h1 class="landing-title">
                <span class="gradient-text">Campus Smart</span>
            </h1>
            <p class="landing-subtitle">Plateforme Éducative Intelligente pour Étudiants ENSA</p>
        </div>
<div class="qr-welcome-card">
    <div class="qr-left">
        <h2>🎓 Accès Rapide</h2>
        <p>Scannez ce QR Code avec votre smartphone pour accéder à Campus Smart</p>
        <div id="appQRCode" class="app-qr-display"></div>
        <p class="qr-url">Accès direct à la plateforme</p>
    </div>
    
    <div class="qr-divider"></div>
    
    <div class="qr-right">
        <h2>💻 Connexion Web</h2>
        <p>Ou connectez-vous directement depuis votre navigateur</p>
        <button class="access-btn" onclick="goToLogin()">
            <span>Accéder à la plateforme</span>
            <span>→</span>
        </button>
        
        <div class="features-preview">
            <div class="feature-item">
                <span class="feature-icon">🤖</span>
                <span>Assistant IA</span>
            </div>
            <div class="feature-item">
                <span class="feature-icon">📚</span>
                <span>Bibliothèque Digitale</span>
            </div>
            <div class="feature-item">
                <span class="feature-icon">🎯</span>
                <span>Gestion Intelligente</span>
            </div>
        </div>
    </div>
</div>  
            <div class="qr-divider"></div>
            
            <div class="qr-right">
                <h2>💻 Connexion Web</h2>
                <p>Ou connectez-vous directement depuis votre navigateur</p>
                <button class="access-btn" onclick="goToLogin()">
                    <span>Accéder à la plateforme</span>
                    <span>→</span>
                </button>
                
                <div class="features-preview">
                    <div class="feature-item">
                        <span class="feature-icon">🤖</span>
                        <span>Assistant IA</span>
                    </div>
                    <div class="feature-item">
                        <span class="feature-icon">📚</span>
                        <span>Bibliothèque Digitale</span>
                    </div>
                    <div class="feature-item">
                        <span class="feature-icon">🎯</span>
                        <span>Gestion Intelligente</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="ai-footer">
            <p>🧠 Développé avec Intelligence Artificielle | ENSA Berrechid 2026</p>
        </div>
    </div>
</div>

<!-- 🔐 LOGIN PAGE -->
<div class="login-container" id="login" style="display: none;">
    <div class="login-left">
        <h2>WELCOME</h2>
        <p>Campus Smart</p>
    </div>

    <div class="login-right">
        <div class="avatar">👤</div>
        <h2>LOGIN</h2>

        <div class="login-tabs">
            <button class="tab-btn active" onclick="switchLoginTab('manual')">🔑 Code</button>
            <button class="tab-btn" onclick="switchLoginTab('qr')">📱 QR Code</button>
        </div>

        <div id="manualLogin" class="login-method active">
            <input type="text" id="apogee" placeholder="Code Apogée">
            <input type="password" id="password" placeholder="Password">
            <a href="#" class="forgot">Forgot Password?</a>
            <button onclick="login()">LOGIN</button>
        </div>

        <div id="qrLogin" class="login-method">
            <div id="qrReader" class="qr-scanner">
                <div class="qr-scanner-icon">📷</div>
                <p>Scanner votre QR Code</p>
                <button onclick="scanQRCode()">Activer la caméra</button>
            </div>
        </div>

        <p class="or">Or Login With</p>
        <div class="social">
            <button class="google">Google</button>
            <button class="fb">Facebook</button>
        </div>
    </div>
</div>

<!-- 🌐 APP -->
<div id="app" style="display:none">
    <div class="app-header">
        <h1>
            <span class="ai-icon">🤖</span>
            <span class="gradient-text">Campus Smart</span>
            <span class="ai-badge-small">AI</span>
        </h1>
        <div class="user-info">
            <div class="user-badge">
                👤 <span id="studentName"></span>
            </div>
            <div class="points-badge">
                ⭐ <span id="points">0</span> Points
            </div>
            <button class="logout-btn" onclick="logout()">🚪 Déconnexion</button>
        </div>
    </div>

    <!-- DASHBOARD -->
    <div id="dashboard" class="box dashboard">
        <h2>🎓 Tableau de Bord Intelligent</h2>
        <p class="dashboard-subtitle">
            <span class="ai-indicator-small">🤖</span> 
            Votre assistant éducatif alimenté par l'IA
        </p>
        <div class="grid">
            <div class="card" onclick="showSection('library')">
                <div class="card-icon">📚</div>
                <p>Bibliothèque<br/>Numérique</p>
                <span class="ai-tag">AI Search</span>
            </div>
            <div class="card" onclick="showSection('canteen')">
                <div class="card-icon">🍔</div>
                <p>Buvette<br/>Intelligente</p>
                <span class="ai-tag">AI Orders</span>
            </div>
            <div class="card" onclick="showSection('school')">
                <div class="card-icon">🏫</div>
                <p>Vie Scolaire<br/>Connectée</p>
                <span class="ai-tag">Smart</span>
            </div>
            <div class="card" onclick="showSection('calendar')">
                <div class="card-icon">📅</div>
                <p>Calendrier<br/>Académique</p>
                <span class="ai-tag">Sync</span>
            </div>
            <div class="card" onclick="showSection('qrcode')">
                <div class="card-icon">📱</div>
                <p>QR Code<br/>Personnel</p>
                <span class="ai-tag">Secure</span>
            </div>
            <div class="card" onclick="showSection('assistant')">
                <div class="card-icon">🤖</div>
                <p>Assistant<br/>IA</p>
                <span class="ai-tag">AI Chat</span>
            </div>
        </div>
    </div>

    <!-- BIBLIOTHÈQUE -->
    <div id="library" class="box" style="display:none">
        <h2>📚 Bibliothèque</h2>
        <select onchange="showBooks(this.value)">
            <option value="">-- Choisir filière --</option>
            <option value="cpge">CPGE</option>
            <option value="aero">Aéronautique</option>
            <option value="meca">Mécatronique</option>
            <option value="data">Big Data</option>
            <option value="info">Informatique</option>
            <option value="energy">Énergétique</option>
            <option value="auto">Automobile</option>
        </select>
        <ul id="booksByField"></ul>
        <button onclick="showSection('dashboard')">⬅ Retour</button>
    </div>

    <!-- BUVETTE -->
    <div id="canteen" class="box" style="display:none">
        <h2>🍔 Buvette</h2>
        <div id="menuGrid"></div>
        <button onclick="showSection('dashboard')">⬅ Retour</button>
    </div>

    <!-- VIE SCOLAIRE -->
    <div id="school" class="box" style="display:none">
        <h2>🏫 Vie Scolaire</h2>
        <h3>📄 Demandes administratives</h3>
        <button onclick="showNotification('Demande d\'attestation envoyée ✔', 'success')">Demande d'attestation</button>
        <button onclick="showNotification('Demande de relevé de notes envoyée ✔', 'success')">Relevé de notes</button>
        <h3>⚠️ Réclamations</h3>
        <textarea id="reclamationText" placeholder="Décrivez votre réclamation en détail..."></textarea>
        <button onclick="submitReclamation()">Envoyer la réclamation</button>
        <h3>🏫 Réservation de salles</h3>
        <ul id="roomList"></ul>
        <button onclick="showSection('dashboard')">⬅ Retour</button>
    </div>

    <!-- CALENDRIER -->
    <div id="calendar" class="box" style="display:none">
        <h2>📅 Calendrier Académique 2025-2026</h2>
        <div class="calendar-controls">
            <button onclick="changeMonth(-1)">◀️ Mois Précédent</button>
            <h3 id="currentMonth"></h3>
            <button onclick="changeMonth(1)">Mois Suivant ▶️</button>
        </div>
        <div class="calendar-grid" id="calendarGrid"></div>
        <div class="calendar-legend">
            <h3>📌 Légende</h3>
            <div class="legend-item"><span class="legend-color vacation"></span> Vacances</div>
            <div class="legend-item"><span class="legend-color exam"></span> Examens</div>
            <div class="legend-item"><span class="legend-color event"></span> Événements importants</div>
        </div>
        <div class="upcoming-events">
            <h3>🔔 Événements à venir</h3>
            <ul id="upcomingEvents"></ul>
        </div>
        <button onclick="showSection('dashboard')">⬅ Retour</button>
    </div>

    <!-- QR CODE -->
    <div id="qrcode" class="box" style="display:none">
        <h2>📱 Mon QR Code Personnel</h2>
        <div class="qr-container">
            <div class="qr-card">
                <div class="qr-header">
                    <h3 id="qrStudentName"></h3>
                    <p id="qrStudentCode"></p>
                </div>
                <div id="qrCodeDisplay" class="qr-display"></div>
                <div class="qr-info">
                    <p>💡 Utilisez ce QR code pour vous connecter rapidement</p>
                    <p>⭐ Points: <span id="qrPoints"></span></p>
                </div>
                <div class="qr-actions">
                    <button onclick="downloadQRCode()">💾 Télécharger</button>
                    <button onclick="printQRCode()">🖨️ Imprimer</button>
                    <button onclick="shareQRCode()">📤 Partager</button>
                </div>
            </div>
        </div>
        <button onclick="showSection('dashboard')">⬅ Retour</button>
    </div>

    <!-- ASSISTANT IA -->
    <div id="assistant" class="box" style="display:none">
        <h2>🤖 Assistant IA Éducatif</h2>
        <p class="section-subtitle">Posez vos questions académiques, obtenez des réponses instantanées</p>
        <div class="ai-chat-container">
            <div class="ai-chat-messages" id="chatMessages">
                <div class="ai-message">
                    <div class="ai-avatar">🤖</div>
                    <div class="message-content">
                        <p><strong>Assistant Campus Smart</strong></p>
                        <p>Bonjour ! Je suis votre assistant IA. Comment puis-je vous aider aujourd'hui ?</p>
                        <div class="quick-actions">
                            <button onclick="askAI('Quels sont mes prochains cours ?')">📅 Mes cours</button>
                            <button onclick="askAI('Recommande-moi des livres')">📚 Livres</button>
                            <button onclick="askAI('Mes statistiques')">📊 Stats</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ai-chat-input">
                <input type="text" id="aiInput" placeholder="Posez votre question...">
                <button onclick="sendAIMessage()">
                    <span>Envoyer</span>
                    <span class="ai-sparkle">✨</span>
                </button>
            </div>
        </div>
        <button onclick="showSection('dashboard')">⬅ Retour</button>
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
<script src="script.js"></script>
</body>
</html>
