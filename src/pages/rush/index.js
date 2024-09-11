import React from 'react'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import styles from './rush.module.scss'
/* import { images } from 'theme';
import Newbutton from 'components/Newbutton';
import Card from 'components/Card'; */
const EventCard = ({
  title,
  description,
  date,
  location,
  dressCode,
  complete,
}) => (
  <div
    style={{
      width: '80%',
      borderRadius: '5px',
      flexDirection: 'column',
      backgroundColor: '#fff',
      boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
      padding: '2rem',
      marginTop: '1%',
      opacity: complete ? '0.5' : '1',
    }}
  >
    <h3 style={{ textAlign: 'center', padding: '1% 0% 0% 0%' }}>{title}</h3>
    <p style={{ marginTop: '0px', textAlign: 'center' }}>{description}</p>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2%' }}>
      <div>
        <p style={{ textDecoration: 'bold' }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/55/55281.png"
            width="24px"
            alt="calendar"
          />{' '}
          {date}
          <img
            src="https://png.pngtree.com/png-vector/20191021/ourmid/pngtree-vector-location-icon-png-image_1834331.jpg"
            width="30px"
            alt="calendar"
          />
          {location}
          <img
            src="https://cdn-icons-png.flaticon.com/512/1251/1251033.png"
            width="24px"
            alt="calendar"
          />
          {dressCode}
        </p>
      </div>
    </div>
  </div>
)
const Default = () => (
  <html lang="en" style={{ backgroundColor: '#fffffc' }}>
    <Navbar />
    <div className={styles.rushPageWrapper} style={{ fontSize: '1.2rem' }}>
      <div className={styles.firstSectionContainer}>
        {' '}
        <div className={styles.ribbonContainer}>
          {' '}
          <div className={styles.content}>
            {' '}
            <h1 className={styles.ribbon}> Presidential Letter </h1>{' '}
            <h2 style={{ marginTop: '1vh' }}> Dear Prospective Rushee, </h2>{' '}
            <div className={styles.ribbonText}>
              <p>
                Welcome to the Chi Sigma Chapter of Alpha Kappa Psi.As you spend
                time getting to know our chapter, I encourage you to be curious,
                ask lots of questions, and truly learn about our brotherhood
                throughout Rush Week.{' '}
              </p>{' '}
              <p>
                Our organization is the oldest and largest professional business
                fraternity in the country.As such, Alpha Kappa Psi is one of the
                most valuable organizations that bridge the gap between higher
                education and the workforce.{' '}
              </p>
              <p>
                I joined Alpha Kappa Psi in the fall semester of my sophomore
                year after being a part of NU.in Greece. While abroad, I learned
                that I loved being pushed to grow as an individual. After
                adjusting to the Boston campus, I craved an environment that
                cultivated and motivated the self-growth I desired. <br />{' '}
                <br />
                The semester I crossed changed the trajectory of my college
                journey. I was encouraged to be comfortable with the
                uncomfortable and was introduced to opportunities I would have
                never known existed. Throughout the semesters in which I’ve
                become a brother, I’ve continued to be challenged and the growth
                I constantly seek. <br /> <br />
                Upon joining Alpha Kappa Psi, I found a community of like-minded
                individuals who I constantly look up to. People who are
                ambitious, determined, and authentic. I’m proud to say that I’m
                part of a brotherhood that prides itself on mentorship,
                genuinity, and most importantly, friendship. <br /> <br />
                We are proud to say that our network is one of the most
                extensive among all organizations in the world. Our chapters
                span all across the United States and international waters such
                as London and Hong Kong. Brothers are constantly connecting with
                one another, regardless of location, age, or career path. Our
                community allows for constant mentorship and support wherever
                you are. <br /> <br /> After gaining so much from Alpha Kappa
                Psi, I knew I wanted to give back. My experience along with
                interactions with brothers inspired me to run for President of
                our chapter.
              </p>
              <p>
                {' '}
                While there are many organizations that can help you realize
                your professional potential, Alpha Kappa Psi is an organization
                that builds character.Brothers at Alpha Kappa Psi have qualities
                affirming our five core values : brotherhood, knowledge,
                integrity, service, and unity.Most importantly, we encourage
                each other to build leadership skills and relationships beyond
                the professional–– to provide an unwavering support system and
                help each other grow.{' '}
              </p>{' '}
              <p>
                The Rush process is all about exploration and
                discovery.Regardless of the outcome at the end of the process, I
                hope you are able to leave with new interests, skills,
                relationships, and confidence.On behalf of Chi Sigma, we welcome
                you to cultivate your aspirations and inspirations, with Alpha
                Kappa Psi.{' '}
              </p>{' '}
              <p>
                Best, <br />
                Erin Mui <br />
                President, Chi Sigma Chapter, 2024 - 2025 SY
              </p>
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
      <Footer />{' '}
    </div>{' '}
    <div style={{ paddingBottom: '50vh' }}>
      <h2
        style={{
          textAlign: 'center',
          paddingTop: '6vh',
          paddingBottom: '5vh',
          fontSize: '2rem',
          color: '#000',
          fontWeight: '800',
          // fontFamily: 'IvyDisplay',
        }}
      >
        Fall Rush Schedule 2024
      </h2>
      <div
        style={{
          flexDirection: 'column',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <EventCard
          title="Info Session #1 Elevator Pitch Workshop"
          description="Learn how to give an elevator pitch to your team and get feedback on your pitch."
          date="Tuesday, September 10th"
          location="TBA"
          dressCode="Business Casual"
          complete
        />
        <EventCard
          title="Social Event #1"
          description="Meet the bros in a casual setting and get to know each other."
          date="Thursday, September 12th"
          location="TBA"
          dressCode="Casual"
          complete={false}
        />
        <EventCard
          title="Service Event"
          description="Meet the bros in a casual setting and get to know each other."
          date="Saturday, September 14th"
          location="TBA"
          dressCode="Casual"
          complete={false}
        />
        <EventCard
          title="Info Sesion #2 Resume Workshop"
          description="Develop your resume with the advice of the brothers and learn first-hand from an industry recruiter."
          date="Monday, September 16th"
          location="TBA"
          dressCode="Business Casual"
          complete={false}
        />
        <EventCard
          title="Social Event #2"
          description="Meet the bros in a casual setting and get to know each other."
          date="Tuesday, September 17th"
          location="TBA"
          dressCode="Casual"
          complete={false}
        />
        <EventCard
          title="Co-op Panel"
          description="Learn about our brother's professional experiences and get the opportunitiy to ask questions to learn first-hand."
          date="Thursday, September 19th"
          location="TBA"
          dressCode="Business Casual"
          complete={false}
        />
        <EventCard
          title="Applications Due"
          description="Submit your written application and resume to Alpha Kappa Psi."
          date="Friday, September 20th"
          location="TBA"
          dressCode="Casual"
          complete={false}
        />
        <EventCard
          title="Invitational Event"
          description="Details given upon invitation by the chapter."
          date="Sunday, September 22nd"
          location="TBA"
          dressCode="Business Professional"
          complete={false}
        />
      </div>
    </div>
  </html>
)
export default Default
