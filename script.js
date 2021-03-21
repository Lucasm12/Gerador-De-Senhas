const btn = document.getElementById('btn');
const btnClean = document.getElementById('btn-clean');
const pass = document.getElementById('pass');
const password = document.getElementById('password');

const oito = document.getElementById('oito');
const doze = document.getElementById('doze');
const dezoito = document.getElementById('dezoito');

const charPass = "qwertyuiopa1234567890sdfghjklzxcvbnm";

let senha = Math.floor(Math.random() * (36 - 0) + 0);
let sizePass = 8;


oito.addEventListener('click', () => {
    sizePass = 8;
    oito.style.border = '3px solid red';
    doze.style.border = 'none';
    dezoito.style.border = 'none';
});

doze.addEventListener('click', () => {
    sizePass = 12;
    doze.style.border = '3px solid green';
    oito.style.border = 'none';
    dezoito.style.border = 'none';

});

dezoito.addEventListener('click', () => {
    sizePass = 18;
    dezoito.style.border = '3px solid blue';
    oito.style.border = 'none';
    doze.style.border = 'none';
});


btn.addEventListener("click", () => {
    gerarSenha();
            
    pass.innerHTML = `<input id="password" type="text" placeholder="Gere Sua Senha" value=${senha}> 
                      <button class="btn-copy" id="btn-copy">Copiar</button>`;

    senha = '';

    copyPassword();

});

btnClean.addEventListener("click", () => {
    pass.innerHTML = `<input type="text" placeholder="Gere Sua Senha">`
});





function gerarSenha() {
    
    for(let i = 0; i < sizePass; i++) {
        const posicao = Math.floor(Math.random() * (36 - 0) + 0);
        senha += charPass[posicao];
    }
    
}

function copyPassword() {
    const btnCopy = document.getElementById('btn-copy');
    btnCopy.addEventListener('click', () => {
        document.getElementById('password').select();
        document.execCommand('copy');
        alert("Senha Copiada!");
    });
}