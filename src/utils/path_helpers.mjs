export function getRootPath() {
    return new URL("../", import.meta.url).pathname;
}