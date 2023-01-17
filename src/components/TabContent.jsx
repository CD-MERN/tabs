

const TabContent = ({tab}) => {
    return (
        <div className="tab-content">
            <div className="tab-pane fade show active">
                {tab.content}
            </div>
        </div>
    );
}
export default TabContent;