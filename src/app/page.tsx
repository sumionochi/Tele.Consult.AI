import TypewriterTitle from '@/components/ui/TypewriterTitle';
import TypewriterTitle2 from '@/components/ui/TypewriterTitle2';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger }  from '@/components/ui/dropdown-menu';
import { getAuthSession } from '@/lib/auth';
import { User } from 'next-auth'
import { ArrowBigRight, ArrowRight, ArrowUpRight, Book, BookCheck, BookText, Bot, BotIcon, Calendar, CaseSensitive, Github, Key, Linkedin, Lock, LockKeyhole, LucideTextCursor, Mail, Mailbox, Scroll, ScrollText, StickyNote, Text, Zap } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, {useEffect} from 'react'
import Sign2 from '@/components/Sign2';


const Homepage = async() => {
  const session = await getAuthSession();
  console.log(session)
  return (
    <div className='flex relative overflow-hidden antialiased min-h-screen flex-col items-center justify-between pt-0'>
        <div className='flex flex-col items-center min-h-screen pt-10 sm:pt-28'>
          <div className='flex text-white p-10 pb-0 mb-10 rounded-md gap-8 flex-col max-w-5xl'>
            <h1 className='text-center font-semibold text-3xl md:text-5xl xl:text-6xl'>
              Remote Health Consultation from Anywhere!
            </h1>
            <h2 className='text-center text-xl'>              
              Access timely medical assistance seamlessly. Get right level of <span className='text-pink-900 dark:text-purple-300'>medical expertise with the insights of AI.</span>
            </h2>
            <div className='text-center justify-center flex flex-row gap-4 mx-auto items-center'>
              {session?.user ? <Link href={'/chat'}><Button className='text-white hover:opacity-80 shadow-md shadow-black border-none font-semibold text-xl px-4 py-6 bg-gradient-to-br from-rose-500 to-orange-400 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-9000 dark:to-violet-700'>Let's Start</Button></Link> : <Sign2/>}
              <Link href={'/pricing'} >
                <Button className='text-white hover:opacity-80 bg-transparent text-xl hover:bg-transparent'>
                  View Pricing
                  <ArrowRight className='ml-2 w-6 h-6'/>
                </Button>
              </Link>         
            </div>
          </div>
          <div className='pt-10 grid mx-auto text-white max-w-7xl gap-4 place-items-center px-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 grid-cols-1'>
          {/* <Button className='p-6 shadow-md shadow-black bg-gradient-to-r from-rose-500 to-blue-500 border text-white rounded-md border-none'>
            <Book className='mr-2'/>
            AI Generated Courses
          </Button> */}
          {/* <Button className='p-6 shadow-md shadow-black bg-gradient-to-r from-teal-500 to-black border text-white rounded-md border-none'>
            <ScrollText className='mr-2'/>
            Adaptive Quizzes
          </Button> */}
          <Button className='p-6 shadow-md shadow-black border-none bg-gradient-to-r from-blue-500 to-teal-500 border text-white rounded-md'>
            <Text className='mr-2 w-5'/>
            Multi Lingual Translation
          </Button>
          <Button className='p-6 shadow-md shadow-black border-none bg-gradient-to-r from-blue-500 to-teal-500 border text-white rounded-md'>
            <Lock className='mr-2 w-5'/>
            Secure Chatroom Authentication
          </Button>
          <Button className='p-6 shadow-md shadow-black border-none bg-gradient-to-r from-blue-500 to-teal-500 border text-white rounded-md'>
            <Key className='mr-2 w-5'/>
            User Access Levels
          </Button>
          <Button className='p-6 shadow-md shadow-black border-none bg-gradient-to-r from-blue-500 to-teal-500 border text-white rounded-md'>
            <ScrollText className='mr-2 w-5'/>
            AI Summarization
          </Button>
          <Button className='p-6 shadow-md shadow-black border-none bg-gradient-to-r from-blue-500 to-teal-500 border text-white rounded-md'>
            <BookText className='mr-2 w-5'/>
            Smart Diary
          </Button>
          <Button className='p-6 shadow-md shadow-black border-none bg-gradient-to-r from-blue-500 to-teal-500 border text-white rounded-md'>
            <BotIcon className='mr-2 w-5'/>
            Virtual Physician with memory
          </Button>
          </div>         
          <div className='flex text-center p-4 pb-28 pt-0 items-center flex-col gap-4'>
            <h1 className='text-white px-4 text-xl mt-20'>“Love how the app is so secure, personalized and transparent. Made healthcare more accessible.”</h1>
            <img src="https://avatars.githubusercontent.com/u/89721628?v=4" className='w-14 h-14 rounded-full border-2 border-white' />
            <Link href={'https://www.linkedin.com/in/aaditya-srivastava-b4564821b/'}>
            <h2 className='text-white text-md underline underline-offset-2'>Aaditya Srivastava</h2>
            </Link>
          </div>
        </div>
        {/* <div className='flex my-4 flex-col p-8 rounded-xl max-w-7xl mx-auto bg-[#0D2427] text-white'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-start font-semibold text-3xl md:text-5xl xl:text-6xl'>The Mini AI Classroom</h1>
            <img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/650/685/datas/original.png" className='rounded-md object-cover' />
            <div></div> 
            <h1 className='text-start font-semibold text-3xl md:text-5xl xl:text-6xl'>Future Plans</h1>
            <img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/647/802/datas/original.png" className='rounded-md object-cover' />
          </div>
        </div> */}
        <div className='flex px-4 pt-1 bg-white/20 text-white justify-between gap-4 flex-row items-center text-primary h-14 absolute bottom-0 w-full'>
        <h2 className='text-white'>© 2023 Tele.Consult.AI</h2>
        <div className='flex flex-row gap-4 justify-center items-center'>
          <Link href={'https://github.com/sumionochi'}>
            <Github/>
          </Link>
          <Link href={'https://www.linkedin.com/in/aaditya-srivastava-b4564821b/'}>
            <Linkedin/>
          </Link>
          <Link href={'mailto:aaditya.srivastava.connect@gmail.com'}>
            <Mail/>
          </Link>
          <Link href={'https://sumionochi.github.io/Portfolio-landing-page/'}>
            <ArrowUpRight/>
          </Link>
        </div>
        </div>
    </div>
  )
}

export default Homepage

