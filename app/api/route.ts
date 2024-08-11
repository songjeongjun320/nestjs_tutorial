import { NextResponse } from "next/server";

const DB = [
  { id: 1, name: "Alice" },
  { id: 1, name: "Bob" },
  { id: 1, name: "Charlie" },
];

export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams;
  const name = searchParams.get("name") as string;
  return NextResponse.json({
    users: DB.filter((user) => user.name.includes(name)),
  });
}
