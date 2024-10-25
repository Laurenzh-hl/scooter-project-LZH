class Scooter {
  // Scooter code here

  static nextSerial = 1;

  static advanceSerial() {
    const temp = Scooter.nextSerial;
    Scooter.nextSerial++;
    return temp;
  }

  constructor (station) {
    this.station = station;
    this.user = null;
    this.charge = 100;
    this.isBroken = false;
    this.serial = Scooter.advanceSerial();
  }


  rent(user) {
    if (this.charge > 20 && this.isBroken === false) {
      this.station = null;
      this.user = user;
    } else if (this.charge > 20 && this.isBroken === true) {
      throw new Error("scooter needs repair");
    } else {
      throw new Error("scooter needs to charge");
    }
  }

  dock(station) {
    this.station = station;
    this.user = null;
  }

  chargeUp() { //changed name of function as same as property which didn't work.
    this.charge = 100;
  }

  repair() {
    this.isBroken = false;
  }
}

// let s1 = new Scooter("Paddington");

// console.log(s1);

// let s2 = new Scooter("Victoria");

// console.log(s2);








module.exports = Scooter;
