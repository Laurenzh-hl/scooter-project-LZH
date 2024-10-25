const { describe, expect, it } = require("@jest/globals");
const Scooter = require("../classes/Scooter.js");

describe("scooter.rent(user)", () => {
  it.skip("checks a scooter out to a user", () => {
    // Arrange
    const s1 = new Scooter("Gloucester Road");
    // Act
    s1.rent("lauren24");
    // Assert
    expect(s1.user).toEqual("lauren24");
  });

  it.skip("throws an error if battery dead or scooter broken", () => {
    // Arrange
    const s2 = new Scooter("Ash Road");
    function tryLowCharge() {
      s2.rent("lauren24");
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
  it.skip("returns a scooter to a station", () => {
    // Arrange
    const s3 = new Scooter("Maple Road");
    // Act
    s3.dock("Ash Road");
    // Assert
    expect(s3.station).toBe("Ash Road");
  });
});

describe("scooter.chargeUp()", () => {
  it.skip("charges a scooter", () => {
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
  it.skip("repairs a scooter", () => {
    // Arrange
    const s5 = new Scooter("Maple Road");
    // Act
    s5.isBroken = true;
    s5.repair();
    // Assert
    expect(s5.isBroken).toBe(false);
  });
});
