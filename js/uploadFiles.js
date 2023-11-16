var filelist = new Array();

updateList = function () {
    var input = document.getElementById('fileUploader');
    var output = document.getElementById('divFiles');

    var HTML = "<section>";
    for (var i = 0; i < input.files.length; ++i) {
        filelist.push(input.files.item(i).name);
        HTML += "<p>" 
              + filelist[i] 
              + "</p>";
    }
    HTML += "</section>";

    output.innerHTML = HTML;
    console.log(filelist);
}