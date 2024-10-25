class User {
  // User code here
  constructor (username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }

  login(password) {
    if (password !== this.password) {
      throw new Error("incorrect password");
    } else {
      this.loggedIn = true;
    }
  }

  logout() {
    this.loggedIn = false;
  }
}

// let temp = new User ("lauren24", "password123", 24);

// console.log(temp);
module.exports = User;
