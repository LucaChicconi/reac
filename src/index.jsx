import { createRoot } from "react-dom/client"
import { Fragment} from "react"
const root = createRoot(document.getElementById("root"))

root.render(
    
    <Page/>
)

// Componentes!

function TempFunc(){
    return (
        <main>
        <img src="/src/react-logo.png" width="50px" alt="React logo" />
        <h1>Fun facts about React!</h1>
        <ul>
            <li>Was first release in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 200K stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </main>
    )
}

// Challenge : Crear un componente con un li con las razones por las que 
// querés aprender react


function Razones(){
    return(
        <section>
            <h1>Razones por las cuales quiero aprender React</h1>
            <img src="/src/react-logo.png" width="50px" alt="React logo" />
            <ul>
                <li>Quiero hacer páginas web útiles</li>
                <li>Quiero dinero</li>
                <li>Quiero dinero</li>
                <li>Mucho dinero</li>
            </ul>
        </section>
    )
}

// Challenge parte 2:
function Page(){
    return(
        <Fragment>
            <header>
                <img src="/src/react-logo.png" width="50px" alt="React logo" />
            </header>
                <h1>Razones por las cuales quiero aprender React</h1>
                <ul>
                    <li>Quiero hacer páginas web útiles</li>
                    <li>Quiero dinero</li>
                    <li>Quiero dinero</li>
                    <li>Mucho dinero</li>
                </ul>
            <footer>
                <h4>© 2025 Mochaman development. All rights reserved</h4>
            </footer>
        </Fragment>
    )
}

// Fragments : Una alternativa a poner un <div> que rodee todo
// Con el div estabamos renderizando un <div> adentro del <div> original del HTML al pedo
// Con el fragment, no estamos anidando otro nodo en DOM

