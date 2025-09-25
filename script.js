const message = `You felt like sunday morning, basking in sun while sipping coffee in the porch.\n\n
You've never known how much baggage you lifted just by being there. Thank you for being you\n\n
I wish for more people to meet your soul. So they could glimpse God's most beautiful creation.`;


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




