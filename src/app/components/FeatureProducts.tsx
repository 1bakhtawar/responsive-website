import Image from 'next/image'

const FeatureProducts = () => {
  return (
  <div>
        <main className='md:gap-4 pt-10 md:ml-5 md:mb-32 sm:ml-4'>
            <div className='md:flex gap-4 md:mb-32'>
        <div className='w-full'>
        <Image src="/img1.jpg" alt="image" width={200} height={200} className="mb-2 sm:h-9 mx-auto md:w-full md:h-full rounded-xl hover:scale-75" />
         <h1 className='md:mt-5 md:ml-5 ml-20'>PKR 10,000</h1>
            <div className='sm:h-12 ml-20 w-24 text-sm text-center mb-6 rounded-xl bg-blue-900 md:w-32 text-white md:text-lg md:h-10 md:mt-4 md:ml-5'>
            <button className='text-center md:ml-7 md:mt-1 md:mr-5'>Buy Now</button>
            </div>
       </div>
       
        <div className='w-full'>
        <Image src="/img2.jpg" alt="image" width={200} height={200} className="mb-2 sm:h-9 mx-auto md:w-full md:h-full rounded-xl hover:scale-75" />
        <div>
        <h1 className='md:mt-5 md:ml-5 ml-20'>PKR 10,000</h1>
        <div className='sm:h-12 ml-20 w-24 text-sm text-center mb-6 rounded-xl bg-blue-900 md:w-32 text-white md:text-lg md:h-10 md:mt-4 md:ml-5'>
            <button className='text-center md:ml-7 md:mt-1 md:mr-5'>Buy Now</button>
           </div>
        </div>
        </div>
      
        <div className='w-full'>
        <Image src="/img3.jpg" alt="image" width={200} height={200} className="mb-2 sm:h-9 mx-auto md:w-full md:h-full rounded-xl hover:scale-75" />
       <div>
        <h1 className='md:mt-5 md:ml-5 ml-20'>PKR 10,000</h1>
        <div className='sm:h-12 ml-20 w-24 text-sm text-center mb-6 rounded-xl bg-blue-900 md:w-32 text-white md:text-lg md:h-10 md:mt-4 md:ml-5'>
            <button className='text-center md:ml-7 md:mt-1 md:mr-5'>Buy Now</button>
            </div>
        </div>
        </div>  
        </div>

        <div className='md:flex gap-4'>
        <div className='w-full'>
        <Image src="/img1.jpg" alt="image" width={200} height={200} className="mx-auto sm:h-9 rounded-xl md:w-full md:h-full hover:scale-75" />

        <div>
        <h1 className='md:mt-5 md:ml-5 ml-20'>PKR 10,000</h1>
        <div className='sm:h-12 ml-20 w-24 text-sm text-center mb-6 rounded-xl bg-blue-900 md:w-32 text-white md:text-lg md:h-10 md:mt-4 md:ml-5'>
            <button className='text-center md:ml-7 md:mt-1 md:mr-5'>Buy Now</button>
           </div>
            </div>
            </div>

        <div className='w-full'>
        <Image src="/img2.jpg" alt="image" width={200} height={200} className="sm:w-9 mb-2 sm:h-9 mx-auto md:w-full md:h-full rounded-xl hover:scale-75" />
        <div>
        <h1 className='md:mt-5 md:ml-5 ml-20'>PKR 10,000</h1>
        <div className='sm:h-12 ml-20 w-24 text-sm text-center mb-6 rounded-xl bg-blue-900 md:w-32 text-white md:text-lg md:h-10 md:mt-4 md:ml-5'>
            <button className='text-center md:ml-7 md:mt-1 md:mr-5'>Buy Now</button>
          </div>
          </div>
          </div>

        <div className='w-full'>
          <Image src="/img3.jpg" alt="image" width={200} height={200} className="md:left-0 md:top-0 sm:w-9 mb-2 sm:h-9 mx-auto md:w-full md:h-full rounded-xl hover:scale-75" />
        <div>
          <h1 className='md:mt-5 md:ml-5 ml-20'>PKR 10,000</h1>
          <div className='sm:h-12 ml-20 w-24 text-sm text-center mb-6 rounded-xl bg-blue-900 md:w-32 text-white md:text-lg md:h-10 md:mt-4 md:ml-5'>
            <button className='text-center md:ml-7 md:mt-1 md:mr-5'>Buy Now</button>
            </div>
            </div>
        </div>
        </div>
          </main>
        </div>
  )
}

export default FeatureProducts
