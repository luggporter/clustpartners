const ghpages = require("gh-pages");
const path = require("path");

// 빌드된 디렉토리 경로
const buildPath = path.join(__dirname, "packages", "main", "build");

ghpages.publish(buildPath, function (err) {
    if (err) {
        console.error("Error deploying to GitHub Pages:", err);
    } else {
        console.log("Deployed to GitHub Pages");
    }
});
