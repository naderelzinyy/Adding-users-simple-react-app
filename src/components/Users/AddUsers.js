
import React from 'react'
import Card from '../UI/Card.js'
import classes from '../Users/AddUser.module.css'
import Button from '../UI/Button.js'
import { useState } from 'react'
import ErrorModal from '../UI/ErrorModal.js'

export const AddUsers = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [isError,setIsError] = useState(false);

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }
    const addUserHandler = (event) =>{
        event.preventDefault();
        if(enteredUsername.trim().length === 0 ){
            setIsError({
                title: "Error!",
                message: "You have to enter a username. "
            })
            return;
        }
        if(+enteredAge <= 15){
            setIsError({
                title: "Error!",
                message: "Age must be above 15."
            })
            return;
        }

        //console.log(enteredAge,enteredUsername);
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredAge('');
        setEnteredUsername('');

    }

    const closeModal = () => {
        setIsError(false);
    }

    return (
        <div>
            {isError &&<ErrorModal title = {isError.title} message = {isError.message} onCancel={closeModal}></ErrorModal>}
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
        </div>
    )
}

export default AddUsers;