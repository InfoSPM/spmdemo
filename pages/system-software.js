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
  {
    question: "Q1: What is the benefit of adopting BMC Smart IT?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Answer: BMC Smart IT allows you to create tickets faster. You can create multiple ticket types, such as incidents, work orders, service requests, or change requests with minimal values to fill in. You can use the Smart Record feature to take notes while interacting with your clients. Again, you can collaborate with co-workers effectively through easy and faster integration with various business apps.</p>
  },
  {
    question: "Q2: Does BMC MyIT allow your team members to tackle service requests independently?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Answer: Yes, BMC MyIT allows you to decentralize your work for small instances. Any team member can tackle a particular service request individually with his or her own device. Thus, multiple service requests can be addressed through various team members at the same time, remotely. This feature improves the reaction time to provide services to your clients and helps you achieve better customer satisfaction.</p>
  },
  {
    question: "Q3: Is BMC DWP 'people-centric?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Answer: Yes, the solution is people-centric as it is designed to provide consumer-like experiences to the managerial members of your teams. Thus, your workforce can enjoy the flexibility to work on the scheduled task, while your managers can seamlessly govern the working process, the technology being leveraged, and the team members. Work with certified vendors to deploy BMC DWP in a customized manner for seamless coordination.</p>
  },
  {
    question: "Q4: How is BMC DWPA better than BMC DWP?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Answer: Being the latest version of BMC DWP, the BMC DWPA has some advanced features. BMC DWPA provides better access to your clients so that they can raise service requests to the concerned departments of your organizations such as HR, Support, and so on. This feature adds flexibility to the overall work culture of your organization.</p>
  },
  {
    question: "Q5: Can I get a single dashboard to accommodate the complete service catalog?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Answer: By implementing BMC Digital Workplace Catalog, you can bring all service requests together to a centralized dashboard. This feature helps you manage various service requests, assign service and support tasks to the concerned team members, and monitor the progress of every service request effectively.</p>
  },
  {
    question: "Q6: How do BMC Solutions add flexibility to your service operations?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Answer: BMC Solutions are gaining popularity in the ITSM landscape due to the flexibility they offer. Firstly, most BMC Solutions are accessible through various browser-enabled devices. Thus, it is easy to keep control of your team???s activities and monitor the progress of every project from wherever you are. Then comes the intuitive dashboard that helps you effectively communicate, make correct decisions, and create reports.</p>
  },
  {
    question: "Q7: How can the advanced accessibility of BMC Solutions set you free?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Answer: BMC Solutions are accessible through various browser-enabled devices and are compatible with different operating systems, such as Android, iOS, Windows, and Mac. Thus, you can stay connected with your work through your desktops, laptops, tablet phones, and smartphones from your offices, homes, or wherever you are.</p>
  },
  {
    question: "Q8: How can you achieve better productivity by switching to BMC Solutions?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>The entire team would be clear about what they are supposed to do. The team also gets real-time insights and can prepare reports in easy-to-understand formats, like graphs, bar charts, and pie charts. As all the crucial matters are brought to a single dashboard, you can strategize your work accordingly. Assigning implementation to BMC Solutions Managed Services experts is crucial here. That improves the individual performance of every team member, and the organization achieves better productivity.</p>
  },
  {
    question: "Q9: Is it a lengthy and laborious process to implement BMC Solutions for your business?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Answer: No. If you partner with the best asset customization service providers, it takes only a few days to switch to BMC Solutions. Thus, you can get going with the most appreciated ITSM and workflow orchestration tools very soon. Collaborate with an experienced BMC Solutions Consultant to adopt the solutions in a customized manner.</p>
  },
  {
    question: "Q10: Why choosing the best implementation partner is crucial when switching to BMC Solutions?",
    answer:
      <p className="w-100" style={{ textAlign: "justify" }}>Answer: BMC Solutions implementation requires thorough product expertise and extensive experience developing, customizing, deploying, and servicing the ITSM tools. If you assign this crucial task to any inexperienced firm, your business may be at risk, as you may not be able to track workflow, projects, and customer service requests in time. So, it is always better to join hands with reputed implementation BMC Solutions Service Providers with adequate experience in BMC Solutions implementation.</p>
  },
];
{/* ------------------------------End Faq Q/A--------------------------------- */ }

