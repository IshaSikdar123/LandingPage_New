import React from 'react';

const Courses = () => {
  const courses = [
    { title: 'React for Beginners', price: '$49', description: 'Learn the basics of React and build your first app.' },
    { title: 'Advanced Tailwind CSS', price: '$59', description: 'Master Tailwind CSS and build beautiful interfaces.' },
    { title: 'Full-Stack Development', price: '$99', description: 'Become a full-stack developer with this comprehensive course.' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Courses</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-gray-700">{course.title}</h3>
            <p className="text-teal-500 font-bold mt-2">{course.price}</p>
            <p className="mt-4 text-gray-600">{course.description}</p>
            <button className="mt-4 bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-600">Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
