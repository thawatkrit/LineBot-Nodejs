fetch('/api/users')
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