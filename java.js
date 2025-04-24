window.onload = function () {
  // Create the cookie bar element
  const cookieBar = document.createElement("div");
  cookieBar.id = "cookie-bar";
  cookieBar.innerHTML = `
      <p>This website uses cookies. <button id="close-cookie">Close</button></p>
  `;

  // Style the cookie bar
  Object.assign(cookieBar.style, {
      position: "fixed",
      bottom: "-250px",
      left: "0",
      width: "100%",
      background: "purple",
      color: "white",
      textAlign: "center",
      padding: "15px",
      fontSize: "1.2rem",
      transition: "bottom 0.5s ease-in-out",
      boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.3)",
      zIndex: 999,
  });

  // Append the cookie bar to the body
  document.body.appendChild(cookieBar);

  // Show the cookie bar after a small delay
  setTimeout(() => {
      cookieBar.style.bottom = "0";
  }, 500);

  // Flash Image Effect
  const flashImage = document.createElement("img");
  flashImage.src = "aiktifo.jpg"; // Ensure this image exists in the correct path
  Object.assign(flashImage.style, {
      position: "fixed",
      top: "40%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "650px",
      height: "auto",
      opacity: "0",
      transition: "opacity 0.3s",
      zIndex: 9999,
      pointerEvents: "none"
  });
  document.body.appendChild(flashImage);

  // Event Listener for Closing the Cookie Bar
  document.getElementById("close-cookie").addEventListener("click", function () {
      cookieBar.style.bottom = "-250px"; // Hide the cookie bar
      flashImage.style.opacity = "1"; // Show the flash image
      setTimeout(() => {
          flashImage.style.opacity = "0"; // Hide the flash image after 1 sec
      }, 1000);
  });
};
