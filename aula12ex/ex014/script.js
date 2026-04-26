function carregar() {
    var msg = document.getElementById('msg') // guarda o elemento para poder manipular depois
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        console.log('Bom dia!')
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        console.log('Boa tia!')
        img.src = 'fototarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        console.log('Boa noite!')
        img.s = 'fotonoite.jpg'
        document.body.style.background = '#515154'
    }
}