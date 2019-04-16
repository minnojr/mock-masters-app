import React, { PureComponent, Fragment } from 'react';
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from 'react-router-dom'
import { NavLink } from "react-router-dom";


import AdminUserRow from './AdminUserRow';
import SignUp from '../MockDraftAdmin/SignUp';

class UserAdmin extends PureComponent {

    render() {

        const { users, user } = this.props;

        const listItems = [];
        for (let [key, value] of Object.entries(users)){
            if(users[key]) {
                listItems.push(<AdminUserRow key={key} userId={key} user={value}/>)
            }
        }


        return (
            <Fragment>
                { !user.admin
                    ? <Redirect to='/'/>
                    :
                    <div className="d-flex w-50 m-5 flex-column">
                        <h2>Users Admin</h2>
                        <br/>
                        <div className="card p-3">
                            <center><NavLink to="/mm-only/admin/mockdrafts"><h4>Admin Mock Draft Console</h4></NavLink>
                            </center>
                        </div>
                        <br/>
                        <br/>
                        <SignUp/>
                        <br/>
                        <br/>

                        <div className="card">
                            <h4 className="p-3">Users</h4>
                            <div>
                                <table className="p-3 table">
                                    <thead>
                                    <tr className="p-2 table-striped">
                                        <th className="p-2">User Email</th>
                                        <th className="p-2">Mock Name</th>
                                        <th className="p-2">Beta Code</th>
                                        <th className="p-2">User ID</th>
                                        <th className="p-2">Admin</th>
                                        <th className="p-2">Mock ID</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {listItems}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                }
            </Fragment>
        )
    }
}

function mapStateToProps({ firestore, firebase }) {

    const empty = [];
    const users = firestore.data.users;
    const emptyObj =  {};

    return {
        user: firebase.profile ? firebase.profile : emptyObj,
        users: users ? users : empty
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'users' }
    ])
)(UserAdmin);