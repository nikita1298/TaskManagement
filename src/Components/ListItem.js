import React from "react";
import { Card, Button } from "react-bootstrap";
const ListItem = (props) => {
  const onCancleEdit = () => {};
  const task = props.task;
  return (
    <div>
      <Card key={task.id} className="mb-3" style={{ width: "42rem" }}>
        <Card.Body>
          <Card.Title>
            <div className="row">
              <div className="col-md-9">
                {task.title}
                <hr />
                <p style={{ textAlign: "left", fontSize: "15px" }}>
                  {task.description}
                </p>
                <h6>Status:{task.status ? "Compelted" : "Remaining"}</h6>
              </div>
              <div className="col-md-3">
                <Button
                  variant="dark"
                  className="mr-2 btn btn-sm"
                  onClick={() => props.onEditClick(task)}
                >
                  Edit
                </Button>
                <Button
                  className="btn btn-sm"
                  variant="danger"
                  onClick={() => props.onDeleteClick(task.id)}
                >
                  DELETE
                </Button>

                <br />
                <div className="mt-3">
                  <h6>Time:{task.datetime}</h6>
                  <h6>Created :{task.date}</h6>
                </div>
                <Button
                  className="btn btn-sm"
                  variant="outline-success"
                  // onClick={() => props.onDeleteClick(task.id)}
                >
                  Compeleted
                </Button>
              </div>
            </div>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ListItem;
