import React, {useEffect} from 'react';
import s from "./Users.module.css";
import {User} from "./User/User";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redax/store";
import {followAC, setUsersAC, unfollowAC, UsersDataType, UserType} from "../../Redax/usersReducer";
import axios from "axios";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    users: {
        items: Array<UserType>
        totalCount: number
    }
    pageSize: number
}

type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

class UsersClass extends React.Component<PropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
            this.props.setUsers(res.data.items);
        });
    }

    followClickHandler = (userID: number) => this.props.follow(userID)

    unFollowClickHandler = (userID: number) => this.props.unfollow(userID)


    render() {
        let pageCount = Math.ceil(this.props.users.totalCount / this.props.pageSize);

        type PagesType = Array<number>
        let pages: PagesType = []

        console.log(pages)

        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        return (
            <div className={s.mainContainer}>
                {this.props.users.items.map(u => <User name={u.name}
                                                       id={u.id}
                                                       followed={u.followed}
                                                       followClickHandler={this.followClickHandler}
                                                       unFollowClickHandler={this.unFollowClickHandler}
                    />
                )}
                <div>
                    {pages.map(p => <span>{p}</span>)}
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: state.UsersReducer,
        pageSize: state.UsersReducer.pageSize,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: userID => {
            dispatch(followAC(userID));
        },
        unfollow: userID => {
            dispatch(unfollowAC(userID));
        },
        setUsers: users => {
            dispatch(setUsersAC(users));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersClass);
