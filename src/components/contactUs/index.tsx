import React, { useState, useEffect } from 'react';
import { client } from '@/lib/sanity';
import { urlForImage } from '@/lib/image';

async function getData() {
  const query = `*[_type == "component"]{
      sections[3]
    }`;
  const data = await client.fetch(query);
  return data;
}

const Contact = () => {
  const [contactData, setData] = useState<any>({});

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getData();
        setData(result[0]?.sections);
        console.log(result);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  // console.log(contactData,'here');
  

    const contactProps = {
        mainHeading: "Let’s chat and get a quote!",
        formFields: [
          {
            label: "Name",
            type: "text",
            name: "name",
            placeholder: "Please input name",
          },
          {
            label: "Email Address",
            type: "email",
            name: "email",
            placeholder: "Please input email address",
          },
          {
            label: "Company name",
            type: "text",
            name: "companyName",
            placeholder: "Please input company name",
          },
          {
            label: "Country",
            type: "text",
            name: "country",
            placeholder: "Please input country name",
          },
         
        ],
        message: {
            label: "Message",
            name: "message",
            placeholder: "Leave a message",
          },
        submitButtonText: "SUBMIT",
        terms:"By clicking submit you agree to our terms of service, privacy policy and how we use data as stated"
      };
  return (
    <div className='relative'>
          <div className="w-full flex-col lg:flex-row   flex items-center  p-6 relative">
                <div className=" bg-white border shadow-lg lg:w-6/12 rounded py-12 lg:px-28 px-8">
                    <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">{contactData.contactHeading}</p>
                    <div  className="md:flex gap-5 flex-wrap items-center mt-12">
                    {contactData.formFields && contactData.formFields.map((field:any,index:number)=>{
                        return(
                            
                        <div key={index}  className="w-full flex flex-col mt-6">
                            <label className="text-base font-semibold leading-none text-gray-800">{field.label}</label>
                            <input tabIndex={0} arial-label="Please input name" type={field.type}  name={field.name} className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 " placeholder={field.placeholder} />
                        </div>
                       
                  
                        )
                    })}
                    
                    </div>
                    <div>
                        <div className="w-full flex flex-col mt-8">
                            <label className="text-base font-semibold leading-none text-gray-800">{contactData.message}</label>
                            <textarea tabIndex={0} aria-label="leave a message" role="textbox" placeholder={contactProps.message.placeholder}   className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} />
                        </div>
                    </div>
                    <p className="text-xs leading-3 text-gray-600 mt-4">{contactData.termsDescription}</p>
                    <div className="flex items-center justify-center w-full">
                        <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">{contactData.button && contactData.button[0].label}</button>
                    </div>
                </div>
                <div className='lg:w-6/12 p-2 lg:p-10'>
                    <img src={contactData?.image?.src && urlForImage(contactData?.image?.src).url()} alt={contactData.alt}  className='w-full'  />
                </div>
            </div>
        </div>
    
  )
}

export default Contact