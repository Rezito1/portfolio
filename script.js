// Första påskägget
// klicka på bilden i index sidan då ändras bakgrunds färgen
const secretImage = document.getElementById("klick-cv");
if (secretImage) {
    secretImage.addEventListener("click", function(){
        document.body.style.background = "lightblue";
        console.log("Bakgrund färgen har ändrats!");
    });
}

// klicka på bilden i cv sidan då ändras bakgrunds färgen
const cvSecretKlick = document.getElementById("klick-cv");
if (cvSecretKlick) {
    cvSecretKlick.addEventListener("click", function(){
        document.body.style.background = "lightblue";
        console.log("Bakgrund färgen har ändrats!");
    });
}

// Klicka på bilden i about sidan då ändras bakgrunds färgen
const aboutSecretKlick = document.getElementById("klick-about");
if (aboutSecretKlick) {
    aboutSecretKlick.addEventListener("click", function(){
        document.body.style.background = "lightblue";
        console.log("Bakgrund färgen har ändrats!");
    });
}

// Klicka på "My Projects:" i portfolio sidan då ändras bakgrunds färgen
const potfolioSecretKlick = document.getElementById("klick-portfolio");
if (potfolioSecretKlick) {
    potfolioSecretKlick.addEventListener("click", function(){
        document.body.style.background = "lightblue";
        console.log("Bakgrund färgen har ändrats!");
    });
}




// Andra påskägget 1337
const keyboardModal = document.createElement("div");
keyboardModal.className = "keyboard-modal";
keyboardModal.style.display = "none";
keyboardModal.innerHTML = `
    <h2>🎉 Congrats!</h2>
    <p>You found the secret code!</p>
    <button>Close</button>
`;
document.body.appendChild(keyboardModal);

keyboardModal.querySelector("button").addEventListener("click", () => {
    keyboardModal.style.display = "none";
});

let inputSequence = "";
const secretCode = "1337";

document.addEventListener("keydown", e => {
    inputSequence = (inputSequence + e.key).slice(-secretCode.length);
    if(inputSequence === secretCode) {
        keyboardModal.style.display = "block";
        inputSequence = "";
    }
});




// Modal för knapparna
const modal = document.getElementById('modal');

if (modal) {  // <-- Kolla om modal finns på sidan
  const modalTitle = document.getElementById('modal-title');
  const modalText = document.getElementById('modal-text');

  const projects = {
    1: { title: "School Project 1", text: "This is text för projekt 1" },
    2: { title: "School Project 2", text: "This is text för projekt 2" },
    3: { title: "School Project 3", text: "This is text för projekt 3" }
  };

  const buttons = document.querySelectorAll('.portfolio-button');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {
      e.preventDefault();
      const projectId = this.getAttribute('data-project');
      modalTitle.textContent = projects[projectId].title;
      modalText.textContent = projects[projectId].text;
      modal.style.display = 'flex';
    });
  }

  modal.addEventListener('click', function(e) {
    if (e.target.classList.contains('close') || e.target === modal) {
      modal.style.display = 'none';
    }
  });
}



