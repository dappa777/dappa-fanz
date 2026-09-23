/* =====================================================
   DAPZ FANS
   LEBRON JAMES COMMUNITY
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       ELEMENTS
    ================================================= */

    const menuButton = document.getElementById("menuButton");
    const mainNav = document.getElementById("mainNav");

    const navLinks = document.querySelectorAll(".nav-link");

    const joinButton = document.getElementById("joinButton");
    const joinModal = document.getElementById("joinModal");
    const closeJoin = document.getElementById("closeJoin");

    const joinForm = document.getElementById("joinForm");

    const images = document.querySelectorAll("img");


    /* =================================================
       MOBILE MENU
    ================================================= */

    if (menuButton) {

        menuButton.addEventListener("click", function () {

            mainNav.classList.toggle("show");

        });

    }


    /* =================================================
       CLOSE MOBILE MENU
    ================================================= */

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("show");

        });

    });


    /* =================================================
       ACTIVE NAVIGATION
    ================================================= */

    window.addEventListener("scroll", function () {

        const sections = document.querySelectorAll("section[id]");

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 120;

            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection = section.getAttribute("id");

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    });


    /* =================================================
       JOIN MODAL
    ================================================= */

    if (joinButton) {

        joinButton.addEventListener("click", function () {

            joinModal.classList.add("show");

        });

    }


    if (closeJoin) {

        closeJoin.addEventListener("click", function () {

            joinModal.classList.remove("show");

        });

    }


    /* =================================================
       CLOSE MODAL WHEN CLICK OUTSIDE
    ================================================= */

    if (joinModal) {

        joinModal.addEventListener("click", function (event) {

            if (event.target === joinModal) {

                joinModal.classList.remove("show");

            }

        });

    }


    /* =================================================
       JOIN FORM
    ================================================= */

    if (joinForm) {

        joinForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                document.getElementById("memberName").value.trim();

            const email =
                document.getElementById("memberEmail").value.trim();


            if (name === "" || email === "") {

                alert("Silakan isi semua data.");

                return;

            }


            alert(
                "Selamat datang di DAPZ FANS, " +
                name +
                "!"
            );


            joinForm.reset();

            joinModal.classList.remove("show");

        });

    }


    /* =================================================
       IMAGE ERROR HANDLER
    ================================================= */

    images.forEach(function (image) {

        image.addEventListener("error", function () {

            console.warn(
                "Foto tidak ditemukan:",
                image.getAttribute("src")
            );


            image.style.background = "#15171d";

        });

    });


    /* =================================================
       IMAGE LOADED LOG
    ================================================= */

    images.forEach(function (image) {

        image.addEventListener("load", function () {

            console.log(
                "Foto berhasil dimuat:",
                image.getAttribute("src")
            );

        });

    });


    /* =================================================
       SCROLL REVEAL
    ================================================= */

    const revealElements = document.querySelectorAll(
        ".timeline-card, " +
        ".achievement-card, " +
        ".record, " +
        ".gallery-item, " +
        ".intro-grid"
    );


    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("revealed");

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    /* =================================================
       SMOOTH SCROLL
    ================================================= */

    document.querySelectorAll('a[href^="#"]').forEach(
        function (anchor) {

            anchor.addEventListener("click", function (event) {

                const targetID =
                    anchor.getAttribute("href");

                const target =
                    document.querySelector(targetID);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            });

        }
    );


    /* =================================================
       ESC KEY CLOSE MODAL
    ================================================= */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            if (joinModal) {

                joinModal.classList.remove("show");

            }

            if (mainNav) {

                mainNav.classList.remove("show");

            }

        }

    });


    /* =================================================
       CURRENT YEAR
    ================================================= */

    const copyright =
        document.querySelector(".copyright");

    if (copyright) {

        copyright.textContent =
            "© " +
            new Date().getFullYear() +
            " DAPZ FANS";

    }


    /* =================================================
       IMAGE PRELOAD
    ================================================= */

    const imageSources = [

        "images/lebron-muda.jpg",

        "images/lebron-cavaliers.jpg",

        "images/lebron-heat.jpg",

        "images/lebron-heat-champion.jpg",

        "images/lebron-cavaliers-champion.jpg",

        "images/lebron-lakers.jpg",

        "images/lebron-lakers-champion.jpg",

        "images/lebron-olympic.jpg",

        "images/lebron-76ers.jpg",

        "images/lakers-team.jpg",

        "images/prestasi-2012.jpg",

        "images/prestasi-2013.jpg",

        "images/prestasi-2016.jpg",

        "images/prestasi-2020.jpg",

        "images/prestasi-mvp.jpg",

        "images/prestasi-olimpiade.jpg"

    ];


    imageSources.forEach(function (source) {

        const preload =
            new Image();

        preload.src = source;

    });


    /* =================================================
       CONSOLE
    ================================================= */

    console.log(
        "DAPZ FANS berhasil dijalankan."
    );

    console.log(
        "Total gambar:",
        images.length
    );

});