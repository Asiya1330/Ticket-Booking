import React from 'react'
import Layout from '../layout/Layout'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const ThankyouPage = () => {
    const navigate = useNavigate();

  return (
    <Layout>
        <HeroSection  background="bg-ticket-page h-screen">
            <div className='container mx-auto pt-12 flex flex-col items-center gap-3'>
                <h2 className='text-4xl font-bold text-center text-gray-200'>Thank you! Your seats are succesfully booked.</h2>
                <Button text={"Home Page"} onclick={()=> {navigate("/league")}}/>
            </div>
        </HeroSection>
    </Layout>
  )
}

export default ThankyouPage
