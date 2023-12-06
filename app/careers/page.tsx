import React from "react";

const CareersPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-bold mb-4">Careers</h1>
        <p className="700">
          We&apos;re always looking for talented individuals to join our team.
          If you&apos;re passionate about technology and want to make a
          difference, we&apos;d love to hear from you.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-4">Current Openings</h2>
        <ul className="list-disc list-inside 700">
          <li>Software Engineer</li>
          <li>UX Designer</li>
          <li>Data Analyst</li>
        </ul>
        <p className="700 mt-4">
          If you&apos;re interested in any of these positions, please send your
          resume to careers@example.com.
        </p>
      </div>
    </div>
  );
};

export default CareersPage;
