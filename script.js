function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML=`Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'dia.png'
        msg.innerHTML += ' - Bom dia'
        document.body.style.background = '#ADDEE3'
    }else if (hora >= 12 && hora < 18) {
            //boa tarde
        img.src = 'tarde.png'
        msg.innerHTML += ' - Boa tarde'
        document.body.style.background = '#FDD2A4'

    }else {
        //boa noite
        img.src = 'noite.png'
        msg.innerHTML += ' - Boa noite'
        document.body.style.background = '#2D548B'
    }
    
}

