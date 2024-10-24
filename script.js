let email = document.getElementById("inpt1");
let password = document.getElementById("inpt2");
let btn = document.getElementById("btn");

btn.addEventListener("mousemove", function() {
    if (password.value !== "" && email.value !== "") {
        let random1 = Math.floor(Math.random() * 301);
        let random2 = Math.floor(Math.random() * 301);
        btn.style.position = 'absolute';
        btn.style.top = `${random1}px`;
        btn.style.left = `${random2}px`;
    }
});
