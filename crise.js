document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('botao1').addEventListener('click',registralenda)
    document.getElementById('botao2').addEventListener('click',limparegistra)
    document.getElementById('botaocor').addEventListener('click',mudacor)
    document.getElementById('btnOp1').addEventListener('click',mostrarOp1)
    document.getElementById('btnOp2').addEventListener('click',mostrarOp2)
    document.getElementById('btnOp3').addEventListener('click',mostrarOp3)
    document.getElementById('gacha1').addEventListener('click',gacha1)
    document.getElementById('gacha2').addEventListener('click',gacha2)
    document.getElementById('gacha3').addEventListener('click',gacha3)
    document.getElementById('gacha4').addEventListener('click',gacha4)
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

function mostrarOp1(){
    let pessoas = document.getElementById('pessoas')

    pessoas.classList.remove('oculto')

    setTimeout(function(){
        pessoas.classList.add('oculto');
    },10000)
}
function mostrarOp2(){
    let acoes = document.getElementById('acoes')

    acoes.classList.remove('oculto')

    setTimeout(function(){
        acoes.classList.add('oculto');
    },10000)
}
function mostrarOp3(){
    let locais = document.getElementById('locais')

    locais.classList.remove('oculto')

    setTimeout(function(){
        locais.classList.add('oculto');
    },10000)
}

function gacha1(){
    let resultados = ['enzo','el primo','gabigol','gustav','saippe','anuah','blackoviutzs','wiguinho','rafael','itallo','veras','olivio','miguel','gekko','brimstone','mandinha','imundao','caracal','malenia','sukuna','gojo','itadori','robozao']
    let sorteado = Math.floor(Math.random() * (resultados.length - 0) + 0)

    let div_result = document.getElementById('resultado1')
    div_result.innerHTML = resultados[sorteado]
}
function gacha2(){
    let resultados = ['dando','distribuindo','amando','odiando','morrendo','trolando','matando nazista','cyberbulling','rebolando pros crias',
'sofrendo por ex','jogando','sendo buxa','sendo honrrado','solando','sendo kid','mijando','spotando','mamando','comendo que nem jumento',
'se zangando']
    let sorteado = Math.floor(Math.random() * (resultados.length - 0) + 0)

    let div_result = document.getElementById('resultado2')
    div_result.innerHTML = resultados[sorteado]
}
function gacha3(){
    let resultados = ['valorant','shybuia','uninovafapi','pirata','casa do rafael','casa do enzo','sumoners rift','discord','alemanha nazista',
'senzala','genshin impacto','tumba de nazarik','shinjuku','meio da rua','casa do saippe','oficina do ygoh','oficina do bolo',
'boca de fumo','rpg','matagal','xique-xique bh']
    let sorteado = Math.floor(Math.random() * (resultados.length - 0) + 0)

    let div_result = document.getElementById('resultado3')
    div_result.innerHTML = resultados[sorteado]
}

function gacha4(){
    gacha1()
    gacha2()
    gacha3()
}