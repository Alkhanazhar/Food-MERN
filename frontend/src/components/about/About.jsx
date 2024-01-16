import React from 'react'
import classes from "./About.module.css"

const About = () => {
  return (<>
      <header className={classes.header}>
        <h1>About Us</h1>
        <p>Discover the world of flavors with Food App!</p>
    </header>
    <section className={classes.section}>
        <h2>Our Story</h2>
        <p>
            Welcome to Food App! We are on a mission to make your culinary experience delightful
            and convenient. Our journey started with a passion for bringing delicious recipes and
            cooking inspiration to your fingertips.
        </p>
        <h2>Our Mission</h2>
        <p>
            At Food App, we aim to provide good food.
        </p>
    </section>
  </>

  )
}

export default About
