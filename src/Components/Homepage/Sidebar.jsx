
function Sidebar({ activeTab, setActiveTab }) {
    const tabs = ['All', 'sports', 'Library', 'Indoor']
    const handleClick = (tab) => {
        setActiveTab(tab);
    }
    return (
        <div className="tab-section">
            <button><a href="/add-data" style={{color: 'black'}}> Add Data</a></button>
            {
                tabs.map((tab, index) => {
                    return (
                        <>
                        <button key={index}
                            onClick={() => handleClick(tab)}
                            className={`sidebar-btn ${activeTab === tab ? 'active' : ''}`}>
                            {tab}
                        </button>
                        
                        </>
                    )
                })
            }
        </div>
    )
}

export default Sidebar