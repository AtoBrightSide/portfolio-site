import 'animate.css';
import { IntroSection } from './components/Intro';
import { Separator } from './components/Separator';
import { ThemeContextProvider } from './context/ThemeContext';
import { Projects } from './components/Projects';
import { Experiences } from './components/Experiences';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Skills } from './components/Skills';

const App = () => {
  return (
    <ThemeContextProvider>
      <main className={`flex-col items-center bg-corn-silk dark:bg-pine-tree-green w-full h-full px-5 sm:px-10 pt-10 mx-auto scroll-smooth`}>
        <IntroSection />

        <Separator />

        <Projects />

        <Separator />

        <Experiences />

        <Separator />

        <Skills />

        <Separator />

        <Contact />

        {/* <Separator /> */}

        <Footer />

      </main>
    </ThemeContextProvider>
  );
}

export default App;
