import React from "react"

export default function FooterLanding() {
  return (
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
          <a
            className=" hover:underline underline-offset-4"
            href="https://www.privacypolicies.com/generic/"
          >
            Privacy
          </a>
        </nav>
      </div>
    </footer>
  )
}
