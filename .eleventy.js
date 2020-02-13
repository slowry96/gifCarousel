const fs = require("fs");

/* 
    we want to export our custom filter function so the the eleventy engine can
    know what to use when it runs into it in our templates

    Our function parameter will automatically be the eleventyConfig that takes 
    custom filters.
*/ 

module.exports = function(eleventyConfig) {
    /* 
        we want to call addFilter here and pass our filter name as the first parameter
        and the new filter function as the second parameter.

        the path parameter in our new function will contain what we pipe into the function
        from our template. it doesn't have to be 'path', but it's aptly named for the data 
        we're passing here which is a good standard to follow.
    */ 
    eleventyConfig.addFilter("filesize", function(path) {
        let stat = fs.statSync(path);

        if (stat) {
            return (stat.size / 1024).toFixed(2) + " KB";
        }

        return "";
    });
};
