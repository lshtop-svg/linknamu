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

    // 증가 후의 DB 값을 돌려줘서 화면이 다른 곳에서 누른 횟수까지 반영하게 한다
    const doc = await clicks.findOneAndUpdate(
      { _id: params.id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" }
    );
    return NextResponse.json({ ok: true, count: doc?.count });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
