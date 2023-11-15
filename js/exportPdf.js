
// let pdf = new pdf('p', 'pt', 'letter');
// pdf.canvas.height = 72 * 11;
// pdf.canvas.width = 72 * 8.5;

// document.getElementById('pdf').addEventListener('click', function() {
//   html2canvas(document.getElementById('contentToPrint'), {
//     canvas: pdf.canvas,
//     onrendered: function(canvas) {
//       pdf.save('download.pdf');
//     }
//   });
// }); 

document.getElementById("pdf").addEventListener("click", function () {
    var element = document.getElementsByTagName('body');
    var opt = {
      margin:       1,
      filename:     'myfile.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save('changeRequirment.pdf');
});