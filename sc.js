class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showInfo() {
    console.log(this.name, this.age);
  }
}

class Car {
  constructor(brand, model, date, licenseplate) {
    this.brand = brand;
    this.model = model;
    this.date = date;
    this.licenseplate = licenseplate;
    this.owner = 0;
  }

  becomeOwner(owner) {
    if (owner.age > 18) {
      return (this.owner = owner);
    } else console.log('To young');
  }

  showInfo() {
    if (this.owner) {
      console.log('===');
      this.owner.showInfo();
    } else console.log('There is no owner');
    console.log(this.brand);
    console.log(this.model);
    console.log(this.date);
    console.log(this.licenseplate);
  }
}

const vanya = new Human('Vanya', 18);
const ivan = new Human('Ivan', 21);
vanya.showInfo();
ivan.showInfo();

const car1 = new Car('Mark', 'Model', 2020, 'AK1234AK');
car1.becomeOwner(vanya);
car1.showInfo();

const car = new Car('Mark', 'Model', 2023, 'AK2131AK');
car.becomeOwner(ivan);
car.showInfo();
