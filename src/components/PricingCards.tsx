"use client";
import { Check} from 'lucide-react'
import React from 'react'
import Sign2 from './Sign2'
import { Button } from './ui/button'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'; 
import Link from 'next/link';
import CheckOut from './CheckOut';

type Props = {}

const tiers = [
    {
        name: 'Free',
        id: null,
        href: "#",
        priceMonthly: null,
        description: "Get started with your consultation right away.",
        features: [
            "40 Messages Chat Limit per Chat",
            "3 Participants capacity per Chat",
            "3 Chatroom capacity per Account",
            "5 Supported Languages",
            "62 hour support response time",
            "No Multimedia support in chats",
            "Standard access to features",
        ],
    },
    {
        name: 'Pro',
        id: 'id_forPRO',
        href: "#",
        priceMonthly: "₹699.00",
        description: "Unlock full potential of Tele-Health consultation.",
        features: [
            "Unlimited Messages Chat",
            "Unlimited Participants capacity",
            "Unlimited Chatroom capacity",
            "10 Supported Languages",
            "2 hour dedicated support response time",
            "Multimedia support in chats",
            "Early access to new features",
        ],
    }
]

const PricingCards = ({redirect}:{redirect:boolean}) => {
    const router = useRouter();
    const handleStripe = async () => {
        router.push('/register');
    };
    const handleRegister = async () => {
        router.push('/home');
    };
    console.log(redirect)
  return (
    <div>
        {/* <div className='bg-secondary text-primary p-6 text-start flex gap-4 flex-col rounded-xl shadow-md shadow-black border-none'>
                <p>Free</p>
                <h1 className='font-semibold text-3xl md:text-5xl xl:text-6xl'>₹0.00</h1>
                <p>Get started with your consultation right away.</p>
                <div className='flex flex-col gap-4 my-4'>
                    <div className='flex flex-row gap-2'>
                        <Check/>
                        40 Messages Chat Limit per Chat
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Check/>
                        3 Participants capacity per Chat
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Check/>
                        3 Chatroom capacity per Account
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Check/>
                        5 Supported Languages
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Check/>
                        62 hour support response time
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Check/>
                        No Multimedia support in chats
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Check/>
                        Standard access to features
                    </div>
                </div>
                <Button className='text-white hover:opacity-80 shadow-md shadow-black border-none font-semibold text-xl px-4 py-6 bg-gradient-to-br from-rose-500 to-orange-400 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-9000 dark:to-violet-700' onClick={handleRegister}> 
                    Let's Start
                </Button>
        </div>
        <div className='bg-secondary text-primary p-6 text-start flex gap-4 flex-col rounded-xl shadow-md shadow-black border-none'>
                <p>Pro</p>
                <h1 className='font-semibold text-3xl md:text-5xl xl:text-6xl'>₹699.00 <span className='text-base'>/month</span></h1>
                <p>Full potential of Tele-Health consultation unlocked.</p>
                <div className='flex flex-col gap-4 my-4'>
                    <div className='flex flex-row gap-2'>
                        <Check/>
                        Unlimited Messages Chat
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Check/>
                        Unlimited Participants capacity
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Check/>
                        Unlimited Chatroom capacity
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Check/>
                        10 Supported Languages
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Check/>
                        2 hour dedicated support response time
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Check/>
                        Multimedia support in chats
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Check/>
                        Early access to new features
                    </div>
                </div>
                <Button className='text-white hover:opacity-80 shadow-md shadow-black border-none font-semibold text-xl px-4 py-6 bg-gradient-to-br from-rose-500 to-orange-400 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-9000 dark:to-violet-700' onClick={handleStripe}> 
                    Get Started Today 
                </Button>
        </div> */}
        <div className='mt-24 flex flex-col sm:flex-row gap-6'>
            {tiers.map(tier=>(
                <div key={tier.id} className='bg-secondary text-primary p-6 text-start flex gap-4 flex-col rounded-xl shadow-md shadow-black border-none'>
                    <p id={tier.id + tier.name}>{tier.name}</p>
                    <h1 className='font-semibold text-3xl md:text-5xl xl:text-6xl'>
                        {tier.priceMonthly === null ? '₹0.00' : (
                            <>
                            <span>{tier.priceMonthly}</span>
                            <span className='text-base'>/month</span>
                            </>
                        )}
                    </h1>
                    <p>{tier.description}</p>
                    {/* <div className='flex flex-col gap-4 my-4'>
                        <div className='flex flex-row gap-2'>
                            <Check/>
                            40 Messages Chat Limit per Chat
                        </div>
                        <div className='flex flex-row gap-2'>
                            <Check/>
                            3 Participants capacity per Chat
                        </div>
                        <div className='flex flex-row gap-2'>
                            <Check/>
                            3 Chatroom capacity per Account
                        </div>
                        <div className='flex flex-row gap-2'>
                            <Check/>
                            5 Supported Languages
                        </div>
                        <div className='flex flex-row gap-2'>
                            <Check/>
                            62 hour support response time
                        </div>
                        <div className='flex flex-row gap-2'>
                            <Check/>
                            No Multimedia support in chats
                        </div>
                        <div className='flex flex-row gap-2'>
                            <Check/>
                            Standard access to features
                        </div>
                    </div> */}
                    <ul role='list' className='flex flex-col gap-4 my-4'>
                        {tier.features.map(feature=>(
                            <li key={feature} className='flex flex-row gap-2'>
                                <Check/>
                                {feature}
                            </li>
                        ))}
                    </ul>
                    {
                        redirect ? tier.id===null ? <Sign2/> : <Link href={'/register'}><Button className='text-white hover:opacity-80 shadow-md shadow-black border-none font-semibold text-lg px-4 py-6 bg-gradient-to-br from-rose-500 to-orange-400 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-9000 dark:to-violet-700 w-full'> 
                        Upgrade 
                      </Button></Link> : tier.id===null ? <></> : <CheckOut/>
                    }
                </div>
            ))}
        </div>    
    </div>
  )
}

export default PricingCards