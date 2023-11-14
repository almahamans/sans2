let answer = document.getElementById('assessment9')
let selectedData;
document.getElementById('switch-input1').addEventListener('change', ()=>{
    var isChecked = this.checked;
            let switchLabel = document.querySelector('.switch-label');
      
            if(!isChecked) {
              selectedData = switchLabel.getAttribute('data-on');
            } else {
              selectedData = switchLabel.getAttribute('data-off');
            }
            answer.innerHTML = selectedData
            localStorage.setItem('assessment', selectedData)
})

document.getElementById('switch-input2').addEventListener('change', ()=>{
    var isChecked = this.checked;
            let switchLabel = document.querySelector('.switch-label');
      
            if(!isChecked) {
              selectedData = switchLabel.getAttribute('data-on');
            } else {
              selectedData = switchLabel.getAttribute('data-off');
            }
            answer.innerHTML = selectedData
            localStorage.setItem('assessment', selectedData)
})

document.getElementById('switch-input3').addEventListener('change', ()=>{
    var isChecked = this.checked;
            let switchLabel = document.querySelector('.switch-label');
      
            if(!isChecked) {
              selectedData = switchLabel.getAttribute('data-on');
            } else {
              selectedData = switchLabel.getAttribute('data-off');
            }
            answer.innerHTML = selectedData
            localStorage.setItem('assessment', selectedData)
})

document.getElementById('switch-input4').addEventListener('change', ()=>{
    var isChecked = this.checked;
            let switchLabel = document.querySelector('.switch-label');
      
            if(!isChecked) {
              selectedData = switchLabel.getAttribute('data-on');
            } else {
              selectedData = switchLabel.getAttribute('data-off');
            }
            answer.innerHTML = selectedData
            localStorage.setItem('assessment', selectedData)
})

document.getElementById('switch-input5').addEventListener('change', ()=>{
    var isChecked = this.checked;
            let switchLabel = document.querySelector('.switch-label');
      
            if(!isChecked) {
              selectedData = switchLabel.getAttribute('data-on');
            } else {
              selectedData = switchLabel.getAttribute('data-off');
            }
            answer.innerHTML = selectedData
            localStorage.setItem('assessment', selectedData)
})

document.getElementById('switch-input6').addEventListener('change', ()=>{
    var isChecked = this.checked;
            let switchLabel = document.querySelector('.switch-label');
      
            if(!isChecked) {
              selectedData = switchLabel.getAttribute('data-on');
            } else {
              selectedData = switchLabel.getAttribute('data-off');
            }
            answer.innerHTML = selectedData
            localStorage.setItem('assessment', selectedData)
})

document.getElementById('switch-input7').addEventListener('change', ()=>{
    var isChecked = this.checked;
            let switchLabel = document.querySelector('.switch-label');
      
            if(!isChecked) {
              selectedData = switchLabel.getAttribute('data-on');
            } else {
              selectedData = switchLabel.getAttribute('data-off');
            }
            answer.innerHTML = selectedData
            localStorage.setItem('assessment', selectedData)
})

document.getElementById('switch-input8').addEventListener('change', ()=>{
    var isChecked = this.checked;
            
            let switchLabel = document.querySelector('.switch-label');
      
            if(!isChecked) {
              selectedData = switchLabel.getAttribute('data-on');
            } else {
              selectedData = switchLabel.getAttribute('data-off');
            }
            answer.innerHTML = selectedData
            localStorage.setItem('assessment', selectedData)
})
