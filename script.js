// ==============================
//  CONTAGEM REGRESSIVA
// ==============================
function iniciarContagem() {
    const dataCasamento = new Date("2026-11-22T08:30:00").getTime();

    setInterval(() => {
        const agora = new Date().getTime();
        const dist = dataCasamento - agora;

        const d = Math.floor(dist / (1000 * 60 * 60 * 24));
        const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((dist % (1000 * 60)) / 1000);

        document.getElementById("dias").textContent = d;
        document.getElementById("horas").textContent = h;
        document.getElementById("minutos").textContent = m;
        document.getElementById("segundos").textContent = s;
    }, 1000);
}

iniciarContagem();

// ==============================
//  ROLAGEM SUAVE DO MENU
// ==============================
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const alvo = document.querySelector(link.getAttribute("href"));
        alvo.scrollIntoView({ behavior: "smooth" });
    });
});

// ==============================
//  ANIMAÇÃO DE ENTRADA
// ==============================
function animar() {
    const elementos = document.querySelectorAll(".animar");
    const limite = window.innerHeight * 0.85;

    elementos.forEach(el => {
        if (el.getBoundingClientRect().top < limite) {
            el.classList.add("aparecer");
        }
    });
}

window.addEventListener("scroll", animar);
window.addEventListener("load", animar);

// ==============================
//  RSVP — SALVAR + WHATSAPP
// ==============================

// SEU NÚMERO DO WHATSAPP (substitua pelo seu):
const NUMERO_WHATSAPP = "5543996923926"; // Formato: 55 + DDD + número

const form = document.getElementById("form-presenca");
const msg = document.getElementById("mensagem-retorno");

form.addEventListener("submit", e => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const confirmacao = document.getElementById("confirmacao").value;
    const acompanhantes = document.getElementById("acompanhantes").value.trim() || "Não informado";
    const mensagem = document.getElementById("mensagem").value.trim();

    // Validação
    if (!nome) {
        mostrarMensagem("❌ Por favor, informe seu nome.", "erro");
        return;
    }

    if (!confirmacao) {
        mostrarMensagem("❌ Por favor, selecione sua resposta.", "erro");
        return;
    }

    // Salvar em localStorage
    const rsvp = {
        nome,
        confirmacao,
        acompanhantes,
        mensagem,
        data: new Date().toLocaleString('pt-BR')
    };

    salvarRSVP(rsvp);

    // Montar mensagem para WhatsApp
    const textoWhatsApp = `
*Confirmação de Presença — Casamento Karine & Murilo*

👤 *Nome:* ${nome}
💬 *Resposta:* ${confirmacao}
👥 *Acompanhantes:* ${acompanhantes}
${mensagem ? `📝 *Mensagem:* ${mensagem}` : ''}
📅 *Enviado em:* ${rsvp.data}
    `.trim();

    // Enviar para WhatsApp
    const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(textoWhatsApp)}`;

    // Mostrar sucesso ANTES de abrir WhatsApp
    mostrarMensagem("✅ Sua confirmação foi salva! Abrindo WhatsApp...", "sucesso");

    // Abrir WhatsApp após 1 segundo
    setTimeout(() => {
        window.open(url, "_blank");
    }, 1000);

    // Limpar formulário
    form.reset();
});

// Salvar RSVP em localStorage
function salvarRSVP(rsvp) {
    let rsvps = JSON.parse(localStorage.getItem("casamento_rsvps")) || [];
    rsvps.push(rsvp);
    localStorage.setItem("casamento_rsvps", JSON.stringify(rsvps));
    console.log("✅ RSVP salvo no localStorage:", rsvp);
}

// Mostrar mensagem com estilo
function mostrarMensagem(texto, tipo) {
    msg.textContent = texto;
    msg.className = `mensagem-resposta ${tipo}`;
    msg.style.display = "block";
    
    // Remover mensagem após 5 segundos (se for erro)
    if (tipo === "erro") {
        setTimeout(() => {
            msg.style.display = "none";
        }, 5000);
    }
}

