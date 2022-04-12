var admin = {
    name: "Thaddeus",
    lastname: "George",
    fullname: function() {
        return this.name + " " + this.lastname
    },
    Administrative_position: "Administrative position : ",
    jobplacement: "Admin of everything in the restaurant",
    age: 45,
    man: true,
    phone: "000 000 0000",
    frontmail: "getge33@qw.volestee",
    secretmail: "e1-=ep#jh.mnv",
    password: "ore3400,ver++#@PORvf"
};



document.querySelector('#wadmin1').innerHTML = admin.fullname() + ".";
document.querySelector('#wadmin2').innerHTML = admin.Administrative_position + admin.jobplacement;