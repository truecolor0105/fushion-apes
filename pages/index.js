import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Alert } from "flowbite-react";

//import Images from public
import smallLogo from "../public/small-logo.png"
import bigLogo from "../public/big-logo.png" 
import image2 from "../public/image_2.png" 
import rectangle from "../public/Rectangle.png" 
import creation1 from "../public/img/creation-1.png" 
import creation2 from "../public/img/creation-2.png" 
import creation3 from "../public/img/creation-3.png" 
import frame25 from "../public/img/frame-25.png" 
import storyFrame from "../public/img/story-frame.png" 

import Buttton from 'components/common/Button'
import Generate from 'components/common/Generate'
import Suggestion from 'components/Suggestion'
import Title from 'components/common/Title'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header>
        <nav className="bg-black border-gray-200 px-2 sm:px-4 py-2.5 fixed w-full opacity-60">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="https://flowbite.com/" className="flex items-center">
              <Image src={smallLogo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            </a>
            <div className="flex items-center md:order-2">
              <div>
                <Buttton
                  textColor='#FFC73E'
                  title='Sign Up'
                />
                <Buttton
                  textColor='#222222'
                  btnColor='#EDB731'
                  title='LogIn'
                />
              </div>
              {/* Dropdown menu */}
              <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                  <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                  </li>
                </ul>
              </div>
              <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
              <ul className="flex flex-col p-4 mt-4 border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">AI Tool</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Our Story</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">New NFTs</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Best Creations</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Latest News</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div className="bg-cover bg-center h-fit bg-[url('/image_2.png')]">
          <div className="pt-[211px] pb-[302px] max-w-[586px]  mx-auto">
            <div className="max-w-[457px] mx-auto rounded-[40px] border-[#222222] border-[2px] text-[20px] leading-[30px] text-white font-normal py-[10px] px-[134px] text-center">FusionSpes Presents</div>
            <div className="flex justify-between">
              <div className="max-w-[456px] font-['Poppins'] font-semibold text-[128px] leading-[150%] items-center text-white">
                BAKED
              </div>
              <div className="font-['Poppins'] font-semibold text-[128px] leading-[150%] items-center text-white">
                AI
              </div>

            </div>
            <div className="font-['Roboto'] font-medium text-[24px] leading-[150%] text-white">
              AI Image Generator
            </div>
          </div>
        </div>
        <div className="mx-[129px]">
          <div className="w-full h-fit">
            <Title
              content={'Text to Image AI Generator'}
              fontColor={'#EDB731'}
              fontSize={58}
              font={'Poppins'}
            />
            <Title
              content={'Convert your words into imaginations'}
              fontColor={'#222222'}
              fontSize={24}
              font={'Roboto'}
            />
            <Generate />
            <div className="py-[30px] w-full m-auto">
              <div className="font-['Roboto'] font-normal text-[24px] leading-[150%] text-[#222222]">
                Prompt suggestions
              </div>
              <div className="flex justify-between">
                <Suggestion
                  width={453}
                />
                <Suggestion
                  width={696}
                />
              </div>
              <div className="flex justify-between">
                <Suggestion
                  width={695}
                />
                <Suggestion
                  width={216}
                />
                <Suggestion
                  width={218}
                />
              </div>
            </div>
          </div>
          <div className="w-full h-fit">
            <Title
              content={'Best Creations'}
              fontColor={'#EDB731'}
              fontSize={58}
              font={'Poppins'}
            />
            <Title
              content={'Here are some best people have created'}
              fontColor={'#222222'}
              fontSize={24}
              font={'Roboto'}
            />
            <div className="flex flex-wrap justify-between">
              <div>
                <div className="relative">
                  <Image src={creation1} className="w-[300px]" alt="creation-1"></Image>
                  <div className="bg-[#EDB731] absolue bottom-0">
                    <div className="pt-[5px] text-center">
                      Mr.Jonny
                    </div>
                    <div className="pl-[20px] pb-[5px]">
                      prompt: describe your prompt here...
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative">
                  <Image src={creation2} className="w-[300px]" alt="creation-2"></Image>
                  <div className="bg-[#EDB731] absolue bottom-0">
                    <div className="pt-[5px] text-center">
                      Mr.Jonny
                    </div>
                    <div className="pl-[20px] pb-[5px]">
                      prompt: describe your prompt here...
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative">
                  <Image src={creation3} className="w-[300px]" alt="creation-3"></Image>
                  <div className="bg-[#EDB731] absolue bottom-0">
                    <div className="pt-[5px] text-center">
                      Mr.Jonny
                    </div>
                    <div className="pl-[20px] pb-[5px]">
                      prompt: describe your prompt here...
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-[50px]">
              <Title
                content={"Loved It? Create Yours"}
                fontSize={14}
                fontColor={'#222222'}
              />
            </div>
            <div className="w-fit m-auto">
              <Buttton
                textColor='#222222'
                btnColor='#EDB731'
                title='Log in'
              />
            </div>
          </div>
          <div className="w-full h-fit">
            <div className="py-[50px]">
              <Title
                content={'Our Story'}
                fontSize={58}
                fontColor={'#EDB731'}
              />
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="w-[500px] h-[581px]">
                <div className="relative" >
                  <Image src={frame25} alt="frame-25" />
                  <Image src={storyFrame} className="w-[60%] absolute bottom-[-30px] right-[-30px]" alt="story-frame" />
                </div>
              </div>
              <div className="w-[420px] pt-[50px]">
                <div className="pl-[50px] font-['Poppins'] font-semibold text-[20px] leading-[150%] text-[#EDB731]">
                  The journey of hustle
                </div>
                <div className="pl-[50px] pt-[50px] font-['Roboto'] font-semibold text-[16px] leading-[150%] text-[#000000]">
                  It is an AI image generator tool. With it, you can freate stunning images of your products or ideas. It has a wide variety of templates and options to choose from, so you can creat the perfect image fory your product. You can preview your generated images before you download them, so you can see how they will look. It is very easy to use, and there is step-by-step guidance to help you create the best possible images
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit pb-[100px]">
            <div className="pt-[50px]">
              <Title
                content={'Latest News'}
                fontSize={58}
                fontColor={'#EDB731'}
                font={'Poppins'}
              />
            </div>
            <div className="pb-[40px]">
              <Title
                content={'Get updated with our latest blogs'}
                fontSize={24}
                fontColor={'#222222'}
                font={'Roboto'}
              />
            </div>
            <div className="flex flex-wrap justify-between">
              <div>
                <div className="relative">
                  <Image src={creation1} className="w-[300px] h-[430px]" alt="creation-1"></Image>
                  <div className="bg-[#222222] absolute bottom-0">
                    <div className="px-[23px] text-[20px] text-[#EDB731] leading-[150%] font-['Roboto'] font-medium">
                      How AI has changes the way of living
                    </div>
                    <div className="p-[23px] text-[14px] text-[#FFFFFF] leading-[150%] font-['Roboto'] font-light">
                      It is an AI image generator ool. With it, you can create stunning images of your products or ideas.
                    </div>
                    <div className="w-fit m-auto p-[20px]">
                      <Buttton
                        btnColor={'#EDB731'}
                        textColor={'#222222'}
                        title={'Read Now'}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative">
                  <Image src={creation2} className="w-[300px] h-[430px]" alt="creation-2"></Image>
                  <div className="bg-[#222222] absolute bottom-0">
                    <div className="px-[23px] text-[20px] text-[#EDB731] leading-[150%] font-['Roboto'] font-medium">
                      How AI has changes the way of living
                    </div>
                    <div className="p-[23px] text-[14px] text-[#FFFFFF] leading-[150%] font-['Roboto'] font-light">
                      It is an AI image generator ool. With it, you can create stunning images of your products or ideas.
                    </div>
                    <div className="w-fit m-auto p-[20px]">
                      <Buttton
                        btnColor={'#EDB731'}
                        textColor={'#222222'}
                        title={'Read Now'}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative">
                  <Image src={creation3} className="w-[300px] h-[430px]" alt="creation-3"></Image>
                  <div className="bg-[#222222] absolute bottom-0">
                    <div className="px-[23px] text-[20px] text-[#EDB731] leading-[150%] font-['Roboto'] font-medium">
                      How AI has changes the way of living
                    </div>
                    <div className="p-[23px] text-[14px] text-[#FFFFFF] leading-[150%] font-['Roboto'] font-light">
                      It is an AI image generator ool. With it, you can create stunning images of your products or ideas.
                    </div>
                    <div className="w-fit m-auto p-[20px]">
                      <Buttton
                        btnColor={'#EDB731'}
                        textColor={'#222222'}
                        title={'Read Now'}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="p-4 bg-black sm:p-6 dark:bg-gray-900">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image src={bigLogo} className="mr-3" alt="FlowBite Logo" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                </li>
                <li>
                  <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" /></svg>
              <span className="sr-only">Dribbbel account</span>
            </a>
          </div>
        </div>
      </footer>

    </>
  );
}
