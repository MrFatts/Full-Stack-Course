sequenceDiagram
    participant browser
    participant server

    browser->>server: GET /notes
    activate server
    server-->>browser: Generate HTML to fetch other files
    deactivate server

    browser->>server: GET /main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET /main.js
    activate server
    server-->>browser: JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code.

    browser->>server: GET /data.json
    activate server
    server-->>browser: JSON data [{ "content": "Note 1", "date": "2023-1-1" }, ...]
    deactivate server

    Note right of browser: The browser uses the DOM API to render the notes on the page.
![mermaid flowchart for single-page app](https://github.com/MrFatts/Full-Stack-Course/blob/main/part0/mermaid-diagram-2024-06-20-144726.png)

