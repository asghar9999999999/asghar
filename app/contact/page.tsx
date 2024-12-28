export default function Contact() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <form className="max-w-lg">
        <div className="mb-4">
          <label className="block text-lg font-medium">Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium">Message</label>
          <textarea
            className="w-full p-2 border rounded"
            rows={4}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
