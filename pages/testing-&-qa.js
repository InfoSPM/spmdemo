import React from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PageTopTitle from "@/components/Common/PageTopTitle";
import SubscribeStyle1 from "@/components/Common/SubscribeStyle1";
import FooterOne from "@/components/Layout/Footer/FooterOne";



import shapeImg8 from "@/public/images/shape/shape8.png";
import event from "@/public/images/event.jpg";
import itsm from "@/public/images/itsm.jpg";
import bmcheliximplementation from "@/public/images/bmcheliximplementation.jpg";
import dealing from "@/public/images/dealing.jpg";
import service from "@/public/images/service.jpg";
import change from "@/public/images/change.jpg";
import multicloud from "@/public/images/multi-cloud.jpg";
import insights from "@/public/images/insights.jpg";
import Knowledge from "@/public/images/Knowledge.jpg";
import helixdigitalworkplace from "@/public/images/helix-digital-workplace.jpg";
import Assets from "@/public/images/Assets.jpg"
import Configuration from "@/public/images/Configuration.jpg";


{/* ------------------------------Faq Q/A--------------------------------- */ }
const questionsAnswers = [
  // {
  //   question: "Q1: What is the benefit of adopting BMC Smart IT?",
  //   answer:
  //     <p className="w-100" style={{ textAlign: "justify" }}>Answer: BMC Smart IT allows you to create tickets faster. You can create multiple ticket types, such as incidents, work orders, service requests, or change requests with minimal values to fill in. You can use the Smart Record feature to take notes while interacting with your clients. Again, you can collaborate with co-workers effectively through easy and faster integration with various business apps.</p>
  // },
  // {
  //   question: "Q2: Does BMC MyIT allow your team members to tackle service requests independently?",
  //   answer:
  //     <p className="w-100" style={{ textAlign: "justify" }}>Answer: Yes, BMC MyIT allows you to decentralize your work for small instances. Any team member can tackle a particular service request individually with his or her own device. Thus, multiple service requests can be addressed through various team members at the same time, remotely. This feature improves the reaction time to provide services to your clients and helps you achieve better customer satisfaction.</p>
  // },
  // {
  //   question: "Q3: Is BMC DWP 'people-centric?",
  //   answer:
  //     <p className="w-100" style={{ textAlign: "justify" }}>Answer: Yes, the solution is people-centric as it is designed to provide consumer-like experiences to the managerial members of your teams. Thus, your workforce can enjoy the flexibility to work on the scheduled task, while your managers can seamlessly govern the working process, the technology being leveraged, and the team members. Work with certified vendors to deploy BMC DWP in a customized manner for seamless coordination.</p>
  // },
  // {
  //   question: "Q4: How is BMC DWPA better than BMC DWP?",
  //   answer:
  //     <p className="w-100" style={{ textAlign: "justify" }}>Answer: Being the latest version of BMC DWP, the BMC DWPA has some advanced features. BMC DWPA provides better access to your clients so that they can raise service requests to the concerned departments of your organizations such as HR, Support, and so on. This feature adds flexibility to the overall work culture of your organization.</p>
  // },
  // {
  //   question: "Q5: Can I get a single dashboard to accommodate the complete service catalog?",
  //   answer:
  //     <p className="w-100" style={{ textAlign: "justify" }}>Answer: By implementing BMC Digital Workplace Catalog, you can bring all service requests together to a centralized dashboard. This feature helps you manage various service requests, assign service and support tasks to the concerned team members, and monitor the progress of every service request effectively.</p>
  // },
  // {
  //   question: "Q6: How do BMC Solutions add flexibility to your service operations?",
  //   answer:
  //     <p className="w-100" style={{ textAlign: "justify" }}>Answer: BMC Solutions are gaining popularity in the ITSM landscape due to the flexibility they offer. Firstly, most BMC Solutions are accessible through various browser-enabled devices. Thus, it is easy to keep control of your team’s activities and monitor the progress of every project from wherever you are. Then comes the intuitive dashboard that helps you effectively communicate, make correct decisions, and create reports.</p>
  // },
  // {
  //   question: "Q7: How can the advanced accessibility of BMC Solutions set you free?",
  //   answer:
  //     <p className="w-100" style={{ textAlign: "justify" }}>Answer: BMC Solutions are accessible through various browser-enabled devices and are compatible with different operating systems, such as Android, iOS, Windows, and Mac. Thus, you can stay connected with your work through your desktops, laptops, tablet phones, and smartphones from your offices, homes, or wherever you are.</p>
  // },
  // {
  //   question: "Q8: How can you achieve better productivity by switching to BMC Solutions?",
  //   answer:
  //     <p className="w-100" style={{ textAlign: "justify" }}>The entire team would be clear about what they are supposed to do. The team also gets real-time insights and can prepare reports in easy-to-understand formats, like graphs, bar charts, and pie charts. As all the crucial matters are brought to a single dashboard, you can strategize your work accordingly. Assigning implementation to BMC Solutions Managed Services experts is crucial here. That improves the individual performance of every team member, and the organization achieves better productivity.</p>
  // },
  // {
  //   question: "Q9: Is it a lengthy and laborious process to implement BMC Solutions for your business?",
  //   answer:
  //     <p className="w-100" style={{ textAlign: "justify" }}>Answer: No. If you partner with the best asset customization service providers, it takes only a few days to switch to BMC Solutions. Thus, you can get going with the most appreciated ITSM and workflow orchestration tools very soon. Collaborate with an experienced BMC Solutions Consultant to adopt the solutions in a customized manner.</p>
  // },
  // {
  //   question: "Q10: Why choosing the best implementation partner is crucial when switching to BMC Solutions?",
  //   answer:
  //     <p className="w-100" style={{ textAlign: "justify" }}>Answer: BMC Solutions implementation requires thorough product expertise and extensive experience developing, customizing, deploying, and servicing the ITSM tools. If you assign this crucial task to any inexperienced firm, your business may be at risk, as you may not be able to track workflow, projects, and customer service requests in time. So, it is always better to join hands with reputed implementation BMC Solutions Service Providers with adequate experience in BMC Solutions implementation.</p>
  // },
];
{/* ------------------------------End Faq Q/A--------------------------------- */ }

