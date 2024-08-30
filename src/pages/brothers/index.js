import React from 'react'
import { images } from 'theme'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import styles from './brothers.module.scss'

const imageUrlsSigma = [
  'https://cdn.discordapp.com/attachments/956954679911252001/1279167005651370094/DSC_4765.JPG?ex=66d3749b&is=66d2231b&hm=c6c0678709c24401a6b75efe7a41ee0b74ed7b386171ed5e40da6268dc1aeaf3&',
  'https://cdn.discordapp.com/attachments/956954679911252001/1279167240905687190/DSC_5114.JPG?ex=66d374d4&is=66d22354&hm=1c7630ea4cf2af8a53aee3a13b3ce312232410ca888b2ce4f1e0e1b79b8221b7&',
  'https://cdn.discordapp.com/attachments/956954679911252001/1279167687569702962/DSC_5715.JPG?ex=66d3753e&is=66d223be&hm=316bbd6331e4fbc226e4aecef0b880e19409d767958537dd5ce8da72a24e7005&',
  'https://cdn.discordapp.com/attachments/956954679911252001/1279167493629280318/DSC_5484.JPG?ex=66d37510&is=66d22390&hm=f9782f1ec958a9eecf69dd715fc2392cc1273400c43cc7e4d06c31e2a5b16cff&',
  'https://cdn.discordapp.com/attachments/956954679911252001/1279167639125758043/DSC_5612_2.JPG?ex=66d37532&is=66d223b2&hm=84a3c67dbba72094966cd35a4622be6e3624b7cc78dc3c8d7602e899ee70f704&',
  'https://cdn.discordapp.com/attachments/956954679911252001/1279167427904667668/DSC_5406.JPG?ex=66d37500&is=66d22380&hm=acd0cfc1fe7698677109d24792ffafd28c2107aab0193308c210da1f9552a0b4&',
  'https://cdn.discordapp.com/attachments/956954679911252001/1279167384971644988/DSC_5219.JPG?ex=66d374f6&is=66d22376&hm=e1fe5106655909b815da0b28ae213108da96c4d40f8decd50f38e976c940f472&',
  'https://cdn.discordapp.com/attachments/956954679911252001/1279167064208052254/DSC_4859.JPG?ex=66d374a9&is=66d22329&hm=5df61335c6862f686d003bff3e507596066369056b5576bfcf22304faa22670d&',
  'https://cdn.discordapp.com/attachments/956954679911252001/1279168691165991054/DSC_5014.jpg?ex=66d3762d&is=66d224ad&hm=7751c70e9b045f7b62ba7bd1853612dfd364a6fad015f295630bd08ad5ff71ef&',
  'https://cdn.discordapp.com/attachments/956954679911252001/1279167132810088521/DSC_4941.JPG?ex=66d374ba&is=66d2233a&hm=e8ca382b8b615e471fc55803a5fd1fb39276c909fdb24c3f67a3d553ede36491&',
  'https://cdn.discordapp.com/attachments/956954679911252001/1279167290918699141/DSC_5150.JPG?ex=66d374df&is=66d2235f&hm=0f4aa7e516ee8caecfe74b754bdb485ff298c67c14f5f157ada29671a4c9a2a6&',
  'https://cdn.discordapp.com/attachments/956954679911252001/1279167749096210514/IMG_1332.JPG?ex=66d3754d&is=66d223cd&hm=e6508beb702463c165283626f67a877cea9f1494102a6b548d21617979c6b3fb&',
  'https://cdn.discordapp.com/attachments/956954679911252001/1279167552312053968/DSC_5551.JPG?ex=66d3751e&is=66d2239e&hm=6e88e0286ec65470d2793013953a4d2328937fa3c68da2348c05ccb696b00a6a&',
]

const namesSigma = [
  'Emily Chung',
  'Rebecca Silva',
  'Gianna Saw',
  'Bryce Chen',
  'Abhik Ray',
  'Makena Tsuneishi',
  'Lisa Park',
  'Liz Fikru',
  'Kelly Wang',
  'Jackson Molin',
  'Lois Hong',
  'Jake Langlois',
  'Jonathan Garrett',
]

