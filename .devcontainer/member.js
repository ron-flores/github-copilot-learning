function skillsMember() {
  return {
    name: 'skillsMember',
    type: 'list',
    message: 'Select a member',
    choices: [
      'Add member',
      'Remove member',
      'Back',
    ],
  };
}