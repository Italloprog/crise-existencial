document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('botao1').addEventListener('click',registralenda)
    document.getElementById('botao2').addEventListener('click',limparegistra)
    document.getElementById('botaocor').addEventListener('click',mudacor)
})

function registralenda(){
    let senha_base = '0770'
    let senha_input = document.getElementById('senha').value
    let nova_lenda = ''

    if (senha_base == senha_input){
        let nome_lenda = document.getElementById('nome').value
        let desc_lenda = document.getElementById('lenda').value
        nova_lenda = nome_lenda + '--' + desc_lenda

        let ele_lenda = document.createElement('li')
        ele_lenda.innerHTML = nova_lenda

        document.getElementById('lista_lendas').appendChild(ele_lenda)
        alert('lenda catalogada')
    }else{
        alert('senha incorreta!')
    }
}

function limparegistra(){
    document.getElementById('nome').value = ''
    document.getElementById('senha').value = ''
    document.getElementById('lenda').value = ''
}

function mudacor(){
    let cor1 = document.getElementById('cor1').value
    let cor2 = document.getElementById('cor2').value

    document.body.style.backgroundImage = `linear-gradient(to right,${cor1},${cor2})`
}