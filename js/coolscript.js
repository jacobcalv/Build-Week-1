function nameFunc(){
    x=document.getElementById('input1');
    y= x.elements['name'].value;
    document.getElementById('output').innerHTML="Hello " + y;
}