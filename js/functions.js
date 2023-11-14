let selectBtn1 = document.querySelector('#selectEmpBtn1');
selectBtn1.addEventListener('click',()=>{
    selectBtn1.textContent= 'Selected';
    selectBtn1.style.backgroundColor ='#74AED8'
    selectBtn2.textContent='select'
    selectBtn2.style.backgroundColor = '#3896DA'
})
let selectBtn2 = document.querySelector('#selectEmpBtn2');
selectBtn2.addEventListener('click',()=>{
    selectBtn2.textContent= 'Selected';
    selectBtn2.style.backgroundColor ='#74AED8'
    selectBtn1.textContent='select'
    selectBtn1.style.backgroundColor = '#3896DA'
})

function sendEmail(){
    alert('Change request sent to selected employee through Email');
}

function selectAll(){
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = true;
    }
}
