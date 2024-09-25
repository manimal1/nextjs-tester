import prisma from "@prisma";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    const post = await prisma.post.findFirst({
      where: {
        id: params.id,
      },
      include: {
        author: {
          select: { name: true, image: true },
        },
      },
    });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.error();
  }
}