// Get this hosted somwehere
const imageUrlsTau = [
  'https://media.discordapp.net/attachments/227961738698555392/1278993307719962706/DSC00976.jpg?ex=66d2d2d7&is=66d18157&hm=b9cc8ddffb62befbb9688251e47c8817c00ec51e3a89ee3159a752f2c34c12aa&=&format=webp&width=482&height=857',
  'https://media.discordapp.net/attachments/227961738698555392/1278993307321761807/DSC00832.jpg?ex=66d2d2d7&is=66d18157&hm=c4166c38e53e780501e8fa05ba7c76b14611ed9c6cc8462ffb4a78ed0a6ab4b4&=&format=webp&width=482&height=857',
  'https://media.discordapp.net/attachments/227961738698555392/1278993306939953204/DSC00736.jpg?ex=66d2d2d6&is=66d18156&hm=35f053dae617ef367a13a5213422d74ada727a5fdf8cbd66654931b36e3f7cad&=&format=webp&width=482&height=857',
  'https://media.discordapp.net/attachments/227961738698555392/1278993306487095326/DSC00600.jpg?ex=66d2d2d6&is=66d18156&hm=0db603c263fba9ebea5e5f0b81d0ab14f262070ec2602e1d4aa74725b5e60e85&=&format=webp&width=482&height=857',
  'https://media.discordapp.net/attachments/227961738698555392/1278993306025594942/DSC00477.jpg?ex=66d2d2d6&is=66d18156&hm=832a874da17a80b5acf8eac4f1dd4bedb3b554a17e2f3202f6d80c49acc7e3c5&=&format=webp&width=482&height=857',
  'https://media.discordapp.net/attachments/227961738698555392/1278993305576669235/DSC00769.jpg?ex=66d2d2d6&is=66d18156&hm=9df0ca1c2a7304fa22363ee028ca5592f798c12dd71afadc11f38da341aacdc9&=&format=webp&width=482&height=857',
  'https://media.discordapp.net/attachments/227961738698555392/1278993305052516443/DSC00917-2.jpg?ex=66d2d2d6&is=66d18156&hm=e70a83c08cdbc16f662b47d154ff0130df449182b7662aacb04bec166387e579&=&format=webp&width=482&height=857',
]

