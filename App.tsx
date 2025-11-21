import React from 'react';
import { ClipboardIcon, CheckIcon } from './components/Icons';

const initialStructure = `/my-awesome-project
  ├── .gitignore
  ├── package.json
  ├── README.md
  ├── tsconfig.json
  ├── /public
  │   ├── favicon.ico
  │   └── index.html
  └── /src
      ├── /components
      │   ├── Button.tsx
      │   └── Input.tsx
      ├── /hooks
      │   └── useDebounce.ts
      ├── /styles
      │   └── global.css
      ├── App.tsx
      ├── index.tsx
      └── types.ts`;

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans flex flex-col">
      <header className="py-6 md:py-10 px-4 text-center border-b border-gray-800 shrink-0">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-200 tracking-wide">xPanda</h1>
      </header>
      
      <main className="flex-grow p-4 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-3">
            <label htmlFor="directory-input" className="text-base md:text-lg font-semibold text-gray-300">
              Copy and paste your Directory Structure here:
            </label>
          </div>
          <textarea
            id="directory-input"
            defaultValue={initialStructure}
            className="bg-gray-800 border border-gray-700 rounded-xl p-4 w-full flex-grow resize-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:outline-none font-mono text-xs md:text-sm shadow-lg transition-shadow min-h-[300px] md:min-h-[400px]"
            placeholder="src..."
          />
        </div>
        
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-base md:text-lg font-semibold text-gray-300">Interactive Tree View:</h2>
            <div className="text-xs md:text-sm text-gray-400 space-x-4 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700">
              <span>Folders: 0</span>
              <span>Files: 0</span>
            </div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-full flex-grow overflow-auto shadow-lg custom-scrollbar min-h-[300px] md:min-h-[400px]">
            <div className="text-gray-500 text-center mt-10 italic">
              <p>Static Mode</p>
              <p className="text-sm mt-2">Logic has been removed for deployment.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 flex flex-col items-center gap-4 shrink-0 bg-gray-900 border-t border-gray-800">
        <button
          className="flex items-center gap-3 px-6 py-3 text-base font-medium text-gray-300 hover:text-white bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50 active:scale-95 shadow-lg"
          title="Copy raw text to clipboard"
        >
          <span className="w-5 h-5">
            <ClipboardIcon />
          </span>
          <span>Copy Structure</span>
        </button>
        <p className="text-xs text-gray-500 mt-2">Powered by Google AI Studio</p>
      </footer>
    </div>
  );
};

export default App;