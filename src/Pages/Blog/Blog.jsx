import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import BannerCover from "../Shared/BannerCover/BannerCover";
import blogImage from "../../assets/banner/blog-banner.jpeg"

const Blog = () => {

    const [blogs, setBlogs] = useState();
    console.log(blogs)
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    return (
        <>
            <Helmet>
                <title>BPS | Blog</title>
            </Helmet>
            <section className="pt-[64px]">
                <BannerCover image={blogImage} title={'welcome to our blog'} subTitle={'Discover Insights, Stories, and the Latest Trends - Join Us on a Journey Through Knowledge and Inspiration'} />
                <section className=" min-h-screen">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-5xl font-extrabold text-center text-blue-900 my-5">
                            ব্লগ
                        </h1>
                        <p className="text-lg text-center text-gray-600 mb-10">
                            ক্লাসের শিক্ষার্থীদের জন্য বিশেষভাবে তৈরি করা শিক্ষামূলক ব্লগ। এখানে আপনি
                            প্রথম থেকে পঞ্চম শ্রেণীর ছাত্রছাত্রীদের জন্য বিভিন্ন শিক্ষা সম্পর্কিত
                            তথ্য ও নির্দেশনা পাবেন।
                        </p>
                        <div className="grid gap-16 lg:grid-cols-2 md:grid-cols-1 pb-52">
                            {blogs?.map((blog) => (
                                <div key={blog.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-72 object-cover"
                                    />
                                    <div className="p-8">
                                        <h2 className="text-3xl font-bold text-gray-800 mb-5">{blog.title}</h2>
                                        <p className="text-gray-500 mb-4">
                                            লেখক: {blog.author} | {blog.date}
                                        </p>
                                        <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                            {blog.description}
                                        </p>
                                        <button className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition duration-300">
                                            বিস্তারিত পড়ুন
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

export default Blog;
