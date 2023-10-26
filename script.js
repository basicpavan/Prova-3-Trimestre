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
        image: "data:image/jpeg;base64,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",
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