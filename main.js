const form = document.getElementById('formulario');
const mensagem = document.getElementById('mensagem');


form.addEventListener('submit', function(evento) {
evento.preventDefault();
const campoA = parseInt(document.getElementById('campo-a').value);
const campoB = parseInt(document.getElementById('campo-b').value);

if (campoB > campoA) {
    mensagem.textContent = 'Formulário válido';
    mensagem.classList.remove('invalido');
    mensagem.classList.add('valido');
} else {
    mensagem.textContent = 'Formulário inválido';
    mensagem.classList.remove('valido');
    mensagem.classList.add('invalido');
}

    // Limpa os valores dos campos de entrada
    document.getElementById('campo-a').value = '';
    document.getElementById('campo-b').value = '';
});