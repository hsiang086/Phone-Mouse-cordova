const camera = {
    init: function() {
      $('#status').text('Camera is ready');
      this.startCamera();
    },
  
    startCamera: function() {
      const constraints = {
        video: true
      };
  
      navigator.mediaDevices.getUserMedia(constraints)
        .then(function(stream) {
          const video = document.createElement('video');
          video.srcObject = stream;
          video.play();
  
          const canvas = document.querySelector('canvas');
          const ctx = canvas.getContext('2d');
  
          const drawVideo = () => {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            requestAnimationFrame(drawVideo);
          };
  
          drawVideo();
        })
        .catch(function(err) {
          console.log(err.name + ": " + err.message);
        });
    },
  };
  
  document.addEventListener('deviceready', function() {
    camera.init();
  }, false);