
const Tabs = ({tabs, setTabs}) => {
    const changeStatus = (tab, idx) => {
        //deep copy 
        let new_tabs = [...tabs]
        //inactive all tabs
        new_tabs.forEach(item => {
            item.active = false;
        })
        //assign new tab
        new_tabs.splice(idx, 1, {...tab, active: true})
        //update tabs
        setTabs(new_tabs)

        alert(`Go to ${tab.title}`)
        
    }
    return (
        <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
            {tabs.map((tab, idx) => (
                <button
                    key={idx} 
                    className={'nav-link ' + (tab.active ? 'active' : '')}
                    type="button"
                    onClick={ () => changeStatus(tab, idx)}
                >
                    {tab.title}
                </button>
            ))}
        </div>
    );
}
export default Tabs;


