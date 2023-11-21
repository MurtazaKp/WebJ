import React, { useState } from 'react';

const Form = () => {
    const [details, setDetails] = useState({
        name: '',
        contact: '',
        email: '',
    });
    const [number , setNumber]= useState(0)

    const handleChange = (e:any) => {
        const { id, value } = e.target;
        setDetails((prevDetails) => ({
            ...prevDetails,
            [id]: value,
        }));
    };


    const handleSubmit = () => {
        console.log('Form submitted:', details);
        setNumber(number+1)
    
        const token = 'skinKa1gB0gmP1QOUGi5k5hCWAvWZSR7I6d9C67OoGW7H3kxmrWy2j62i1BQ6UtZL1ZYVUx9Mzx7r309STAzmHY3CsaeI3ehhDWUzlJlzucZ6yX86VuaQPQtw9KtnBP6PEJvC68mDi3Cc7QQiGoQ1Q847iIpnLQRTqpDlPW0F2BrOnLIB6HR'
        const mutations = [{
            create: {
              _id: number.toString,
              _type: 'form',
            name:details.name,
            email:details.email,
            contact:details.contact
            }
          }]
          fetch(`https://u4gtpcrb.api.sanity.io/v2021-06-07/data/mutate/production`, {
  method: 'post',
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${token}`
  },
  body: JSON.stringify({mutations})
})
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error))
    };

    return (
        <div>
            <label htmlFor="name">Name</label>
            <br />
            <input id="name" type="text" value={details.name} onChange={handleChange} />
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={details.email} onChange={handleChange} />
            <br />
            <br />
            <label htmlFor="contact">Number</label>
            <input id="contact" type="number" value={details.contact} onChange={handleChange} />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Form;
