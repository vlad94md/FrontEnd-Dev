var planet = "Earth";
var range = 213.33;
var km = ["gg", 1, 33, true];
var student = { 
        age: 33, 
        Name: "Batmant",
        TransformAge: function(){
            return this.age + 100;
        }
};

document.getElementById("demo").innerHTML = "We live on the " + typeof(km[3]) + " " + summ(33,44) + student.Name + " " + student.TransformAge();



function summ(a, b){
    return a + b;
}


//var i = 0;
////i++;
//i++;
//alert( ++i ); // 2

