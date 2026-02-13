import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Packages from "@/components/Packages";
import RecurringRevenue from "@/components/RecurringRevenue";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-900">
      <Hero />
      <Problem />
      <Solution />
      <Packages />
      <RecurringRevenue />
      <SocialProof />
      <FinalCTA />
      <ContactForm />
    </main>
  );
}
