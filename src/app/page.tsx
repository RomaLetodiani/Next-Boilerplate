const HomePage = async () => {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="container mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-gray-900">Home</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md">NextJS Boilerplate</div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
