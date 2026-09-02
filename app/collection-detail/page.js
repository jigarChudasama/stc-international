import { redirect } from "next/navigation";
import { colors } from "@/data/collection-detail";

export default function CollectionDetailIndexPage() {
  redirect(`/collection-detail/${colors[0].slug}`);
}
