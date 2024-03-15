import { useState } from 'react';
import Todos from './components/Todos';
import { TABS } from './constants';
import User from './components/User';
import './App.css';


function App() {

  const [tab, setTab] = useState("todo")
  const handleTabClick = tabValue => setTab(tabValue)

  return <>
    <div>
      <div>
        <span onClick={() => handleTabClick(TABS.TODO)}>Todo</span> | <span onClick={() => handleTabClick(TABS.API)}>Api</span>
      </div>
      {tab === TABS.TODO ? <Todos /> : <User />}
    </div>

  </>;
}

export default App;
