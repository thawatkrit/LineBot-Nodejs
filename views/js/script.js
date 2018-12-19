fetch('https://protected-refuge-15433.herokuapp.com/api/users')
    .then(function(response) {
    return response.json();
    })
    .then(function(data) {
        var userId = data.map(d => {
            if(!userId.includes(d)) {
                return d;
            }
        });
        console.log(JSON.stringify(userId));
        // contain
    });