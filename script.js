// Check for browser support
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Access the user's camera
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function (stream) {
        var video = document.getElementById('cameraFeed');
        video.srcObject = stream;
      })
      .catch(function (error) {
        console.error('Error accessing the camera: ', error);
      });
  }
  