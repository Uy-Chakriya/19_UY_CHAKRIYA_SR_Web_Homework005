export default function ProductCard({ item, onView }) {
  return (
    <div className="border p-4 rounded-lg shadow-sm">
      <h3 className="font-bold mb-3">{item.title}</h3>

      <button
        onClick={() => onView(item)}
        className="w-full bg-blue-600 text-white py-2 rounded-md"
      >
        View
      </button>
    </div>
  );
}
