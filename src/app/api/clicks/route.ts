import { NextResponse } from "next/server";
import { getClicksCollection } from "@/lib/mongodb";

// 항상 최신 클릭 수를 돌려주기 위해 캐시하지 않는다
export const dynamic = "force-dynamic";

// 모든 링크의 클릭 수를 { [id]: count } 형태로 한 번에 반환한다
export async function GET() {
  try {
    const clicks = await getClicksCollection();
    if (!clicks) return NextResponse.json({ ok: false }, { status: 503 });

    const docs = await clicks.find().toArray();
    return NextResponse.json({
      ok: true,
      counts: Object.fromEntries(docs.map((d) => [d._id, d.count])),
    });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
