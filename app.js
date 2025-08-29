const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function agregarAmigo() {
    const nombre = inputAmigo.value.trim();
    if (nombre === "") return;
    listaAmigos.innerHTML += `<li>${nombre}</li>`;
    inputAmigo.value = "";
}

function sortearAmigo() {
    let amigos = [];
    document.querySelectorAll("#listaAmigos li").forEach(li => {
        amigos.push(li.textContent);
    });

    if(amigos.length < 2) {
        resultado.innerHTML = "<li>Necesitas al menos 2 amigos para sortear</li>";
        return;
    }

    let disponibles = [...amigos]; // copia de amigos
    let asignaciones = {};

    amigos.forEach(amigo => {
        let posibles = disponibles.filter(a => a !== amigo);
        let elegido = posibles[Math.floor(Math.random() * posibles.length)];
        asignaciones[amigo] = elegido;
        disponibles = disponibles.filter(a => a !== elegido);
    });

    resultado.innerHTML = "";
    for(let amigo in asignaciones) {
        resultado.innerHTML += `<li>${amigo} → ${asignaciones[amigo]}</li>`;
    }
}

