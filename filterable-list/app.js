const input = document.getElementById('filter-input');
input.addEventListener('keyup', filterNames);

function filterNames(){
    const ul = document.getElementById('names');
    const li = ul.querySelectorAll('li.list-group-item');

    // for(let i = 0; i<li.length; i++){
    //     if(li[i].innerHTML.toUpperCase().indexOf(input.value.toUpperCase())>-1){
    //         li[i].style.display = '';
    //     }else{
    //         li[i].style.display = 'none';
    //     }
    // }

    li.forEach(name => {
        if(name.innerHTML.toUpperCase().indexOf(input.value.toUpperCase())>-1){
            name.style.display = '';
        }else{
            name.style.display = 'none';
        }
    })
}