import { getAllPosts } from "@queries";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = getAllPosts();

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.error();
  }
}
