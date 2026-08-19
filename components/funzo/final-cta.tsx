"use client";
import { motion } from "framer-motion";
import {
  GraduationCap,

} from "lucide-react";
import { Section } from "./shared";
import { PartnershipForm } from "./partnership-form";
import { EnquiryModal } from "./enquiries";

export function FinalCTA() {
  return (
    <Section id="contact">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative rounded-[2.5rem] overflow-hidden gradient-bg animated-gradient glow-shadow p-1"
      >
        <div className="rounded-[calc(2.5rem-4px)] bg-card/95 backdrop-blur p-10 sm:p-16 text-center">
          <GraduationCap className="h-12 w-12 mx-auto text-purple-glow mb-4" />

          <h2 className="text-3xl sm:text-5xl font-bold">
            Help Shape{" "}
            <span className="gradient-text">
              Africa&apos;s Digital Future
            </span>
          </h2>

          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Join investors, sponsors, schools and governments building the
            next generation of African innovators.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <EnquiryModal
                  title="Partner With FunzoCoin Kids"
                  description="Tell us a little about your organization and how you'd like to get involved."
                  triggerLabel="Become a Partner"
                  triggerClassName="gradient-bg animated-gradient text-white border-0 glow-shadow"
            >
              <PartnershipForm  presetInterest="Funding Partnership" />
            </EnquiryModal>
            {/* <PartnerTrigger 
            presetInterest="Funding Partnership" 
            className="gradient-bg animated-gradient text-white border-0 glow-shadow"/> */}
                <EnquiryModal
                  title="Partner With FunzoCoin Kids"
                  description="Tell us a little about your organization and how you'd like to get involved."
                  triggerLabel="Sponsor a Workshop"
                  triggerClassName="gradient-bg animated-gradient text-white border-0 glow-shadow"
            >
              <PartnershipForm  presetInterest="Sponsor a Workshop" />
            </EnquiryModal>

            <EnquiryModal
                  title="Partner With FunzoCoin Kids"
                  description="Tell us a little about your organization and how you'd like to get involved."
                  triggerLabel="Book a Demo"
                  triggerClassName="gradient-bg animated-gradient text-white border-0 glow-shadow"
            >
              <PartnershipForm  presetInterest="Other" />
            </EnquiryModal>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}