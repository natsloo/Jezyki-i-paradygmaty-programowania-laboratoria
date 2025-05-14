const currentUser = {
    name: "Name",
    surname: "Surname",
    email: "email@email.com",
    www: "www.namesurname.com",
    userType: 0,
    isActive: true,
    show: function (){
        console.log(this.name + " " + this.surname + ", " + this.email + ", " + this.www + ", " + this.userType + ", " + this.isActive);
    },
    setActive: function (active){
        this.isActive = active
    }
}
currentUser.setActive(false)
currentUser.show()
