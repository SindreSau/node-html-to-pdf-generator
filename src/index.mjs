import {test_pdf} from "./puppeteer.mjs";
import {getRootPath} from "./utils/path_helpers.mjs";


function main() {
    const before = Date.now();
    const rootPath = getRootPath();
    const outputPath = `${rootPath}pdf/test.pdf`;
    
    test_pdf("./src/html/test.html", outputPath).then(() => {
        console.log("finished");
        console.log(`Time taken: ${Date.now() - before}ms`);
    });
}

main();