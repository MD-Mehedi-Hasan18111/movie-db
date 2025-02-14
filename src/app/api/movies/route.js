import { getAllMovies } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  const data = getAllMovies();
  return NextResponse.json(data);
}
