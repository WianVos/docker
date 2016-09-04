var users = [
    { username: "dave", email: "dave@gmail.com", age: 32 },
    { username: "john", email: "john@gmail.com", age: 30 }
  ]

Sandbox.define('/users/{username}', 'GET', function(req, res) {


  // respond with the user or an empty object if user doesnt exist
  return res.json(_.find(users, { 'username': req.params.username }) || {})
})