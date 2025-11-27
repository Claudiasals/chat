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
    },


];


// @ OPERAZIONI DI AVVIO PAGINA 

// svuoto la chat

chatBox.innerHTML = "";

// Per ciascuno dei messaggi creami una variabiule messagge
showMessages();


// @ OPERAZIONI DI INTERAZIONE CON L'UTENTE

// al click del bottone invia il msg inserito nell'input dall'utente
button.addEventListener("click", function () {
    const insertedText = input.value; // prendo il testo inserito nell'input
    console.log(insertedText)

    // controllo che l'input non sia vuoto
    if (!insertedText) return; // se l’input è vuoto, la funzione si interrompe subito

    addMessage("sent", insertedText); /* metto sent come primo parametro perché 
    al click posso soltanto invare quindi posso già specificare "sent" */
    
    // svuuoto chat
    chatBox.innerHTML = "";

    // aggiungo il nuovo messaggio alla lista dei messaggi
    showMessages();

    // svuoto la casella input dopo aver inviato il messaggio
    input.value = ""
    // e riporto il cursore nell'input
    input.focus()

});

// ? FUNZIONI UTILI

function showMessages() {
    // svuuoto chat
    chatBox.innerHTML = "";

    // aggiungo il nuovo messaggio alla lista dei messaggi
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
}

// fuunzione per aggiungere un messaggio 
function addMessage(messageType, messageText) {
    // creo un nuovo messaggio
    const newMessage = {
        type: messageType,
        text: messageText,
        time: new Date().toLocaleString()
    }
    // aggiungo msg alla lista messaggi
    messages.push(newMessage) // il nuovo oggetto viene aggiunto all'array come 3 oggetto.
    // mostro il msg in chat
    showMessages()
}

// esempio per capire la logica:
addMessage("received", "allora quando ci vediamo?")
addMessage("sent", "venerdì sera??")