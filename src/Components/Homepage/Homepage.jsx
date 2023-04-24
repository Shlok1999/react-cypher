import {React, useState} from 'react';
import './Homepage.css'
import Sidebar from './Sidebar'
import StudentTable from './StudentTable'
function Homepage() {
  const [activeTab, setActiveTab] = useState('');

  return (
    <div className='main'>
      <div className='mainDiv'>
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab}/>
        <div className="table-section">
        <StudentTable activeTab={activeTab} />
        </div>
        
      </div>
    </div>
  )
}

export default Homepage