const sigmaData = [
  {
    name: 'Emily Chung',
    year: '3rd Year',
    major: 'Testing',
    picture:
      'https://cdn.discordapp.com/attachments/956954679911252001/1279162575900381184/emily.jpeg?ex=66d3707b&is=66d21efb&hm=2c90b5a9de53cca3e4b4a0a3927ca1d5c02af31fc61c107d5192ed62eb3cd97a&',
  },
  {
    name: 'Rebecca Silva',
    year: '1st Year',
    major: 'Business Admin',
    picture:
      'https://cdn.discordapp.com/attachments/956954679911252001/1279167240905687190/DSC_5114.JPG?ex=66d374d4&is=66d22354&hm=1c7630ea4cf2af8a53aee3a13b3ce312232410ca888b2ce4f1e0e1b79b8221b7&',
  },
  {
    name: 'Gianna Saw',
    year: '1st Year',
    major: 'Business Admin',
    picture:
      'https://cdn.discordapp.com/attachments/956954679911252001/1279167687569702962/DSC_5715.JPG?ex=66d3753e&is=66d223be&hm=316bbd6331e4fbc226e4aecef0b880e19409d767958537dd5ce8da72a24e7005&',
  },
  {
    name: 'Bryce Chen',
    year: '1st Year',
    major: 'Business Admin',
    picture:
      'https://cdn.discordapp.com/attachments/956954679911252001/1279167493629280318/DSC_5484.JPG?ex=66d37510&is=66d22390&hm=f9782f1ec958a9eecf69dd715fc2392cc1273400c43cc7e4d06c31e2a5b16cff&',
  },
  {
    name: 'Abhik Ray',
    year: '1st Year',
    major: 'Business Admin',
    picture:
      'https://cdn.discordapp.com/attachments/956954679911252001/1279167639125758043/DSC_5612_2.JPG?ex=66d37532&is=66d223b2&hm=84a3c67dbba72094966cd35a4622be6e3624b7cc78dc3c8d7602e899ee70f704&',
  },
  {
    name: 'Makena Tsuneishi',
    year: '1st Year',
    major: 'Business Admin',
    picture:
      'https://cdn.discordapp.com/attachments/956954679911252001/1279167427904667668/DSC_5406.JPG?ex=66d37500&is=66d22380&hm=acd0cfc1fe7698677109d24792ffafd28c2107aab0193308c210da1f9552a0b4&',
  },
  {
    name: 'Lisa Park',
    year: '1st Year',
    major: 'Business Admin',
    picture:
      'https://cdn.discordapp.com/attachments/956954679911252001/1279167384971644988/DSC_5219.JPG?ex=66d374f6&is=66d22376&hm=e1fe5106655909b815da0b28ae213108da96c4d40f8decd50f38e976c940f472&',
  },
  {
    name: 'Liz Fikru',
    year: '1st Year',
    major: 'Business Admin',
    picture:
      'https://cdn.discordapp.com/attachments/956954679911252001/1279167064208052254/DSC_4859.JPG?ex=66d374a9&is=66d22329&hm=5df61335c6862f686d003bff3e507596066369056b5576bfcf22304faa22670d&',
  },
  {
    name: 'Kelly Wang',
    year: '1st Year',
    major: 'Business Admin',
    picture:
      'https://cdn.discordapp.com/attachments/956954679911252001/1279168691165991054/DSC_5014.jpg?ex=66d3762d&is=66d224ad&hm=7751c70e9b045f7b62ba7bd1853612dfd364a6fad015f295630bd08ad5ff71ef&',
  },
  {
    name: 'Jackson Molin',
    year: '1st Year',
    major: 'Business Admin',
    picture:
      'https://cdn.discordapp.com/attachments/956954679911252001/1279167132810088521/DSC_4941.JPG?ex=66d374ba&is=66d2233a&hm=e8ca382b8b615e471fc55803a5fd1fb39276c909fdb24c3f67a3d553ede36491&',
  },
  {
    name: 'Lois Hong',
    year: '1st Year',
    major: 'Business Admin',
    picture:
      'https://cdn.discordapp.com/attachments/956954679911252001/1279167290918699141/DSC_5150.JPG?ex=66d374df&is=66d2235f&hm=0f4aa7e516ee8caecfe74b754bdb485ff298c67c14f5f157ada29671a4c9a2a6&',
  },
  {
    name: 'Jake Langlois',
    year: '1st Year',
    major: 'Business Admin',
    picture:
      'https://cdn.discordapp.com/attachments/956954679911252001/1279167749096210514/IMG_1332.JPG?ex=66d3754d&is=66d223cd&hm=e6508beb702463c165283626f67a877cea9f1494102a6b548d21617979c6b3fb&',
  },
  {
    name: 'Jonathan Garrett',
    year: '1st Year',
    major: 'Business Admin',
    picture:
      'https://cdn.discordapp.com/attachments/956954679911252001/1279167552312053968/DSC_5551.JPG?ex=66d3751e&is=66d2239e&hm=6e88e0286ec65470d2793013953a4d2328937fa3c68da2348c05ccb696b00a6a&',
  },
]

const namesTau = [
  'Andy Sun',
  'Angelina Li',
  'Anjola Babalola',
  'Anvi Vasa',
  'Caleb Lu',
  'Daniel Smith',
  'Eric Bao',
]

