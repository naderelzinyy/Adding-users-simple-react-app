
import React from 'react'
import classes from '../Users/UsersList.module.css'
import Card from '../UI/Card'

const UsersList = (props) => {
    return (
        <Card className={classes.users} >
          <ul>
              { props.users.map((user) => (
                  <li>
                      {user.name} {user.age} Years old
                  </li>
              ))}
          </ul>
        </Card>
    )
}

export default UsersList;
