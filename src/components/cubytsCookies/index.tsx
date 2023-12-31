import React ,{useState,useEffect} from 'react'
import Link from 'next/link';
import { getCookie, setCookie } from 'cookies-next';

const data = {
  "Strictly Necessary": {
    key1: "value1",
    key2: "value2",
    description: "This category is essential for the basic functionality of the website.",
    key: "value",
    maxRequestsPerSecond: 1000,
    analyticsEnabled: "dsdasd",
    features: ["Feature A", "Feature B", "Feature C"],
    name:'murtaza',
    targetAudience: "18-35 years old",
    advertisingPlatform: "Google Ads"
  }
};

const CookieComponent = () => {
  const [cookieModal, setCookieModal] = useState<any>(false);

  useEffect(() => {
    const isCookiesAccepted = getCookie('isCookiesAccepted');
    if(!isCookiesAccepted) {
        setTimeout(() => {
            setCookieModal(true)
            }, 6000);
    }
  },[])


  const acceptAllCookies = () => {
    Object.keys(data).forEach(category => {
      const categoryData = data[category as keyof typeof data];
     
      Object.keys(categoryData).forEach(key => {
        const value = categoryData[key as keyof typeof categoryData];
    
    setCookie(key, value);
      });
    });
    setCookie('isCookiesAccepted', true);
    setCookieModal(false)

}

 const handleClose =()=>{
  setCookieModal(false)
  setCookie('isCookiesAccepted', true);

}

  return (
   cookieModal && ( 
    <div className='cookie_wrapper'>
     
      <p>By Clicking on <span>Accept Cookies</span>, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. For more details, read our <a className='link'>Cookie Policy</a>.</p>
      <span>
      <Link href="/cookie-policy"><button>Cookie Policy</button></Link>  
        <button onClick={handleClose}>Deny Cookies</button>
        <button onClick={acceptAllCookies}>Accept Cookies</button>

      </span>
      <button onClick={handleClose} className='close'>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='black' viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
      </button>
  
    </div>
   )
  )
}

export default CookieComponent