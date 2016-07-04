String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};
var eq="", eq2="", eq1="";
function getRandomColor()
{
    var letters = '0123456789ABCDEF'.split('');             
    var color = '#';                
    for (var i = 0; i < 6; i++ ) 
         {
            color += letters[Math.round(Math.random() * 15)];      
        }               
    return color;           
}       
function display(val)
{
    document.getElementById("textbox").value=val;
    eq=val;
    eq1=val;
    eq2=val;
}
function del()
{
    var str=document.getElementById("textbox").value;
    str=str.substring(0, str.length-1);
    document.getElementById("textbox").value=str;
    eq2=str;
}
function addValue(val)
{
    eq2+=val;
    console.log(eq2);
    document.getElementById("textbox").value+=val;
}
function color_c()
        {
            document.getElementById('one').style.backgroundColor=getRandomColor();
            document.getElementById('two').style.backgroundColor=getRandomColor();
            document.getElementById('three').style.backgroundColor=getRandomColor();
            document.getElementById('four').style.backgroundColor=getRandomColor();
            document.getElementById('five').style.backgroundColor=getRandomColor();
            document.getElementById('six').style.backgroundColor=getRandomColor();
            document.getElementById('seven').style.backgroundColor=getRandomColor();
            document.getElementById('eight').style.backgroundColor=getRandomColor();
            document.getElementById('nine').style.backgroundColor=getRandomColor();
            document.getElementById('dot').style.backgroundColor=getRandomColor();
            document.getElementById('zero').style.backgroundColor=getRandomColor();
            }
         

function compute() 
{ 
    var arr=[],k=0, j=0;    
    try 
    {   
        eq1="";
        for(i=0; i<eq2.length; i++){
            if(eq2[i]=='l' || eq2[i]=='t' || eq2[i]=='s' || eq2[i]=='c' || eq2[i]=='f' || eq2[i]=='p' || eq2[i]=='P'|| eq2[i]=='E'){
                arr[j++]=i;
                i=i+3;
            }
        }
        //console.log(eq1);
        for(k=0; k<arr.length; k++){
            i=arr[k];
            eq1=eq2.splice(i+5*k, 0, "Math.");
            eq2=eq1;
            console.log(eq1);
            console.log(eq2);
        }
        if(k==0){
            eq1=eq2;
        }
        //console.log(eq2);
        console.log(eq1);
        eq=eval(eq1);
        eq=(Math.round(eq*100000))/100000;
        display(eq); 
    } 
    catch(e) 
    {
        display('Error');
    }    
} 
