import 'animate.css';
import { IntroSection } from './components/Intro';
import { Separator } from './components/Separator';
import { ThemeContextProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeContextProvider>
      <main className="flex-col items-center bg-corn-silk w-full h-full px-4 py-10 mx-auto scroll-smooth">
        {/* INTRO Section */}
        <IntroSection />
        {/* Projects Section */}
        <Separator />
        {/*  */}


      </main>
    </ThemeContextProvider>
  );
}

export default App;
