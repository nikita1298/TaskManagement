import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import TodoModal from "./Modal";
import TaskList from "./TaskList";
import * as reducerFunc from "../store/actions/actions";

const HomePage = (props) => {
  const initialState = {
    title: "",
    description: "",
    status: false,
    date: "",
    time: "",
    edit: false,
  };
  const [state, setState] = useState({ ...initialState });
  const [Modal, setModal] = useState("none");

  const onAddClick = () => {
    if (Modal == "none") setModal("block");
    setState({ ...initialState });
  };

  const onCancleClick = () => {
    if (Modal == "block") setModal("none");
  };

  const onSubmit = (data) => {
    console.log("Click", data);
    var task = {
      id: props.tasks.length + 1,
      title: data.title,
      description: data.description,
      status: false,
      datetime: data.date + " " + data.time,
      data: new Date().toISOString(),
    };
    if (state.edit) {
      props.onEditTask(task);
    } else {
      props.onAddTask(task);
    }
  };

  const onEditClick = (task, id) => {
    console.log("EditClick");

    var datetime = task.datetime.split(" ");
    setState({
      ...state,
      id: task.id,
      title: task.title,
      description: task.description,
      status: false,
      date: new Date(datetime[0]),
      time: datetime[1],
    });
    setModal("block");

    console.log("State in Edit", state);
  };
  return (
    <Container className="w-50 mx-auto">
      <h1>Task List</h1>
      <div style={{ textAlign: "right" }}>
        <Button varient="success" onClick={onAddClick}>
          +
        </Button>
      </div>
      <div style={{ display: Modal }}>
        <TodoModal
          onCancleClick={onCancleClick}
          task={state}
          onSubmit={onSubmit}
        />
      </div>
      <TaskList onEditClick={onEditClick} tasks={props.tasks} />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTask: (task) => dispatch(reducerFunc.addTask(task)),
    onEditTask: (task) => dispatch(reducerFunc.editTask(task)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
