import React from 'react'
import styles from "./contact.module.css"

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>Contact Me</h1>
        <p>Let's get in touch!</p>
      </div>

      <form className={styles.form}>
        <input type="email" name='email' placeholder='Email'/>
        <input type="phone" name='phone' placeholder='Phone'/>
        <input type="text" name='address' placeholder='Address'/>


        <textarea name="text" id="text" placeholder='Enter Message......'></textarea>
        <button className={styles.btn}>Send</button>
      </form>
    </div>
  )
}

export default Contact