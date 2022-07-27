//Lol remover 
//Language: javascript
//run this task in the background every 100ms using Grease Monkey Extension in firefox/chrome


function lolRemover() {

    let currentMessages = document.getElementsByClassName("i0jNr selectable-text copyable-text");
    let latestMessages = document.getElementsByClassName("Hy9nV");
    for (let i = 0; i < currentMessages.length; i++) {
        if (currentMessages[i].innerHTML.toUpperCase().includes("LOL")) {
            replacedVal = currentMessages[i].innerHTML.replace(/lol/gi, "🛑");
            currentMessages[i].innerHTML = replacedVal;

        }
    }
    for (let i = 0; i < latestMessages.length; i++) {
        if (latestMessages[i].innerHTML.toUpperCase().includes("LOL")) {
            replacedVal = latestMessages[i].innerHTML.replace(/lol/gi, "🛑");
            latestMessages[i].innerHTML = replacedVal;

        }
    }
    return 0;
}
setInterval(lolRemover, 100)
