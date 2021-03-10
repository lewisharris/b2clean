import React from "react";
import styled from "styled-components";

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 50px auto auto auto;
  @media only screen and (max-width: 500px) {
    max-width: 90vw;
  }
`;
const Label = styled.label`
  margin: 5px 0px;
`;
const Input = styled.input`
  height: ${props => (props.large ? "100px" : "30px")};
  background: white;
  border: none;
  border: 2px solid #bdbdbd;
  box-shadow: inset 0px 0px 0px #bdbdbd;
  transition: all 0.3s linear;
  margin: 5px 0px;
  line-height: ${props => (props.large ? "100px" : "30px")};
  scroll-behavior: scroll;
  padding: 10px;
  box-sizing: border-box;
  :focus {
    box-shadow: inset 500px 0px 0px #bdbdbd;
    transition: all 0.3s linear;
  }
`;
const Button = styled.button`
  margin: 5px 0px;
  background: #4e95e8;
  border: none;
  height: 40px;
  font-size: 18px;
  color: white;
  :hover {
    background: #3486ea;
  }
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
        action="https://formspree.io/f/mjvpnwrb"
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
        {status === "SUCCESS" ? (
          <p>Thanks for your enquiry. We will be in touch soon!</p>
        ) : (
          <Button>Submit</Button>
        )}
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
