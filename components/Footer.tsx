export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500 dark:text-gray-400">
        <p>
          Built by{" "}
          <span className="text-cyan-500 font-semibold">Deepak Sisodiya</span> with Next.js & Tailwind CSS
        </p>
        <p>© {new Date().getFullYear()} — All rights reserved</p>
      </div>
    </footer>
  );
}
