/* =========================
   LOADING AWAL
========================= */

let progress = 0;

let loadingText =
    document.getElementById("loading-text");

let progressBar =
    document.getElementById("progress");

let percent =
    document.getElementById("percent");


let loadingMessages = [

    "Checking birthday data...",

    "Loading happiness...",

    "Preparing surprise...",

    "Almost ready...",

    "Access granted!"

];


let messageIndex = 0;


let loading = setInterval(function () {

    progress++;

    progressBar.style.width =
        progress + "%";

    percent.innerHTML =
        progress + "%";


    if (
        progress % 20 === 0 &&
        messageIndex < loadingMessages.length
    ) {

        loadingText.innerHTML =
            loadingMessages[messageIndex];

        messageIndex++;

    }


    if (progress >= 100) {

        clearInterval(loading);


        setTimeout(function () {

            document.getElementById(
                "loading-screen"
            ).style.display = "none";


            document.getElementById(
                "home"
            ).classList.add("active");

        }, 500);

    }

}, 50);


/* =========================
   GANTI SLIDE
========================= */

function changeSlide(current, next) {

    document.getElementById(current)
        .classList.remove("active");

    document.getElementById(next)
        .classList.add("active");

}


/* =========================
   PRANK NO SIGNAL
========================= */

function startPrank() {

    // Masuk ke slide No Signal

    changeSlide("home", "prank");


    let countdown = 5;

    let countdownText =
        document.getElementById(
            "prank-countdown"
        );


    countdownText.innerHTML =
        "Redirect to... " +
        countdown ;


    let timer = setInterval(function () {

        countdown--;


        if (countdown > 0) {

            countdownText.innerHTML =
                "Redirect to... " +
                countdown ;

        }


        if (countdown <= 0) {

            clearInterval(timer);


            // Lanjut ke slide ucapan

            changeSlide(
                "prank",
                "birthday"
            );

        }

    }, 1000);

}


/* =========================
   SLIDE TERAKHIR
========================= */

function nextMessage() {

    changeSlide(
        "birthday",
        "final"
    );

}