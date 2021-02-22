// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
      if (!id) {
        throw new Error("You are missing the id.");
      }
      if (!id) {
        throw new Error("You are missing the title.");
      }
      if (!email) {
        throw new Error("You are missing the email.");
      }
      this.name = name;
      this.id = id;    
      this.email = email; 
     // this.role = role;  
    }