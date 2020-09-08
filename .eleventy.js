const fs = require("fs");

module.exports = (config) => {
    // handle 404 in dev env
    config.setBrowserSyncConfig({
        callbacks: {
          ready: function(err, bs) {
    
            bs.addMiddleware("*", (req, res) => {
              const content_404 = fs.readFileSync('dist/404.html');
              // Provides the 404 content without redirect.
              res.write(content_404);
              // Add 404 http status code in request header.
              // res.writeHead(404, { "Content-Type": "text/html" });
              res.writeHead(404);
              res.end();
            });
          }
        }
      });

    return {
        dir: {
          input: 'src',
          output: 'dist'
        }
      };
}