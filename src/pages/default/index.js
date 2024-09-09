import React from 'react'
import { images } from 'theme'
import Newbutton from 'components/Newbutton'
import Footer from 'components/Footer'
import Navspecial from 'components/Navspecial'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'

import styles from './home.module.scss'

const Default = () => (
  <html lang="en">
    <Navspecial />
    <div className={styles.defaultPage}>
      <div className={styles.content}>
        <div
          className={styles.bannerImageContainer}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), #0D2F56), url(${images.bannerTwo})`,
          }}
        >
          <div className={styles.bannerText}>
            <h1 className={styles.shadow}>ALPHA KAPPA PSI</h1>
            <h4>
              We are the premier Business Fraternity
              <div className={styles.animatedText}>
                <div className={styles.first}>
                  <div>at Northeastern</div>
                </div>
                <div className={styles.second}>
                  <div>Everywhere</div>
                </div>
                <div className={styles.second}>
                  <div>at Northeastern</div>
                </div>
                <div className={styles.last}>
                  <div>Everywhere</div>
                </div>
              </div>
            </h4>
            <div className={styles.line}>&nbsp;</div>

            <div className={styles.buttonPosition}>
              <Newbutton
                text="RUSH 2024"
                to="/rush"
                className="shrink-border"
              />
              <Newbutton text="Chi Sigma" to="/" className="shrink-border" />
            </div>
            <div />
          </div>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.circleLogo}>
          <img src={images.circleLogo} alt="logo" />
        </div>

        <div className={styles.contentText}>
          <div className={styles.firstSpacer}>
            {/* <img src={images.sapphireGold} alt='gemstone'/>
    <img src={images.sapphireGold} alt='gemstone'/>
    <img src={images.sapphireGold} alt='gemstone'/>
    <img src={images.sapphireGold} alt='gemstone'/>
    <img className = {styles.invisible} src={images.sapphireGold} alt='gemstone'/>
    <img className = {styles.invisible} src={images.sapphireGold} alt='gemstone'/>
    <img src={images.sapphireGold} alt='gemstone'/>
    <img src={images.sapphireGold} alt='gemstone'/>
    <img src={images.sapphireGold} alt='gemstone'/>
    <img src={images.sapphireGold} alt='gemstone'/> */}
          </div>
          <div style={{ padding: '30vh 5vw 30vh 6vh' }}>
            <h1 style={{ lineHeight: '6rem', fontSize: '6rem' }}>
              WE ARE THE PREMIER DEVELOPER OF PRINCIPLED BUSINESS LEADERS
            </h1>
            <p style={{ marginTop: '2rem', fontSize: '1.3rem', width: '70%' }}>
              Since 2014, The Chi Sigma Chapter of Alpha Kappa Psi has been
              guiding the leaders of tomorrow. Our brothers, from a wide array
              of diciplines, come together to advance their respective fields.
            </p>
          </div>

          <div
            style={{
              textAlign: 'center',
              backgroundColor: '#0D2F56',
              padding: '0% 0%',
            }}
          >
            <ParallaxBanner
              style={{
                aspectRatio: '2.25/1',
                boxShadow: 'inset 10px 10px 10px rgba(0,0,0,1)',
              }}
            >
              <ParallaxBannerLayer speed={40}>
                <div
                  alt="rah"
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundSize: 'cover',
                    boxShadow: 'inset 10px 10px 10px rgba(0,0,0,1)',
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), #0D2F56), url(${images.rah})`,
                  }}
                />
              </ParallaxBannerLayer>

              <ParallaxBannerLayer speed={0.2} style={{ padding: '5% 0%' }}>
                <h3 style={{ color: '#fff' }}> Values </h3>
                <div
                  style={{
                    textAlign: 'center',
                    flexDirection: 'row',
                    gap: 50,
                    justifyContent: 'space-around',
                    display: 'flex',
                    flexWrap: 'wrap',
                    margin: '2% 10%',
                  }}
                >
                  <div
                    style={{
                      width: '27%',
                      height: '100%',
                      backgroundColor: 'white',
                      borderRadius: '5px',
                      padding: '2rem',
                      boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                    }}
                  >
                    <h4> Brotherhood </h4>
                    <p>
                      Brotherhood is the core that binds all of our brothers
                      together by supporting each other in everything we do.
                    </p>
                  </div>
                  <div
                    style={{
                      width: '27%',
                      height: '100%',
                      backgroundColor: 'white',
                      borderRadius: '5px',
                      padding: '2rem',
                      boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                    }}
                  >
                    <h4> Unity </h4>
                    <p>
                      Unity is the foundation of our conduct. We hope to conenct
                      with our greater community to establish a stronger
                      community.
                    </p>
                  </div>
                  <div
                    style={{
                      width: '27%',
                      height: '100%',
                      backgroundColor: 'white',
                      borderRadius: '5px',
                      padding: '2rem',
                      boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                    }}
                  >
                    <h4> Integrity </h4>
                    <p>
                      Integrity is the foundation of our conduct: we are honest,
                      ethical, and trustworthy.
                    </p>
                  </div>
                  <div
                    style={{
                      width: '27%',
                      height: '100%',
                      backgroundColor: 'white',
                      borderRadius: '5px',
                      padding: '2rem',
                      boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                    }}
                  >
                    <h4> Service </h4>
                    <p>
                      Through Service, we hope to give back to our communitiies
                      and make our surroundings a better place.
                    </p>
                  </div>
                  <div
                    style={{
                      width: '27%',
                      height: '100%',
                      backgroundColor: 'white',
                      borderRadius: '5px',
                      padding: '2rem',
                      boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                    }}
                  >
                    <h4> Knowledge </h4>
                    <p>
                      Our brothers are all experts in their fields. We hope to
                      give them the opportunity to share their knowledge and
                      experiences with the world.
                    </p>
                  </div>
                </div>
              </ParallaxBannerLayer>
            </ParallaxBanner>
          </div>

          <div
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h3 style={{ textAlign: 'center', padding: '5% 0% 3% 0%' }}>
              Find Our Brothers at
            </h3>
            <img
              src={images.companies}
              alt="companies"
              style={{ width: '50%', justifySelf: 'center', height: 'auto' }}
            />
            <p style={{ marginTop: '20px' }}>... and so many more</p>
          </div>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contentText}>
          <div
            className={styles.spacer}
            style={{ backgroundImage: `url(${images.coinBanner})` }}
          >
            -
          </div>
        </div>
        <div className={styles.buttonPosition}>
          {/* <Newbutton text="Professional" to="/default" className="shrink-border" />
          <Newbutton text="Brotherhood" to="/" className="shrink-border" /> */}
        </div>
      </div>
      <Footer />
    </div>
  </html>
)

export default Default

/* 
import Logobar from 'components/Logobar'

<div className={styles.logoContainer}><Logobar cName = 'logoItemb' imageUrls = {imageUrlsCoop}/></div>
const imageUrlsCoop = [
  images.coop1,
  images.coop2,
  images.coop3,
  images.coop4,
  images.coop5,
  images.coop6,
  images.coop7,
  images.coop8,
  images.coop9,
  images.coop10,
  images.coop11,
  images.coop12,
  images.coop13,
  images.coop14,
  images.coop15,
  images.coop16,
  images.coop17,
  images.coop18,
];
*/
