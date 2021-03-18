const storage = (() => {
  const create = (key, data) => {
    if (Object.keys(localStorage).includes(key)) {
      return false;
    }
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  };

  const update = (key, data) => {
    if (Object.keys(localStorage).includes(key)) {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    }
    return false;
  };

  const read = (key) => {
    if (Object.keys(localStorage).includes(key)) {
      return JSON.parse(localStorage.getItem(key));
    }
    return false;
  };

  const remove = (key) => {
    if (Object.keys(localStorage).includes(key)) {
      localStorage.removeItem(key);
      return true;
    }
    return false;
  };

  const allNamesProjects = () => Object.keys(localStorage);

  return {
    create, update, read, remove, allNamesProjects,
  };
})();

export default storage;