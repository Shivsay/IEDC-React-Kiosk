import { useState } from 'react';
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import EventsContent from "./components/EventsContent";
import AboutContent from "./components/AboutContent";
import ContactContent from "./components/ContactContent";


function App() {
    const [selectedContent, setSelectedContent]=useState('home');

    const handleMainChange = (selectedContent) => {
        setSelectedContent(selectedContent);
    }


  return (
      <div>
        <SideBar handleBarMainChange={handleMainChange}/>
        
        {selectedContent === 'home' && <MainContent />}
        {selectedContent === 'events' && <EventsContent />}
        {selectedContent === 'about' && <AboutContent />}
        {selectedContent === 'contact' && <ContactContent />}

      </div>
  );
}

export default App;
