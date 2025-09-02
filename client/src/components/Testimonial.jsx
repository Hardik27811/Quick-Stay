import React from 'react'
import Title from './Title'
import { testimonials } from '../assets/assets'
import StartRating from './StartRating'



function Testimonial() {
    const data =[
  {
    "id": 1,
    "name": "Rohit Sharma",
    "photo": "https://randomuser.me/api/portraits/men/32.jpg",
    "rating": 5,
    "review": "Amazing stay! Rooms were super clean and the staff was extremely polite. Will definitely come again."
  },
  {
    "id": 2,
    "name": "Priya Kapoor",
    "photo": "https://randomuser.me/api/portraits/women/44.jpg",
    "rating": 4,
    "review": "Great location, very close to the city center. The food could have been better, but overall a good experience."
  },
  {
    "id": 3,
    "name": "Amit Verma",
    "photo": "https://randomuser.me/api/portraits/men/12.jpg",
    "rating": 5,
    "review": "Loved the swimming pool and spa area. Perfect for a weekend getaway."
  },
  {
    "id": 4,
    "name": "Neha Singh",
    "photo": "https://randomuser.me/api/portraits/women/67.jpg",
    "rating": 4,
    "review": "Rooms were spacious and well maintained. Service was a bit slow during peak hours."
  },
  {
    "id": 5,
    "name": "Arjun Mehta",
    "photo": "https://randomuser.me/api/portraits/men/76.jpg",
    "rating": 5,
    "review": "Best hotel I’ve stayed in! Amazing breakfast and very friendly staff."
  },
  {
    "id": 6,
    "name": "Simran Kaur",
    "photo": "https://randomuser.me/api/portraits/women/24.jpg",
    "rating": 4,
    "review": "Good value for money. The view from my balcony was breathtaking!"
  },
  {
    "id": 7,
    "name": "Karan Malhotra",
    "photo": "https://randomuser.me/api/portraits/men/83.jpg",
    "rating": 3,
    "review": "Stay was okay, but check-in took longer than expected. Needs improvement."
  },
  {
    "id": 8,
    "name": "Ananya Gupta",
    "photo": "https://randomuser.me/api/portraits/women/19.jpg",
    "rating": 5,
    "review": "Fantastic experience! Perfect for families, kids loved the play area and pool."
  }
]

  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-30 '>
        <Title title="What our Guest Say" subTitle="Discover why discerning travelers consistently choose QuickStay 
        for their exclusive and luxurious accomodations round the world."/>

    <div className="flex flex-wrap items-center  gap-6 mt-20 ">
                {data.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow ">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.photo} alt={testimonial.name} />
                            <div>
                                <p className="font-playfair text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.address}</p>
                            </div>
                        </div>
                       <div className='flex items-center gap-1'>
                        <StartRating/>
                       </div>
                        <p className="text-gray-500 max-w-90 mt-4">"{testimonial.review}"</p>
                    </div>
                ))}
            </div>

    </div>

  )
}

export default Testimonial