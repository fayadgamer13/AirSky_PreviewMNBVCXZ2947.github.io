const button = document.getElementById("newWebsite");

// Change this to the URL of your newer website.
const newerWebsite = "https://fayadgamer13.github.io/AirSky.github.io";

button.href = newerWebsite;

button.addEventListener("click", () => {
  console.log("Redirecting to the newer website...");
});
