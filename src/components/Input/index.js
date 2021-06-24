import React from 'react'
import { Form, Button , Row , Col } from "react-bootstrap";
import './index.css'
const Input =  (props) => {
  
    return (
        <Form.Group >
            <Form.Label>{props.label}</Form.Label>
            <Form.Control 
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange} 
             />
            <Form.Text className="text-muted">
            {props.errorMessage}
            </Form.Text>
      </Form.Group>
    )
}

export default Input;