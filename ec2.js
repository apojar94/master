document.getElementById(id_business_version).innerHTML="Bussiness version: 2018.10.12.1";

function solve()
{

var a = document.getElementByID("id_a").value;
var b = document.getElementByID("id_b").value;
var c = document.getElementByID("id_c").value;

var delta = b*b - 4*a*c;
var x1= (-b - Math.sqrt(delta))/(2*a);

var x1_re, x1_im, x2_re, x2_im;

if (delta >=0){
	x1_re=(-b-Math.sqrt(delta))/(2*a);
	x1_im=0;
	x2_re=(-b+Math.sqrt(delta))/(2*a);
	x2_im=0;
}
else {
	x1_re= -b/(2*a);
	x1_im=-math.sqrt(-delta)/(2*a);
}

document.getElementById("id_x1").innerHTML=x1_re + " + " + x1_im + "i";
document.getElementById("id_x1").innerHTML=x2_re + " + " + x2_im + "i";

}