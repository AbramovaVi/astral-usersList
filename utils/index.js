const showError = err => console.error(err);

const rewrite = (users, id, data) => {
  users.forEach(item => {
    if (item.id == id) {
      data.firstName ? (item.firstName = data.firstName) : null;
      data.secondName ? (item.secondName = data.secondName) : null;
      data.email ? (item.email = data.email) : null;
    }
  });
};

module.exports = {
  showError,
  rewrite
};
