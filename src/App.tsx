import { About, Contact, Gallery, Hero } from "./features/presentations";
import { FloatingWhatsApp, Footer, Header } from "./features/components/layout";
import { Services } from "./features/presentations/Services";

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Gallery />
                <Services />
                <About />
                <Contact />
            </main>
            <Footer />
            <FloatingWhatsApp></FloatingWhatsApp>
        </>
    );
}

export default App;
