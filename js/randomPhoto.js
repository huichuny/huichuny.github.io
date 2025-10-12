document.addEventListener("DOMContentLoaded", () => {
    // List of your photo paths
    const photos = [
  "../pics/artist/alg.png",
  "../pics/artist/pit.jpg",
  "../pics/artist/the.jpg",
  "../pics/artist/tux.png",
  "../pics/bl00.jpg",
  "../pics/bl06.png"
    ];

   // Get last photo from localStorage
    const lastPhoto = localStorage.getItem("lastPhoto");

    // Filter out last photo from choices
    let availablePhotos = photos.filter(photo => photo !== lastPhoto);

    // If all filtered out (only 1 photo in list), reset availablePhotos
    if (availablePhotos.length === 0) {
      availablePhotos = photos;
    }

    // Pick a random one
    const randomIndex = Math.floor(Math.random() * availablePhotos.length);
    const randomPhoto = availablePhotos[randomIndex];

    // Update the image source
    document.getElementById("randomPhoto").src = randomPhoto;

    // Save this as the last shown photo
    localStorage.setItem("lastPhoto", randomPhoto);
  });
