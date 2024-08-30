import React from "react";
import {images} from 'theme'
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import styles from "./brothers.module.scss";



  // Get this hosted somwehere
const imageUrlsTau = [
    "https://media.discordapp.net/attachments/227961738698555392/1278993307719962706/DSC00976.jpg?ex=66d2d2d7&is=66d18157&hm=b9cc8ddffb62befbb9688251e47c8817c00ec51e3a89ee3159a752f2c34c12aa&=&format=webp&width=482&height=857",
    "https://media.discordapp.net/attachments/227961738698555392/1278993307321761807/DSC00832.jpg?ex=66d2d2d7&is=66d18157&hm=c4166c38e53e780501e8fa05ba7c76b14611ed9c6cc8462ffb4a78ed0a6ab4b4&=&format=webp&width=482&height=857",
    "https://media.discordapp.net/attachments/227961738698555392/1278993306939953204/DSC00736.jpg?ex=66d2d2d6&is=66d18156&hm=35f053dae617ef367a13a5213422d74ada727a5fdf8cbd66654931b36e3f7cad&=&format=webp&width=482&height=857",
    "https://media.discordapp.net/attachments/227961738698555392/1278993306487095326/DSC00600.jpg?ex=66d2d2d6&is=66d18156&hm=0db603c263fba9ebea5e5f0b81d0ab14f262070ec2602e1d4aa74725b5e60e85&=&format=webp&width=482&height=857",
    "https://media.discordapp.net/attachments/227961738698555392/1278993306025594942/DSC00477.jpg?ex=66d2d2d6&is=66d18156&hm=832a874da17a80b5acf8eac4f1dd4bedb3b554a17e2f3202f6d80c49acc7e3c5&=&format=webp&width=482&height=857",
    "https://media.discordapp.net/attachments/227961738698555392/1278993305576669235/DSC00769.jpg?ex=66d2d2d6&is=66d18156&hm=9df0ca1c2a7304fa22363ee028ca5592f798c12dd71afadc11f38da341aacdc9&=&format=webp&width=482&height=857",
    "https://media.discordapp.net/attachments/227961738698555392/1278993305052516443/DSC00917-2.jpg?ex=66d2d2d6&is=66d18156&hm=e70a83c08cdbc16f662b47d154ff0130df449182b7662aacb04bec166387e579&=&format=webp&width=482&height=857"
];


const namesTau = [
    "Andy Sun",
    "Angelina Li",
    "Anjola Babalola",
    "Anvi Vasa",
    "Caleb Lu",
    "Daniel Smith",
    "Eric Bao"
]

