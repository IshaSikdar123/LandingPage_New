import React from 'react';

const Blog = () => {
  const posts = [
    { title: 'React Best Practices', date: 'Dec 12, 2024', excerpt: 'Discover the top React practices for clean and scalable code.' },
    { title: 'Tailwind Tips', date: 'Nov 30, 2024', excerpt: 'Level up your Tailwind CSS skills with these tips.' },
    { title: 'Deploying React Apps', date: 'Oct 15, 2024', excerpt: 'Step-by-step guide to deploying React applications.' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Blog</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-gray-700">{post.title}</h3>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="mt-4 text-gray-600">{post.excerpt}</p>
            <button className="mt-4 bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