const Services = () => {
  return (
    <>
      <PageTitle page="System & Software" />
      <Navbar />
      <PageTopTitle
        subTitle=""
        title="System & Software" />

      <div className="goal-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="goal-content style-two">
                <h4 className="nunito-font">
                Our Wide-Ranging System & Software Service Portfolio 
                </h4>
                
                <h5><center>DevOps</center></h5>
                <p className="w-100" style={{ textAlign: "justify" }}>
                Our well-designed integrated solutions and???DevOps managed services???help your businesses reduce manual intervention, and manual errors, and automate workflow, release cycles, and service virtualisation to achieve greater scalability. 

We make deploying your workloads easy with DevOps agility. Our DevOps experts perform coding in hours to accelerate your business processes, development workflow, and IT frameworks. We help you deliver your excellent software solutions faster. 
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>We help you make effective???DevOps use in application development???to align with the evolving IT and software delivery arena. We help you adopt the DevOps culture for a faster time to market. Please work with us to adopt DevOps solutions to enhance???DevOps use in the Infrastructure process,???and accelerate ideation to delivery of software solutions and apps to stay competitive. </p>
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
                <center>Embedded Services</center>
                </h4>
                {/* <span className="sub-title">BMC Helix Implementation</span> */}
                <p className="w-100" style={{ textAlign: "justify" }}>We offer the latest technology in???embedded platform development, including FPGA, ASIC, and DSPs. We are the one-stop solution for all your mechanical, PCB, software, and hardware requirements. 
                </p>
                <p className="w-100" style={{ textAlign: "justify" }}>Our embedded software and integration meet hardware and help you harness the latest embedded technology in any smart device</p>
                
                  <li>We help you adopt rapid changes in technology. We provide embedded engineering services to suit your needs and business goals. </li>
                  <br></br>
                  <li>We define the architecture or firmware, design, and implement embedded solutions for Linux-based devices and other platforms. </li>
                  <br></br>
                <li>We design automatic parameter monitoring systems for various vehicles by developing middleware and integrating 3rd party applications. </li>
                <br></br>
                <li>We ensure that Linux distributions are effectively embedded with the IoT software irrespective of the hardware you use. </li>
                <br></br>
                <li>We ensure the best Return on Investment through extensive embedding and testing of solutions developed for you. </li>
                <br></br>
                <li>Our designers create high-performing, efficient, and reliable IoT devices by adopting the System-on-Model approach.???</li>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <div className="goal-area ptb-100 br-bottom-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="goal-text">
              <h2><center>Data Engineering </center></h2>
              <p>We leverage the latest???Data Engineering Technology???for data mining, reconditioning, and more to help you establish your new businesses, draw winning strategies, and expand your business in new territories.??? </p>
              <p>We enable data-driven decisions and approach to scale your business. Our???data engineering service???starts with drawing data engineering roadmaps to resolve your unique business problems. We help you obtain data-driven insights for business establishment, planning, and entering into new market territories for expansion. </p>
              <li>We monitor your operations to debug issues by adopting real-time preventive measures. We provide actionable, data-driven insights to grow your business by leveraging the latest technology, like machine learning algorithms and R programming language. </li>
              <br></br>
              <li>We help you collect data, and inspect it by combining it with complementary information to get actionable insights. </li>
              <br></br>
              <li>We enhance the supply chain of your asset management by streamlining data flow to various connected devices. </li>
              <br></br>
              <li>We leverage the latest networks like GoogleNET and ResNET to enable AI-driven machine vision services, such as image classification, super-resolution, and segmentation. </li>
              <br></br>
              <br></br>
              <h3>Our Approach to System & Software Services </h3>

                <ul className="overview-list">
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    
                    <h4>Analyse </h4>
                    <p className="w-100" style={{ textAlign: "justify" }}>We examine the trends, patterns, and criteria through a micro-view of your enterprise objectives, processes, and more. 
                    </p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Build </h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                    We adopt agility to develop excellent solutions. We work per a well-thought product roadmap and assess the progress at every stage to ensure the best quality and timely release.
                    </p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1200">
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Implement </h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                    We play our role in helping clients achieve their business goals by implementing software solutions across various domains and technologies.??? 

                    </p>
                  </li>
                </ul>
                <br></br>
                <br></br>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="goal-text">
                <h5>Why Choose SPM Global Technologies </h5>
                <p>We create excellent engineering experiences by applying rich code.</p>
                

                <ul className="overview-list">
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Fabulous Tech Workforce </h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                    We engage the most talented and experienced software professionals to execute every project to make your business idea or requirement a reality. We cover every stage of micro-management from ideation to release and support for the high-performing solutions being a???top core system & software company. 
                    </p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Excellent Journey Assured </h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>
                    We provide capability-enhancing engineering services to ensure a reliable and seamless journey. We provide system and software solutions to help you meet your business objectives by keeping engineering at the core of functioning. 
                    </p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Great Value Addition </h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>We ensure service efficiency by adding value to the entire project execution, from ideation, architecture set-up, development, and development of the system and software solutions for you. Our most competitive pricing keeps us ahead of others. </p>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    <i className="flaticon-draw-check-mark"></i>
                    <h3>Faster and Integrated Delivery</h3>
                    <p className="w-100" style={{ textAlign: "justify" }}>Our coding experts work together to adopt agile culture to deliver your code well in time and free from errors. We follow best practices at every stage, including strategizing, structuring, design, coding, development, to implementation. Our impeccable processes result in the best solutions as per your needs. </p>
                  </li>
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
            <h2 className="nunito-font">What are the Features of BMC Helix ITSM?</h2>
            <span className="sub-title purple-color">Several IT organizations are depending on ITSM services. BMC Helix ITSM has the following features:</span>

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
                  <a>Event & Problem Management</a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>BMC Helix Service Providers facilitate building and resolving events quickly through smart, contextual, and practical event matching. BMC Helix Support Services allow natural language, unshaped data access of tickets, and recommended techniques of solving issues in an accurate manner. BMC Helix Vendors make use of improved service analytics to drive efficiency.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>It helps to get lower call volumes with Omni-channel self-service, through BMC Helix Digital Workplace. Further, it makes the best use of agent productivity with modern User Interfaces. BMC Helix works with the best practices of ITIL (IT Infrastructure Library) with complete training and innovative ITIL procedures.</p>
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
                  <a>Dealing with Practical Problems</a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>BMC Helix ITSM integrates Artificial Intelligence for identifying clusters of recurring events. This helps spontaneous analysis, and reorganizing problem management. Further, this enables agents to emphasize challenge areas and decrease load of the management team.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>Moreover, this facilitates automating tedious and manual problem management practices. Analysis through Advanced AI k algorithms helps to accurately identify clusters of recurring incidents. Hence, there is a seamless transfer from problem recommendation, and investigation to closure. Further, real-time incident correlation allows for resolving issues from the analyzed trends.
                </p>
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
                  <a>Change Release Management</a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>BMC Helix ITSM allows agile DevOps enterprises to maximize their process of delivery and quality of service. This feature enables a simplified change request process with a Drag-and-drop change calendar, automated contextual clash detection as well as making an impact analysis.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>Added to that, there is improved risk analytics, programming routine changes without interaction along with the delivery of crucial information for the decision-making of the agents.</p>
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
                  <a>BMC Helix Multi-Cloud Broker</a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>This feature helps to deliver a flawless service through multi-cloud environments. IT managers work in a flexible and configurable cloud-based multi-service. Using this facet, the IT project team members have effective collaboration with various BMC Helix ITSM Third-Party Vendors for resolving issues.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>Helix ITSM Consultants integrate events, problems, and change management through significant agile development and audit performance competencies for evaluating service integrity. Moreover, Integrated Security Information & Event Management capabilities boost service and operational efficacies.</p>
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
                  <a>Insights</a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>BMC Helix ITSM provides the insights to visualize cross-functional services as well as operational management. Powerful analytics and the automatic formation of natural language narratives enable users to get a quick insight into substantial data. In addition, IT professionals visualize data about Changes, Incidents, Metrics, Chatbot Conversations, Service Requests, Events, Capacity, etc. There are several exclusive visualizations in BMC Helix ITSM.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>Further, you can get customized reports and dashboards and make use of the storyboard feature for producing slide shows with practical data through competent BMC Helix Training. You can also obtain automated insights based on the significance of data and collaborate in a flawless manner.</p>
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
                  <a>Knowledge Management</a>
                </h5>
                <p className="w-100" style={{ textAlign: "justify" }}>BMC Helix ITSM Third Party Vendor helps you get cohesive, industry-leading knowledge management competencies with smart recommendations. This facilitates bringing the correct information to the end-users and agents for resolving issues in a fast and accurate manner. Integrated knowledge-centered Service enables fast and accurate delivery.</p>
                <p className="w-100" style={{ textAlign: "justify" }}>In addition, you can get lifecycle management of knowledge articles for getting up-to-date information and curation. Besides, there is the availability of robust multi-media content for enhanced support. BMC Helix Knowledge Management solutions also facilitate real-time conversions and circumstantial responses, improving out-of-the-box capabilities.</p>
              </div>
            </div>
            <div
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
            </div>
            <div
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
            </div>
            <div
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
            </div>
            <div
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
            </div>
            <p className="w-100" style={{ textAlign: "justify" }}>CIOs, Change Managers, IT Operations Managers, as well as Service Desk Managers prefer this predictive, innovative, and intelligent service management for better, faster, accurate, and smarter delivery in a cost-effective way. As per industry research, it is found that organizations obtained significant savings with BMC Helix Vendors, maximizing return on investment.</p>
            <p className="w-100" style={{ textAlign: "justify" }}>So, why are you waiting for me? Choose BMC Helix ITSM Third-Party Vendor to obtain modern persona-based UX optimized across devices and cognitive automation capabilities. You would be benefitted from IT service support function, integration, and spontaneous change management capabilities. Seek one of the best BMC Helix service providers to get smart reporting, out-of-the-box ITIL processes, and comprehensive knowledge management.</p>
          </div>
        </div>
      </div>

      <div className="faq-area pb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title dark-green-color">

            </span>
            <h2 className="nunito-font">
              Frequently Asked Questions
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