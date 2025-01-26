import React from 'react'
import "./Contact.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Contact() {
  return (
    <>
      <div className='container mb-3 contact'>
        <h2 className='text-center'>ContactUS</h2>
        <div className='container mt-2'>
          <Form className='row mt-2 '>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" name="fname" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" name="name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email id</Form.Label>
              <Form.Control type="text" name="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mobile no.</Form.Label>
              <Form.Control type="text" name="Mobile" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="Message" rows={4} />
      </Form.Group>

            <div className='d-flex justify-content-center'></div>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "10vh" }}>
  <Button variant="primary" className="col-lg-6" type="submit">
    Submit
  </Button>
</div>

          </Form>
        </div>

      </div>
    </>
  )
}

export default Contact
