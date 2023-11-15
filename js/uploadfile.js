document.getElementById('uploadButton').addEventListener('click', function() {
  document.getElementById('fileUpload').click();
});
document.getElementById('uploadButton1').addEventListener('click', function() {
  document.getElementById('fileUpload1').click();
});
document.getElementById('uploadButton2').addEventListener('click', function() {
  document.getElementById('fileUpload2').click();
});
document.getElementById('uploadButton3').addEventListener('click', function() {
  document.getElementById('fileUpload3').click();
});
document.getElementById('uploadButton4').addEventListener('click', function() {
  document.getElementById('fileUpload4').click();
});
document.getElementById('uploadButton5').addEventListener('click', function() {
  document.getElementById('fileUpload5').click();
});
document.getElementById('uploadButton6').addEventListener('click', function() {
  document.getElementById('fileUpload6').click();
});
// document.getElementById('uploadButton').addEventListener('click', function() {
//   var input = document.getElementById('fileUpload');
//   var data = new FormData();

//   for (var i = 0; i < input.files.length; i++) {
//       data.append('file' + i, input.files[i]);
//   }

//   var xhr = new XMLHttpRequest();
//   xhr.open('POST', 'upload.php', true);
//   xhr.send(data);
// });