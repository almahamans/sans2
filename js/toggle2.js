let answer = document.getElementById('gaca')
let selectedData;
document.getElementById('switch-input1').addEventListener('change', ()=>{
    var isChecked = this.checked;
    let justi = document.getElementById('gaca_1Just')
            let switchLabel = document.querySelector('.switch-label');
      
            if(!isChecked) {
              selectedData = switchLabel.getAttribute('data-on');
              justi.innerHTML = ''
            } else {
              selectedData = switchLabel.getAttribute('data-off');
            }
            answer.innerHTML = selectedData
            sessionStorage.setItem('gaca', selectedData)
})

document.getElementById('switch-input2').addEventListener('change', ()=>{
    var isChecked = this.checked;
    let justi = document.getElementById('gaca_2Just')
            let switchLabel = document.querySelector('.switch-label');
      
            if(!isChecked) {
              selectedData = switchLabel.getAttribute('data-on');
              justi.innerHTML = ''
            } else {
              selectedData = switchLabel.getAttribute('data-off');
            }
            answer.innerHTML = selectedData
            sessionStorage.setItem('gaca', selectedData)
})

document.getElementById('switch-input3').addEventListener('change', ()=>{
    var isChecked = this.checked;
    let justi = document.getElementById('gaca_3Just')
            let switchLabel = document.querySelector('.switch-label');
      
            if(!isChecked) {
              selectedData = switchLabel.getAttribute('data-on');
              justi.innerHTML = ''
            } else {
              selectedData = switchLabel.getAttribute('data-off');
            }
            answer.innerHTML = selectedData
            sessionStorage.setItem('gaca', selectedData)
})

document.getElementById('switch-input4').addEventListener('change', ()=>{
    var isChecked = this.checked;
    let justi = document.getElementById('gaca_4Just')
            let switchLabel = document.querySelector('.switch-label');
      
            if(!isChecked) {
              selectedData = switchLabel.getAttribute('data-on');
              justi.innerHTML = ''
            } else {
              selectedData = switchLabel.getAttribute('data-off');
            }
            answer.innerHTML = selectedData
            sessionStorage.setItem('gaca', selectedData)

     

})