const Services = () => {
  return (
    <>
      <PageTitle page="Testing & QA" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="Testing & QA" />

      <div className="goal-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h4 className="nunito-font">
                Empowering You to Meet Quality Parameters & Standards 
                </h4>
                <p className="w-100" style={{ textAlign: "justify" }}>
                  Leverage our  Software Quality Assurance & Testing expertise to draw, monitor, and meet your quality standards for your software solutions and apps. Our QA experts adopt a modern approach for Analytics in Testing Drive Priorities for QA. 
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}> We accelerate your software testing processes by implementing automated testing methods. Our QA services aim to help you craft excellent software products that your customers will love within the stipulated project schedules.</p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
                <Image src={itsm} alt="man-with-son-image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="goal-area with-top-border ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image">
                <Image src={bmcheliximplementation} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="goal-content">
                <h4 className="nunito-font">
                Importance of Automated Testing to Ensure Consistent Quality 
                </h4>
                {/* <span className="sub-title">BMC Helix Implementation</span> */}
                <p className="w-100" style={{ textAlign: "justify" }}>Software testing and quality assurance play a critical role in the delivery of software products, applications, e-commerce portals, SaaS solutions, and IoT set-up involving software interacting with hardware components. 

It is crucial to work with Software Quality Assurance & Testing company like ours to have a team of experts on your side. We use the best technology and methods to test your product performance.  

 

We plan and execute a holistic software testing lifecycle without shortcuts for deliverables, including software, apps, IoT devices, and more. We perform our job within the timeframe through automated testing methods. 
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>We understand the importance of complying with the industry standards and your clients’ guidelines. Our software testing & QA experts test every software component and module within your product to verify its performance and compliance with the functional requirements.  

 

Automated testing methodology accelerates the overall software testing process and helps you ensure excellent quality of software products adhering to the project schedule and deadlines. </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="goal-area ptb-100 br-bottom-100">
        <div className="container">
          <div className="row align-items-center">
          <p><h2><b> How Our Testing & QA Service Lifecycle Works</b></h2> 

We ensure your software solutions meet your requirements by performing testing and quality assurance activities from the early stage of product development.  

 

Our software testing and QA experts don’t let any aspect of your software product be overlooked. Thus, you can rest assured that the software you deliver is of excellent quality and complies with its functional requirements.  </p>
            <div className="col-lg-12 col-md-12">
              <div className="goal-text">

                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Strategizing </h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>Initially, our software testing & QA experts review your project documentation and discuss the scope of work, schedule, and proposed product roadmap with you. Accordingly, we create a testing plan to conduct necessary tests at different stages of your product lifecycle.
                    </p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Designing </h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                    We design test cases based on the software components, modules, integrations, and the performance of the resulting system. If you need, we will suggest and deploy the necessary automated testing stack to accelerate the testing process. 
                    </p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Deployment </h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                    We conduct the required tests, suggest quality assurance measures, and report the outcomes to you. We amend the test cases and scripts as and when required. We coordinate with your product management team to rectify flaws we find during the testing activities
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="goal-text">

                <ul className="overview-list">
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Regulation </h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                    We verify if all the errors and flaws in your products are rectified. We check if the components and integrated system work per the functional requirements. We conduct regression testing to ensure the software product you develop complies with the agreed-upon standards
                    </p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Delivery </h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                    We verify your scope of work, test your deliverables, and conduct user acceptance tests coordinating with your clients or end users. We perform a final test and report the outcomes to you.  
                    </p>
                  </li>

                  <h3><b><i><center>  Share Your Software Testing & QA Requirements with Our Experts Today! </center></i></b></h3>
                  {/* <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>What is Helix Change Management</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>BMC Helix Service Providers allow agile DevOps organizations to maximize their delivery and improve the overall quality of their services. Helix ITSM Consultants ensure governance and compliance to pursue their journey to become an Autonomous Digital Enterprise. BMC Helix is a simplified change request technique through a guided process.</p>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="shape8">
          <Image src={shapeImg8} alt="shape" />
        </div>
      </div>

      <div className="services-area with-top-border pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2 className="nunito-font">Our Range of Software Testing & QA Services </h2>
            <span className="sub-title purple-color">We offer a wide range of QA Testing and Software Quality services to cover all stages of your product lifecycle, functionality, performance, and much more.
             Specify Your Testing & QA Needs Right Away! </span>

          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={event} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Functional Testing </a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>We configure software components and modules to derive test cases and adopt best testing and QA practices to conduct automated tests. We validate software components for their functional requirements and specifications. We adopt a well-designed testing process to verify if every software component meets the functionality needs. .</p>
                {/* <p className="w-100" style={{ textAlign: "justify" }}></p> */}
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={dealing} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Sanity Testing </a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>Our QA experts quickly test if any claim, calculation result, or produced outcome is rational and correct. The ultimate aim of our sanity testing is to ensure that the altered code works effectively.  .</p>
                {/* <p className="w-100" style={{ textAlign: "justify" }}>
                </p> */}
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={change} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Regression Testing </a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>After any change to the code, integration, or other mechanisms within your product, we conduct regression testing to ensure the software runs correctly and serves the functional requirements. .</p>
                {/* <p className="w-100" style={{ textAlign: "justify" }}></p> */}
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={multicloud} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Integration Testing </a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>Our Software testing & QA experts conduct appropriate tests on the software components and modules as a group. We follow the best practices to evaluate the compliance of each software component and module with their functional necessities.  </p>
                {/* <p className="w-100" style={{ textAlign: "justify" }}></p> */}
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={insights} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>System Testing </a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>We conduct appropriate QA Testing and Software Quality attempts to ensure your complete integrated system works according to the set requirements. The validation of the entire system to comply with the specifications ensure effective interactions between different components for accurate functioning.</p>
                {/* <p className="w-100" style={{ textAlign: "justify" }}></p> */}
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={Knowledge} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>User Acceptance Testing </a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>We provide QA & Technical Review Services to conduct user acceptance tests through your end users before the product moves into the production stage. UAT is usually the stage after internal testing before taking the software product to the production environment. 

</p>
                {/* <p className="w-100" style={{ textAlign: "justify" }}></p> */}
              </div>
            </div>
            {/* <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={helixdigitalworkplace} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>BMC Helix Digital Workplace</a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>Contemporary self-service offers spontaneous and intelligent customer experience to enable organizations to step into future work. Intellectual self-service enables employees to fast resolve problems before submitting a request. A cohesive service catalog removes misperception, by presenting services from manifold business units in a single set.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>A customer interface helps employees obtain what they want with a one-stop-shop solution for services. Omni-channel and knowledge management facilitates employees to get the best information, as per their requirements. In addition, easy administration with drag-and-drop allows workflow customization. Furthermore, configuration enhancement enables faster resolution and improved user experience.</p>
              </div>
            </div> */}
            {/* <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={Assets} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Management of Assets</a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>BMC Helix ITSM also delivers comprehensive lifecycle management of IT assets, from the stage of procurement to the end of the product lifecycle. This helps to track asset devaluation in the due course of time. Moreover, with BMC Helix Trainings, you can ensure compliance, evading audit costs along with software license management.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>Further, it identifies contract violations and buying opportunities. You can know exactly about the number of assets, asset locations, and the people using them. Consequently, you can make informed decisions about IT changes. Moreover, you can make use of remote support and automated configuration functionalities for client systems.</p>
              </div>
            </div> */}
            {/* <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={Configuration} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Configuration Management</a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>This feature of BMC Helix ITSM supports the ITSM process through a single-source reference for all IT infrastructure and services. Moreover, it helps to enhance the user experience with a contemporary, persona-based User Interface. You can boost efficiency and stability with a single source of reference for all IT infrastructure and services.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>Further, it decreases costs through automating tasks that earlier required manual interference. IT managers can reduce risk, through an improved understanding of change dependencies and operate services with strong insights into parameters. This allows smooth integration between support and operational processes.</p>
              </div>
            </div> */}
            {/* <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-services-item style-two">
                <div className="icon">
                  <Image src={service} alt="" />
                </div>
                <h5 className="nunito-font">
                  <a>Service Request Management</a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>The service request management feature of BMC Helix Implementation helps you to describe a catalog of service requests. This reflects the services provided to internal and external clients. You can quickly obtain efficiency in the delivery and IT services support. Self-service solutions of BMC Helix ITSM implementation include incidents, modifications, assets, and work orders.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>Further, it offers a centralized catalog of requests like price, service targets, and approval guidelines to mechanize and monitor standard requests. This allows self-help through knowledge access for decreasing the number of calls to the service desk.</p>
              </div>
            </div> */}
            <p className="w-100" style={{ textAlign: "justify" }}><h2>Share Your Software Testing Needs with Us .</h2></p>
            <p className="w-100" style={{ textAlign: "justify" }}>If you are looking for a software testing and QA partner to help you craft and deliver the best software solutions, look no further and fill up the following form. Our experts will initiate a discussion with you to understand your requirements in detail. We will let you know what best we can do..</p>
          </div>
        </div>
      </div>

      <div className="faq-area pb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title dark-green-color">

            </span>
            <h2 className="nunito-font">
            Consult our Software Testing & QA Experts for Your Queries 
            </h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg- col-md-12">
              <div className="faq-accordion">
                <div className="accordion" id="faqAccordion">
                  <Accordion questionsAnswers={questionsAnswers} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SubscribeStyle1 />
      <FooterOne />
    </>
  );
};

export default Services;