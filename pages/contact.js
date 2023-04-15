import React, { useState } from 'react'

const contact = () => {
  const [credentials, setCredentials] = useState({
    name: "", email: "", phone: "", desc: ""
  })

  const handlesubmit = (e) => {
    e.preventDefault();
    async function postJSON(data) {
      try {
        const response = await fetch("http://localhost:3000/api/postcontact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();
        alert("Form is submitted successfully")
      } catch (error) {
        alert("Form is not submitted successfully")
        console.log("Internal server error");
      }
    }

    const data = { name: credentials.name, email: credentials.email, phone: credentials.phone, desc: credentials.desc };
    postJSON(data);


    setTimeout(() => {
      setCredentials({
        name: "", email: "", phone: "", desc: ""
      })
    }, 1000);

  }

  const handlechange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <div className='container my-3'>
        <h1 className='text-center my-3'>Contact Us</h1>
        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name :</label>
            <input required type="text" className="form-control" id="name" name='name' onChange={handlechange} value={credentials.name} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address :</label>
            <input required type="email" className="form-control" id="email" name='email' onChange={handlechange} value={credentials.email} />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone :</label>
            <input required type="text" className="form-control" id="phone" name='phone' onChange={handlechange} value={credentials.phone} />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">Description :</label>
            <div className="form-floating">
              <textarea required className="form-control" placeholder="Leave a comment here" id="desc" name='desc' onChange={handlechange} value={credentials.desc} />
              <label htmlFor="floatingTextarea">Description</label>
            </div>
          </div>
          <button type="submit" className="btn btn-dark">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default contact
