
import React from 'react'
import Card from '../UI/Card.js'
import classes from '../Users/AddUser.module.css'
import Button from '../UI/Button.js'

export const AddUsers = (props) => {

    const addUserHandler = (event) =>{
        event.preventDefault();
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
             <label htmlFor="username">Username</label>
             <input id="username" type = "text"/>
             <label htmlFor="">age (Years)</label>
             <input id="username" type="number"></input>
             <Button type = "submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUsers;