import Navbar from "@/Components/Navbar";

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700">
          We are a team of passionate developers dedicated to creating
          high-quality web experiences. Our mission is to deliver innovative and
          effective solutions to our clients.
        </p>
      </div>
    </div>
  );
}
