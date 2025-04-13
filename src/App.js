import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Tab1');

  const tabs = [
    { name: 'Tab1', content: <div><h2>Tab 1</h2><p>Content for Tab 1.</p></div> },
    { name: 'Tab2', content: <div><h2>Tab 2</h2><p>Content for Tab 2.</p></div> },
    { name: 'Tab3', content: <div><h2>Tab 3</h2><p>Content for Tab 3.</p></div> },
  ];

  return (
      <div className="App">
        <div className="tabs">
          {tabs.map((tab) => (
              <button
                  key={tab.name}
                  className={`tab-link ${activeTab === tab.name ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.name)}
              >
                {tab.name}
              </button>
          ))}
        </div>
        <div className="tab-content">
          {tabs.find((tab) => tab.name === activeTab)?.content}
        </div>
      </div>
  );
}

export default App;