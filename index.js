

const headerEl = (
    <header>
        <img src='/React_logo.png'></img>
        <h1>Fun Facts About React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </header>
)
ReactDOM.render(
    headerEl,
    document.getElementById('root')
)