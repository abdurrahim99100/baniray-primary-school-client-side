/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import BannerCover from "../Shared/BannerCover/BannerCover";
import BannerImage from "../../assets/banner/contact-banner.jpeg";

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>BPS | Contact</title>
            </Helmet>
            <section className="pt-[64px]">
                <BannerCover image={BannerImage} title={"Get in Touch with Us"
                } subTitle={'We’re here to help! Whether you have questions, feedback, or just want to say hello, reach out and let’s connect'} />
                <div className="flex flex-col items-center leading-10 bg-gray-100 py-[100px] mb-20">
                    <h3 className="text-[35px] font-bold">Contact Us</h3>
                    <div className="flex gap-3">
                        <Link to={'/'} className="uppercase">home</Link> |
                        <Link to={'/about-us'} className="uppercase">about</Link>
                    </div>
                </div>
                {/* map */}
                <div className="container mx-auto px-4">
                    <div className="relative" style={{ paddingBottom: '30%' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14715.071194983493!2d89.92367000000003!3d22.773997000000012!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fffb7b8a72e55b%3A0xa29f125369708046!2zNCDgpqjgpoIg4Kaq4Ka24KeN4Kaa4Ka_4KauIOCmmuCmsCDgpqzgpr7gpqjgpr_gpq_gprzgpr7gprDgp4Ag4Ka44Kaw4KaV4Ka-4Kaw4Ka_IOCmquCnjeCmsOCmvuCmpeCmruCmv-CmlSDgpqzgpr_gpqbgp43gpq_gpr7gprLgpq_gprw!5e0!3m2!1sen!2sbd!4v1729655253574!5m2!1sen!2sbd"
                            className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>

            </section>

            <section className="my-[180px]">
                <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-white font-[sans-serif]">
                    <div>
                        <h1 className="text-gray-800 text-3xl font-extrabold">Let's Talk</h1>
                        <p className="text-sm text-gray-500 mt-4">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>

                        <div className="mt-12">
                            <h2 className="text-gray-800 text-base font-bold">Email</h2>
                            <ul className="mt-4">
                                <li className="flex items-center">
                                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                            viewBox="0 0 479.058 479.058">
                                            <path
                                                d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                                data-original="#000000" />
                                        </svg>
                                    </div>
                                    <a href="javascript:void(0)" className="text-[#007bff] text-sm ml-4">
                                        <small className="block">Mail</small>
                                        <strong>banirayprimaryschool@gmail.com</strong>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-12">
                            <h2 className="text-gray-800 text-base font-bold">Socials</h2>

                            <ul className="flex mt-4 space-x-4">
                                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a href="javascript:void(0)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                                                data-original="#000000" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a href="javascript:void(0)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                            viewBox="0 0 511 512">
                                            <path
                                                d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                                                data-original="#000000" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a href="javascript:void(0)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z">
                                            </path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <form className="ml-auto space-y-4">
                        <input type='text' placeholder='Name'
                            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
                        <input type='email' placeholder='Email'
                            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
                        <input type='text' placeholder='Subject'
                            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
                        <textarea placeholder='Message' rows="6"
                            className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"></textarea>
                        <button type='button'
                            className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6">Send</button>
                    </form>
                </div>
            </section>
            <section>
                <section className="bg-gray-100 py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-lg shadow-xl p-8 md:p-16 text-center">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
                                Join Our School Community
                            </h2>
                            <p className="text-gray-600 text-lg md:text-xl mb-8">
                                Enroll your child today and give them the foundation they need for a brighter future. Join us in fostering a nurturing and educational environment.
                            </p>
                            <button className="bg-black text-white font-semibold py-3 px-10 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 focus:outline-none">
                                Join Now
                            </button>
                            <div className="mt-8">
                                <p className="text-sm text-gray-500">Already registered? <a href="#" className="text-black underline hover:text-gray-700">Sign In</a></p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

export default Contact;