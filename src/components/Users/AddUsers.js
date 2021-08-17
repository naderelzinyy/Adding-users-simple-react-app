
import React from 'react'
import Card from '../UI/Card.js'
import classes from '../Users/AddUser.module.css'
import Button from '../UI/Button.js'
import { useState } from 'react'

export const AddUsers = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');


    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }
    const addUserHandler = (event) =>{
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || +enteredAge <= 0){
            console.log("invalid Data !");
            return;
        }

        //console.log(enteredAge,enteredUsername);
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredAge('');
        setEnteredUsername('');

    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
             <label htmlFor="username">Username</label>
             <input
                id="username"
                type = "text"
                value = {enteredUsername}
                onChange={usernameChangeHandler}/>
             <label htmlFor="">age (Years)</label>
             <input 
                id="username"
                type="number" 
                value = {enteredAge}
                onChange={ageChangeHandler}></input>
             <Button type = "submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUsers;