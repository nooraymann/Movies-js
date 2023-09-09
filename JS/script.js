var allMovies = [];

getNowPlaying();
//SideBar Menu
let rightWidth = $(".sideBarLeft").innerWidth();

function closeSideBar() {
    $(".sideBarRight").css("left",rightWidth);  //close
    
    $(".sideBarLeft").css({"-webkit-transform":"scale(1)"}); 
    $(".fa").removeClass("fa-align-justify").addClass("fa-times");
    $(".sideBarLeft  li").css("opacity","1").css("padding-top","25px");
}
function openSideBar() {
    $(".sideBarRight").css("left","0");  //close
    $(".sideBarLeft").css({"-webkit-transform":"translateX(-100%)"}); 
   
    $(".fa").removeClass("fa-times").addClass("fa-align-justify");
  
    $(".sideBarLeft  li").css("opacity","0").css("padding-top","500px");
 
}

$(".toggelMenu").click(function () {

    if ($(".sideBarRight").css("left") == "0px") {
        closeSideBar();
    }

    else {
        openSideBar();
    }
})

//get Now Playing movies

function displayAll() {
    var movies = ''
    if (allMovies != null) {
        for (var i = 0; i < allMovies.length; i++) {
            movies += `  <div class="col-md-6 col-lg-4 my-3  shadow">
            <div class="movie shadow rounded position-relative overflow-hidden">
                    <div class="post ">
                    <img src="${"https://image.tmdb.org/t/p/w500"+allMovies[i].poster_path}" class="img-fluid rounded ">
                    <div class="layer d-flex align-items-center text-center">
                    <div class="info p-0">
                        <h2>${allMovies[i].original_title}</h2>
                        <p>${allMovies[i].overview}</p>
                        <p>rate: ${allMovies[i].vote_average}</p>
                        <p>${allMovies[i].release_date}</p>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>`
        }
        document.querySelector('.allmovies').innerHTML = movies;
    }
    else {
        document.querySelector('.allmovies').innerHTML = "";
    }
}

function getNowPlaying() {
    var req = new XMLHttpRequest();
    req.open('GET', 'https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
    req.send();
    req.addEventListener("readystatechange", function () {

        if (req.readyState == 4 && req.status == 200) {

            allMovies = JSON.parse(req.response).results;
            displayAll();
        }
    })
}

function getPopular() {
    var req = new XMLHttpRequest();
    req.open('GET', 'https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
    req.send();
    req.addEventListener("readystatechange", function () {

        if (req.readyState == 4 && req.status == 200) {

            allMovies = JSON.parse(req.response).results;
            displayAll();
        }
    })
}

function getTopRated() {
    var req = new XMLHttpRequest();
    req.open('GET', 'https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
    req.send();
    req.addEventListener("readystatechange", function () {

        if (req.readyState == 4 && req.status == 200) {

            allMovies = JSON.parse(req.response).results;
            displayAll();
          
        }
    })
}

function getTrending() {
    var req = new XMLHttpRequest();
    req.open('GET', 'https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
    req.send();
    req.addEventListener("readystatechange", function () {

        if (req.readyState == 4 && req.status == 200) {

            allMovies = JSON.parse(req.response).results;
            displayAll();
        }
    })
}
function getUpcoming() {
    var req = new XMLHttpRequest();
    req.open('GET', 'https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
    req.send();
    req.addEventListener("readystatechange", function () {

        if (req.readyState == 4 && req.status == 200) {

            allMovies = JSON.parse(req.response).results;
            displayAll();
        }
    })
}

function searchForMovie(name) {
    var req = new XMLHttpRequest();
    req.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=1&query=${name}`);
    req.send();
    req.addEventListener("readystatechange", function () {

        if (req.readyState == 4 && req.status == 200) {

            allMovies = JSON.parse(req.response).results;
            console.log(allMovies);
            displayAll();
        }
    })
}
//???????????
function searchByWord(word){
    var req = new XMLHttpRequest();
    req.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&query=${word}`);
    req.addEventListener("readystatechange", function () {

        if (req.readyState == 4 && req.status == 200) {

            allMovies = JSON.parse(req.response).results;
            console.log(allMovies);
           
            displayAll();
        }
    })
}

var nameInput =$("#name");
var emailInput = $("#email");
var phoneInput = $("#phone");
var ageInput = $("#age");
var passwordInput = $("#password");
var repasswordInput = $("#rePassword");
var flag=0;





function validate() {

//user can only enter characters "no numbers or special characters"
    var regexForName = /^[a-zA-Z]+$/;
    // var regexForName = /^(?!.)/;
    var regexForEmail = /^.+@.+\..{2,}$/;
    var regexForPhone = /^\d{10,12}$/;
    var regexForAge = /^[1-9][0-9]?$|^100$/;
    var regexForPassword = /^(?=.+[A-Za-z])(?=.+\d)[A-Za-z\d]{8,}$/;

    if (nameInput.val()!= "") {
        if (regexForName.test(nameInput.val())) {
            document.querySelector("#nameError").style.display = "none"
        }
        else {
            document.querySelector("#nameError").style.display = "block";
        }
    }  
  //must contain . and @
    if (emailInput.val()!= "") {
        if (regexForEmail.test(emailInput.val())) {
            document.querySelector("#emailError").style.display = "none"
        }
        else {
            document.querySelector("#emailError").style.display = "block";
        }
    }
//from range 10 to 12
    if (phoneInput.val() != "") {
        if (regexForPhone.test(phoneInput.val())) {
            document.querySelector("#phoneError").style.display = "none"
        }
        else {
            document.querySelector("#phoneError").style.display = "block";
        }
    }
    //from range 1 to 100
    if (ageInput.val() != "") {
        if (regexForAge.test(ageInput.val())) {
            document.querySelector("#ageError").style.display = "none"
        }
        else {
            document.querySelector("#ageError").style.display = "block";
        }
    }
    //Minimum eight characters, at least one letter and one number
    if (passwordInput.val() != "") {
        if (regexForPassword.test(passwordInput.val())) {
            document.querySelector("#passwordError").style.display = "none"
        }
        else {
            document.querySelector("#passwordError").style.display = "block";
        }
    }
    if (repasswordInput.val() != "") {
        if (passwordInput.val() == repasswordInput.val()) {
            document.querySelector("#repasswordError").style.display = "none"
        }
        else {
            document.querySelector("#repasswordError").style.display = "block";
        }
    }
}

