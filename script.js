// @ PREPARAZIONIE

// Recupero gli elementi di interesse della pagina

const input = document.querySelector("input");
const button = document.querySelector("button");
const chatBox = document.querySelector(".chat-box");
const search = document.querySelector(".ph-duotone.ph-magnifying-glass")

// preparazione dei messaggi iniziali
const messages = [
    {
        type: "sent",
        text: "Ciao Pippa, come va?",
        time: "20:27"
    },
    {
        type: "received",
        text: "Hei, io tutto bene, grazie. E tu come stai?? ",
        time: "20:27"
    }
];


// @ OPERAZIONI DI AVVIO PAGINA 

// svuoto la chat

chatBox.innerHTML = "";

// Per ciascuno dei messaggi creami una variabiule messagge
for (const message of messages) {
    chatBox.innerHTML += `
    <div class="chat-row ${message.type}">
        <div class="chat-message">
            <p> ${message.text}</p>
            <time datetime="${message.time}">
            ${message.time}
            </time>
        </div>
    </div>`
}


// @ OPERAZIONI DI INTERAZIONE CON L'UTENTE

// al click del bottone invia il msg inserito nell'input dall'utente
button.addEventListener("click", function(){
    const insertedText = input.value; // prendo il testo inserito nell'input
    console.log(insertedText)
})
