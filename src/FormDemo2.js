import React, { Component } from 'react'
import alertify from 'alertify.js';
import { Button, FormGroup, Input, Label, Form } from 'reactstrap';

export default class FormDemo2 extends Component {
state = {email : "", password:"" , description : "", city: ""};

handlerChange = (event) =>{
    // this.setState({userName:event.target.value})

    let name= event.target.name;
    let value = event.target.value;

    this.setState({[name]:value})
}

handlerSubmit = (event) =>{
    event.preventDefault();
    alertify.success(this.state.email + " added to database.");
}

  render() {
    return (
      <div>
        <Form onSubmit={this.handlerSubmit}>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input type='email' placeholder='Enter your email' name='email' id='email' onChange={this.handlerChange}></Input>
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type='password' placeholder='Enter your password' name='password' id='password' onChange={this.handlerChange}></Input>
            </FormGroup>
            <FormGroup>
                <Label for="description">Description</Label>
                <Input type='textarea' placeholder='Enter your description' name='description' id='description' onChange={this.handlerChange}></Input>
            </FormGroup>
            <FormGroup>
                <Label for="city">City</Label>
                <Input type='select'  name='city' id='city' onChange={this.handlerChange}>
                    <option>İstanbul</option>
                    <option>İzmir</option>
                    <option>Ankara</option>
                    <option>Eskişehir</option>
                    <option>Rize</option>
                </Input>
            </FormGroup>
            <Button type='submit'>Save</Button>

            
        </Form>
      </div>
    )
  }
}
