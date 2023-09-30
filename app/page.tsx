import Main from "./main";
import { Week } from "./types";

export default async function Home() {
  const res = await fetch(process.env.BACKEND_URL as string, {
    next: { revalidate: 3600 },
  });
  const data: Week = await res.json();

  return <Main data={data} />;
}
