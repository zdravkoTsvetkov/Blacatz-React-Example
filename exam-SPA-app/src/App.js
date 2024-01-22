import Navbar from "./Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Contacts from "./pages/Pricing";

function App() {
    let component
    switch (window.location.pathname) {
        case "/":
            component = <Home />
            break
        case "/Contacts":
            component = <Contacts />
            break
        case "/about":
            component = <About />
            break
    }

    return (
        <>
        <Navbar />

        <div className="container">
            {component}
        </div>
        </>
    )
}
export default App