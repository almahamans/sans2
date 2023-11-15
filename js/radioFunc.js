    let result = document.getElementById('result')
    let result2 = document.getElementById('result')

    document.getElementById('lowForm').addEventListener('click', ()=>{
    result2.innerHTML = "Low - light safety ridk assessment    - refere to part C. "+ `<br>` + document.getElementById('lowForm').textContent;
    result2.style.cursor = 'pointer';
    result2.addEventListener('click',()=>{
        window.location.href = 'lowForm.html'
     })
    sessionStorage.setItem('lowFormText',document.getElementById('lowForm').textContent);
})
document.getElementById('medForm').addEventListener('click', ()=>{
    result.innerHTML = "Meduim - safety risk assessment." + `<br>` + document.getElementById('medForm').textContent
    result.style.cursor = 'pointer';
    result.addEventListener('click',()=>{
        window.location.href = 'hazardAnaless.html'
    })
    sessionStorage.setItem('meduimFormText',document.getElementById('medForm').textContent)
})


