import Tabs from "./tabs";

function RandomComponent(){

    return <div>Some random Content</div>
}

export default function TabTest() {

    const tabs = [
        {
            label: 'Tab 1',
            content: <div>This is conten for Tab 1</div>
        },
        {
            label: 'Tab 2',
            content: <div>This is conten for Tab 2</div>
        },
        {
            label: 'Tab 3',
            content : RandomComponent()
        }
    ]

    function handleChange(currentTabIndex){
        console.log(currentTabIndex);
    }

    return <Tabs tabsContent={ tabs } onChange={handleChange} />
}