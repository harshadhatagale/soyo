import { promises as fs } from "fs";
import path from "path";

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "public", "rooms.json");
  const data = await fs.readFile(filePath, "utf-8");
  const rooms = JSON.parse(data);

  return rooms.map((room) => ({
    id: room.id.toString(),
  }));
}

export default async function RoomDetail({ params }) {
  const { id } = params;

  // Load room data from JSON file
  const filePath = path.join(process.cwd(), "public", "rooms.json");
  const data = await fs.readFile(filePath, "utf-8");
  const rooms = JSON.parse(data);

  // Find room by ID
  const room = rooms.find((r) => r.id.toString() === id);

  if (!room) {
    return <div className="text-center text-2xl mt-10">Room Not Found</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800">{room.name}</h1>
            <p className="text-gray-600 mt-2">{room.address}</p>
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-700">Details</h2>
              <ul className="mt-2 text-gray-600">
                <li>
                  <strong>Room:</strong> {room.room}
                </li>
                <li>
                  <strong>Facilities:</strong> {room.facilities}
                </li>
                <li>
                  <strong>Cost:</strong> {room.cost}
                </li>
                <li>
                  <strong>Note:</strong> {room.note}
                </li>
                <li>
                  <strong>Contact:</strong> {room.mobile}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
