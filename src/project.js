const Project = ({ title, tasks = [] }) => {
  const findTask = titleTask => tasks.filter(task => task.title === titleTask)[0];
  return {
    title, tasks, findTask,
  };
};

export default Project;