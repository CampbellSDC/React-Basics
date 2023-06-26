

function HeaderEl() {
    return (
        <header>
        <img src='/React_logo.png'></img>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </header>
    )

    Main()

    Footer()
}

function Main(){
    return (
        <div>
            <h1>Reasons I'm Excited to Learn React</h1>
            <ul>
                <li>It's a popular library</li>
                <li>Increasing skill set to build more reusable code</li>
                <li>More likely to get a job as a developer with this knowledge</li>
            </ul>

        </div>
        
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2021 Campbell development. All rights reserved.</small>
        </footer>
    )
}
    
function Page() {
    return (
        <div>
            <HeaderEl />   
            <Main />
            <Footer />     

        </div>
        
    )
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
)