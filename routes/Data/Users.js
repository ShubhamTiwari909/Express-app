const users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Jane",
  },
  {
    id: 3,
    name: "Joe",
  },
];

const mockUserList = [];

for (let i = 1; i <= 10; i++) {
  const user = {
    id: `${i}`,
    username: `user${i}`,
    displayName: `User ${i}`,
  };

  mockUserList.push(user);
}


module.exports = {users,mockUserList}