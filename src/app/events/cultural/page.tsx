"use client";

import { Users } from "lucide-react";
import EventHero from "@/component/events/EventHero";
import ComingSoon from "@/component/events/ComingSoon";

export default function CulturalEventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <EventHero
        title="Cultural Events"
        description="Celebrating the people, culture, and shared moments that shape life at Ringer."
        icon={Users}
        count={0}
        showIcon={false}
        showCount={false}
      />

      <ComingSoon
        title="Cultural updates are coming soon"
        description="We are curating moments from team celebrations, internal initiatives, and culture-led activities. This section will be updated with authentic Ringer stories soon."
        icon={Users}
      />
    </div>
  );
}
