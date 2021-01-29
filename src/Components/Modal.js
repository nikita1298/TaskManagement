import React, { useEffect, useState } from "react";
import { Modal, Button, Form, FormGroup } from "react-bootstrap";

const TodoModal = (props) => {
  const [form, setform] = useState({
    ...props.task,
  });
  console.log(props.task, "aa0", form);

  React.useEffect(() => {
    setform(props.task);
  }, [props.task]);

  const handleChange = (event) => {
    setform((prv) => ({ ...prv, [event.target.name]: event.target.value }));
  };

  const onSubmit = () => {
    props.onSubmit(form);
  };

  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Task</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form className="p-4">
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              onChange={handleChange}
              name="title"
              type="text"
              rows={3}
              value={form.title}
              placeholder="Enter title"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              onChange={handleChange}
              name="description"
              type="text"
              rows={3}
              value={form.description}
              placeholder="Enter description"
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control
              onChange={handleChange}
              name="date"
              type="date"
              value={form.date}
              placeholder="date"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              onChange={handleChange}
              name="time"
              type="time"
              value={form.time}
              placeholder="date"
            />
          </Form.Group>
        </Form>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.onCancleClick}>
            Close
          </Button>
          <Button variant="primary" onClick={onSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal.Dialog>
  );
};
export default TodoModal;
