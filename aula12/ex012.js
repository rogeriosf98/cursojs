var agora = new Date()
var hora = agora.getHours() // A variável agora new Date() faz com que o js pegue a hora do sistema do pc. Na variável hora, ela RECEBE a variável agora = getHours(), que assim, o terminal já indica  hora exata.
console.log(`Agora são exatmente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia')
} else if (hora <= 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}