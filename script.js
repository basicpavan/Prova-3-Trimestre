const movies = [
    {
        name: "O Iluminado",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTreDAP6_hjZYbErhXMk1OygzSGwfHEjlFRBaQy8SFSx8YKKjwvV72y1Is51C1irtPED84&usqp=CAU",
        date: "26/10/2023",
        isReleased: true,
        releaseDate: "01/10/2023",
        price: 10.00,
        ticketsAvailable: 50
    },
    {
        name: "O Exorcista",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyb83w8o5DBKRAT9-lVsl6QtnmmDmR7VOvTOCfVTWacR4HCotboLF_Psxx9wF_JUzNvAg&usqp=CAU",
        date: "27/10/2023",
        isReleased: false,
        releaseDate: "15/10/2023",
        price: 12.00,
        ticketsAvailable: 30
    },
    {
        name: "Psicose",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI_z-HGxA-vpA0QxQD09SSMFR4LgCztnMFvQ&usqp=CAU",
        date: "28/10/2023",
        isReleased: true,
        releaseDate: "01/10/2023",
        price: 9.50,
        ticketsAvailable: 40
    },
    {
        name: "Atividade Paranormal",
               date: "29/10/2023",
        isReleased: false,
        releaseDate: "15/10/2023",
        price: 11.00,
        ticketsAvailable: 35
    },
    {
        name: "Invocação do Mal",
        image: "https://uploads.jovemnerd.com.br/wp-content/uploads/2023/04/invocacao_do_mal_serie__iy4713-1210x544.jpg",
        date: "30/10/2023",
        isReleased: true,
        releaseDate: "01/10/2023",
        price: 10.50,
        ticketsAvailable: 45
    },
    {
        name: "O Massacre da Serra Elétrica",
        image: "https://tm.ibxk.com.br/2023/09/13/13100917724058.jpg",
        date: "31/10/2023",
        isReleased: false,
        releaseDate: "15/10/2023",
        price: 11.50,
        ticketsAvailable: 25
    },
    {
        name: "O Sexto Sentido",
        image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/6F32ED7C79509C5EF840B251DC9EDB01178B40D8B5096C124E672F3555D199FD/scale?width=1200&aspectRatio=1.78&format=jpeg",
        date: "01/11/2023",
        isReleased: true,
        releaseDate: "01/10/2023",
        price: 10.00,
        ticketsAvailable: 55
    },
    {
        name: "O Chamado",
        image: "https://caras.uol.com.br/media/_versions/legacy/2017/01/24/img-755109-o-chamado-completa-15-anos-veja-como-estao-os-atores20170124091485258584_widexl.jpg",
        date: "02/11/2023",
        isReleased: true,
        releaseDate: "01/10/2023",
        price: 12.00,
        ticketsAvailable: 60
    },
    {
        name: "A Bruxa",
        image: "https://3.bp.blogspot.com/-zFZc6cEAwE0/Vwzibd1elEI/AAAAAAAAMAI/cNrHz2kiHS4FX0idzqmlVo6Usk2ZPTAVACLcB/s1600/thewitch.png",
        date: "03/11/2023",
        isReleased: false,
        releaseDate: "15/10/2023",
        price: 11.00,
        ticketsAvailable: 35
    },
    {
        name: "Hereditário",
        image: "https://i0.wp.com/cinestera.com.br/wp-content/uploads/2023/01/Hereditario.jpeg?fit=1280%2C720&ssl=1",
        date: "04/11/2023",
        isReleased: true,
        releaseDate: "01/10/2023",
        price: 9.50,
        ticketsAvailable: 40
    },
    {
        name: "Get Out",
        image: "https://miro.medium.com/v2/resize:fit:1013/1*Y1YsOwrkJkcxs65B8AEMQw.jpeg",
        date: "26/10/2023",
        isReleased: true,
        releaseDate: "01/10/2023",
        price: 10.00,
        ticketsAvailable: 50
    },
    {
        name: "Annabelle",
        image: "https://proxy.olhardigital.com.br/wp-content/uploads/2023/01/Annabelle-1024x506.png",
        date: "26/10/2023",
        isReleased: true,
        releaseDate: "01/10/2023",
        price: 10.00,
        ticketsAvailable: 50
    },
];

        const movieList = document.getElementById("movie-list");

        // Adicionar cada filme à lista
        movies.forEach(movie => {
            const card = document.createElement("div");
            card.classList.add("movie-card");

            const image = document.createElement("img");
            image.src = movie.image;
            image.alt = movie.name;
            image.classList.add("movie-image");

            const name = document.createElement("h2");
            name.textContent = movie.name;

            const date = document.createElement("p");
            date.textContent = "Data: " + movie.date;

            const release = document.createElement("p");
            if (movie.isReleased) {
                release.textContent = "Lançado em: " + movie.releaseDate;
            } else {
                release.textContent = "Lançamento em: " + movie.releaseDate;
            }

            const price = document.createElement("p");
            price.textContent = "Preço: R$" + movie.price.toFixed(2);

            const tickets = document.createElement("p");
            tickets.textContent = "Ingressos Disponíveis: " + movie.ticketsAvailable;

            card.appendChild(image);
            card.appendChild(name);
            card.appendChild(date);
            card.appendChild(release);
            card.appendChild(price);
            card.appendChild(tickets);

            movieList.appendChild(card);
        });
