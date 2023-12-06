const PrivacyPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="700">
          Your privacy is important to us. This privacy policy outlines how we
          collect, use, and protect your personal information when you use our
          website.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-4">
          1. Information Collection
        </h2>
        <p className="700">
          We may collect personal information, such as your name and email
          address, when you fill out our contact form or subscribe to our
          newsletter. We only collect information that is necessary and relevant
          to provide you with our services.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-4">2. Information Usage</h2>
        <p className="700">
          We may use your personal information to respond to inquiries, send
          periodic emails, and improve our website and services. We will never
          sell or share your information with third parties without your
          consent, except as required by law.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-4">3. Data Security</h2>
        <p className="700">
          We take reasonable precautions to protect your personal information
          from unauthorized access, use, or disclosure. However, please note
          that no method of transmission over the internet or electronic storage
          is 100% secure.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPage;
