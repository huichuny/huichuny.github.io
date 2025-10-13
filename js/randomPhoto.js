document.addEventListener("DOMContentLoaded", () => {
    // List of your photo paths
    const photos = [
  "../pics/hp04.png",
  "../pics/octpp.jpg",
  "../pics/thesis/the.jpg",
  "../pics/tux.png",
  "../pics/bl03.jpg",
  "../pics/bl06.png",
  "../pics/eesf3.jpg",
  "../pics/eesf1.jpg",
  "../pics/hp03.png"
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
