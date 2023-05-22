const searchProduct = () =>{
    let myInp = document.getElementById('myInp').value.toUpperCase();

    let ul = document.getElementById('myUL');

    let li = ul.getElementsByTagName('li');

    for(let i=0; i<li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];

        let textValue = a.textContent || a.innerHTML;

        if(textValue.toUpperCase().indexOf(myInp) > -1){
            li[i].style.display = ''
        }else{
            li[i].style.display = 'none'
        }
    }
}