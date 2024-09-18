"use client";
import React, {useState} from "react";
import Image from "next/image";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/images/slide_img_1.jpg', // Replace with your image paths
    '/images/slide_img_2.jpg',
    '/images/slide_img_3.jpg'
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  return(
    <section className='w-full h-screen bg-[rgba(63,73,83,0.8)] overflow-hidden relative'>
       {/*include these for the below div by converting to tailwind: data-bs-interval="4000" data-bs-ride="carousel" */}
         <div className='mt-[60px] carousel slide carousel-fade'>
             {/* why this ol element below */}
             {/* <ol></ol> */}
             <div class="carousel-inner">
               {/*Carousel items go here*/}
                {images.map((src, index) => (
                <div
                  key={index}
                  className={`carousel-item absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

            
            {/* Controls (optional)*/}
            {/* Controls */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            aria-label="Previous"
          >
            <span className="text-xl">&#9664;</span> {/* Left Arrow */}
          </button>

          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            aria-label="Next"
          >
            <span className="text-xl">&#9654;</span> {/* Right Arrow */}
          </button>
          </div>
        </div>
    </section>
  )
}

export default Hero;
















//========================================================================
// import React from 'react'
// import Image from 'next/image'

// const Hero = () => {
//   return (
//     <section className='w-full h-screen bg-[rgba(63,73,83,0.8)] overflow-hidden relative'>
//       {/*include these for the below div by converting to tailwind: data-bs-interval="4000" data-bs-ride="carousel" */}
//         <div className='mt-[60px] carousel slide carousel-fade'>
//             {/* why this ol element below */}
//             {/* <ol></ol> */}
//             <div class="carousel-inner">
//               {/*Carousel items go here*/}
//               <div class="carousel-item active ">
//                 <div className='absolute bottom-0 top-0 left-0 right-0 flex justify-center'>
//                 <Image
//                   src="/images/slide_img_1.jpg" // Replace with your image path
//                   alt="Slide 1"
//                   layout="fill"
//                   objectFit="cover"
//                   className="w-full h-full"
//                 />
//                 </div>
//               </div>

//               <div class="carousel-item">
//                 <div className='absolute bottom-0 top-[100px] left-[50px] right-[50px] flex justify-center'>
              
//                   <Image
//                   src="/images/slide_img_2.jpg" // Replace with your image path
//                   alt="Slide 2"
//                   layout="fill"
//                   objectFit="cover"
//                   className="w-full h-full"
//                 />
                  
//                 </div>
//               </div>

//               <div class="carousel-item">
//                 <div className='absolute bottom-0 top-[100px] left-[50px] right-[50px] flex justify-center'>
                 
//                   <Image
//                   src="/images/slide_img_3.jpg" // Replace with your image path
//                   alt="Slide 3"
//                   layout="fill"
//                   objectFit="cover"
//                   className="w-full h-full"
//                 />
                  
//                 </div>
//               </div>

//             </div>
//             {/* Controls (optional)*/}
//             <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
//               <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
//             </a>

//             <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
//               <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
//             </a>
//             {/* <button class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2">Previous</button>
//             <button class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2">Next</button> */}
//         </div>
//     </section>
//   )
// }

// export default Hero