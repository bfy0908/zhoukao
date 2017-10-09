/**
 * Created by Nan on 2017/9/28.
 */
var gulp = require("gulp");
var webserver = require("gulp-webserver");
var fs = require("fs");
var url = require("url");
var path = require("path");
gulp.task("webserver", function () {
    gulp.src('./')
        .pipe(webserver({
            port: 8090,
            livereload: true,
            directoryListing: {
                path: "./",
                enable: true
            },
            
            middleware: function (req, res, next) {
                var URL = url.parse(req.url);
                var mockFile = path.join(__dirname, "data", URL.query + ".json");
                console.log(mockFile);
                fs.exists(mockFile, function (exist) {
                    if (exist) {
                        fs.readFile(mockFile, function (error, result) {
                            if (error) return console.error(error);
                            res.writeHead(200, {
                                "Content-Type": "text/json;charset=UTF-8",
                                "Access-Control-Allow-Origin": "http://localhost:63342"
                            });
                            res.end(JSON.stringify(result.toString()));
                        });
                    } else {
                        res.writeHead(404, {
                            "Content-Type": "text/json;charset=UTF-8",
                            "Access-Control-Allow-Origin": "http://localhost:63342"
                        });
                        res.end(JSON.stringify(result.toString()));

                    }
                });
            }
        }));
});