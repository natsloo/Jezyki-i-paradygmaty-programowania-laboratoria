class Book {
    users = [];
    addUser(name,age,phone){
        let user = {
            name: name,
            age: age,
            phone: phone,
        };
        this.users.push(user);
    }
    showUsers(){
        console.log("Wszyscy użytkownicy w książce");
        for (let user of this.users){
            console.log(user);
        }
    }
    findByName(name){
        for (let user of this.users){
            if (user.name === name){
                console.log(user)
                return;
            }
        }
        console.log(false);
    }
    findByPhone(phone){
        for (let user of this.users){
            if (user.phone === phone){
                console.log(user);
                return;
            }
        }
        console.log(false);
    }
    getCount(){
        console.log(this.users.length);
    }
}

let b = new Book();
b.addUser("Natalia",21,2137);
b.addUser("Natalia2",21,2138);
b.getCount()
b.findByName("Natalia");
b.findByPhone(2138);
b.addUser("asdfghj",2684,245);
b.showUsers()