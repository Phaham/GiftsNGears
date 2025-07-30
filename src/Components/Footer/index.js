// import { LuShirt } from "react-icons/lu";
// import { TbTruckDelivery } from "react-icons/tb";
// import { TbDiscount2 } from "react-icons/tb";
// import { CiBadgeDollar } from "react-icons/ci";
// import { Link } from "react-router-dom";
// import { FaFacebookF } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import newsLetterImg from "../../assets/images/newsletter.png";
// import Button from "@mui/material/Button";
// import { IoMailOutline } from "react-icons/io5";
// import Banners from "../banners/index";
// import { useEffect, useState } from "react";
// import { fetchDataFromApi } from "../../utils/api";

// const Footer = () => {
//   const [bannerList, setBannerList] = useState([]);

//   return (
//     <>
      
//       <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6">
//               <p className="text-white mb-1">
//                 $20 discount for your first order
//               </p>
//               <h3 className="text-white">Subscribe! to get the Best Deals...</h3>
//               <p className="text-light">
//                 Join our email subscription now to get updates on
//                 <br /> promotions and coupons.
//               </p>

//               <form className="mt-4">
//                 <IoMailOutline />
//                 <input type="text" placeholder="Your Email Address" />
//                 <Button>Subscribe</Button>
//               </form>
//             </div>

//             <div className="col-md-6">
//               <img src={newsLetterImg} />
//             </div>
//           </div>
//         </div>
//       </section>
//       <footer>
//         <div className="container">
//           <div className="topInfo row">
//             <div className="col d-flex align-items-center">
//               <span>
//                 <LuShirt />
//               </span>
//               <span className="ml-2">Everyday fresh products</span>
//             </div>

//             <div className="col d-flex align-items-center">
//               <span>
//                 <TbTruckDelivery />
//               </span>
//               <span className="ml-2">Free delivery for order over $70</span>
//             </div>

//             <div className="col d-flex align-items-center">
//               <span>
//                 <TbDiscount2 />
//               </span>
//               <span className="ml-2">Daily Mega Discounts</span>
//             </div>

//             <div className="col d-flex align-items-center">
//               <span>
//                 <CiBadgeDollar />
//               </span>
//               <span className="ml-2">Best price on the market</span>
//             </div>
//           </div>

//           <div className="row mt-5">
//             {/* About Section */}
//             <div className="col-md-4 mb-4">
//               <h5 className="text-uppercase fw-bold mb-3">About Us</h5>
//               <p className="small">
//                 Best Gifts across India. Est in 2010 with over 13+ years of experience
//                 in trends and gifting demand.
//               </p>
//               <ul className="list-unstyled">
//                 <li>
//                   <span>🏢</span> Noida, UP, IND
//                 </li>
//                 <li>
//                   <span>📞</span> Phone: <a href="tel:+919728220398">97282 20398</a>
//                 </li>
//                 <li>
//                   <span>📧</span>{" "}
//                   <a href="mailto:admin@gmail.com">admin@gmail.com</a>
//                 </li>
//               </ul>
//             </div>

//             {/* Our Stores Section */}
//             <div className="col-md-2 mb-4">
//               <h5 className="text-uppercase fw-bold mb-3">Our Stores</h5>
//               <ul className="list-unstyled">
//                 <li>
//                   <a href="#" className="text-decoration-none text-dark">
//                     Shop Act
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-decoration-none text-dark">
//                     Privacy Policy
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-decoration-none text-dark">
//                     Terms & Conditions
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-decoration-none text-dark">
//                     Return Policy
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-decoration-none text-dark">
//                     Refund Policy
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Category Section */}
//             <div className="col-md-2 mb-4">
//               <h5 className="text-uppercase fw-bold mb-3">Category</h5>
//               <ul className="list-unstyled">
//                 <li>
//                   <a href="#" className="text-decoration-none text-dark">
//                     Birthday
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-decoration-none text-dark">
//                     Couple Gifts
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-decoration-none text-dark">
//                     Popular Apparels
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-decoration-none text-dark">
//                     Popular Gears
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-decoration-none text-dark">
//                     Anniversary Gifts
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Useful Links Section */}
//             <div className="col-md-2 mb-4">
//               <h5 className="text-uppercase fw-bold mb-3">Useful Links</h5>
//               <ul className="list-unstyled">
//                 <li>
//                   <a href="#" className="text-decoration-none text-dark">
//                     Instagram Profile
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-decoration-none text-dark">
//                     New Collection
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-decoration-none text-dark">
//                     Contact Us
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-decoration-none text-dark">
//                     About Us
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-decoration-none text-dark">
//                     Our Sitemap
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Customer Service Section */}
//             <div className="col-md-2 mb-4">
//               <h5 className="text-uppercase fw-bold mb-3">Services</h5>
//               <ul className="list-unstyled">

