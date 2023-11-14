document.getElementById('lowForm').addEventListener('click', ()=>{
    document.getElementById('low').checked = true
    let result = document.getElementById('result')
    result.innerHTML = "Low - light safety ridk assessment    - refere to part C. "+ `<br>` + document.getElementById('lowForm').textContent
    sessionStorage.setItem('lowForm',true)
    sessionStorage.setItem('lowFormText',document.getElementById('lowForm').textContent);
    
    //  sessionStorage.getItem('lowForm')
})
document.getElementById('medForm').addEventListener('click', ()=>{
    document.getElementById('meduim').checked = true
    let result = document.getElementById('result')
    result.innerHTML = "Meduim - safety risk assessment. "+ `<br>` + document.getElementById('medForm').textContent
    sessionStorage.setItem('meduimForm',true)
    sessionStorage.setItem('meduimFormText',document.getElementById('medForm').textContent)
})

// window.reload = function(){
//     document.getElementById('result').innerHTML = ''
//     document.getElementById('resultLS').innerHTML = sessionStorage.getItem('lowFormText')
// }

