class Scooter {
  // Scooter code here

  static nextSerial = 1;

  static advanceSerial() {
    const temp = Scooter.nextSerial;
    Scooter.nextSerial++;
    return temp;
  }

  id = Scooter.advanceSerial();
}

module.exports = Scooter;