//                 <li>
//                   <a href="#" className="text-decoration-none text-dark">
//                     24/7 Customer Support
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-decoration-none text-dark">
//                     Best Segment Products
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-decoration-none text-dark">
//                     Reliable Sellers
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-decoration-none text-dark">
//                      Faster Delivery
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-decoration-none text-dark">
//                      Give a Gift
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="copyright mt-3 pt-3 pb-3 d-flex">
//             <p className="mb-0">Copyright 2024. All rights reserved</p>
//             <ul className="list list-inline ml-auto mb-0 socials">
//               <li className="list-inline-item">
//                 <Link to="#">
//                   <FaFacebookF />
//                 </Link>
//               </li>

//               <li className="list-inline-item">
//                 <Link to="#">
//                   <FaTwitter />
//                 </Link>
//               </li>

//               <li className="list-inline-item">
//                 <Link to="#">
//                   <FaInstagram />
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Paper } from '@mui/material';
import { LuShirt } from 'react-icons/lu';
import { TbTruckDelivery, TbDiscount2 } from 'react-icons/tb';
import { CiBadgeDollar } from 'react-icons/ci';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import newsLetterImg from '../../assets/images/newsletter.png';

const Footer = () => {
  const features = [
    { icon: <LuShirt size={24} />, text: 'Everyday New Products' },
    { icon: <TbTruckDelivery size={24} />, text: 'Free Delivery Over ₹299' },
    { icon: <TbDiscount2 size={24} />, text: 'Daily Mega Discounts' },
    { icon: <CiBadgeDollar size={24} />, text: 'Best Price in Market' },
  ];

  const sections = [
    {
      title: 'About Us',
      content: (
        <>
          <Typography variant="body2" paragraph>
            Best Gifts across India. Established in 2010 with 13+ years of gifting expertise.
          </Typography>
          <Typography variant="body2">🏢 Noida, UP, IND</Typography>
          <Typography variant="body2">📞 <Link to="tel:+919728220398" style={{ textDecoration: 'none', color: 'inherit' }}>97282 20398</Link></Typography>
          <Typography variant="body2">📧 <Link to="mailto:admin@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>admin@gmail.com</Link></Typography>
        </>
      ),
    },
    { title: 'Our Stores', links: ['Shop Act', 'Privacy Policy', 'Terms & Conditions', 'Return Policy', 'Refund Policy'] },
    { title: 'Category', links: ['Birthday', 'Couple Gifts', 'Apparels', 'Gears', 'Anniversary'] },
    { title: 'Useful Links', links: ['Instagram Profile', 'New Collection', 'Contact Us', 'About Us', 'Sitemap'] },
    { title: 'Services', links: ['24/7 Support', 'Top Products', 'Reliable Sellers', 'Fast Delivery', 'Gift Suggestions'] },
  ];

  const socials = [
    { icon: <FaFacebookF />, link: '#' },
    { icon: <FaTwitter />, link: '#' },
    { icon: <FaInstagram />, link: '#' },
  ];

  return (
    <Box component="footer" sx={{ bgcolor: '#f5f3f1', pt: 0, pb: 4 }}>
      {/* Newsletter Section - original HTML preserved */}
      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">₹20 discount on your first order</p>
              <h3 className="text-white">Subscribe! to get the Best Deals...</h3>
              <p className="text-light">
                Join our email subscription now to get updates on<br /> promotions and coupons.
              </p>

              <form className="mt-4">
                <IoMailOutline />
                <input type="text" placeholder="Your Email Address" />
                <button className="btn btn-primary">Subscribe</button>
              </form>
            </div>

            <div className="col-md-6 text-center">
              <img src={newsLetterImg} alt="Newsletter" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      <Container maxWidth="lg" sx={{ mt: 10 }}>
        {/* Features aligned center */}
        <Grid container spacing={3} justifyContent="center" sx={{ mb: 4 }}>
          {features.map((item, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Paper
                elevation={1}
                sx={{ display: 'flex', alignItems: 'center', p: 2, borderRadius: 2, textAlign: 'center', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-3px)', boxShadow: 3 } }}
              >
                <Box sx={{ mr: 1, color: '#e91e63' }}>{item.icon}</Box>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>{item.text}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Links - now evenly spaced under features */}
        <Grid container spacing={3} justifyContent="space-between" sx={{ mb: 4 }}>
          {sections.map((section, i) => (
            <Grid item xs="auto" key={i}>
              <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600, color: '#333' }}>{section.title}</Typography>
              {section.content || section.links.map((link, j) => (
                <Typography variant="body2" key={j} sx={{ mb: 1, fontSize: '0.875rem', color: '#555', transition: 'color 0.2s', '&:hover': { color: '#e91e63' } }}>
                  <Link to="#" style={{ textDecoration: 'none' }}>{link}</Link>
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>

        {/* Bottom bar */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #ddd', pt: 2 }}>
          <Typography variant="body2" color="textSecondary">© 2024 BestGifts. All rights reserved.</Typography>
          <Box>
            {socials.map((social, k) => (
              <IconButton key={k} component="a" href={social.link} sx={{ color: '#555', transition: 'color 0.2s', '&:hover': { color: '#e91e63' } }}>
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
