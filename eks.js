$(window).on("load", startSide);

function startSide() {
    console.log("startSide")

    $(".buttonplay").on("click", musikStart);

}


function musikStart() {
    console.log("musikStart")

    $("#musik")[0].play();
    $("#ugle_container").addClass("fly_in");
    $("#ugle").addClass("flying");



    $(".buttonstop").on("click", musikStop);

}

function musikStop() {
    console.log("musikStop")

    $("#musik")[0].pause();

}
