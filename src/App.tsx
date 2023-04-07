import { ThemeProvider } from "next-themes";
import ToggleDarkMode from "./components/toggleDarkMode";
import Globe from "./components/Globe";

function App() {
  return (
    <ThemeProvider>
      <div className="max-w-3xl max-h-screen overflow-hidden mx-auto ">
        <div className="pt-4 lg:pt-12">
          <h1 className="scroll-m-20 text-4xl px-4 font-extrabold tracking-tight lg:text-5xl">
            😢 sad...
          </h1>
          <div className="relative">
            <p className="mt-4 text-xl text-zinc-700  px-4 dark:text-zinc-400">
              I have no job <span className="text-sm">(Pengangguran)</span> . I
              had applied to many companies but got rejected from every company.
              They ignore my application and just leave it alone. Nonetheless,
            </p>
            <blockquote className="mt-2 lg:mt-6 border-l-2 border-slate-300 pl-6 italic text-zinc-800 dark:border-zinc-600 dark:text-zinc-200">
              <span className="text-xl text-zinc-900 dark:text-zinc-100">
                "Faith is a living, daring, confidence in God's grace."
              </span>
              <span className="pl-2">
                by{" "}
                <a
                  referrerPolicy="no-referrer"
                  className="bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent"
                  href="https://en.wikipedia.org/wiki/Martin_Luther"
                >
                  Martin Luther
                </a>
              </span>
            </blockquote>
            <div className="absolute -bottom-10 right-4 lg:right-0">
              <p className="text-xs lg:text-sm text-slate-500 dark:text-slate-400">
                4/7/2023 - Good Friday
              </p>
            </div>
          </div>

          <Globe />
        </div>
        <div className="fixed bottom-0 max-w-3xl w-full bg-white dark:bg-black  ">
          <hr />
          <footer className="footer px-4 flex justify-between items-center h-[5vh]">
            <ToggleDarkMode />
            <div className="text-xs dark:text-zinc-400">
              Page built by{" "}
              <a
                referrerPolicy="no-referrer"
                className="bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent"
                href="https://ezrachai.pages.dev"
              >
                ezrachai.
              </a>
            </div>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
