import React from 'react';
import { images } from 'theme';
import Newbutton from 'components/Newbutton';
import Card from 'components/Card';
import Footer from 'components/Footer'
import Navspecial from 'components/Navspecial'
import styles from './home.module.scss';

const Default = () => (
  <html lang="en">
    <Navspecial/>
  <div className={styles.defaultPage}>
    <div className={styles.content}>
      <div className={styles.bannerImageContainer} style={{ backgroundImage: `url(${images.bannerTwo})` }}>
        <div className={styles.bannerText}>
          <h1 className = {styles.shadow}>ALPHA KAPPA PSI</h1>
          <h4>We are the premier Business Fraternity  
            <div className={styles.animatedText}>
              <div className={styles.first}><div>at Northeastern</div></div>
              <div className={styles.second}><div>at Columbia</div></div>
              <div className={styles.second}><div>at USC</div></div>
              <div className={styles.third}><div>Everywhere</div></div>
            </div>
          </h4>
          <div className={styles.line}>&nbsp;</div>
    
          <div className={styles.buttonPosition}>
          <Newbutton text="RUSH 2024" to="/rush" className="shrink-border" />
          <Newbutton text="Chi Sigma" to="/" className="shrink-border" />
          </div>
          <div/>

          
        </div>
      </div>
    </div>
    <div className={styles.contentContainer}>

  <div className={styles.circleLogo}>
    <img src={images.circleLogo} alt='logo'/>
  </div>
  
  <div className={styles.contentText}>
    <div className={styles.firstSpacer}>
    <img src={images.sapphireGold} alt='gemstone'/>
    <img src={images.sapphireGold} alt='gemstone'/>
    <img src={images.sapphireGold} alt='gemstone'/>
    <img src={images.sapphireGold} alt='gemstone'/>
    <img className = {styles.invisible} src={images.sapphireGold} alt='gemstone'/>
    <img className = {styles.invisible} src={images.sapphireGold} alt='gemstone'/>
    <img src={images.sapphireGold} alt='gemstone'/>
    <img src={images.sapphireGold} alt='gemstone'/>
    <img src={images.sapphireGold} alt='gemstone'/>
    <img src={images.sapphireGold} alt='gemstone'/>

    </div>
    <div className = {styles.brotherhoodText}><h1>OUR BROTHERS AND SISTERS</h1></div>
    <div className = {styles.brotherhoodTextSub}><h1>DEFINE US</h1></div>

    
  

    <div className={styles.divider}>&nbsp;</div>
    <div className = {styles.gridWrapper} style={{ backgroundImage: `url(${images.goldStar})` }}>
    <Card
      name="Abhik Rhay"
      position="1st Year - Khoury"
      imageUrl={images.abhik}
      linkedinUrl="https://www.linkedin.com/in/tahmidw/"
    />
        <Card
      name="Jonathan Garrett"
      position="1st Year - DMSB"
      imageUrl={images.jonathan}
      linkedinUrl="https://www.linkedin.com/in/jonathan-garrett-/"
    />
        <Card
      name="Lois Hong
      "
      position="2nd Year - DMSB"
      imageUrl={images.lois}
      linkedinUrl="https://www.linkedin.com/in/lois-hong/"
    />
        <Card
      name="Jackson Molin"
      position="1st Year - DMSB"
      imageUrl={images.jackson}
      linkedinUrl="https://www.linkedin.com/in/jacksonmolin/"
    />
            <Card
      name="Emily Chung"
      position="2nd Year - DMSB"
      imageUrl={images.emily}
      linkedinUrl="https://www.linkedin.com/in/emilychung04/"
    />
            <Card
      name="Elizabeth Fikru"
      position="2nd Year - DMSB"
      imageUrl={images.liz}
      linkedinUrl="https://www.linkedin.com/in/elizabeth-fikru/"
    />
            <Card
      name="Lisa Park"
      position="2nd Year - DMSB"
      imageUrl={images.lisa}
      linkedinUrl="https://www.linkedin.com/in/lisapark417/"
    />
            <Card
      name="Makena Tsuneishi"
      position="2nd Year - DMSB"
      imageUrl={images.makena}
      linkedinUrl="https://www.linkedin.com/in/makena-tsuneishi/"
    />
    </div>
    
  </div>
</div>
<div className={styles.contentContainer}>
<div className={styles.contentText}>
<div className={styles.spacer}style={{ backgroundImage: `url(${images.coinBanner})` }}>-</div>

</div>
<div className={styles.buttonPosition}>
          <Newbutton text="Professional" to="/default" className="shrink-border" />
          <Newbutton text="Brotherhood" to="/" className="shrink-border" />
          </div>
</div>
<Footer/>

  </div>
  </html>
);


export default Default;

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

