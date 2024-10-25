const { describe, expect, it } = require("@jest/globals");
const User = require("../classes/User.js");

describe("user.login(password)", () => {
  it("logs a user in if the password is correct", () => {
    // Arrange
    const u1 = new User("lauren24", "password123", 24);
    // Act
    u1.login("password123");
    // Assert
    expect(u1.loggedIn).toBe(true);
  });

  it("throws an error if the password is incorrect", () => {
    // Arrange
    const u2 = new User("josh98", "password321", 25);
    // Act
    function tryWrongPass () {
      u2.login("password123");
    }
    // Assert
    expect(tryWrongPass).toThrow("incorrect password");
  });
});

describe("user.logout()", () => {
  it("logs a user out", () => {
    // Arrange
    const u3 = new User("kate98", "password321", 26);
    // Act
    u3.login("password321");
    u3.logout();
    // Assert
    expect(u3.loggedIn).toBe(false);
  });
});
