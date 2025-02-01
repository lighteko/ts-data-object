import { dataclass, serialize } from "./dist/index";

@dataclass()
class Provider {
  providerId!: string;
  categories!: string[];
  createdDate!: Date;
}

async function main() {
  const jsonData = {
    providerId: "123",
    categories: ["tech", "news"],
    createdDate: "2025-02-01T12:00:00Z"
  };

  try {
    const provider = await serialize(Provider, jsonData);
    console.log("✅ 변환 성공:", provider);
  } catch (err) {
    console.error("❌ 유효성 검사 실패:", err);
  }
}

main();