import newTask from './task';

const newProject = title => {
  const tasksList = [];

  function addTask(title, descr, priority, date) {
    const task = newTask(title, descr, priority, date);
    tasksList.push(task);
    return 'hey';
  }

  function deleteTask(index) {
    tasksList.splice(index, 1);
  }

  function editTask(index, title, description, priority, date) {
    let task = tasksList[index];
    const editedTask = {
      title, description, priority, date,
    };
    task = { ...editedTask };
    tasksList[index] = task;
  }

  return {
    title,
    tasksList,
    addTask,
    deleteTask,
    editTask,
  };
};

export default newProject;