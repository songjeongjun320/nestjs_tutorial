"use server";

export async function searchUsers(name: string) {
  const DB = [
    { id: 1, name: "Alice" },
    { id: 1, name: "Bob" },
    { id: 1, name: "Charlie" },
  ];
  return DB.filter((user) => user.name.includes(name));
}
