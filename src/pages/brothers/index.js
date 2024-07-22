import React from "react";
import {images} from 'theme'
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Tabs from "components/Tabs";
import Logobar from "components/Logobar/logoBar";
import styles from "./brothers.module.scss";

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
const Default = () => (
<html lang = 'en'>
    <Navbar/>
    <div className = {styles.O1}>
        <p> hi </p>
        <Tabs/>

    </div>
    <Footer/>
        <div className={styles.logoContainer}><Logobar cName = 'logoItemb' imageUrls = {imageUrlsCoop}/></div>

</html>
);

export default Default;
