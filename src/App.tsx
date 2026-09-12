import { About, Contact, Gallery, Hero } from "./features/presentations";
import { FloatingWhatsApp, Header } from "./features/components/layout";

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Gallery />
                <About />
            </main>
            <Contact />
            <FloatingWhatsApp></FloatingWhatsApp>
        </>
    );
}

export default App;
