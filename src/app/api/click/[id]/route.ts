import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

export async function POST(
  _req: Request,
  { params }: { params: { id: string } }
) {
  // 등록된 링크 id만 집계한다
  if (!links.some((link) => link.id === params.id)) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  try {
    const clicks = await getClicksCollection();
    if (!clicks) return NextResponse.json({ ok: false }, { status: 503 });

    await clicks.updateOne(
      { _id: params.id },
      { $inc: { count: 1 } },
      { upsert: true }
    );
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
