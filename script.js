String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};
var eq="", eq2="", eq1="";
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
function compute() 
{ 
    try 
    {   
        eq1="";
        for(i=0; i<eq2.length; i++){
            if(eq2[i]=='l' || eq2[i]=='t' || eq2[i]=='s' || eq2[i]=='c' || eq2[i]=='f' || eq2[i]=='p' || eq2[i]=='P'|| eq2[i]=='E'){
                break;
            }
        }
        //console.log(eq1);
        if(i!=eq2.length)
            eq1=eq2.splice(i, 0, "Math.")
        else
            eq1=eq2;
        //console.log(eq2);
        console.log(eq1);
        eq=eval(eq1);
        eq=(Math.round(eq*100000))/100000;
        display(eq); 
    } 
    catch(e) 
    {
        display('Error') 
    }    
} 