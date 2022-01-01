function login_player(){
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name" , player1_name);
    localStorage.setItem("player2_name" , player2_name);

    window.location.replace("game_page.html");
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {

if(e.keyCode == 13){
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name" , player1_name);
    localStorage.setItem("player2_name" , player2_name);

    window.location.replace("game_page.html");
}
}