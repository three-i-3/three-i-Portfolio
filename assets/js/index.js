const humburger_menu = document.querySelector(".humburger-menu");
const container = document.querySelector(".container");

humburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
})

Email.send({
  Host: "smtp.gmail.com",
  Username: "lntelligence273@gmail.com",
  Password: "password",
  To: 'lntelligence273@gmail.com',
  From: document.getElementById('ConEmail'),
  Subject: document.getElementById('conSubj'),
  Body: document.getElementById('conSMS')
}).then(
  message => alert(message)
);

// Progress Bar Javascript

new WOW().init();