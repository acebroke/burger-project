import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
            <img className='home__image'
             src='https://res.cloudinary.com/teammatesweb/image/upload/v1610284601/amazon__banner_pgri4f.jpg' alt=''/>
             <div className='home__row'>
                 <Product title='iPhone 12 et iPhone 12 mini. Vitesse 5G. Puce A14 Bionic. Écran Super Retina XDR. Ceramic Shield. Et mode Nuit sur chaque appareil photo.' price={838} img='https://res.cloudinary.com/teammatesweb/image/upload/v1610285719/iphone_12_nruruu.jpg' rating={5}/>
                 <Product title='Casque Headphones 700 Bose à réduction de bruit' price={319.95} img='https://res.cloudinary.com/teammatesweb/image/upload/v1610287565/bose_casque_h1ezap.jpg' rating={4}/>
             </div>
                <div className='home__row'>
                <Product title='DYSON : Aspirateur balai V11 parquet extra' price={649.99} img='https://res.cloudinary.com/teammatesweb/image/upload/v1610287974/dyson_iddc3h.jpg' rating={3}/>
                <Product title='Le PC de gamer Millenium MM1 Mini répondra parfaitement aux besoins ...' price={1699.99} img='https://res.cloudinary.com/teammatesweb/image/upload/v1610288145/pcgamer_r1ez9k.jpg' rating={4}/>
                <Product title='Nouveau Apple iPad Pro (12,9 pouces, Wi-Fi + Cellular, 128 Go)' price={1272.99} img='https://res.cloudinary.com/teammatesweb/image/upload/v1610288252/tablette_koduzk.jpg' rating={5}/>

             </div>
             <div className='home__row'>
                <Product title='TV LED Samsung UE43TU7125 2020. Plus de détails et plus de couleurs en 4K UHD. (150' price={899.99} img='https://res.cloudinary.com/teammatesweb/image/upload/v1610287858/tv_gnargd.jpg' rating={5}/>

             </div>
            </div>
        </div>
    )
}

export default Home
