function carregar() {
    var img = window.document.getElementById('imagem')   
    function hours () {
        var hours = document.getElementById ('hours')
    //div com id="hours" no html
        var date1 = new Date ()
        var gthours = date1.getHours()
        var gtminutes = date1.getMinutes()
        var gtseconds = date1.getSeconds()

            if (gthours < 10) {
                gthours = `0${gthours}`
            }
            if (gtminutes < 10) {
                gtminutes = `0${gtminutes}`
            }

            if (gtseconds < 10) {
                gtseconds =`0${gtseconds}`
            }
                    
        hours.textContent = `Agora são ${gthours}:${gtminutes}:${gtseconds}`
        if (gthours >= 0 && gthours < 12) {
            // BOM DIA!
            img.src = 'morning.webp'
            document.body.style.background = "#ffe080"    
        } else if (gthours >= 12 && gthours < 18) {
            // BOA TARDE!
            img.src = 'afternoonok.webp'
            document.body.style.background = "#7c4d77" 
        } else {
            // BOA NOITE!
            img.src = 'night.webp'
            document.body.style.background = "#173e5d"
    }
    }
        var tictac = setInterval (hours, 1000)
    hours()
    
}
