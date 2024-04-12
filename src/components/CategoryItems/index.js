import './index.css'

const CategoryItems = props => {
    const {data, clickTabItem, isActive} = props
    const {tabId, displayText} = data

    const onClickTabItem = () => {
        clickTabItem(tabId)
    }

    const activeTabId1 = isActive ? 'active-tab' : ''

    return (
        <li className="category-list-item">
            <button type="button" onClick={onClickTabItem} className={`category-button ${activeTabId1}`}>
                {displayText}
            </button>
        </li>
    )
}

export default CategoryItems