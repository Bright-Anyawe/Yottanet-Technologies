const Header = () => {
  return;

  <>
    <header className="flex flex-col items-center justify-center py-2">
      <h1 className="text-3xl font-bold">
        Welcome to{" "}
        <a href="https://nextjs.org" className="text-blue-600">
          Next.js!
        </a>
      </h1>

      <p className="text-lg mt-2">
        Get started by editing{" "}
        <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded font-semibold">
          app/page.tsx
        </code>
        .
      </p>
    </header>
  </>;
};

export default Header;
