function grader{
    
let score =parseFloat(document.getElementById("score_input"))
let result = " ";

if (score>=80){
result="A"
}
else if (score<80 && score>=60){
    result="B"
    }
else if (score<60 && score>=40){
        result="C"
}

else{
    result="F";
}

document.getElementById("grade_span").innerHTML=result;
}