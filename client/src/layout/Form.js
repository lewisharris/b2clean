import React from "react";
import styled from "styled-components";

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0px auto;
`;
const Label = styled.label`
  margin: 5px 0px;
`;
const Input = styled.input`
  height: ${props => (props.large ? "100px" : "30px")};
  background: lightgray;
  border: none;
  margin: 5px 0px;
`;
const Button = styled.button`
  margin: 5px 0px;
`;

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <FormStyle
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mqkggnwl"
        method="POST"
      >
        <Label>Name:</Label>
        <Input type="text" name="name" />
        <Label>Email:</Label>
        <Input type="email" name="email" />
        <Label> Number:</Label>
        <Input type="number" name="number" />
        <Label>Message:</Label>
        <Input type="text" name="message" large />
        {status === "SUCCESS" ? <p>Thanks!</p> : <Button>Submit</Button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </FormStyle>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
