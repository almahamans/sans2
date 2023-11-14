document.getElementById('addHazard').addEventListener('click', ()=>{
    let i = document.getElementById('addHazard').selectedIndex;
    document.getElementById('hazardId').innerHTML = document.getElementById('addHazard').options[i].text
})
