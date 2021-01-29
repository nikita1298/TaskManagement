import React from "react";
import ListItem from "./ListItem";

const TaskList = (props) => {
  console.log("object", props);
  return (
    <div>
      TaskList
      <h1></h1>
      {props.tasks.map((item) => {
        return (
          <ListItem
            key={item.id}
            onEditClick={(task, id) => props.onEditClick(task, id)}
            task={item}
          />
        );
      })}
    </div>
  );
};
export default TaskList;
