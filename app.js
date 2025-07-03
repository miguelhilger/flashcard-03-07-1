function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo__pergunta">
                <p>Qual a capital do Reino Unido ?</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>A capital do Reino Unido é Londres</p>
            </div>
        </div>
    `
    container.appendChild(cartao)

}