const tauData = [
    {
        name: "Andy Sun",
        year: "3nd Year",
        major: "Data Science and Business Administration Major",
        picture: "https://media.discordapp.net/attachments/227961738698555392/1278993307719962706/DSC00976.jpg?ex=66d2d2d7&is=66d18157&hm=b9cc8ddffb62befbb9688251e47c8817c00ec51e3a89ee3159a752f2c34c12aa&=&format=webp&width=482&height=857",
    },
    {
        name: "Angelina Li",
        year: "2nd Year",
        major: "Business Administration Major",
        picture: "https://media.discordapp.net/attachments/227961738698555392/1278993307321761807/DSC00832.jpg?ex=66d2d2d7&is=66d18157&hm=c4166c38e53e780501e8fa05ba7c76b14611ed9c6cc8462ffb4a78ed0a6ab4b4&=&format=webp&width=482&height=857",     
    },
    {
        name: "Anjola Babalola",
        year: "2nd Year",
        major: "Business Administration Major",
        picture: "https://media.discordapp.net/attachments/227961738698555392/1278993306939953204/DSC00736.jpg?ex=66d2d2d6&is=66d18156&hm=35f053dae617ef367a13a5213422d74ada727a5fdf8cbd66654931b36e3f7cad&=&format=webp&width=482&height=857", 
    },
    {
        name: "Anvi Vasa",
        year: "2nd Year",
        major: "Business Administration Major",
        picture: "https://media.discordapp.net/attachments/227961738698555392/1278993306487095326/DSC00600.jpg?ex=66d2d2d6&is=66d18156&hm=0db603c263fba9ebea5e5f0b81d0ab14f262070ec2602e1d4aa74725b5e60e85&=&format=webp&width=482&height=857",
    },
    {
        name: "Caleb Lu",
        year: "2nd Year",
        major: "Business Administration Major",
        picture: "https://media.discordapp.net/attachments/227961738698555392/1278993305576669235/DSC00769.jpg?ex=66d2d2d6&is=66d18156&hm=9df0ca1c2a7304fa22363ee028ca5592f798c12dd71afadc11f38da341aacdc9&=&format=webp&width=482&height=857",

    },
    {
        name: "Daniel Smith",
        year: "2nd Year",
        major: "Business Administration Major",
        picture: "https://media.discordapp.net/attachments/227961738698555392/1278993305052516443/DSC00917-2.jpg?ex=66d2d2d6&is=66d18156&hm=e70a83c08cdbc16f662b47d154ff0130df449182b7662aacb04bec166387e579&=&format=webp&width=482&height=857",
    }, 
    {
        name: "Eric Bao",
        year: "2nd Year",
        major: "Business Administration Major",
        picture: "https://media.discordapp.net/attachments/227961738698555392/1278993306025594942/DSC00477.jpg?ex=66d2d2d6&is=66d18156&hm=832a874da17a80b5acf8eac4f1dd4bedb3b554a17e2f3202f6d80c49acc7e3c5&=&format=webp&width=482&height=857",
    },
    

]
console.log(tauData[0].name)
const ClassSection = ({ className, imageUrls, names }) => (
    <div style={{ padding: '2rem'}}>
        <div className={styles.sectionTitle} style={{paddingLeft: "5%", paddingRight: "10%"}}>
            <h2 style={{color: '#003366', fontSize: '3rem', textAlign: 'center', verticalAlign: 'middle'}}>{className}</h2>
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', paddingLeft: "5%",  paddingRight: "0%",color: '#003366'}}>
            {imageUrls.map((url, i) => (
                <div style={{display: 'flex', alignItems: 'center', width: '21%', marginTop: '2rem', marginRight: '2rem'}}>
                    <img src={url} alt={names[i]} className={styles.brotherImage} style= {{width: '45%', borderRadius:"10px"}} />
                    <div style={{paddingLeft: '1rem'}}>
                        <h4 style={{textAlign: 'center', fontSize: '1rem', fontWeight: 'bold'}}>{names[i]}</h4>
                        <p style={{textAlign: 'center', fontSize: '0.8rem'}}>2nd Year</p>
                        <p style={{textAlign: 'center', fontSize: '0.8rem', paddingTop:"10%"}}>Business Administration Major</p>
                        <div style={{flex: 1, display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: '1rem'}}>
                            <img className={styles.clickable} src={images.linkedin} alt="linkedin" style={{width: '30px', height: '30px', marginRight: '1rem'}} />
                            <img className={styles.clickable} src={images.email} alt="instagram" style={{width: '35px', height: '28px'}} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const Default = () => (
<html lang = 'en' style={{backgroundColor: '#fffffc'}}>
    <Navbar/>
    {/* Landing */}
    <div style={{height: '100vh', width: '100%'}}>
        <h2 style={{color: '#003366', fontSize: '2rem', textAlign: 'center', verticalAlign: 'middle', marginTop: "20%"}}>
            Brother Directory
        </h2> 
        <p style={{textAlign: 'center'}}>Meet all of our brothers from every class.</p>
        <img src = {images.right} alt = "fullLogo" style = {{width: '20%', top: '15%', position: 'absolute', right: '10%'}} />
        <img src = {images.left} alt = "fullLogo" style = {{width: '30%', top: '12%', position: 'absolute',  left: "10%"}} />
    </div>
    <ClassSection className='Tau Class' imageUrls = {imageUrlsTau} names = {namesTau}/>
    <div style={{ padding:"10%" }} />
    <Footer/>

</html>
);

export default Default;
