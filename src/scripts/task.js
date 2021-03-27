const newTask = (title, description, priority, date) => {
  const checkList = [];

  function addItem(item) {
    checkList.push(item);
  }

  function deleteItem(index) {
    checkList.splice(index, 1);
  }

  return {
    title,
    description,
    priority,
    date,
    checkList,
    addItem,
    deleteItem,
  };
};

export default newTask;