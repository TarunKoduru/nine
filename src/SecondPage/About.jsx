import React from 'react';
import Footer from '../Header/Footer';
import { Images } from '../Pics/Images';


const About = () => {
  return (
    <div>
      <div className='abfull'>
        <div className='headab'>
          <h1 style={{ fontWeight: '300' }}>ABOUT US</h1>
        </div>
        <div className='headba'>
          <div className='suba'>
            <div className='subabc'>
              <div className='halfabc'>
                <h1 style={{ textDecoration: 'underline', fontWeight: '300' }}> OUR VALUES</h1>
              </div><br />
              <div className='pavabe' >
                <div className='pavabc'>
                  <div>
                    <img src={Images.second} alt='welcome-back' className="pavimge" loading='lazy' />
                  </div>
                  <div className='pavtxt1'>
                    <h1>Community & Trust</h1>
                    <div className='pavtxt2'>
                      <h1>"We welcome every customer as part of our family,</h1>
                      <h1>committed to building trust through quality service</h1>
                      <h1>and lasting relationships."</h1>
                    </div>
                  </div>
                </div><br />
                <div className='pavabc'>
                  <div>
                    <img src={Images.third} alt='biker-camping-70' className="pavimge" loading='lazy' />
                  </div>
                  <div className='pavtxt1'>
                    <h1>Adventure & Freedom</h1>
                    <div className='pavtxt2'>
                      <h1>"We believe in the open road and the spirit of adventure,</h1>
                      <h1> providing vehicles that offer both freedom </h1>
                      <h1>and reliability."</h1>
                    </div>
                  </div>
                </div><br />
                <div className='pavabc'>
                  <div>
                    <img src={Images.forth} alt='couple-motorcylist-telescope-aurora-sky-5s' className="pavimge" loading='lazy' />
                  </div>
                  <div className='pavtxt1'>
                    <h1>Exploration & Innovation</h1>
                    <div className='pavtxt2'>
                      <h1>"We embrace curiosity and innovation,</h1>
                      <h1> always pushing boundaries to explore new horizons</h1>
                      <h1> and enhance your driving experience."</h1>
                    </div>
                  </div>
                </div><br />
              </div>
            </div><br /><br />
            <div className='subab'>
              <div className='halfab'>
                <h1 style={{ textDecoration: 'underline', fontWeight: '300' }}>VISION</h1>
              </div>
              <div className='pavab'>
                <div>
                  <img src={Images.first} alt='chevy-corvette-ww' className="pavimg" loading='lazy' />
                </div>
                <div className='pavtxt'>
                  <h1>Create an intuitive, user-friendly interface that makes browsing and purchasing easy.</h1>
                  <h1>Provide comprehensive vehicle information, including specifications, condition, and pricing, to build trust.</h1>
                  <h1>Build a community of car enthusiasts and buyers through forums, reviews, and shared experiences.</h1>
                  <h1>This vision sets the stage for a customer-centric platform that not only simplifies the car-buying process but also enhances the overall experience, fostering loyalty and engagement.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='abfooter'>
        <Footer />
      </div>
    </div >
  )
}

export default About;