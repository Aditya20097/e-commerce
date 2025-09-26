import React from 'react'
import Tittle from '../components/Tittle'
import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
    <div className='text-2xl text-center pt-8 border-t'>
        <Tittle text1={'ABOUT'} text2={'US'}/>
    </div>

    <div className='my-10  flex flex-col md:flex-row gap-16'>
       <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
       <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>At Klicksy, fashion is more than just clothing – it’s a language of self-expression, confidence, and individuality. We believe that what you wear tells your story before you even speak. That’s why we’ve built a platform that blends timeless style with today’s latest trends, making it easy for you to discover pieces that truly reflect who you are. </p>
                <p>Founded with a passion for creativity and design, Klicksy was born out of the idea that fashion should be accessible, empowering, and fun. From everyday essentials to bold statement outfits, we curate collections that fit every mood, occasion, and personality</p>
                <b className='text-gray-800'>Our Mission</b>
                <p>We aim to become more than just another online fashion store. Klicksy is a community where style meets personality, where fashion lovers can find inspiration, explore new trends, and embrace their individuality. Our vision is to redefine online shopping into an immersive experience that is seamless, inspiring, and uniquely yours.</p>
       </div>

    </div>
    <div className='text-xl py-4'>
      <Tittle text1={'WHY'} text2={'CHOOSE US'}/>
    </div>
    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance</b>
        <p> At Klicksy, we believe shopping online should be as reliable as walking into your favorite store. That’s why our Quality Assurance (QA) process is built into every step of your e-commerce journey — from browsing to checkout to delivery,Also Every piece is carefully crafted and handpicked to ensure comfort, durability, and the perfect fit.</p>
      </div>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convience :</b>
        <p className='text-gray-600'>  At Klicksy we believe fashion should never be complicated — it should be effortless, exciting, and accessible at your fingertips. That’s why we’ve designed every step of your shopping journey with convenience in mind.With smooth navigation, secure checkout, and friendly support, we make shopping with us effortless and enjoyable.</p>
      </div>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service : </b>
        <p className='text-gray-600'>Seamless Browsing: Explore the latest collections, trends, and styles with an easy-to-use interface and smart categories.</p>
        <p className='text-gray-600'>Flexible Payment Options: From secure card payments to wallet and UPI options, we make transactions safe and smooth.</p>
       <p className='text-gray-600'> Fast & Reliable Delivery: Get your orders delivered right to your doorstep with speed you can count on.</p>
       <p className='text-gray-600'>24/7 Support: Our customer care team is always ready to help you, whether it’s tracking an order or answering style-related questions.</p>
      </div>

    </div>
    <NewsletterBox/>
  </div>
  )
}

export default About