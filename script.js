const projectContainer = document.querySelector(".projectsContainer");
projectContainer.innerHTML = "";
const projectes =  [
    {title:"SmartWatch Shop",img:"img/watchshop.png",url:"http://htutwinlattpoforlio.epizy.com/smartwatchhtml/"},
    {title:"MusicApp",img:"img/musicApp.png",url:"http://htutwinlattpoforlio.epizy.com/musicApplication/"},
    {title:"Hello Linker",img:"img/helloLinker.png",url:"http://hellolinker.epizy.com/"},
]
for (let i = 0; i < projectes.length; i++) {
    projectContainer.innerHTML += `
    <div class="card p-0 mt-4 overflow-hidden" style="width: 18rem;" data-aos="zoom-in" data-aos-duration="1500">
            <img src="${projectes[i].img}" class="ts-0p5 card-img-top w-100 h-75" alt="...">
            <div class="card-body">
              <h5 class="card-title">${projectes[i].title}</h5>
              <a class="btn btn-outline-aux" href="${projectes[i].url}" target="_black">Live Demo</a>
            </div>
          </div>`;
}

const checkLightDarkMode = () => {
    if (localStorage.getItem("mode") === "light") {
        $(".light-dark-btn").css({ "left": "0px" });
        $("body, nav").addClass("bg-light_gray");
        $("body, nav , .aboutContainer , .card , .projectContainer").removeClass("bg-dark");
        $(".aboutContainer , .card").addClass("shadow")
        // $(".aboutContainer , .card").css({"box-shadow": "0px 0px 0px gray"});
        $("a").addClass("text-dark");
        $("*").removeClass("text-light");
        $(".experience , .white").addClass("text-light");
        $(".fa-sun").addClass("text-warning");
        return;
    }
    if (localStorage.getItem("mode") === "dark") {
        $(".light-dark-btn").css({ "left": "25px" });
        $("body, nav").removeClass("bg-light_gray");
        $("body, nav , .aboutContainer , .card , .projectContainer").addClass("bg-dark");
        $(".aboutContainer , .card").removeClass("shadow")
        $(".aboutContainer , .card").css({ "box-shadow": "5px 5px 10px gray" });
        $("a").removeClass("text-dark");
        $("*").addClass("text-light");
        return;
    } if (!localStorage.getItem("mode")) {
        $(".light-dark-btn").css({ "left": "0px" });
        localStorage.setItem("mode", "light");
        return;
    }
}
checkLightDarkMode();
$(".light-dark-btn").click(function () {
    if (localStorage.getItem("mode") === "light") {
        localStorage.setItem("mode", "dark");
        checkLightDarkMode();
        return;
    }
    if (localStorage.getItem("mode") === "dark") {
        localStorage.setItem("mode", "light");
        checkLightDarkMode();
        return;
    }

})

const WebDeveloperText = () => {
    $(".webdeveloper").html("|");

    setTimeout(function () {
        $(".webdeveloper").html("");
        $(".webdeveloper").append("W")
        setTimeout(function () {
            // $(".webdeveloper").html(substring(0,$('.webdeveloper').html().length - 1));
            $(".webdeveloper").append("e")
            setTimeout(function () {
                $(".webdeveloper").append("b");
                setTimeout(function () {
                    $(".webdeveloper").append("d");
                    setTimeout(function () {
                        $(".webdeveloper").append("e");
                        setTimeout(function () {
                            $(".webdeveloper").append("v");
                            setTimeout(function () {
                                $(".webdeveloper").append("e");
                                setTimeout(function () {
                                    $(".webdeveloper").append("l");
                                    setTimeout(function () {
                                        $(".webdeveloper").append("o");
                                        setTimeout(function () {
                                            $(".webdeveloper").append("p");
                                            setTimeout(function () {
                                                $(".webdeveloper").append("e");
                                                setTimeout(function () {
                                                    $(".webdeveloper").append("r");
                                                }, 500)
                                            }, 500)
                                        }, 500)
                                    }, 500)
                                }, 500)
                            }, 500)
                        }, 500)
                    }, 500)
                }, 500)
            }, 500)
        }, 500)
    }, 500)



}
WebDeveloperText();
setTimeout(function () {
    setInterval(() => {
        WebDeveloperText();
    }, 8000);
}, 1000)

$(".menuContainer").click(function () {
    $(".line-1").toggleClass("cross-line-1");
    $(".line-3").toggleClass("cross-line-3");
    $(".line-2").toggle();
    if ($(".line-1").hasClass("cross-line-1")) {
        $('.menuForPhone').fadeIn(500);
    }else{
        $('.menuForPhone').fadeOut(500);
    }
})