// Importez les modules nécessaires
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { isTeacher } from "@/lib/teacher";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    
    const { name, email, phoneNumber, status } = await req.json();

    if (!userId || !isTeacher(userId)) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const lead = await db.lead.create({
      data: {
        userId, 
        name, 
        email, 
        phoneNumber, 
        status, 
      }
    });

    return NextResponse.json(lead);
  } catch (error) {
    console.log("[LEADS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
