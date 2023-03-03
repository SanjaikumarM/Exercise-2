function reverseArray(){
    const input=document.getElementById("input").value;
    const array=input.split(" ");
    const reversedArray=array.reverse();
    const output=document.getElementById("output");
    output.innerHTML=`Reversed array: ${reversedArray.join(" ")}`;
}
