import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface CompanionCardPros {
  id: string
  name: string
  topic: string
  subject: string
  duration: number
  color: string
}


const companionCard = ({id,name,topic,subject,duration,color}:CompanionCardPros) => {
  return (  
    <article className='companion-card' style={{ backgroundColor: color }}>
      <div className='flex justify-between items-center'>
        <div className='subject-badge'>
          {subject}
        </div>
        <button className='companion-bookmark'>
          <Image src="/icons/bookmark.svg" alt="bookmark" width={12.5} height={15}>

          </Image>

        </button>
      </div>
      <div className='text-2xl font-bold  '>
        {name}
      </div>
      <div className='text-sm'>{topic}</div>
      <div className='flex items-center gap-2'>
        <Image src="/icons/clock.svg" alt="clock" width={13.5 } height={13}  />
        <p className='texsm'>{duration} minutes</p>
      </div>
      <Link href={`/companions/${id}`} className='w-full' />
      <button className='btn-primary w-full justify-center'>
       Launch Lesson
      </button>
    


    </article>
  ) 
}

export default companionCard    