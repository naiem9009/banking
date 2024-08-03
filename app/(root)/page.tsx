import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import React from 'react'

const Home = () => {
  const loggedIn = {
    firstName : "Naim",
    lastName: "Hossen",
    email: "email@gmail.com"
  }
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
        </header>

        RECENT TRANSACTION
      </div>

      <RightSidebar 
        user={loggedIn}
        banks={[{}, {}]}
      />

    </section>
  )
}

export default Home