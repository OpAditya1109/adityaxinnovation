import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {

    const body = await req.json();

    console.log("Received body:", body);

    const client = await clientPromise;

    console.log("Mongo connected");

    const db = client.db("adityaxinnovations");

    const result = await db.collection("enquiries").insertOne({
      name: body.name,
      email: body.email,
      phone: body.phone,
      services: body.services,
      budget: body.budget,
      message: body.message,
      createdAt: new Date(),
    });

    console.log("Inserted:", result.insertedId);

    return Response.json({
      success: true,
      id: result.insertedId,
    });

  } catch (error: any) {

    console.error("API ERROR:", error);

    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );

  }
}