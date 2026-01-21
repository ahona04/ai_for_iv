import React from 'react';
import Navbar from './components/navbar';
function App() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-[calc(100vh-6rem)] px-4 py-8">
        <div className="grid grid-cols-3 gap-4 w-full max-w-7xl">
          <iframe 
            src="https://www.playlab.ai/community/clx7i354n003u748sboln8fpt"
            className="w-full aspect-video border-0 rounded-lg shadow-lg"
            title="Playlab Community 1"
            allowFullScreen
          />
          <iframe 
            src="https://www.playlab.ai/community/clx7i354n003u748sboln8fpt"
            className="w-full aspect-video border-0 rounded-lg shadow-lg"
            title="Playlab Community 2"
            allowFullScreen
          />
          <iframe 
            src="https://www.playlab.ai/community/clx7i354n003u748sboln8fpt"
            className="w-full aspect-video border-0 rounded-lg shadow-lg"
            title="Playlab Community 3"
            allowFullScreen
          />
          <iframe 
            src="https://www.playlab.ai/community/clx7i354n003u748sboln8fpt"
            className="w-full aspect-video border-0 rounded-lg shadow-lg"
            title="Playlab Community 4"
            allowFullScreen
          />
          <iframe 
            src="https://www.playlab.ai/community/clx7i354n003u748sboln8fpt"
            className="w-full aspect-video border-0 rounded-lg shadow-lg"
            title="Playlab Community 5"
            allowFullScreen
          />
          <iframe 
            src="https://www.playlab.ai/community/clx7i354n003u748sboln8fpt"
            className="w-full aspect-video border-0 rounded-lg shadow-lg"
            title="Playlab Community 6"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default App;
