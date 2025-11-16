import React from "react";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  validate() {
    const errors = {};
    if (!this.state.name || this.state.name.length < 3) {
      errors.name = "Name is required and can't be < 3 letters";
    } 
    if (!this.state.email) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(this.state.email)) {
      errors.email = "Email is invalid";
    }
    if (!this.state.password) {
      errors.password = "Password is required";
    } else if (this.state.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(this.state.password)) {
      errors.password = "Password must contain uppercase, lowercase, number and special character";
    }
    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    if (this.validate()) {
      alert("Form submitted!");
      // Reset form or further action
      this.setState({ name: "", email: "", password: "", errors: {} });
    }
  };

  render() {
    const { name, email, password, errors } = this.state;

    return (
      <div><h1>Registration form for USER Input:</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
          />
          <div>{errors.name}</div>

          <input
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
          />
          <div>{errors.email}</div>

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
          />
          <div>{errors.password}</div>

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