const tauData = [
  {
    name: 'Andy Sun',
    year: '3nd Year',
    major: 'Data Science and Business Administration Major',
    picture:
      'https://media.discordapp.net/attachments/227961738698555392/1278993307719962706/DSC00976.jpg?ex=66d2d2d7&is=66d18157&hm=b9cc8ddffb62befbb9688251e47c8817c00ec51e3a89ee3159a752f2c34c12aa&=&format=webp&width=482&height=857',
  },
  {
    name: 'Angelina Li',
    year: '2nd Year',
    major: 'Business Administration Major',
    picture:
      'https://media.discordapp.net/attachments/227961738698555392/1278993307321761807/DSC00832.jpg?ex=66d2d2d7&is=66d18157&hm=c4166c38e53e780501e8fa05ba7c76b14611ed9c6cc8462ffb4a78ed0a6ab4b4&=&format=webp&width=482&height=857',
  },
  {
    name: 'Anjola Babalola',
    year: '2nd Year',
    major: 'Business Administration Major',
    picture:
      'https://media.discordapp.net/attachments/227961738698555392/1278993306939953204/DSC00736.jpg?ex=66d2d2d6&is=66d18156&hm=35f053dae617ef367a13a5213422d74ada727a5fdf8cbd66654931b36e3f7cad&=&format=webp&width=482&height=857',
  },
  {
    name: 'Anvi Vasa',
    year: '2nd Year',
    major: 'Business Administration Major',
    picture:
      'https://media.discordapp.net/attachments/227961738698555392/1278993306487095326/DSC00600.jpg?ex=66d2d2d6&is=66d18156&hm=0db603c263fba9ebea5e5f0b81d0ab14f262070ec2602e1d4aa74725b5e60e85&=&format=webp&width=482&height=857',
  },
  {
    name: 'Caleb Lu',
    year: '2nd Year',
    major: 'Business Administration Major',
    picture:
      'https://media.discordapp.net/attachments/227961738698555392/1278993305576669235/DSC00769.jpg?ex=66d2d2d6&is=66d18156&hm=9df0ca1c2a7304fa22363ee028ca5592f798c12dd71afadc11f38da341aacdc9&=&format=webp&width=482&height=857',
  },
  {
    name: 'Daniel Smith',
    year: '2nd Year',
    major: 'Business Administration Major',
    picture:
      'https://media.discordapp.net/attachments/227961738698555392/1278993305052516443/DSC00917-2.jpg?ex=66d2d2d6&is=66d18156&hm=e70a83c08cdbc16f662b47d154ff0130df449182b7662aacb04bec166387e579&=&format=webp&width=482&height=857',
  },
  {
    name: 'Eric Bao',
    year: '2nd Year',
    major: 'Business Administration Major',
    picture:
      'https://media.discordapp.net/attachments/227961738698555392/1278993306025594942/DSC00477.jpg?ex=66d2d2d6&is=66d18156&hm=832a874da17a80b5acf8eac4f1dd4bedb3b554a17e2f3202f6d80c49acc7e3c5&=&format=webp&width=482&height=857',
  },
]
console.log(tauData[0].name)
console.log(sigmaData[0].name)
const ClassSection = ({ className, imageUrls, names }) => (
  <div style={{ padding: '2rem' }}>
    <div
      className={styles.sectionTitle}
      style={{ paddingLeft: '5%', paddingRight: '10%' }}
    >
      <h2
        style={{
          color: '#003366',
          fontSize: '3rem',
          textAlign: 'center',
          verticalAlign: 'middle',
        }}
      >
        {className}
      </h2>
    </div>
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingLeft: '5%',
        paddingRight: '0%',
        color: '#003366',
      }}
    >
      {imageUrls.map((url, i) => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '21%',
            marginTop: '2rem',
            marginRight: '2rem',
          }}
        >
          <img
            src={url}
            alt={names[i]}
            className={styles.brotherImage}
            style={{ width: '45%', borderRadius: '10px' }}
          />
          <div style={{ paddingLeft: '1rem' }}>
            <h4
              style={{
                textAlign: 'center',
                fontSize: '1rem',
                fontWeight: 'bold',
              }}
            >
              {names[i]}
            </h4>
            <p style={{ textAlign: 'center', fontSize: '0.8rem' }}>2nd Year</p>
            <p
              style={{
                textAlign: 'center',
                fontSize: '0.8rem',
                paddingTop: '10%',
              }}
            >
              Business Administration Major
            </p>
            <div
              style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: '1rem',
              }}
            >
              <img
                className={styles.clickable}
                src={images.linkedin}
                alt="linkedin"
                style={{ width: '30px', height: '30px', marginRight: '1rem' }}
              />
              <img
                className={styles.clickable}
                src={images.email}
                alt="instagram"
                style={{ width: '35px', height: '28px' }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const Default = () => (
  <html lang="en" style={{ backgroundColor: '#fffffc' }}>
    <Navbar />
    {/* Landing */}
    <div style={{ height: '100vh', width: '100%' }}>
      <h2
        style={{
          color: '#003366',
          fontSize: '2rem',
          textAlign: 'center',
          verticalAlign: 'middle',
          marginTop: '20%',
        }}
      >
        Brother Directory
      </h2>
      <p style={{ textAlign: 'center' }}>
        Meet all of our brothers from every class.
      </p>
      <img
        src={images.right}
        alt="fullLogo"
        style={{ width: '20%', top: '15%', position: 'absolute', right: '10%' }}
      />
      <img
        src={images.left}
        alt="fullLogo"
        style={{ width: '30%', top: '12%', position: 'absolute', left: '10%' }}
      />
    </div>
    <ClassSection
      className="Tau Class"
      imageUrls={imageUrlsTau}
      names={namesTau}
    />
    <ClassSection
      className="Sigma Class"
      imageUrls={imageUrlsSigma}
      names={namesSigma}
    />
    <div style={{ padding: '10%' }} />
    <Footer />
  </html>
)

export default Default
