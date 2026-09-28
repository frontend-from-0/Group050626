  /* Programming paradigms
  OOP - Object Oriented programming
  FP - Functional programming

  OOP:  state is usually stored in objects and can be modified through methods 
  FP: state is immutable, and functions are designed to transform data rather than mutate it
  
  OOP: classes encapsulates related data and behavior
  FP: problems are broken down into smaller, composable functions that can be combined to solve larger problems.

*/

// Real life situation: we have multiple users on our website, and we want to store their information in a way that is easy to access and modify. Different users have different roles, and we want to be able to easily change their roles. We also need to make sure that all users have the same properties.

const user1 = {
  username: 'John',
  email: 'john@gmail.com',
  role: 'user'
};

const user2 = {
  username: 'Jane',
  email: 'jane@gmail.com'
}

const user3 = {
  name: 'Adam',
  email: 'adam@gmail.com'
}

class User {
  constructor(username, email) {
    this._username = username.trim().toLowerCase();
    this._email = email.trim().toLowerCase();
    this._role = 'user';
  }

  describe() {
    console.log('This is a user: ', this._username, this._email, this._role);
  }
}

class AdminUser extends User {
  constructor(username, email) {
    super(username, email);
    // It's possible to overrite properties of the class that was extended
    this._role = 'admin';
  }

  // It's possible to overrite methods of the class that was extended
  // describe() {
  //   console.log('This is an admin user: ', this._username, this._email, this._role);
  // }

  manageUsers(){
    console.log('Admin is about to manage all website users...');
  }

  get username() {
    return this._username.toUpperCase();
  }

  set username(newUsername) {
    if (typeof newUsername !== 'string') {
      console.log('username should be a string value');
      return;
    }
    if (newUsername.trim().length <3) {
      console.log('username should be 3 characters min.');
      return;
    }
    this._username = newUsername.trim().toLowerCase();

  }
}

const user4 = new User('johndoe123', 'john@gmail.com');
const user5 = new User('janendoe', 'jane@gmail.com');

const user6 = new AdminUser('admin', 'admin@gmail.com');


user4.describe()
user5.describe();

user6.describe();
user6.manageUsers();

user4._username = 'Something else';

user6.username = 'Admin-User';
console.log(user6.username);


user4.describe();
user6.describe();


