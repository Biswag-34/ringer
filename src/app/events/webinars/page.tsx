"use client";

import { Video } from "lucide-react";
import EventHero from "@/component/events/EventHero";
import ComingSoon from "@/component/events/ComingSoon";

export default function WebinarsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <EventHero
        title="Scientific Webinars"
        description="Expert-led sessions exploring medical science, therapeutic innovation, and clinical practice."
        icon={Video}
        count={0}
        showIcon={false}
        showCount={false}
      />

      <ComingSoon
        title="Webinars are coming soon"
        description="We are preparing a refined webinar experience for doctors, specialists, and healthcare partners. Upcoming sessions will be shared here once the schedule is ready."
        icon={Video}
      />
    </div>
  );
}
