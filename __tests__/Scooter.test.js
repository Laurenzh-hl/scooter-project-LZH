const { describe, expect, it } = require("@jest/globals");
const Scooter = require("../classes/Scooter.js");
const User = require("../classes/User.js");


describe("scooter.rent(user)", () => {
  it("checks a scooter out to a user", () => {
    // Arrange
    const s1 = new Scooter("Gloucester Road");
    const u1 = new User("lauren24", "password123", 24);
    // Act
    s1.rent(u1);
    // Assert
    expect(s1.user).toEqual(u1);
  });

  it("throws an error if battery dead or scooter broken", () => {
    // Arrange
    const s2 = new Scooter("Ash Road");
    const u2 = new User("ell25", "password123", 25);
    function tryLowCharge() {
      s2.rent(u2);
    }
    // Act
    s2.charge = 18;
    // Assert
    expect(tryLowCharge).toThrow("scooter needs to charge");

    s2.charge = 25;
    s2.isBroken = true;
    expect(tryLowCharge).toThrow("scooter needs repair");
  });
});

describe("scooter.dock(station)", () => {
  it("returns a scooter to a station", () => {
    // Arrange
    const s3 = new Scooter("Maple Road");
    // Act
    s3.dock("Ash Road");
    // Assert
    expect(s3.station).toBe("Ash Road");
  });
});

describe("scooter.chargeUp()", () => {
  it("charges a scooter", () => {
    // Arrange
    const s4 = new Scooter("Maple Road");
    // Act
    s4.charge = 43;
    s4.chargeUp();
    // Assert
    expect(s4.charge).toBe(100);
  });
});

describe("scooter.repair()", () => {
  it("repairs a scooter", () => {
    // Arrange
    const s5 = new Scooter("Maple Road");
    // Act
    s5.isBroken = true;
    s5.repair();
    // Assert
    expect(s5.isBroken).toBe(false);
  });
});
