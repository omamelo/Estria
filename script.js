function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const oops = document.getElementById("oops");
    if (username === "omamelo" && password === "omamelo") {
        const el = document.querySelector = "#vitejjmeno";
        document.getElementById("success").innerText="";
        oops.remove();
    } else if (username === "Omamelo2" && password === "Omamelo2") {
        document.location.href="zamestnanci.html";
        document.getElementById("success").innerHTML=``;
    } else {
        document.getElementById("success").innerHTML=`Špatné heslo nebo uživatelské jméno!`;        
    }
}