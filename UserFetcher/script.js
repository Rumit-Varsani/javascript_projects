class User{
    constructor(name,email,username,address){
        this.name = name;
        this.email = email;
        this.username = username;
        this.address = address;
    }
    displayInfo(){
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Username: ${this.username}`);
        console.log(`Address: ${this.address.street}, ${this.address.city}`);
    }
}

class UserFetcher {
    async fetchUserData(userId) {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const userData = await response.json();
        const user = new User(userData.name, userData.email, userData.username, userData.address);
        user.displayInfo();
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  }

const userFetcher = new UserFetcher();
userFetcher.fetchUserData(1);