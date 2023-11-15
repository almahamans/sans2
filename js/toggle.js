let answer = document.getElementById('assessment9')
let selectedData;
document.getElementById('switch-input1').addEventListener('change', ()=>{
    var isChecked = this.checked;
    let justi = document.getElementById('imp_ass_1')
            let switchLabel = document.querySelector('.switch-label');
      
            if(!isChecked) {
              selectedData = switchLabel.getAttribute('data-on');
              justi.innerHTML = ''
            } else {
              selectedData = switchLabel.getAttribute('data-off');
            }
            answer.innerHTML = selectedData
            sessionStorage.setItem('assessment', selectedData)
})

document.getElementById('switch-input2').addEventListener('change', ()=>{
    var isChecked = this.checked;
    let justi = document.getElementById('imp_ass_2')
            let switchLabel = document.querySelector('.switch-label');
      
            if(!isChecked) {
              selectedData = switchLabel.getAttribute('data-on');
              justi.innerHTML = ''
            } else {
              selectedData = switchLabel.getAttribute('data-off');
            }
            answer.innerHTML = selectedData
            sessionStorage.setItem('assessment', selectedData)
})

document.getElementById('switch-input3').addEventListener('change', ()=>{
    var isChecked = this.checked;
    let justi = document.getElementById('imp_ass_3')
            let switchLabel = document.querySelector('.switch-label');
      
            if(!isChecked) {
              selectedData = switchLabel.getAttribute('data-on');
              justi.innerHTML = ''
            } else {
              selectedData = switchLabel.getAttribute('data-off');
            }
            answer.innerHTML = selectedData
            sessionStorage.setItem('assessment', selectedData)
})

document.getElementById('switch-input4').addEventListener('change', ()=>{
    var isChecked = this.checked;
    let justi = document.getElementById('imp_ass_4')
            let switchLabel = document.querySelector('.switch-label');
      
            if(!isChecked) {
              selectedData = switchLabel.getAttribute('data-on');
              justi.innerHTML = ''
            } else {
              selectedData = switchLabel.getAttribute('data-off');
            }
            answer.innerHTML = selectedData
            sessionStorage.setItem('assessment', selectedData)
})

document.getElementById('switch-input5').addEventListener('change', ()=>{
    var isChecked = this.checked;
    let justi = document.getElementById('imp_ass_5')
            let switchLabel = document.querySelector('.switch-label');
      
            if(!isChecked) {
              selectedData = switchLabel.getAttribute('data-on');
              justi.innerHTML = ''
            } else {
              selectedData = switchLabel.getAttribute('data-off');
            }
            answer.innerHTML = selectedData
            sessionStorage.setItem('assessment', selectedData)
})

document.getElementById('switch-input6').addEventListener('change', ()=>{
    var isChecked = this.checked;
    let justi = document.getElementById('imp_ass_6')
            let switchLabel = document.querySelector('.switch-label');
      
            if(!isChecked) {
              selectedData = switchLabel.getAttribute('data-on');
              justi.innerHTML = ''
            } else {
              selectedData = switchLabel.getAttribute('data-off');
            }
            answer.innerHTML = selectedData
            sessionStorage.setItem('assessment', selectedData)
})

document.getElementById('switch-input7').addEventListener('change', ()=>{
    var isChecked = this.checked;
    let justi = document.getElementById('imp_ass_7')
            let switchLabel = document.querySelector('.switch-label');
      
            if(!isChecked) {
              selectedData = switchLabel.getAttribute('data-on');
              justi.innerHTML = ''
            } else {
              selectedData = switchLabel.getAttribute('data-off');
            }
            answer.innerHTML = selectedData
            sessionStorage.setItem('assessment', selectedData)
})

document.getElementById('switch-input8').addEventListener('change', ()=>{
    var isChecked = this.checked;
    let justi = document.getElementById('imp_ass_8')        
            let switchLabel = document.querySelector('.switch-label');
      
            if(!isChecked) {
              selectedData = switchLabel.getAttribute('data-on');
              justi.innerHTML = ''
            } else {
              selectedData = switchLabel.getAttribute('data-off');
            }
            answer.innerHTML = selectedData
            sessionStorage.setItem('assessment', selectedData)
})
