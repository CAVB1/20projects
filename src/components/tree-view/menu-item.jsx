import { useState } from "react";
import MenuList from "./menu-list";
import {FaMinus, FaPlus} from 'react-icons/fa';


export default function MenuItem({ item }) {
    const [displayCurrentChildren, setDisplayCurrentChidren] = useState({});
    function handleToggleChildren(getCurrentLabel) {
        setDisplayCurrentChidren({
            ...displayCurrentChildren,
            [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],

        });
    }

    console.log(displayCurrentChildren);



    return <li>
        <div className="menu-item">
            <p>{item.label}</p>
            {
                item && item.children && item.children.length ? <span onClick={() => handleToggleChildren(item.label)}>
                    {
                        displayCurrentChildren[item.label] ? <FaMinus color="#fff"  size={25} /> :<FaPlus color="#fff"  size={25} />
                    }
                </span> : null
            }
        </div>
        {
            item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ?
                <MenuList list={item.children} />
                : null
        }
    </li>
}