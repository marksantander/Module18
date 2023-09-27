app.get('/api/users', async (req, res) => {
  const users = await User.find().populate('thoughts').populate('friends');
  res.json(users);
});

app.get('/api/users/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId).populate('thoughts').populate('friends');
  res.json(user);
});

app.post('/api/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

app.put('/api/users/:userId', async (req, res) => {
  await User.findByIdAndUpdate(req.params.userId, req.body);
  res.json({ message: 'User updated successfully' });
});