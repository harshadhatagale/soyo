import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  const jsonFilePath = path.join(process.cwd(), "public", "rooms.json");

  try {
    const fileContents = await fs.readFile(jsonFilePath, "utf8");
    const rooms = JSON.parse(fileContents);
    return new Response(JSON.stringify(rooms), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error reading the JSON file:", error);
    return new Response(
      JSON.stringify({ message: "Error loading rooms data." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
