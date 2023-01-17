import {useState}  from 'react'
import './App.css';
import Tabs from './components/Tabs';
import TabContent from './components/TabContent';

function App() {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      title: 'Tab 1',
      content: 'Conten from Tab 1',
      active: true
    },
    {
      id: 2,
      title: 'Tab 2',
      content: 'Conten from Tab 2',
      active: false
    },
    {
      id: 3,
      title: 'Tab 3',
      content: 'Conten from Tab 3',
      active: false
    },

  ]);

  // const addBox = (box) => {
  //   const newBoxes = [...boxes];
  //   newBoxes.push(box);
  //   setBoxes(newBoxes);
  // }
  const activeTab = tabs.find(item => item.active === true)

  return (
    <div className="App mt-5">
      <Tabs tabs={tabs} setTabs={setTabs} />
      <TabContent tab={activeTab} />
    </div>
  );
}

export default App;
