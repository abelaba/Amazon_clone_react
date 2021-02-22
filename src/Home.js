import React from 'react'

import './Home.css'

import Product from './Product'

function Home(){

    return (

        <div className='home'>

            <div className='home__container'>

                <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'/>

                 <div className='home__row'>

                     <Product 
                              rating={5} 
                              title='NBA Zi/O® Excel Indoor-Outdoor Basketball' 
                              price='25.99' 
                              image='https://www.spalding.com/dw/image/v2/ABAH_PRD/on/demandware.static/-/Sites-masterCatalog_SPALDING/default/dw14c59552/images/hi-res/64497E_SIDE.jpg?sw=338&sh=426&sm=cut&sfrm=jpg'/>
                    
                     <Product 
                              rating={5} 
                              title='NBA Marble Series Black Multi-Color Outdoor Basketball' 
                              price='12.99' 
                              image='https://www.spalding.com/dw/image/v2/ABAH_PRD/on/demandware.static/-/Sites-masterCatalog_SPALDING/default/dwe4a15a29/images/hi-res/71101E_FRONT.jpg?sw=338&sh=426&sm=cut&sfrm=jpg'/>
                     

                 </div>
                 <div className='home__row'>

                    <Product 
                            rating={5} 
                            title='SAMSUNG Galaxy Watch 3 (41mm, GPS, Bluetooth) Smart Watch with Advanced Health Monitoring, Fitness Tracking, and Long Lasting Battery - Mystic Silver (US Version)' 
                            price='299.99' 
                            image='https://m.media-amazon.com/images/I/81Iu41zFPwL._AC_UY327_QL65_.jpg'/>
                    <Product 
                            rating={4}
                            title='Samsung Galaxy S20 FE G780F 128GB Dual Sim GSM Unlocked Android Smart Phone - International Version - Cloud Navy' 
                            price='549' 
                            image='https://m.media-amazon.com/images/I/81AZa03H2oL._AC_UY327_QL65_.jpg'/>
                    <Product 
                            rating={3}
                            title='SAMSUNG 43-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN43TU8000FXZA, 2020 Model) '
                            price='1298.00' 
                            image='https://m.media-amazon.com/images/I/71RiQZ0J2SL._AC_UY327_QL65_.jpg'/>
                     

                 </div>
                 <div className='home__row'>

                    <Product 
                            rating={2}
                            title='Huawei Mate 40 Pro 5G NOH-NX9 256GB 8GB RAM International Version No Google Play - Mystic Silver ' 
                            price='1489.00' 
                            image='https://m.media-amazon.com/images/I/71VoCfC9BVL._AC_UY327_QL65_.jpg'/>
                     

                 </div>



            </div>

        </div>




    )


}


export default Home