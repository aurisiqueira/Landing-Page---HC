const form = document.getElementById('form')

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    
    let dados = {
        nome,
        email,
    }

    let convertData =  JSON.stringify(dados);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content');

    let carregando = `<p>carregando...</p>`

    let pronto = `<p>Pronto!</p>`

    content.innerHTML = carregando

    setTimeout(() => {
        content.innerHTML = pronto
    }, 1000)
})