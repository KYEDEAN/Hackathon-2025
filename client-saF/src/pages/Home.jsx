import React from 'react'
import ImageWithText from './Image'
import NewsletterSubscription from './NewsLetter'
import TestimonialSlider from './Home_test'
import HackathonPage from './Description'


const Home = () => {
  return (
    <div>
        <ImageWithText/>
        <TestimonialSlider />
        <NewsletterSubscription/>
        <HackathonPage/>
    </div>
  )
}

export default Home