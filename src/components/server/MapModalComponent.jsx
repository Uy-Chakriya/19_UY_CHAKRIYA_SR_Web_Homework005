import { items } from "@/app/data/items";
export default function MapModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl">
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-xl font-bold">{item.title}</h2>
          <button onClick={onClose} className="text-2xl">
            &times;
          </button>
        </div>
        <div className="bg-gray-100 h-40 flex items-center justify-center rounded-lg mb-4">
          <p className="text-blue-600 font-medium">
            {item.location || "No datae Yet"}
          </p>
        </div>

        <p className="text-gray-600 mb-6">{item.description}</p>

        <button
          onClick={onClose}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          (Close)
        </button>
      </div>
    </div>
  );
}
