
//CHIAMATA FETCH API Linkin Park

fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=linkinpark')
    .then(response => response.json())
    .then(dataLinkinPark => {
        console.log(dataLinkinPark)
        //constante elemento DOM
        const divLinkinPark = document.getElementById('eminem')
        //rimozione classe display none
        divLinkinPark.classList.remove('d-none')

        //constante h2 per innestare artista corrente
        const artistName = document.querySelector('#eminem >h2')
        artistName.innerHTML = `${dataLinkinPark.data[0].artist.name}`

        //ciclo per innestare i titoli dei brani con contenitore del DOM
        dataLinkinPark.data.forEach(element => {
            divLinkinPark.append(`${element.title} - `)
        }); 


        //INIZIO CREAZIONE FUNZIONE BOTTONE CREA LISTA
        const eminemSection = document.getElementById('eminemSection')
        const btnLinkinPark = document.createElement('button')
        btnLinkinPark.classList.add('btnCreaLIsta')
        btnLinkinPark.id = 'listaLinkinPark'
        btnLinkinPark.textContent = 'Crea Lista Album'

        btnLinkinPark.addEventListener('click', () => {

            divLinkinPark.innerHTML = ''

            dataLinkinPark.data.forEach(element => {
                divLinkinPark.append(`${element.album.title} - `)
            })
        })

        eminemSection.appendChild(btnLinkinPark)

    })



//CHIAMATA FETCH API Adele

fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=adele')
    .then(response => response.json())
    .then(dataAdele => {
        console.log(dataAdele)
        //constante elemento DOM
        const divAdele = document.getElementById('metallica')
        //rimozione classe display none
        divAdele.classList.remove('d-none')

        //constante h2 per innestare artista corrente
        const artistName = document.querySelector('#metallica >h2')
        artistName.innerHTML = `${dataAdele.data[0].artist.name}`


        //ciclo per innestare i titoli dei brani con contenitore del DOM
        dataAdele.data.forEach(element => {
            divAdele.append(`${element.title} - `)
        }); 


        //INIZIO CREAZIONE FUNZIONE BOTTONE CREA LISTA
        const metallicaSection = document.getElementById('metallicaSection')
        const btnAdele = document.createElement('button')
        btnAdele.classList.add('btnCreaLIsta')
        btnAdele.id = 'listaAdele'
        btnAdele.textContent = 'Crea Lista Album'

        btnAdele.addEventListener('click', () => {

            divAdele.innerHTML = ''

            dataAdele.data.forEach(element => {
                divAdele.append(`${element.album.title} - `)
            })
        })

        metallicaSection.appendChild(btnAdele)

    })



//CHIAMATA FETCH API Katy Perry

fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=katyperry')
    .then(response => response.json())
    .then(dataKaty => {
        console.log(dataKaty)
        //constante elemento DOM
        const divKaty = document.getElementById('queen')
        //rimozione classe display none
        divKaty.classList.remove('d-none')

        //constante h2 per innestare artista corrente
        const artistName = document.querySelector('#queen >h2')
        artistName.innerHTML = `${dataKaty.data[0].artist.name}`


        //ciclo per innestare i titoli dei brani con contenitore del DOM
        dataKaty.data.forEach(element => {
            divKaty.append(`${element.title} - `)
        }); 


        //INIZIO CREAZIONE FUNZIONE BOTTONE CREA LISTA
        const queenSection = document.getElementById('queenSection')
        const btnKaty = document.createElement('button')
        btnKaty.classList.add('btnCreaLIsta')
        btnKaty.id = 'listaKaty'
        btnKaty.textContent = 'Crea Lista Album'

        btnKaty.addEventListener('click', () => {

            divKaty.innerHTML = ''

            dataKaty.data.forEach(element => {
                divKaty.append(`${element.album.title} - `)
            })
        })

        queenSection.appendChild(btnKaty)

    })


