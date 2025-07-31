async function fetchContent(url) {
    let response = await fetch(url);
    let data = await response.json();
    return `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}
setInterval(async function () {
    let c = document.getElementsByClassName("Content")[0]
    let url = "https://jsonplaceholder.typicode.com/todos/1"
    let content = await fetchContent(url)
    c.innerHTML = content
    console.log(content)
}, 3000)