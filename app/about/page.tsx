const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat
          enim vitae nisi blandit, eget rutrum dui commodo. Ut condimentum, dui
          in feugiat aliquam, enim ipsum aliquam nunc, a fringilla nunc nisl ut
          neque.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-4">Our Mission</h2>
        <p className="700">
          Our mission is to provide high-quality products that meet the needs of
          our customers. We strive to deliver innovative solutions and
          exceptional customer service.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-4">Our Team</h2>
        <ul className="list-disc list-inside 700">
          <li>John Doe - CEO</li>
          <li>Jane Smith - CTO</li>
          <li>Mike Johnson - CFO</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
