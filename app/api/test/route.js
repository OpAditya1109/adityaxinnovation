import clientPromise from "@/lib/mongodb";

export async function GET() {

  try {

    const client = await clientPromise;

    const db = client.db("adityaXinnovations");

    const result = await db.collection("test").insertOne({
      name: "Aditya",
      createdAt: new Date()
    });

    return Response.json({
      success: true,
      id: result.insertedId
    });

  } catch (error) {

    return Response.json({
      success: false,
      error: error.message
    });

  }

}