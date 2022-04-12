var manager = {
    name: "Nathaly",
    lastname: "Walls",
    fullname: function() {
        return this.name + " " + this.lastname
    },
    Administrative_position: "Administrative position : ",
    jobplacement: "Revenue and Expense Manager",
    age: 19,
    woman: true,
};

document.querySelector('#wmanager1').innerHTML = manager.fullname() + ".";
document.querySelector('#wmanager2').innerHTML = manager.Administrative_position + manager.jobplacement;