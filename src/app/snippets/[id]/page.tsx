import { notFound } from "next/navigation";
import { db } from "@/app/db";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}
export default async function SnippetShowPage(props: SnippetShowPageProps) {
  const snippet = await db.snippet.findFirst({
    where: { id: +props.params.id },
  });

  if (!snippet) {
    return notFound();
  }
  return <div>{snippet.title}</div>;
}
