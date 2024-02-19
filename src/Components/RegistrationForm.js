import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RegistrationForm(){

    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    return (
        <>
        
        <h2>Registration Form</h2>
        <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control onChange={(e) => {setFirstName(e.target.value)}} type="text" name="firstName"/>
        </Form.Group>
        <p>To jest pierwsze imie: {firstName}</p>
        </>
    )
}

export default RegistrationForm;