var student = {id:121, phone:5551, name:"Janina"}
var student2 = {id:131, phon:63541, name:"Ladies"}

//var phoneNumber = student.phone;
var phoneNumber = student["phone"];


student2.phon = 5428536; // Updates Phone Number
student2["phon"] = 6584120;

student2.cinema = " Habi jabi"; // Adding new Property
student2["cinema"] ="Monpura"

console.log(phoneNumber);
console.log(student2);


