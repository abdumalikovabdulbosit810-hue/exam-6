import React from 'react'
import About from '../components/blog/About'
import Ourstory from '../components/ourstory/Ourstory'
import Logus from '../components/logus/Logus'
import Ourexpetise from '../components/ourexpertise/Ourexpertise'
import Ourvision from '../components/ourvision/Ourvision'
import Subscribe from '../components/subscribe/Subscribe'
import Pgoto from '../components/photo/Photo'

const Company = () => {
  return (
    <div>
        <About />
        <Ourstory />
        <Logus />
        <Ourexpetise/>
        <Ourvision />
        <Subscribe />
        <Pgoto />
    </div>
  )
}

export default Company