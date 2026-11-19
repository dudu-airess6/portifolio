document.addEventListener("DOMContentLoaded", function () {
    // 1. Seleção dos elementos do DOM
    const formContato = document.getElementById("formContato");
    const inputNome = document.getElementById("nome");
    const inputEmail = document.getElementById("email");
    const inputMensagem = document.getElementById("mensagem");

    const erroNome = document.getElementById("erroNome");
    const erroEmail = document.getElementById("erroEmail");
    const erroMensagem = document.getElementById("erroMensagem");
    const statusEnvio = document.getElementById("statusEnvio");

    function validarFormatoEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function validarFormulario() {
        let ehValido = true;

        // Limpa mensagens de erro anteriores
        erroNome.textContent = "";
        erroEmail.textContent = "";
        erroMensagem.textContent = "";
        statusEnvio.textContent = "";
        statusEnvio.className = "status-envio";

        if (inputNome.value.trim() === "") {
            erroNome.textContent = "Por favor, informe seu nome completo.";
            ehValido = false;
        } else if (inputNome.value.trim().length < 3) {
            erroNome.textContent = "O nome deve conter pelo menos 3 caracteres.";
            ehValido = false;
        }

        if (inputEmail.value.trim() === "") {
            erroEmail.textContent = "Por favor, insira o seu endereço de e-mail.";
            ehValido = false;
        } else if (!validarFormatoEmail(inputEmail.value.trim())) {
            erroEmail.textContent = "Insira um e-mail válido (ex: nome@dominio.com).";
            ehValido = false;
        }

        if (inputMensagem.value.trim() === "") {
            erroMensagem.textContent = "Por favor, digite a sua mensagem.";
            ehValido = false;
        } else if (inputMensagem.value.trim().length < 10) {
            erroMensagem.textContent = "A mensagem deve conter no mínimo 10 caracteres.";
            ehValido = false;
        }

        return ehValido;
    }

    formContato.addEventListener("submit", function (e) {
        e.preventDefault(); // Impede o recarregamento automático da página

        if (validarFormulario()) {
            statusEnvio.textContent = "Mensagem enviada com sucesso! Obrigado pelo contato.";
            statusEnvio.classList.add("sucesso");

            formContato.reset();
        } else {
            statusEnvio.textContent = "Por favor, corrija os erros acima antes de enviar.";
            statusEnvio.classList.add("erro");
        }
    });

    inputNome.addEventListener("input", function () {
        if (inputNome.value.trim().length >= 3) erroNome.textContent = "";
    });

    inputEmail.addEventListener("input", function () {
        if (validarFormatoEmail(inputEmail.value.trim())) erroEmail.textContent = "";
    });

    inputMensagem.addEventListener("input", function () {
        if (inputMensagem.value.trim().length >= 10) erroMensagem.textContent = "";
    });
});
