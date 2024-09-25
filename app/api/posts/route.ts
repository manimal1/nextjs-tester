import prisma from "@prisma";
import { NextResponse } from "next/server";

// Fetch all posts
export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: { name: true, image: true },
        },
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.error();
  }
}
