// 1. Navegação entre Abas
function showSection(sectionId) {
    // Esconde todas as seções
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Mostra a seção desejada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// 2. Acessibilidade: Alterar Tamanho de Fonte
let currentFontSize = 100; // Porcentagem inicial

function changeFontSize(action) {
    const root = document.documentElement;
    if (action === 'increase' && currentFontSize < 130) {
        currentFontSize += 10;
    } else if (action === 'decrease' && currentFontSize > 80) {
        currentFontSize -= 10;
    }
    root.style.fontSize = `${currentFontSize}%`;
}

// 3. Acessibilidade: Alternador de Tema Claro / Escuro
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const button = document.getElementById('theme-toggle');
    
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        button.textContent = "Modo Escuro 🌙";
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        button.textContent = "Modo Claro ☀️";
    }
}

// 4. Mecânica Simples de Modal para os Jogos
function playGame(subject, gameTitle) {
    const modal = document.getElementById('game-modal');
    document.getElementById('modal-subject').innerText = subject;
    document.getElementById('modal-game-title').innerText = `Jogo: ${gameTitle}`;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('game-modal');
    modal.style.display = 'none';
}

// Fechar modal ao clicar fora do conteúdo
window.onclick = function(event) {
    const modal = document.getElementById('game-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
