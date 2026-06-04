// 1. Typing Effect Logic
const typingText = "Building Secure & Intelligent Systems";
let i = 0;
function typeWriter() {
    if (i < typingText.length) {
        document.getElementById("typing-text").innerHTML += typingText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
// Start typing when page loads
window.onload = typeWriter;

// 2. RESTORED Full Project Data
const projectData = {
    project: {
        title: "Secure File Transfer System with Hybrid Encryption",
        subtitle: "Java Desktop Application for Encrypted File Sharing over LAN",
        
        description: `This project is a secure file transfer application developed using Java that enables safe communication between a sender and receiver over a local network. The system uses a hybrid cryptography approach combining symmetric (AES) and asymmetric (RSA) encryption to ensure confidentiality, integrity, and secure key exchange.`,

        problemStatement: `Traditional file transfer methods over networks are vulnerable to attacks such as data interception, unauthorized access, and tampering. Without encryption, sensitive information can be easily captured by malicious actors on the same network.`,

        solution: `I developed a hybrid encryption-based system where AES is used for high-speed file encryption, RSA (2048-bit) for secure key exchange, and SHA-256 for integrity. This ensures that even if data is intercepted, it remains unreadable without the private key.`,

        working: `
            <ol style="padding-left: 20px; line-height: 1.8;">
                <li><strong>Mode Selection:</strong> The user chooses to act as a Sender or Receiver.</li>
                <li><strong>Encryption:</strong> The sender selects a file; it is encrypted using AES-CBC with a randomly generated session key.</li>
                <li><strong>Key Exchange:</strong> The AES session key is encrypted using the receiver’s RSA 2048-bit public key.</li>
                <li><strong>Transmission:</strong> The encrypted file, encrypted key, and SHA-256 hash are sent via Sockets.</li>
                <li><strong>Decryption:</strong> The receiver uses their RSA private key to unlock the AES key, then decrypts the file.</li>
                <li><strong>Verification:</strong> SHA-256 hash is verified to ensure the file wasn't tampered with during transit.</li>
            </ol>
        `,

        gallery: `
            <div class="pro-section">
                <h3><i class="fas fa-camera"></i> Implementation Highlights</h3>
                <div style="max-width: 600px; margin: 0 auto 40px auto;">
                    <img src="gui_start.png" class="modal-image" alt="Startup Mode">
                    <p class="modal-caption">User Interface for mode selection (Sender vs Receiver).</p>
                </div>
                <div style="margin-bottom: 40px;">
                    <img src="transfer_logs.png" class="modal-image" alt="Transfer Logs">
                    <p class="modal-caption">Technical logs showing RSA handshake, AES encryption, and Sockets initialization.</p>
                </div>
                <div>
                    <img src="folder_structure.png" class="modal-image" alt="Project Files">
                    <p class="modal-caption">Successful reconstruction of the decrypted file in the local directory.</p>
                </div>
            </div>
        `,

        implementationGuide: `
            <div class="pro-section" style="border-left: 5px solid var(--accent-purple);">
                <h3><i class="fas fa-terminal"></i> Try it Yourself</h3>
                <p>Want to test the encryption on your own system? You can download and run the executable directly:</p>
                
                <a href="https://github.com/Adyasha20/EncryptedChatFileTransfer/raw/refs/heads/main/dist/EncryptedChatFileTransfer.jar" 
                   style="display: inline-block; margin-top: 15px; margin-bottom: 20px; padding: 12px 24px; background: var(--accent-purple); color: white; border-radius: 12px; text-decoration: none; font-weight: bold; transition: 0.3s; box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);">
                    <i class="fas fa-file-export"></i> Download Executable (.jar)
                </a>

                <p style="font-size: 0.9rem; margin-top: 10px;"><strong>Requirements:</strong> Java JDK 17 or higher must be installed on your machine.</p>
            </div>
        `,

        outcome: `The system successfully demonstrates data confidentiality and integrity. It provides a practical, user-friendly tool for secure communication within a LAN environment, mitigating risks of packet sniffing and data breaches.`,
        
        techStack: ["Java", "Java Swing", "Socket Programming", "AES-CBC", "RSA-2048", "SHA-256"]
    }
};

// 3. Logic to Open Modal
const cards = document.querySelectorAll('.card');
const modal = document.getElementById("project-modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close-button");

cards.forEach(card => {
    card.addEventListener('click', () => {
        if (card.classList.contains('project')) {
            const data = projectData.project;
            
            modalBody.innerHTML = `
                <div class="pro-section">
                    <h3><i class="fas fa-play-circle"></i> Project Demo</h3>
                    <div class="video-container">
                        <video width="100%" height="auto" controls style="background: #000; border-radius:15px;">
                            <source src="demo_video.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                
                <div class="modal-header-pro">
                    <span class="badge" style="background: rgba(137, 87, 229, 0.1); color: var(--accent-purple); border: 1px solid var(--accent-purple); padding: 4px 10px; border-radius: 8px; font-size: 0.75rem; font-weight: bold;">Major Project</span>
                    <h1 style="font-size: 2.5rem; margin-top:10px; color:white;">${data.title}</h1>
                    <p style="color: var(--accent-blue); font-weight: 600; margin-top: 5px;">${data.subtitle}</p>
                </div>
                
                <div class="pro-section" style="margin-top: 25px;">
                    <h3><i class="fas fa-info-circle"></i> Description</h3>
                    <p style="line-height:1.7; margin-top: 10px;">${data.description}</p>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px; margin-top: 25px;">
                    <div class="pro-section" style="margin-bottom:0; border-left: 5px solid #f85149;">
                        <h3>Problem Statement</h3>
                        <p style="margin-top: 10px; line-height: 1.6;">${data.problemStatement}</p>
                    </div>
                    <div class="pro-section" style="margin-bottom:0; border-left: 5px solid var(--security-green);">
                        <h3>The Solution</h3>
                        <p style="margin-top: 10px; line-height: 1.6;">${data.solution}</p>
                    </div>
                </div>

                <div class="pro-section" style="margin-top: 25px;">
                    <h3><i class="fas fa-code-branch"></i> How It Works</h3>
                    <div class="workflow-box" style="margin-top: 10px;">${data.working}</div>
                </div>

                ${data.gallery}

                ${data.implementationGuide}

                <div class="pro-section" style="margin-top: 25px;">
                    <h3><i class="fas fa-award"></i> Project Outcome</h3>
                    <p style="line-height: 1.6; margin-top: 10px;">${data.outcome}</p>
                </div>

                <div style="display:flex; gap:10px; flex-wrap:wrap; padding: 20px 0; border-top: 1px solid rgba(255,255,255,0.05); margin-top: 25px;">
                    <p style="width: 100%; font-weight: bold; margin-bottom: 5px; color: var(--text-muted); font-size: 0.85rem; letter-spacing: 1px;">TECH STACK</p>
                    ${data.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
            `;
            
            modal.style.display = "flex";
            document.body.style.overflow = "hidden"; 
        }
    });
});

// 4. Close Modal Logic
if (closeBtn) {
    closeBtn.onclick = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; 
    };
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};