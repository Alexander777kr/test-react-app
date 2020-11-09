import React from 'react';
import './App.css';
import HeaderContainer from "./components/header/HeaderContainer";
import Navbar from "./components/navbar/Navbar";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import {Route} from "react-router-dom"
import DialogsContainer from './components/messages/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import Login from './components/login/Login';


const App = (props) => {

    return (

        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar />
            <div className='content'>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/users' render={() => <UsersContainer />}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/login' render={() => <Login /> }/>
            </div>
        </div>

    );
}

export default App;
