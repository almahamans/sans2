let changeId = document.getElementById('changeid').value;
    let issueDate = document.getElementById('issueDate').value;
    let revision = document.getElementById('revision').value;
    let changeDesc = document.getElementById('changeDesc').value;
    
    
    localStorage.setItem('changeid', changeId)
    localStorage.setItem('issueDate', issueDate)
    localStorage.setItem('revision', revision)
    localStorage.setItem('changeDesc', changeDesc)


    let changeId2 = document.getElementById('changeid2');
    let issueDate2 = document.getElementById('issueDate2');
    let revision2 = document.getElementById('revision2');
    let changeDesc2 = document.getElementById('changeDesc2');
    
    let chId = localStorage.getItem('changeid')
    let issDa = localStorage.getItem('issueDate')
    let revi = localStorage.getItem('revision')
    let chDes = localStorage.getItem('changeDesc')
    
    changeId2.innerHTML = chId;
    issueDate2.innerHTML = issDa;
    revision2.innerHTML = revi;
    changeDesc2.innerHTML = chDes;
