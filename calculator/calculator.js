
function insert(num){
    document.form.display.value = document.form.display.value + num;
}

function calculate(){
    let exp = document.form.display.value.toString();
    if(exp){
    let res = eval(exp);
    document.form.display.value = Number(res);
    }
}

function clearAll(){
    document.form.display.value = "";
}

function clean(){
    let val = document.form.display.value;
    document.form.display.value = val.substring(0,val.length-1);
}