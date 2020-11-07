import React from 'react';
import classes from './UsersContainer.module.css';
import { connect } from 'react-redux';
import Users from './Users';
import {follow, 
    unfollow, 
    setCurrentPage, 
    toggleFollowingProgress,
    getUsers} from '../redux/usersReducer';
import Loader from '../common/loader/Loader';


class UsersContainer extends React.Component{
    
    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
         
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }


render () {

    return  <div className = {classes.cont}>
    {this.props.isFetching ? <Loader /> : null }
    <Users totalUsersCount = {this.props.totalUsersCount}
                   pageSize = {this.props.pageSize}
                   currentPage = {this.props.currentPage}
                   onPageChanged = {this.onPageChanged}
                   users = {this.props.users}
                   unfollow = {this.props.unfollow}
                   follow = {this.props.follow}
                   followingInProgress = {this.props.followingInProgress}
                   />
                   </div>
}

}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }

};


export default connect (mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers}) (UsersContainer);