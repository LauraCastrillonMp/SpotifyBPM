import React from 'react'
import Header from 'components/landing/Header'

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1DB954] text-white">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="px-4 md:px-6">
            <div className="flex flex-col justify-center space-y-4 ml-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Discover the perfect BPM for your music
                </h1>
                <p className="max-w-[600px] text-white md:text-xl dark:text-white-400">
                  SpotifyBPM analyzes your Spotify playlists and recommends
                  songs with the perfect BPM for your mood.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <button className="flex items-center justify-center gap-2 rounded-lg bg-gray-800 px-4 py-3 text-white hover:bg-gray-950">
                  <SpotifyLogo className="h-6 w-6" />
                  Connect to Spotify
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  New Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Analyze your Spotify playlists in seconds
                </h2>
                <p className="max-w-[900px] text-white-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-white-400">
                  SpotifyBPM analyzes your Spotify playlists and recommends
                  songs with the perfect BPM for your mood.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center space-y-4 mt-12">
              <ul className="flex items-center justify-center space-x-4 gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Fast Analysis</h3>
                    <p className="text-slate-300 dark:text-white-400">
                      Analyze your Spotify playlists in seconds.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Recommendations</h3>
                    <p className="text-slate-300 dark:text-white-400">
                      Get song recommendations based on your mood.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Customization</h3>
                    <p className="text-slate-300 dark:text-white-400">
                      Customize your analysis based on your preferences.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center">
          <div className="container md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-950">
                  Performance
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Traffic spikes should be exciting, not scary.
                </h2>
                <a
                  className="inline-flex rounded-lg bg-gray-800 px-4 py-2 text-white hover:bg-gray-950"
                  href="#"
                >
                  Get Started
                </a>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-950">
                  Security
                </div>
                <p className="mx-auto max-w-[700px] text-white-500 md:text-xl/relaxed dark:text-white-400">
                  Fully managed infrastructure designed to scale dynamically
                  with your traffic, a global edge to ensure your site is fast
                  for every customer, and the tools to monitor every aspect of
                  your app.
                </p>
                <a
                  className="inline-flex rounded-lg bg-gray-800 px-4 py-2 text-white hover:bg-gray-950"
                  href="#"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex text-sm justify-between gap-2 dark:bg-gray-800 sm:flex-row py-6 w-full items-center px-4 md:px-6">
        <div className="space-y-2">
          <p className="text-white-500 dark:text-white-400">
            🧠 Idea by{' '}
            <a
              className="underline underline-offset-4"
              href="https://github.com/Divide-By-0/ideas-for-projects-people-would-use"
              target="_blank"
              rel="noreferrer"
            >
              Divide-By-0
            </a>
          </p>
          <p className="text-white-500 dark:text-white-400">
            © 2024 SpotifyBPM. All rights reserved.
          </p>
        </div>
        <div className="space-y-2">
          <p className=" text-white-500 dark:text-white-400">Built with ❤️</p>
        </div>
        <div>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <a className=" hover:underline underline-offset-4" href="#">
              Contact Us
            </a>
            <a className=" hover:underline underline-offset-4" href="https://www.privacypolicies.com/generic/">
              Privacy
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export function SpotifyLogo(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z" />
    </svg>
  )
}
