const message = `You felt like sunday morning, basking in sun while sipping coffe in the porch.\n\n I always perceive you as luminous,you radiates your presence in the room. And I love it \n\n You've never know how much baggage you lifted just by being there . Thank you for being you\n\nI wish for more people to know your soul. Because I want them to witness God's most beautiful creaton;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

