import { About, Contact, Gallery, Hero } from "./features/presentations";
import { FloatingWhatsApp, Footer, Header } from "./features/components/layout";

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Gallery />
                <About />
                <Contact />
            </main>
            <Footer />
            <FloatingWhatsApp></FloatingWhatsApp>
        </>
    );
}

export default App;
