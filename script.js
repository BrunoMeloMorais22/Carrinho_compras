let carrinho = []

function porcima(){

    let div = document.createElement('div')
    
    div.style.position = "absolute"
    div.style.background = "gray"
    div.style.padding = "30px"
    div.style.marginLeft = "5px"
    div.style.borderRadius = "20px"



    let h3 = document.createElement('h3')
    h3.textContent = "Itens adicionados"
    div.appendChild(h3)

    if(carrinho.length > 0){
        carrinho.forEach(item =>{
            let p = document.createElement('p')
            p.innerHTML = item
            div.appendChild(p)
        })
    }
    else{
        let p = document.createElement('p')
        p.innerHTML = "Carrinho Vazio"
        div.appendChild(p)
    }

    document.getElementById('container').appendChild(div)

    setTimeout(() =>{
        container.removeChild(div)
    }, 3000)

}

function adicionar(){
    let produto = event.target.parentElement.querySelector('h2').innerHTML
    let preco = event.target.parentElement.querySelector('p').innerHTML


    carrinho.push(produto, preco)

    alert(`${produto} foi adicionado com sucesso`)
}