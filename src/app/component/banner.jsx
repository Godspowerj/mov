import React from 'react'
import Image from 'next/image'
const Banner = () => {
    const items = [
        {
            image: "/img1.png",
            head: "Watch anywhere",
            description:"Enjoy from the web or with the movStream app on your phone, tablet, or select Smart TVs — on up to 3 devices at once."
        },
        {
            image: "/img2.png",
            head: "Data saver",
            description:"Enjoy from the web or with the movStream app on your phone, tablet, or select Smart TVs — on up to 3 devices at once."
        },
        {
            image: "/img3.png",
            head: "X-Ray for more",
            description:"Enjoy from the web or with the movStream app on your phone, tablet, or select Smart TVs — on up to 3 devices at once."
        },
    
    ]
    return (
        <>
            <div className='text-white md:flex block px-5 py-10  justify-center items-center'>
                {items.map((item, index) => (
                    <div key={index} className='flex items-center space-y-7 flex-col'>
                        <Image src={item.image} width={300} height={200} alt=''/>
                        <div className='flex items-center text-center flex-col'>
                            <h2 className='text-[20px]'>{item.head}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Banner