(function () {
  const carimages = document.querySelector(".carimages");

  carimages.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
      const overlay = document.createElement("div");
      overlay.id = "overlay";

      //set some styles
      overlay.style.position = "absolute";
      overlay.style.top = 0;
      overlay.style.background = "rgba(0,0,0,0.7)";
      overlay.style.cursor = "pointer";

      //set some sizes
      overlay.style.width = window.innerWidth + "px";
      overlay.style.height = window.innerHeight + "px";

      //append the overlay to the body
      document.body.appendChild(overlay);

      //get image source
      const imageSrc = e.target.src;

      //create image
      const popUpImage = document.createElement("img");
      popUpImage.id = "popimage";
      popUpImage.src = imageSrc;

      //style the image
      popUpImage.style.display = "block";
      popUpImage.style.width = "50%";
      popUpImage.style.margin = "0 auto";
      popUpImage.style.marginTop = "10%";

      //append the image to the overlay
      overlay.appendChild(popUpImage);

      popUpImage.addEventListener("click", function () {
        if (overlay) {
          overlay.parentElement.removeChild(overlay);
        }
      });

      //set image to follow window scroll
      window.addEventListener("scroll", function () {
        if (overlay) {
          overlay.style.top = window.pageYOffset + "px";
          overlay.style.left = window.pageXOffset + "px";
        }
      });

      //set overlay/ event listener to follow the resize
      window.addEventListener("resize", function () {
        overlay.style.width = window.innerWidth + "px";
        overlay.style.height = window.innerHeight + "px";
      });
    } //check the image is being clicked
  }); //event listener for the dic with class carimages
})(); // load the document first
