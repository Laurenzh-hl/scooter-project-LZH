const Scooter = require("./Scooter.js");
const User = require("./User.js");

class ScooterApp {
  // ScooterApp code here
  static stations = {
    "Ash Road": [],
    "Maple Road": [],
    "Gloucester Road": [],
    "Cabot Circus": [],
    "Harbourside": []
  };

  static registeredUsers = {};

  static registerUser (username, password, age) {
    if (!ScooterApp.registeredUsers[username] && age >= 18) {
      const user = new User (username, password, age);
      ScooterApp.registeredUsers[username] = user;
      console.log("user has been registered");
      return user;
    } else if (ScooterApp.registeredUsers[username] && age >= 18) {
      throw new Error("already registered");
    } else {
      throw new Error("too young to register");
    }
  }

  static loginUser(username, password) {
    let temp = ScooterApp.registeredUsers[username];
    if (!ScooterApp.registeredUsers[username]  || temp.password !== password) {
      throw new Error("Username or password incorrect");
    }
    temp.login(password);
    console.log("user has been logged in")
    }

  static logoutUser(username) {
    let temp = ScooterApp.registeredUsers[username];
    if (!ScooterApp.registeredUsers[username]) {
      throw new Error("no such user is logged in");
    }
    temp.logout();
    console.log("user is logged out");
    }

  static createScooter(station) {
    if (!ScooterApp.stations[station]) {
      throw new Error("no such station");
    }
    let temp = new Scooter(station);
    ScooterApp.stations[station].push(temp);
    console.log("created new scooter");
    return temp;
  }

  static dockScooter(scooter, station) {
    if (!ScooterApp.stations[station]) {
      throw new Error("no such station");
    }
    for (let scoot of ScooterApp.stations[station]) {
      if (scoot.serial == scooter.serial) {
        throw new Error("scooter already at station")
      }
    }
    ScooterApp.stations[station].push(scooter);
    scooter.dock(station);
    console.log("scooter is docked");
  }

  static rentScooter(scooter, user) {
    for (const stop in ScooterApp.stations) {
      for (let i = 0; i < ScooterApp.stations[stop].length; i++) {
        if (ScooterApp.stations[stop][i].serial === scooter.serial) {
          if (scooter.user !== null){
            throw new Error("scooter already rented")
          }
          ScooterApp.stations[stop].splice(i, 1);
          scooter.rent(user);
          console.log("scooter is rented");
        }
      }
    }
  }

}

let u1 = new User("josh98", "password123", 25);
let u2 = new User("kate98", "password321", 26);

let s1 = new Scooter("Ash Road");
let s2 = new Scooter("Ash Road");
let s3 = new Scooter("Maple Road");
let s4 = new Scooter("Maple Road");
let s5 = new Scooter("Gloucester Road");
let s6 = new Scooter("Gloucester Road");
let s7 = new Scooter("Cabot Circus");

// console.log(s1, s2, s3, s4, s5, s6, s7);

ScooterApp.dockScooter(s1, "Ash Road");
ScooterApp.dockScooter(s2, "Ash Road");
ScooterApp.dockScooter(s3, "Maple Road");
ScooterApp.dockScooter(s4, "Maple Road");
ScooterApp.dockScooter(s5, "Gloucester Road");
ScooterApp.dockScooter(s6, "Gloucester Road");
ScooterApp.dockScooter(s7, "Cabot Circus");

console.log(ScooterApp.stations)

ScooterApp.rentScooter(s1, u1);

console.log(ScooterApp.stations)

console.log(s1);


module.exports = ScooterApp;
