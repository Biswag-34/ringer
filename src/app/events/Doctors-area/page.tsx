"use client";

import { UserRound } from "lucide-react";
import EventHero from "@/component/events/EventHero";
import ComingSoon from "@/component/events/ComingSoon";

export default function DoctorsAreaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <EventHero
        title="Doctor's Area"
        description="A dedicated space for clinical learning, expert updates, and specialist resources."
        icon={UserRound}
        count={0}
        showIcon={false}
        showCount={false}
      />

      <ComingSoon
        title="Doctor's Area is coming soon"
        description="We are building a clean professional space for curated clinical resources, expert-led content, and Ringer scientific updates for healthcare professionals."
        icon={UserRound}
      />
    </div>
  );
}
