var express = require('express');
var app = express();

require('view-engine').register('jade', require('./view-engine-jade'));

require('optimizer').configure({
    plugins: [
        require('optimizer-jade')
    ]
});

var template = require('view-engine').load(require.resolve('./server.jade'));

app.use('/static', require('serve-static')(__dirname + '/static'));



require('optimizer').optimizePage({
        name: 'index',
        dependencies: [
            'require-run: ./client'
        ]
    },
    function(err, optimizedPage) {

        app.get('/', function(req, res) {
            template.render({
                    scripts: optimizedPage.getBodyHtml(),
                    name: 'Frank',
                    colors: ['red', 'green', 'blue']
                },
                res);
        });

        app.listen(8080, function() {
            console.log('Listening on port 8080');
        });
    });
