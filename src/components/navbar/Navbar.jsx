import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Menu = (props) => {
    return (
        <div className={classes.menu}>
            <div className='item'>
                <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className='item'>
                <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className='item'>
                <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
            </div>
            <div className='item'>
                <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className='item'>
                <NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink>
            </div>
        </div>
    )
}
const Sidebar = (props) => {
    return (
        <div className={classes.sidebar}>
                <p><img src = {props.img}/></p>
                <p>{props.name}</p>
        </div>
    )
}

const Navbar = () => {

    let friends = [
        {id:1, name:"Гарик", img: "https://cache3.youla.io/files/images/780_780/5b/fb/5bfba5e45eaa9e41107f0045.jpg" },
        {id:2, name:"Белка", img: "https://sun9-35.userapi.com/c849220/v849220200/14151b/qJ2hcpXCH4k.jpg?ava=1" },
        {id:3, name:"Василий", img: "https://pona1.ru/storage/items/48857ff41b25099018d6b1c2dbcbf37a_200.jpg" }
    ];
    let sidebarFriends = friends.map(f => <Sidebar name = {f.name} img ={f.img} />)
    return (
        <div className={classes.navbar}>
            <Menu />
            {sidebarFriends}
            
        </div>
    )

}

export default Navbar;