function createElement(data) {
    const paragraph = document.createElement('p');
    const text = document.createTextNode(data);
    paragraph.appendChild(text);
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    const req = new XMLHttpRequest();
    req.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
    
    req.addEventListener('load', function () {
        const response = JSON.parse(req.responseText);
        const extract = response.query.pages['21721040'].extract;
        callback(extract);
    });
    
    req.send();
}

queryWikipedia(createElement);
