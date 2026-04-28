import AboutSection from '@/components/sections/AboutSection';
import ClassesSection from '@/components/sections/ClassesSection';
import ContactSection from '@/components/sections/ContactSection';
import GallerySection from '@/components/sections/GallerySection';
import HeroSection from '@/components/sections/HeroSection';
import MomentsCarousel from '@/components/sections/MomentsCarousel';
import PricingSection from '@/components/sections/PricingSection';
import ScheduleSection from '@/components/sections/ScheduleSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

import { DANCE_CLASSES } from '@/lib/data/classes';
import { STUDIO_MOMENTS } from '@/lib/data/moments';
import { PRICING_PLANS } from '@/lib/data/pricing';
import { SCHEDULE } from '@/lib/data/schedule';
import { TESTIMONIALS } from '@/lib/data/testimonials';

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ClassesSection classes={DANCE_CLASSES} />
            <ScheduleSection entries={SCHEDULE} />
            <GallerySection />
            <MomentsCarousel moments={STUDIO_MOMENTS} />
            <TestimonialsSection testimonials={TESTIMONIALS} />
            <PricingSection plans={PRICING_PLANS} />
            <ContactSection />
        </>
    );
}
