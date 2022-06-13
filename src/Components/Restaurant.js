import Section from "./Section"
import MenuData from "./MenuData"
import {useState} from "react"


const uniqueList = [...new Set(MenuData.map((curElem)=>{
    return curElem.category;
}))]

const Restaurant = () =>{
    const [items,setItems] = useState(MenuData);
    const [menuList,setMenuList] = useState(uniqueList)

    const filterItem = (category) =>{
        const updatedList = MenuData.filter((curElem) =>{
            return curElem.category === category;
        })
        setItems(updatedList);
    }
    const filterItems = () =>{
        setItems(MenuData)
    }
    return (
        <>
           <div className="navbar">
                <div className="navcart">
                    <ul className="list">
                        <li className="items"><button href="" className="link" onClick= {() => filterItem("breakfast")}>Breakfast</button></li>
                        <li className="items"><button href="" className="link" onClick= {() => filterItem("lunch")}>Lunch</button></li>
                        <li className="items"><button href="" className="link" onClick= {() => filterItem("juice")}>Juice</button></li>
                        <li className="items"><button href="" className="link" onClick= {() => filterItem("dinner")}>Dinner</button></li>
                        <li className="items"><button href="" className="link" onClick= {filterItems}>All</button></li>
                    </ul>
                </div>
           </div>
           <Section items={items}/>
        </>
    )
}

export default Restaurant