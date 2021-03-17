const Task = ({
  title = '', dueDate = '', description = '', priority = 'normal', isDone = false,
}) => ({
  title, dueDate, description, priority, isDone,
});

export default Task;