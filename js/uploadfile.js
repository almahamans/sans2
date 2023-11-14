document.getElementById('fileUpload').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    
    reader.onloadend = function() {
      console.log('Result', reader.result);
    }
    
    if (file) {
      reader.readAsDataURL(file);
    }
    sessionStorage.setItem('file', reader.result)
  });