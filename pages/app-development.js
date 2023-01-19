import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PageTopTitle from "@/components/Common/PageTopTitle";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import baseApiUrl from "@/utils/baseApiUrl";
import PageSeo from "../components/Common/PageSeo";
import MediaImage from "../components/Common/Media";


import dummyimg from "@/public/images/dummy-img.png";
import dummyicon from "@/public/images/dummy-icon.png";


const Services = ({ seo }) => {
  return (
    <>
      <PageSeo seo={seo} pageName = "App Development" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="App Development" />

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          {/* <div className="section-title">
            <h3 className="nunito-font">We offer a wide range of app development services, including:</h3>
            <p>We develop web and mobile applications to create excellent experiences for your users. We perfectly blend the power of design and excellence in technology. We craft customised apps according to your business requirements.</p>
          </div> */}
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h4 className="nunito-font">
                  Development of Mobile Applications
                </h4>
                <p className="w-100" style={{ textAlign: "justify" }}>The whopping increase in mobile internet users across the globe in the last decade has brought mobile application development for various platforms on the anvil. We are among the <b>top 10 mobile app development companies.</b> Our mobile app development team works closely with you to understand your needs and suggest the most superior app features that will take user experience and simplicity in obtaining your products and services to new levels. </p>
                <p className="w-100" style={{ textAlign: "justify" }}>We develop mobile apps for the Android and iOS platforms to help you target a large population of mobile users globally. We are the <b> best mobile app development companies in the world </b> providing services to every sector, including ecommerce mobile app development services. </p>
                <p className="w-100" style={{ textAlign: "justify" }}>We effectively strategize, design, and add features, user interfaces, and enhance UX parameters to exceed your expectations. Our team strives to implement the best technologies for mobile app development to ensure great performance.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>We are the top mobile application development company creating excellent experiences for your users. We perfectly blend the power of design and excellence in technology. We craft customised apps according to your business requirements. 

                <b> We offer a wide range of app development services </b></p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
              <MediaImage name="Development of mobile application.jpg" data={seo} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image">
              <MediaImage name="Development of web application.jpg" data={seo} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h4 className="nunito-font">
                  Development of Web Applications
                </h4>
                <p className="w-100" style={{ textAlign: "justify" }}>Many enterprises look for technology-driven solutions to conquer their target audience across a widespread business territory. Well-designed web applications act as the most powerful tools to let users access your products and services effortlessly. We are among<b> top web app development firms </b>for many years now. We have worked with hundreds of satisfied clients from across the world to develop the most user-friendly web apps exceeding their aspirations.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>We deploy the latest technologies and adopt best agile practises to bring out excellent web apps that will help you achieve your business goals. Our web app development team is highly trained and experienced in integrating different features into your web apps to make them the most preferred solutions for your target audience.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>We have been the most trusted partners for<b> web and mobile app development services </b>for many clients. Our technical expertise and extensive experience make us <b>the best web application development software company.</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h4 className="nunito-font">
                  Enterprise Application Development
                </h4>
                <p className="w-100" style={{ textAlign: "justify" }}>Many enterprises from across sectors and geographies approach us to provide solid enterprise apps. They seek for enterprise apps that provide an incredible user experience and make their users feel associated with their brands. We are one of the <b> world best enterprise app development companies.</b> We develop customized enterprise applications adopting the most-suited technology to make them highly efficient and scalable.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>Our talented team of enterprise software developers is well-versed in API integration, automating your desired processes, and modernising legacy systems. We will work collaboratively with your team to ideate the product, gauge its market feasibility, develop it by adopting agility, and empower it by integrating various well-designed features.</p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image">
              <MediaImage name="Enterprise Application Development.jpg" data={seo} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image">
              <MediaImage name="SaaS Application Implementation.jpg" data={seo} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h4 className="nunito-font">
                  SaaS Application Implementation
                </h4>
                <p className="w-100" style={{ textAlign: "justify" }}>We utilise our SaaS development and implementation capabilities to make your SaaS solutions more robust, easy to configure, and scalable. We help you make the best advantage of SaaS technology to make your solution accessible from anywhere at any time. Avoid investing in IT infrastructure – our cloud-based SaaS products will make you the industry leader.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>Work with us to add value to your solutions by bringing them to the cloud. We assure you of improved user adoption, enhanced user experience, the highest level of security, incredible scalability, and uninterrupted accessibility.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h4 className="nunito-font">
                  Custom Application Development
                </h4>
                <p className="w-100" style={{ textAlign: "justify" }}>We have been delivering custom software solutions according to clients’ business requirements for many years. Choosing us as your custom app development partner will help you align IT with your business outcomes effectively. We deliver custom apps to clients from different business arenas at the most competitive prices, without compromising quality, the best user experience, and well-thought features.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>We strive to take the user experience of your custom apps to new levels so that it will be easy for you to convert visitors into customers. At the same time, we help you amplify the thrust of your IT infrastructure and add new technical capabilities to serve your customers better.</p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image">
              <MediaImage name="Custom Application Development.jpg" data={seo} />
              </div>
            </div>
          </div>
        </div>
      </div>

                <h4 className="nunito-font">
               <center> Get in Touch with Our Experts Today! </center>
                </h4>
                <p className="w-100" style={{ textAlign: "justify" }}><center>Please feel free to contact our app development experts to discuss your requirements</center></p>
                <p className="w-100" style={{ textAlign: "justify" }}> <center>Please fill up the form below and one of our team members will get back to you shortly. </center> </p>

      <SubscribeStyle1 />
      <FooterOne />
    </>
  );
};

export async function getStaticProps({ params }) {
  // console.log(params);
  // Call an external API endpoint to get products.
  // You can use any data fetching library
  const res = await fetch(
    `${baseApiUrl}/api/pages?filters[slug][$eq]=app-development&populate=*`
  );
  const seo = await res.json();

  // By returning { props: { blog } }, the Blog component
  // will receive `blog` as a prop at build time
  return {
    props: {
      seo,
    },
  };
}


export default Services;