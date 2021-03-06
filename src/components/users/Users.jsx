import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { usersAPI } from '../../api/api';

const Users = (props) => {
   
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }

        return (
            
            <div className = {classes.usersList}>

        {pages.map(p=>{ return <span key = {p.id} 
        onClick = {(e)=>{props.onPageChanged(p);}}> {p}</span>})}
               
                {
                    props.users.map(u=><div key = {u.id}>
                        <div>
                            <div>
                                <NavLink to = {'/profile/' + u.id }>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto } alt=""/>
                                    </NavLink>
                            </div>
                            <div>
                                {u.followed 
                                ? <button className = "greenBtn" disabled = {props.followingInProgress.some(id => id===u.id)} onClick = 
                                {() => {props.unfollow(u.id);}}>Unfollow</button>
                                :<button className = "greenBtn" disabled = {props.followingInProgress.some(id => id===u.id)} onClick = 
                                {() => {props.follow(u.id);}}>Follow</button>} 
                            </div>
                        </div>
                        <div>
                            <div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                            </div>
                            <div>
                    <div>{"u.location.city"}</div>
                    <div>{"u.location.country"}</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        )
    }

export default Users;