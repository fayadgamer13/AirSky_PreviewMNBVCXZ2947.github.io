const button = document.getElementById("newWebsite");

// Change this to the URL of your newer website.
const newerWebsite = "https://example.com";

button.href = newerWebsite;

button.addEventListener("click", () => {
  console.log("Redirecting to the newer website...");
});
