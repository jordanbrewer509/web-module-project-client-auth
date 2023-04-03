import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddFriend = () => {
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')
        axios.post('http://localhost:9000/api/friends', form, {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                navigate('/friends')
                console.log('hello')
            })
            .catch(err => {
                console.log(err)
            })
    }

    console.log(form)

    return (<div>
        <h2>Add Friends</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">name:</label>
                <input onChange={handleChange} name="name" />
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input onChange={handleChange} name="age"/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input onChange={handleChange} name="email"/>
            </div>
            <button>Submit</button>
        </form>
        </div>)
}

export default AddFriend