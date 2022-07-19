const emailIcon = document.getElementById("send");
emailIcon.addEventListener("click", (event) => {
  sendEmail();
});

function sendEmail() {
  window.open(
    "mailto:nazwrightthedeveloper@gmail.com?subject=Contact Nazere Wright"
  );
}
