const secret = document.getElementById("secret");

function games(){
    secret.innerText = "Les projets arrivent bientôt.";
}

function lore(){
    secret.innerText = "Certaines archives sont scellées.";
}

/* Easter egg clavier */

let code="";

document.addEventListener("keydown", e=>{
    code += e.key.toLowerCase();

    if(code.includes("iblis")){
        secret.innerText = "Tu connais le nom interdit.";
        code="";
    }

    if(code.includes("666")){
        document.body.style.background="black";
        secret.innerText="Quelque chose t'observe.";
        code="";
    }
});
