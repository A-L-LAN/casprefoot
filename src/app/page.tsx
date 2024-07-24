'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from '../globals.css';

const Home = () => {
  return (
    <div className="bg-caspre-secondary relative" style={{ width: '1280px', height: '6014px', top: '0px', left: '270px' }}>
      {/* Hero Section */}
      <div className="relative w-[1283px] h-[752px] mx-auto bg-caspre-bg text-caspre-secondary"> 
        <Image src="/Rectangle 11.png" alt="Rectangle 11" width={1283} height={752} className="absolute top -220px left-0 w-full h-full" />

        {/* Navbar */}
        <div className= " absolute top-[30px] left-[88px] w-[1283] flex items-center justify-between w-[950px]">
          <Image src="/Rectangle 5.png" alt="Caspre Logo" width={94} height={43} className="w-[94px] h-[43px]" />
          <div className="flex items-center space-x-8 ml-auto">
          <div className="absolute top-[68.5px] left-[351px] w-[581px] border-t border-white"></div> {/* Line 1 */}
            <p className="text-[15px] leading-[20.46px]">Home</p>
            <p className="text-[15px] leading-[20.46px]">How it Works</p>
            <p className="text-[15px] leading-[20.46px]">About Us</p>
            <p className="text-[15px] leading-[20.46px]">Resources</p>
            <p className="text-[15px] leading-[20.46px]">Contact Us</p>
            <button className="bg-caspre-primary text-caspre-secondary ml-auto px-4 py-1.5 rounded-xl border">Sign in</button>
          </div>
        </div>

        {/* First CTAs */}
        <div className=" absolute top-[0px] mt-[210px] ml-[88px]">
          <h1 className="font-bold text-[39px] leading-[53.2px] w-[550px] text-caspre-primary">
            Transform Your Credit Future with Caspre's Cutting-Edge AI
          </h1>
          <p className="mt-[20px] w-[434px] text-[15px] leading-[20.46px] text-caspre-primary">
            Utilize advanced AI for unmatched accuracy in credit scoring, unlock comprehensive insights, and elevate your lending decisions to improve risk management and increase profitability.
          </p>
          <div className="mt-[27px] flex space-x-4">
            <button className="w-[100px] h-[31px] bg-[#D9D9D9] text-white rounded-[25px]">Get Started</button>
            <button className="w-[137px] h-[35px] bg-[#D9D9D9] text-white rounded-[25px]">Learn More</button>
          </div>
        </div>

        {/* Credit Image */}
        <div className="absolute top-[101px] left-[638px]">
          <Image src="/Rectangle 8.png" alt="Credit Card Image" width={562} height={586} className="w-[562px] h-[586px] shadow-credit" />
        </div>

        {/* Join Placeholder */}
        <div className="absolute bottom-[-2px] left-[343px] bg-[#FFFFFF] text-[#0C1424] rounded-md p-4 w-[593px] h-[69px] flex items-center justify-center">
          <p className="text-[20px] leading-[20.46px]">Join 45+ financial institutions growing with <span className="font-bold">Caspre</span></p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="relative w-[1283px] h-[752px] mx-auto mt-[10px] bg-caspre-bg">
        {/* Banks Logos */}
        <div className="flex justify-between items-center mt-[17px]">
          <Image src="/Rectangle 25.png" alt="Chase Bank" width={129} height={50} className="w-[129px] h-[50px]" />
          <Image src="/Rectangle 24.png" alt="Family Bank" width={129} height={50} className="w-[129px] h-[50px]" />
          <Image src="/Rectangle 23.png" alt="Diamond Trust Bank" width={129} height={50} className="w-[129px] h-[50px]" />
          <Image src="/Rectangle 22.png"alt="EQUITY" width={68} height={43} className="w-[68px] h-[43px]" />
          <Image src="/Rectangle 21.png" alt="Absa" width={57} height={50} className="w-[57px] h-[50px]" />
          <Image src="/Rectangle 20.png" alt="National Bank" width={129} height={50} className="w-[129px] h-[50px]" />
        </div>

        {/* Rectangle 36 */}
        <div className=" left-[88px] w-[1104px] h-[455px] bg-caspre-accent rounded-md mt-[10px] p-8">
          <p className="absolute top-[120px] left-[485px] font-nunito font-bold text-[30px] leading-[40.92px] text-center text-[0C1424]">Our Value Proposition</p>
          <p className="absolute top-[150px] left-[530px] font-nunito font-normal text-[18px] leading-[24.55px] text-center text-caspre-bg mt-4">We are different, here is why.</p>

         <div className= " h-[700px] flex items-center">
          {/* Box 1 */}
          <div className="w-[325px] h-[270px] bg-caspre-secondary rounded-md shadow-credit p-4 flex flex-col">
            <Image src="/Group 2.png" alt="Credit Scoring Accuracy" width={60} height={60} />
            <p className="font-nunito font-bold text-[20px] leading-[27.28px] text-center text-[0C1424] mt-4">Credit Scoring Accuracy</p>
            <p className="font-nunito font-normal text-[15px] leading-[20.46px] text-caspre-bg mt-4">
              Utilize advanced AI and behavioural analytics to achieve unparalleled accuracy in credit scoring, enhancing your risk management capabilities.
            </p>
          </div>

          {/* Comprehensive Credit Insights */}
          <div className="w-[325px] h-[270px] bg-caspre-secondary rounded-md shadow-credit p-4 flex flex-col items-center">
            <Image src="/Group 3.png" alt="Comprehensive Credit Insights" width={60} height={60} />
            <p className="font-nunito font-bold text-[20px] leading-[27.28px] text-center text-caspre-bg mt-4">Comprehensive Credit Insights</p>
            <p className="font-nunito font-normal text-[15px] leading-[20.46px] text-center text-caspre-bg mt-4">
              Gain deep, actionable insights from detailed credit profiles, empowering your institution to make informed lending decisions and improve client offerings.
            </p>
          </div>

          {/* Enhanced Profitability */}
          <div className="w-[325px] h-[270px] bg-caspre-secondary rounded-md shadow-credit p-4 flex flex-col items-center">
            <Image src="/Group 4.png" alt="Enhanced Profitability" width={60} height={60} />
            <p className="font-nunito font-bold text-[20px] leading-[27.28px] text-center text-caspre-bg mt-4">Enhanced Profitability</p>
            <p className="font-nunito font-normal text-[15px] leading-[20.46px] text-center text-caspre-bg mt-4">
              Improve your bottom line through advanced risk management, operational efficiency, and increased client satisfaction driven by our cutting-edge AI technology.
            </p>
          </div>
         </div>
        </div>
      </div>
      
      
      {/* Section 3 */}
      <div className= "flex"> 
        {/* first child */}
        <div>
          <div style={{ top: '1516px', left: '88px' }}>
                <p className="font-nunito font-medium text-15px text-caspre-blue w-[280px] h-20px">
                    BEHAVIOURAL ANALYTICS SYSTEM
                </p>
            </div>

            <div className="absolute" style={{ top: '1544px', left: '0px' }}>
                <p className="font-nunito font-bold text-30px text-white w-[428px] h-82px leading-tight">
                    We customize credit solutions to match spending patterns.
                </p>
            </div>

            <div className="absolute" style={{ top: '1640px', left: '0px' }}>
                <p className="font-nunito font-normal text-15px text-caspre-dark w-[420px] h-100px">
                    Upload financial documents such as bank and mobile money statements, and analyze spending patterns to cluster users for tailored Customer offerings. This system uses advanced algorithms to provide a deep understanding of customer behaviours, helping you to make data-driven decisions.
                </p>
            </div>

            {/* Button */}
            <div className="absolute" style={{ top: '1820px', left: '0px' }}>
              <button
               style={{
               width: '157px',
               height: '44px',
               borderRadius: '25px',
               backgroundColor: '#4361EE',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               border: 'none',
               cursor: 'pointer',
               position: 'relative'
               }}
      >
              <span
               style={{
               fontFamily: 'Nunito',
               fontWeight: 600,
               fontSize: '16px',
               lineHeight: '21.82px',
               color: '#FFFFFF',
               marginRight: '8px' // Adjust spacing between text and icon
              }}
              >
              Learn more
             </span>
              <img
                src="/arrow-right-circle.png"
                alt="arrow to right"
                style={{
                width: '24px',
                height: '24px'
              }}
              />
             </button>
            </div>
          </div>
          
          {/* second child */}
            <div className="absolute" style={{ width: '550px', height: '422px', top: '1464px', left: '640px', borderRadius: '10px' }}>
                <img src="/Rectangle 38.png" alt="Rectangle 38" className="object-cover w-full h-full rounded-md" />
            </div>
       </div>

       {/* Section 4 */}
      <div className= "flex"> 
        {/* first child */}
        <div className="absolute" style={{ width: '550px', height: '422px', top: '1942px', left: '0px', borderRadius: '10px' }}>
                <img src="/Rectangle 41.png" alt="Rectangle 41" className="object-cover w-full h-full rounded-md" />
        </div>
          
          {/* second child */}
          <div>
          <div className= "absolute" style={{ top: '1993px', left: '772px' }}>
                <p className="font-nunito font-medium text-15px text-caspre-blue w-[280px] h-20px">
                     CREDIT PROFILE CREATION
                </p>
            </div>

            <div className="absolute" style={{ top: '2021px', left: '772px' }}>
                <p className="font-nunito font-bold text-30px text-white w-[428px] h-82px leading-tight">
                Your customers' profiles are backed by facts.
                </p>
            </div>

            <div className="absolute" style={{ top: '2118px', left: '772px' }}>
                <p className="font-nunito font-normal text-15px text-caspre-dark w-[420px] h-100px">
                Generate comprehensive credit profiles that summarize financial habits and credit history. This feature offers actionable financial advice and suggestions for improving credit scores, enabling you to support your clients more effectively.
                </p>
            </div>

            {/* Button */}
            <div className="absolute" style={{ top: '2287px', left: '772px' }}>
              <button
               style={{
               width: '157px',
               height: '44px',
               borderRadius: '25px',
               backgroundColor: '#4361EE',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               border: 'none',
               cursor: 'pointer',
               position: 'relative'
               }}
      >
              <span
               style={{
               fontFamily: 'Nunito',
               fontWeight: 600,
               fontSize: '16px',
               lineHeight: '21.82px',
               color: '#FFFFFF',
               marginRight: '8px' // Adjust spacing between text and icon
              }}
              >
              Learn more
             </span>
              <img
                src="/arrow-right-circle.png"
                alt="arrow to right"
                style={{
                width: '24px',
                height: '24px'
              }}
              />
             </button>
            </div>
          </div>
       </div>

       {/* Section 5 */}
      <div className= "flex"> 
        {/* first child */}
        <div>
          <div className= "absolute" style={{ top: '2525px', left: '0px' }}>
                <p className="font-nunito font-medium text-15px text-caspre-blue w-[280px] h-20px">
                     PSEUDO DATA INTEGRATION
                </p>
            </div>

            <div className="absolute" style={{ top: '2551px', left: '0px' }}>
                <p className="font-nunito font-bold text-30px text-white w-[428px] h-82px leading-tight">
                     We Factor in Everything, Including Climate
                </p>
            </div>

            <div className="absolute" style={{ top: '2649px', left: '0px' }}>
                <p className="font-nunito font-normal text-15px text-caspre-dark w-[420px] h-100px">
                Incorporate geolocation and external factors like climate and economic conditions into your risk assessments. By integrating regional data, this feature refines credit scoring, providing a more accurate and nuanced view of creditworthiness.
                </p>
            </div>

            {/* Button */}
            <div className="absolute" style={{ top: '2802px', left: '0px' }}>
              <button
               style={{
               width: '157px',
               height: '44px',
               borderRadius: '25px',
               backgroundColor: '#4361EE',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               border: 'none',
               cursor: 'pointer',
               position: 'relative'
               }}
      >
              <span
               style={{
               fontFamily: 'Nunito',
               fontWeight: 600,
               fontSize: '16px',
               lineHeight: '21.82px',
               color: '#FFFFFF',
               marginRight: '8px' // Adjust spacing between text and icon
              }}
              >
              Learn more
             </span>
              <img
                src="/arrow-right-circle.png"
                alt="arrow to right"
                style={{
                width: '24px',
                height: '24px'
              }}
              />
             </button>
            </div>
          </div>
          
          {/* second child */}
            <div className="absolute" style={{ width: '550px', height: '422px', top: '2453px', left: '640px', borderRadius: '10px' }}>
                <img src="/Rectangle 42.png" alt="Rectangle 42" className="object-cover w-full h-full rounded-md" />
            </div>
       </div>

       {/* Section 6 */}
      <div className= "flex"> 
        {/* first child */}
        <div className="absolute" style={{ width: '550px', height: '422px', top: '2950px', left: '0px', borderRadius: '10px' }}>
                <img src="/Rectangle 44.png" alt="Rectangle 44" className="object-cover w-full h-full rounded-md" />
        </div>
          
          {/* second child */}
          <div>
          <div className= "absolute" style={{ top: '3018px', left: '772px' }}>
                <p className="font-nunito font-medium text-15px text-caspre-blue w-[280px] h-20px">
                    ENTITY SCORING SYSTEM
                </p>
            </div>

            <div className="absolute" style={{ top: '3045px', left: '772px' }}>
                <p className="font-nunito font-bold text-30px text-white w-[428px] h-82px leading-tight">
                    We Evaluate Risk, So You Don't Have To
                </p>
            </div>

            <div className="absolute" style={{ top: '3143px', left: '772px' }}>
                <p className="font-nunito font-normal text-15px text-caspre-dark w-[420px] h-100px">
                    Evaluate investment entities such as projects or companies with detailed risk vs. value analysis. Access comprehensive reports, including projected ROI and risk factors, to make informed investment decisions and optimize your portfolio.
                </p>
            </div>

            {/* Button */}
            <div className="absolute" style={{ top: '3285px', left: '772px' }}>
              <button
               style={{
               width: '157px',
               height: '44px',
               borderRadius: '25px',
               backgroundColor: '#4361EE',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               border: 'none',
               cursor: 'pointer',
               position: 'relative'
               }}
      >
              <span
               style={{
               fontFamily: 'Nunito',
               fontWeight: 600,
               fontSize: '16px',
               lineHeight: '21.82px',
               color: '#FFFFFF',
               marginRight: '8px' // Adjust spacing between text and icon
              }}
              >
              Learn more
             </span>
              <img
                src="/arrow-right-circle.png"
                alt="arrow to right"
                style={{
                width: '24px',
                height: '24px'
              }}
              />
             </button>
            </div>
          </div>
       </div>

       {/* Section 7 */}
      <div className="relative w-[1283px] mx-auto mt-[200px]">
        {/* Rectangle 47 */}
        <div className="absolute w-[1283px] h-[252px] rounded-md p-8 top-[1750px] left-[0px] flex flex-col">
         <Image src="/Rectangle 47.png" alt="Rectangle 47" width={1283} height={252} className="absolute top 1750px left-[0px] w-full h-full" />
          <div className="absolute top flex justify-between mt-2">
            <div className="text-center">
              <p className="font-nunito text-[60px] leading-[81.84px] text-caspre-accent">45</p>
              <p className="font-nunito text-[18px] leading-[24.55px] text-caspre-secondary">Financial institutions trust Caspire's credit scoring abilities</p>
            </div>
            <div className="text-center">
              <p className="font-nunito text-[60px] leading-[81.84px] text-caspre-accent">20,000+</p>
              <p className="font-nunito text-[18px] leading-[24.55px] text-caspre-secondary">Client's credit scores have been accurately determined by Caspre</p>
            </div>
            <div className="text-center">
              <p className="font-nunito text-[60px] leading-[81.84px] text-caspre-accent">3+</p>
              <p className="font-nunito text-[18px] leading-[24.55px] text-caspre-secondary">Years Caspre has been revolutionising the Financial space</p>
            </div>
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="absolute top-[2040px] left-[88px] w-[1104px] mt-8 p-8">
          <p className="font-nunito font-medium text-[15px] leading-[20.46px] text-center text-blue-600">TESTIMONIALS</p>
          <p className="font-nunito font-bold text-[30px] leading-[40.92px] text-center text-caspre-bg mt-4">
            Don't Take Our Word for it. Here is What <span className="text-blue-600">Caspre's</span> Trusted Customers have to Say
          </p>

          {/* Testimonial Boxes */}
          <div className="flex justify-center space-x-8 mt-8">
            {/* Testimonial Box 1 */}
            <div className="w-[472px] h-[295px] bg-caspre-accent rounded-xl shadow-credit p-8 flex flex-col">
              <Image src="/Ellipse 5.png" alt="user image" width={100} height={100} className="rounded-full mx-auto" />
              <p className="font-nunito font-normal text-[15px] leading-[20.46px] text-center text-gray-700 mt-4">
                Waiting for paragraph
              </p>
              <p className="font-nunito font-bold text-[20px] leading-[27.28px] text-center text-blue-600 mt-4">
                Bendon K. Murgor
              </p>
            </div>

            {/* Testimonial Box 2 */}
            <div className="w-[472px] h-[295px] bg-caspre-accent rounded-xl shadow-credit p-8 flex flex-col">
              <Image src="/Ellipse 5.png" alt="user image" width={100} height={100} className="rounded-full mx-auto" />
              <p className="font-nunito font-normal text-[15px] leading-[20.46px] text-center text-gray-700 mt-4">
                Waiting for paragraph
              </p>
              <p className="font-nunito font-bold text-[20px] leading-[27.28px] text-center text-blue-600 mt-4">
                Bendon K. Murgor
              </p>
            </div>

            {/* Testimonial Box 3 */}
            <div className="w-[472px] h-[295px] bg-caspre-accent rounded-xl shadow-credit p-8 flex flex-col">
              <Image src="/Ellipse 5.png" alt="user image" width={100} height={100} className="rounded-full mx-auto" />
              <p className="font-nunito font-normal text-[15px] leading-[20.46px] text-center text-gray-700 mt-4">
                Waiting for paragraph
              </p>
              <p className="font-nunito font-bold text-[20px] leading-[27.28px] text-center text-blue-600 mt-4">
                Bendon K. Murgor
              </p>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <div className="absolute top-[2594px] left-[88px] w-[1104px] flex justify-center space-x-16 mt-8">
          {/* Left Arrow */}
          <div className="relative w-[75px] h-[75px] bg-caspre-accent rounded-full flex justify-center items-center">
            <Image src="/chevronleft.png" alt="left arrow" width={40} height={40} />
          </div>

          {/* Right Arrow */}
          <div className="relative w-[75px] h-[75px] bg-caspre-accent rounded-full flex justify-center items-center">
            <Image src="/chevronright.png" alt="right arrow" width={40} height={40} />
          </div>
        </div>
      </div>
      
      {/* Section 8 */}
      <div className="relative top-[2788px] left-[0px] w-[1283px] h-[682px] rounded-[10px] border border-[#C5FFE2]">
       <Image src="/Rectangle 49.png" alt="Rectangle 49" width={1104} height={682} className="relative top -220px left-[0px] w-full h-full" />
        {/* First Child */}
        <div>
          <p className="absolute top-[50px] left-[350px] w-[421px] h-[41px] font-nunito font-bold text-[30px] leading-[40.92px] text-center text-[#C5FFE2]">
            Frequently Asked Questions
          </p>
          <p className="absolute top-[110px] left-[380px] w-[350px] h-[20px] font-nunito font-normal text-[15px] leading-[20.46px] text-[#FFFFFF]">
            Clear Answers to Common Questions
          </p>
        </div>
      
        {/* Second Child */}
        <div>
          {/* First Placeholder */}
          <div className="absolute top-[180px] left-[170px] w-[881px] h-[78px] bg-[#131F35] rounded-[10px] border border-[0.5px] border-[#C5FFE2]">
            <p className="absolute top-[10px] left-[50px] w-[200px] h-[27px] font-nunito font-semibold text-[20px] leading-[27.28px] text-[#FFFFFF]">
              What is Caspre?
            </p>
            <div className="absolute top-[10px] left-[830px] w-[34px] h-[34px] rounded-full border border-[1px] border-[#C5FFE2] flex items-center justify-center">
              <p className="font-nunito font-normal text-[22px] leading-[30.01px] text-[#C5FFE2]">+</p>
            </div>
          </div>  

            {/* Second Placeholder */}
          <div className="absolute top-[280px] left-[170px] w-[881px] h-[108px] bg-[#131F35] rounded-[10px] border border-[0.5px] border-[#C5FFE2]">
            <p className="absolute top-[10px] left-[50px] w-[220px] h-[27px] font-nunito font-semibold text-[20px] leading-[27.28px] text-[#FFFFFF]">
              Who is Caspre for?
            </p>
            <p className="absolute top-[50px] left-[50px] w-[754px] h-[40px] font-nunito font-normal text-[15px] leading-[20.46px] text-[#FFFFFF]">
              Caspre is intended for financial institutions and industries that intend to harness the full power of machine learning and AI to achieve analysis of large sums of financial data in little to no time
            </p>
            <div className="absolute top-[10px] left-[830px] w-[34px] h-[34px] rounded-full border border-[1px] border-[#C5FFE2] flex items-center justify-center">
              <p className="font-nunito font-normal text-[22px] leading-[40.92px] text-[#C5FFE2]">-</p>
            </div>
          </div>

          {/* Third Placeholder */}
          <div className="absolute top-[410px] left-[170px] w-[881px] h-[78px] bg-[#131F35] rounded-[10px] border border-[0.5px] border-[#C5FFE2]">
            <p className="absolute top-[10px] left-[50px] w-[320px] h-[27px] font-nunito font-semibold text-[20px] leading-[27.28px] text-[#FFFFFF]">
              How safe are the clients' data?
            </p>
            <div className="absolute top-[10px] left-[830px] w-[34px] h-[34px] rounded-full border border-[1px] border-[#C5FFE2] flex items-center justify-center">
              <p className="font-nunito font-normal text-[22px] leading-[30.01px] text-[#C5FFE2]">+</p>
            </div>
          </div>
          
          {/* Fourth Placeholder */}
          <div className="absolute top-[510px] left-[170px] w-[881px] h-[78px] bg-[#131F35] rounded-[10px] border border-[0.5px] border-[#C5FFE2]">
            <p className="absolute top-[10px] left-[50px] w-[320px] h-[27px] font-nunito font-semibold text-[20px] leading-[27.28px] text-[#FFFFFF]">
              How safe are the clients' data?
            </p>
            <div className="absolute top-[10px] left-[830px] w-[34px] h-[34px] rounded-full border border-[1px] border-[#C5FFE2] flex items-center justify-center">
              <p className="font-nunito font-normal text-[22px] leading-[30.01px] text-[#C5FFE2]">+</p>
            </div>
          </div>
        </div> 
      </div> 
      
      {/* Section9 */}
      <div className="relative top-[2857px] Section9 px-8 py-4 display-flex" >
        {/* First Child */}
        <div>
          {/* REQUEST A DEMO */}
          <div className="my-8" >
            <p className="text-[15px] leading-[20.46px] text-[#4361EE] font-medium">REQUEST A DEMO</p>
            <p className="text-[30px] leading-[40.92px] text-[#0C1424] font-bold w-[421px] mt-4">
              Explore more of Caspre's Capabilities
            </p>
            <p className="text-[15px] leading-[20.46px] text-[#0C1424] font-normal w-[434px] mt-4">
              Getting a demo is as easy as 1-2-3. Book your slot today.
            </p>
            <button className="w-[186px] h-[44px] rounded-[10px] bg-[#4361EE] flex items-center justify-center mt-4">
              <span className="text-[16px] leading-[21.82px] text-white font-semibold">Request Demo</span>
              <img src="/arrow-right-circle.png" alt="arrow to right" className="w-[24px] h-[24px] ml-2" />
            </button>
          </div>
        </div>

        {/* Second Child */}
        <div
          className="relative w-[492.71px] h-[405.71px] mt-8"
        >
          {/* Group 1 */}
          <div
            className="absolute top-[-290.78px] left-[699px]"
            style={{ transform: 'rotate(45.57deg)' }}
          >
            <div className="w-[135.52px] h-[135.52px] bg-[#C5FFE2] rounded-[5px] flex items-center justify-center">
              <span className="text-[60px] leading-[81.84px] text-[#0C1424] font-bold">1.</span>
            </div>
          </div>

          <div
            className="absolute top-[-184.85px] left-[800.74px]"
            style={{ transform: 'rotate(45.57deg)' }}
          >
            <div className="w-[135.52px] h-[135.52px] bg-[#FFD2CB] rounded-[5px] flex items-center justify-center">
              <span className="text-[60px] leading-[81.84px] text-[#0C1424] font-bold">2.</span>
            </div>
          </div>

          <div
            className="absolute top-[-78.93px] left-[699px]"
            style={{ transform: 'rotate(45.57deg)' }}
          >
            <div className="w-[135.52px] h-[135.52px] bg-[#DCC3FF] rounded-[5px] flex items-center justify-center">
              <span className="text-[60px] leading-[81.84px] text-[#0C1424] font-bold">3.</span>
            </div>
          </div>

          <div
            className="absolute top-[-290.78px] left-[900.24px]"
            style={{ transform: 'rotate(45.57deg)' }}
          >
            <div className="w-[135.52px] h-[135.52px] bg-[#C5FFE2] rounded-[5px] flex items-center justify-center">
              <span className="text-[13px] leading-[17.73px] text-[#0C1424] font-medium text-center transform rotate-[-45.57deg] max-w-[119px]">
                Fill in your contact information
              </span>
            </div>
          </div>

          <div
            className="absolute top-[-178.85px] left-[1001.98px]"
            style={{ transform: 'rotate(45.57deg)' }}
          >
            <div className="w-[135.52px] h-[135.52px] bg-[#FFD2CB] rounded-[5px] flex items-center justify-center">
              <span className="text-[13px] leading-[17.73px] text-[#0C1424] font-medium text-center transform rotate-[-45.57deg] max-w-[119px]">
                Caspre's team will schedule a demo
              </span>
            </div>
          </div>

          <div
            className="absolute top-[-78.93px] left-[900.24px] bg-DCC3FF rotate-[45.57deg]"
          >
            <div className="w-[135.52px] h-[135.52px] bg-[#DCC3FF] rounded-[5px] flex items-center justify-center">
              <p className="text-center absolute w-[119px] h-[36px] font-nunito font-medium text-[13px] leading-[17.73px] text-caspre-dark -rotate-[45.57deg]">
                Get your demo as soon as possible
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative bottom-[-2571px] footer bg-[#0C1424] px-8 py-4 ">
        {/* First Child */}
        <div className="flex flex-col lg:flex-row justify-between">
        
          {/* Caspre Details */}
          <div className="flex flex-col">
           <img src="/Rectangle 5.png" alt="Rectangle 71" className="w-[111px] h-[59px] my-4" />

           <p className="text-[15px] leading-[20.46px] w-[402px] text-white my-4">
            Availability: <span className="font-bold">Monday to Friday, 8:00am to 5:00pm</span>
           </p>

           <div className="flex items-center my-4">
            <img src="/map-pin.png" alt="map location" className="w-[24px] h-[24px]" />
            <p className="ml-2 text-[15px] leading-[20.46px] w-[282px] text-white">
              Adanian Labs, Mkungu Close, westlands
            </p>
           </div>

           <div className="flex items-center my-4">
            <img src="/mail.png" alt="mail" className="w-[24px] h-[24px]" />
            <p className="ml-2 text-[15px] leading-[20.46px] w-[106px] text-white">
              info@caspre.io
            </p>
           </div>

           <div className="flex items-center my-4">
            <img src="/phone.png" alt="phone" className="w-[24px] h-[24px]" />
            <p className="ml-2 text-[15px] leading-[20.46px] w-[136px] text-white">
              +254723444124
            </p>
           </div>
          </div>

          {/* Explore Section */}
          <div>
          <p className="text-[18px] leading-[30px] font-semibold text-white">
            Explore
          </p>
          <p className="text-[15px] leading-[30px] text-white mt-2">
            Features<br />
            Demo<br />
            Testimonials<br />
            Contact<br />
            Sales
          </p>
          </div>

          {/* Partners Section */}
          <div>
          <p className="text-[18px] leading-[30px] font-semibold text-white">
            Partners
          </p>
          <p className="text-[15px] leading-[30px] text-white mt-2">
            Adanian Labs<br />
            AiCE Africa
          </p>
          </div>

          {/* Legal Section */}
          <div>
          <p className="text-[18px] leading-[30px] font-semibold text-white">
            Legal
          </p>
          <p className="text-[15px] leading-[30px] text-white mt-2">
            Cookie Policy<br />
            Privacy Policy<br />
            Terms and Conditions
          </p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="my-8">
        <hr className="border-white w-[1104.02px] mx-8" />
        </div>

        <div>
        {/* Second Child (Subscribe Section) */}
        <div className="flex flex-col lg:flex-row justify-between items-start">
        
         {/* Subscribe to Our Newsletter */}
         <div className="mb-8 lg:mb-0">
          <p className="w-[400px] text-[25px] leading-[34.1px] font-bold text-white">
            Subscribe to Our Newsletter
          </p>
          <p className="text-[15px] leading-[20.46px] text-white mt-4">
            Be on the know when we roll out new features.<br />
            We promise we won't spam you.
          </p>
         </div>

         {/* Email to Subscribe */}
         <div className="flex items-center mb-8 lg:mb-0">
           <input type="text" placeholder="Email address" className="w-[252px] h-[36px] rounded-[10px] bg-[#D9D9D9] text-[#0C1424] pl-4"/>
           <button className="w-[137px] h-[36px] rounded-[10px] bg-[#C5FFE2] text-[#0C1424] ml-2 text-center">
             Subscribe
           </button>
         </div>
         </div>
       
         
         {/* By submitting your email address statement */}
         <div className="mb-8" style={{ left: '500px' }}>
          <p className=" w-[420px] text-[10px] leading-[13.64px] text-white">
         By submitting your email address, you agree to receive Caspre's monthly newsletter. For more information, please read our privacy policy. You can always withdraw your consent.
          </p>
         </div>
         
  
         {/* Divider Line */}
         <div className="my-4">
          <hr className="border-white w-[1104.02px] mx-8" />
         </div>
       </div>

        {/* Third Child (Copyright) */}
        <div className="text-[15px] leading-[20.46px] text-white mb-4">
          <p>Copyright 2023 Caspre. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;