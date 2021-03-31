function Get_Paragraph1() {
    var inputs = [];

    for(var i = 1 ; i<=6 ; i++)
    {
        inputs.push(document.getElementById("t1" + i).value);
        inputs.push(document.getElementById("t2" + i).value);
        inputs.push(document.getElementById("t3" + i).value);
        inputs.push(document.getElementById("t4" + i).value);
        inputs.push(document.getElementById("t5" + i).value);
        inputs.push(document.getElementById("t6" + i).value);
    }
    document.getElementById("Show Paragraph").innerHTML = input.join(". ");
}