fetch('/api/users')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(JSON.stringify(data));
  });