// AboutPage.jsx
import React from 'react';
import Closednav from '../../Navbar/closednav';
import styles from './AboutPage.module.css';
import Loginnav from '../../Navbar/loginnav';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <Loginnav/>

      <h2 className={styles.heading}>About Us</h2>

      <p className={styles.description}>
        Welcome to our e-Pharmacy! We are dedicated to providing you with high-quality medications and excellent service. Learn more about our team and what makes us unique.
      </p>

      <div className={styles.imageGrid}>
        <img src="fake_image1.jpg" alt="Team Member 1" className={styles.image} />
        <img src="fake_image2.jpg" alt="Team Member 2" className={styles.image} />
        <img src="fake_image3.jpg" alt="Team Member 3" className={styles.image} />
      </div>

      <h3 className={styles.subHeading}>Customer Reviews</h3>
      <div className={styles.reviewsContainer}>
        <div className={styles.review}>
          <p>"Great service! Fast delivery and genuine medications. Highly recommended!"</p>
          <p className={styles.reviewAuthor}>- John Doe</p>
        </div>

        <div className={styles.review}>
          <p>"The user-friendly website made ordering my prescription easy. Will use again!"</p>
          <p className={styles.reviewAuthor}>- Jane Smith</p>
        </div>

        {/* Add more reviews as needed */}
      </div>

      <h3 className={styles.subHeading}>Our Team</h3>
      <p className={styles.description}>
        Our dedicated team works together to ensure that you receive the best pharmaceutical care. From our pharmacists to customer support, meet the people behind our success.
      </p>

      {/* Add more team information as needed */}
    </div>
  );
}

export default AboutPage;
