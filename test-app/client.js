require('view-engine').register('jade', require('./view-engine-jade'));

var template = require('view-engine').load(require.resolve('./client.jade'));

template.render({
        name: 'Frank',
        colors: ['red', 'green', 'blue']
    },
    function(err, output) {
        document.getElementById('container').innerHTML = output;
    });