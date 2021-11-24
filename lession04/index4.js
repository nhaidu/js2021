//  ke thua trong class
class Person {
    name = 'Den';
    age = 20;

    getName() {
        return this.name + ' of class Person';
    }
    // magic method
    // constructor(email = 'den@gmail.com', address = 'Ha Noi') {
    //     console.log('constructor cua class Person da chay');
    //     console.log(email, address);
    // }
}
class Doctor extends Person {
    // constructor(email = 'doctor@gmail.com', address = 'Hai Duong') {
    //     super();
    //     console.log(email, address);
    // }
    getName() {
        return this.name + ' of class Doctor';
    }
    showName() {
        return super.getName();
    }
}

 let doctor = new Doctor('teo@gmail.com', 'Bac Ninh');
// console.log(doctor.getName());
console.log(doctor.showName());
// super khong ho tro arrow function