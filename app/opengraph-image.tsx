import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: "#0f1415",
        color: "#e7eaea",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
        <div style={{ width: 14, height: 14, backgroundColor: "#b5c8df" }} />
        <span
          style={{ fontSize: 24, letterSpacing: 4, textTransform: "uppercase", color: "#b5c8df" }}
        >
          {profile.handle}
        </span>
      </div>
      <div style={{ display: "flex", fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>
        <span>Dvlpr</span>
        <span style={{ color: "#dd9a68" }}>_Chris</span>
      </div>
      <div style={{ display: "flex", fontSize: 32, color: "#9aa3a6", marginTop: 24 }}>
        {profile.role}
      </div>
    </div>,
    { ...size },
  );
}
