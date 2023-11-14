
let pdf = new pdf('p', 'pt', 'letter');
pdf.canvas.height = 72 * 11;
pdf.canvas.width = 72 * 8.5;

document.getElementById('pdf').addEventListener('click', function() {
  html2canvas(document.getElementById('contentToPrint'), {
    canvas: pdf.canvas,
    onrendered: function(canvas) {
      pdf.save('download.pdf');
    }
  });
});