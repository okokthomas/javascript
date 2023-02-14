function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
msg.innerHTML = `Agora são ${hora}:${minutos} horas.`
if (hora >= 0 && hora <12) {
    //bom dia
    img.src = 'imagens/fotomanha.jpg'
    document.body.style.background = '#e2cd9f'
} else if ( hora >= 12 && hora < 18) {
    //boa tarde
    img.src = 'imagens/fototarde.jpg'
    document.body.style.background = 'rgb(47, 29, 96)'
} else {
    //boa noite
    img.src = 'imagens/fotonoite.jpg'
    document.body.style.background = 'rgb(15, 51, 57)'
}

}