const createUser = ({ firstName, lastName, email }) => ({
    firstName,
    lastName,
    email,
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  });

  const user= createUser({firstName: "Jane",
    lastName: "Doe",
    email: "jane@doe.com"});
  console.log(user.fullName());