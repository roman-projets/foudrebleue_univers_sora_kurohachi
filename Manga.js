function fermer(clique) {
    if (clique === 'patte') {
        window.close()
    }
}

let etat = 0;
function lecture() {
    const pages = document.querySelector("#cover")
    if (etat === 0) {
        pages.src = "Manga/Synopsis.jpeg";
        pages.style.width = "39%";
        etat = 1;
    }
    else if (etat === 1) {
        pages.src = "Manga/Chapitre 1.png";
        pages.style.width = "56%";
        etat = 2;
    }

    else if (etat === 2) {
        pages.src = "Manga/Ch 1 Sc 1.jpg";
        pages.style.width = "41%";
        etat = 3;
    }
    else if (etat === 3) {
        pages.src = "Manga/Ch 1 Sc 2.jpg"
        pages.style.width = "57%";
        etat = 4;
    }
    else if (etat === 4) {
        pages.src = "Manga/Ch 1 Sc 3.jpg"
        pages.style.width = "57%";
        etat = 5;
    }
    else if (etat === 5) {
        pages.src = "Manga/Ch 1 Sc 4.png"
        pages.style.width = "41%";
        etat = 6;
    }
    else if (etat === 6) {
        pages.src = "Manga/Ch 1 Sc 5.jpg"
        pages.style.width = "57%";
        etat = 7;
    }
    else if (etat === 7) {
        pages.src = "Manga/Ch 1 Sc 6.png"
        pages.style.width = "41%";
        etat = 8;
    }
    else if (etat === 8) {
        pages.src = "Manga/Ch 1 Sc 7.jpg"
        pages.style.width = "57%";
        etat = 9;
    }
    else if (etat === 9) {
        pages.src = "Manga/Ch 1 Sc 8.jpg"
        pages.style.width = "57%";
        etat = 10;
    }
    else if (etat === 10) {
        pages.src = "Manga/Ch 1 Sc 9.jpg"
        pages.style.width = "57%";
        etat = 11;
    }
    else if (etat === 10) {
        pages.src = "Manga/Ch 1 Sc 9.jpg"
        pages.style.width = "57%";
        etat = 11;
    }
    else if (etat === 11) {
        pages.src = "Manga/Ch 1 Sc 10.jpg"
        pages.style.width = "41%";
        etat = 12;
    }
    else if (etat === 12) {
        pages.src = "Manga/Ch 1 Sc 11.jpg"
        pages.style.width = "57%";
        etat = 13;
    }
    else if (etat === 13) {
        pages.src = "Manga/Ch 1 Sc 12.jpg"
        pages.style.width = "41%";
        etat = 14;
    }
    else if (etat === 14) {
        pages.src = "Manga/Ch 1 Sc 13.jpg"
        pages.style.width = "57%";
        etat = 15;
    }
    else if (etat === 15) {
        pages.src = "Manga/Ch 1 Sc 14.jpg"
        pages.style.width = "57%";
        etat = 16;
    }
    else if (etat === 16) {
        pages.src = "Manga/Ch 1 Sc 15.jpg"
        pages.style.width = "57%";
        etat = 17;
    }
    disparaitre();
}

function re_lecture() {
    const pages = document.querySelector("#cover")
    if (etat === 17) {
        pages.src = "Manga/Ch 1 Sc 14.jpg"
        pages.style.width = "57%";
        etat = 16;
    }
    else if (etat === 16) {
        pages.src = "Manga/Ch 1 Sc 13.jpg"
        pages.style.width = "57%";
        etat = 15;
    }
    else if (etat === 15) {
        pages.src = "Manga/Ch 1 Sc 12.jpg"
        pages.style.width = "41%";
        etat = 14;
    }
    else if (etat === 14) {
        pages.src = "Manga/Ch 1 Sc 11.jpg"
        pages.style.width = "57%";
        etat = 13;
    }
    else if (etat === 13) {
        pages.src = "Manga/Ch 1 Sc 10.jpg"
        pages.style.width = "41%";
        etat = 12;
    }
    else if (etat === 12) {
        pages.src = "Manga/Ch 1 Sc 9.jpg"
        pages.style.width = "57%";
        etat = 11;
    }
    else if (etat === 11) {
        pages.src = "Manga/Ch 1 Sc 8.jpg"
        pages.style.width = "57%";
        etat = 10;
    }
    else if (etat === 10) {
        pages.src = "Manga/Ch 1 Sc 7.jpg"
        pages.style.width = "57%";
        etat = 9;
    }
    else if (etat === 9) {
        pages.src = "Manga/Ch 1 Sc 6.png"
        pages.style.width = "41%";
        etat = 8;
    }
    else if (etat === 8) {
        pages.src = "Manga/Ch 1 Sc 5.jpg"
        pages.style.width = "57%";
        etat = 7;
    }
    else if (etat === 7) {
        pages.src = "Manga/Ch 1 Sc 4.png"
        pages.style.width = "41%";
        etat = 6;
    }
    else if (etat === 6) {
        pages.src = "Manga/Ch 1 Sc 3.jpg"
        pages.style.width = "57%";
        etat = 5;
    }
    else if (etat === 5) {
        pages.src = "Manga/Ch 1 Sc 2.jpg"
        pages.style.width = "57%";
        etat = 4;
    }
    else if (etat === 4) {
        pages.src = "Manga/Ch 1 Sc 1.jpg";
        pages.style.width = "41%";
        etat = 3;
    }
    else if (etat === 3) {
        pages.src = "Manga/Chapitre 1.png";
        pages.style.width = "56%";
        etat = 2;
    }
    else if (etat === 2) {
        pages.src = "Manga/synopsis.jpeg";
        pages.style.width = "39%";
        etat = 1;
    }
    else if (etat === 1) {
        pages.src = "Manga/Couvrture Manga.jpeg";
        pages.style.width = "53%";
        etat = 0;
    }
    disparaitre();
}

function disparaitre() {
    const precedent = document.querySelector("#precedent")
    if (etat === 0) {
        precedent.style.display = "none";
    } else {
        precedent.style.display = "block";
    }
}