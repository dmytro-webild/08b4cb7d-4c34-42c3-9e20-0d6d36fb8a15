"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="large"
        background="none"
        cardStyle="inset"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Features", id: "features" },
        { name: "Pricing", id: "pricing" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="NovaCrypto"
      button={{ text: "Get Started", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{ variant: "gradient-bars" }}
      title="The Future of Digital Asset Wealth"
      description="Experience professional-grade crypto trading with unparalleled security and institutional precision."
      testimonials={[
        { name: "Marcus Thorne", handle: "@mthorne", testimonial: "The most secure and intuitive crypto platform I've used. Absolutely essential for serious traders.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/desktop-pc-wooden-desk-showcases-infographics-client-reach-data_482257-126353.jpg?_wi=1", imageAlt: "crypto investment digital blue tech" },
        { name: "Elena Vance", handle: "@evance", testimonial: "NovaCrypto redefined my investment strategy. Their speed and institutional tools are unmatched.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/blockchain-technology-cartoon-illustration_23-2151572142.jpg?_wi=1", imageAlt: "crypto investment digital blue tech" },
        { name: "David Chen", handle: "@dchen", testimonial: "Professional, reliable, and high-performance trading. Highly recommended.", rating: 5, imageSrc: "http://img.b2bpic.net/free-vector/glowing-digital-rupee-symbol-background-with-particle-effect_1017-41271.jpg?_wi=1", imageAlt: "crypto investment digital blue tech" },
        { name: "Sarah Jenkins", handle: "@sjenkins", testimonial: "Finally, a platform that understands institutional needs. Security is world-class.", rating: 5, imageSrc: "http://img.b2bpic.net/free-vector/global-bitcoin-network-presence-concept-background-with-earth_1017-30488.jpg?_wi=1", imageAlt: "crypto investment digital blue tech" },
        { name: "Robert Wu", handle: "@rwu", testimonial: "The analytics tools here have helped me optimize my portfolio better than any competitor.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/cybersecurity-threats-map-with-real-time-pulse-visualization_23-2152001128.jpg?_wi=1", imageAlt: "crypto investment digital blue tech" }
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/desktop-pc-wooden-desk-showcases-infographics-client-reach-data_482257-126353.jpg?_wi=2"
      imageAlt="Futuristic digital crypto interface"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-modelsexy-modern-man-dressed-elegant-suit-spectacles-fashion-male-posing-studio-near-blue-wall-looking-camera-glasses_158538-21056.jpg", alt: "Portrait of handsome confident stylish hipster" },
        { src: "http://img.b2bpic.net/free-photo/young-male-white-shirt-jacket-standing-with-crossed-arms-looking-serious-front-view_176474-99669.jpg", alt: "Young male in white shirt, jacket standing" },
        { src: "http://img.b2bpic.net/free-photo/portrait-young-confident-man_176474-85918.jpg", alt: "Portrait of a young confident man" },
        { src: "http://img.b2bpic.net/free-photo/young-male-holding-hands-pockets-white-shirt-jacket-looking-elegant-front-view_176474-99655.jpg", alt: "Young male holding hands in pockets" },
        { src: "http://img.b2bpic.net/free-photo/young-woman-sitting-library_273609-15845.jpg", alt: "Young woman sitting in library" }
      ]}
      marqueeItems={[
        { type: "text", text: "BTC: +2.4%" },
        { type: "text", text: "ETH: -0.8%" },
        { type: "text", text: "SOL: +5.1%" },
        { type: "text", text: "ADA: +1.2%" },
        { type: "text", text: "DOT: -0.3%" }
      ]}
      buttons={[
        { text: "Get Started", href: "#contact" },
        { text: "Learn More", href: "#features" }
      ]}
    />
  </div>

  <div id="logo-billboard" data-section="logo-billboard">
      <HeroLogo
        logoText="Trusted by Global Institutions"
        description="Building the infrastructure for the next generation of digital assets."
        buttons={[{ text: "Explore Assets", href: "#features" }]}
        imageSrc="http://img.b2bpic.net/free-photo/blockchain-technology-cartoon-illustration_23-2151572142.jpg"
        imageAlt="Trusted partners logos"
      />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { id: "f1", label: "Security", title: "Military Grade Encryption", items: ["Cold storage protection", "Multi-signature auth", "24/7 security monitoring"] },
        { id: "f2", label: "Execution", title: "Ultra-Fast Execution", items: ["Low latency trading", "Institutional liquidity", "Zero slippage model"] },
        { id: "f3", label: "Growth", title: "Smart Growth Tools", items: ["Automated portfolio rebalancing", "Deep market analytics", "Customized risk management"] }
      ]}
      title="Institutional Security, Retail Simplicity"
      description="Powerful tools designed for the modern investor, providing security and speed."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "$12B+", title: "Total Volume", description: "Assets traded securely on our network.", imageSrc: "http://img.b2bpic.net/free-photo/blockchain-technology-cartoon-illustration_23-2151572142.jpg?_wi=2" },
        { id: "m2", value: "150k+", title: "Active Traders", description: "Global community of institutional investors.", imageSrc: "http://img.b2bpic.net/free-vector/glowing-digital-rupee-symbol-background-with-particle-effect_1017-41271.jpg?_wi=2" },
        { id: "m3", value: "99.9%", title: "Uptime", description: "Resilient architecture ensures 24/7 access.", imageSrc: "http://img.b2bpic.net/free-vector/global-bitcoin-network-presence-concept-background-with-earth_1017-30488.jpg?_wi=2" }
      ]}
      title="Proven Market Results"
      description="Our numbers reflect our commitment to excellence."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "p1", name: "Market Analysis Terminal", price: "Included", variant: "Terminal", imageSrc: "http://img.b2bpic.net/free-photo/cybersecurity-threats-map-with-real-time-pulse-visualization_23-2152001128.jpg?_wi=2" },
        { id: "p2", name: "Mobile Trading Pro", price: "Included", variant: "Mobile", imageSrc: "http://img.b2bpic.net/free-photo/business-person-looking-finance-graphs_23-2150461319.jpg" },
        { id: "p3", name: "Nova Ledger Card", price: "$99", variant: "Card", imageSrc: "http://img.b2bpic.net/free-photo/ramadan-credit-card-left-side_187299-37896.jpg" },
        { id: "p4", name: "Margin Trading Portal", price: "Subscription", variant: "Portal", imageSrc: "http://img.b2bpic.net/free-photo/asian-woman-freelancer-working-from-home-business-app-home-business-laptop-computer-businesswoman-office-working-sitting-woman-work-communication-internet-people-online-happy-technology_482257-47239.jpg" },
        { id: "p5", name: "API Trading Gateway", price: "Custom", variant: "API", imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-entrepreneur-working-from-home-his-personal-finances-savings_181624-34457.jpg" },
        { id: "p6", name: "Institutional Vault", price: "Custom", variant: "Vault", imageSrc: "http://img.b2bpic.net/free-photo/using-credit-card_23-2151918470.jpg" }
      ]}
      title="Advanced Trading Tools"
      description="Choose the platform experience that fits your trading style."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        { id: "basic", title: "Basic Access", price: "$0", period: "forever", features: ["Limited trading", "Security tools", "Community support"], button: { text: "Start Free" }, imageSrc: "http://img.b2bpic.net/free-photo/close-up-hand-holding-futuristic-screen_23-2149126945.jpg", imageAlt: "Close up hand holding futuristic screen" },
        { id: "pro", title: "Pro Trader", price: "$49", period: "/mo", features: ["Unlimited trading", "Deep analytics", "24/7 Priority support"], button: { text: "Get Pro" }, imageSrc: "http://img.b2bpic.net/free-photo/desktop-pc-wooden-desk-showcases-infographics-client-reach-data_482257-126353.jpg?_wi=3", imageAlt: "Close up hand holding futuristic screen" },
        { id: "institutional", title: "Institutional", price: "Custom", period: "/mo", features: ["OTC Trading Desk", "Dedicated Account Manager", "Advanced Vault"], button: { text: "Contact Sales" }, imageSrc: "http://img.b2bpic.net/free-photo/blockchain-technology-cartoon-illustration_23-2151572142.jpg?_wi=3", imageAlt: "Close up hand holding futuristic screen" }
      ]}
      title="Transparent Pricing"
      description="Simple, tiered plans for everyone, from beginners to institutions."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Marcus Thorne", role: "CEO", company: "AlphaCapital", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-confident-man_176474-85949.jpg" },
        { id: "t2", name: "Elena Vance", role: "CTO", company: "VanceFinance", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-successful-grey-haired-female-ceo-smiling-content-experienced-beautiful-businesswoman-posing-office-room-business-company-appearance-expression-concept_74855-11905.jpg" },
        { id: "t3", name: "David Chen", role: "Head of Trading", company: "GlobalTrade", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-businesswoman-posing-with-coffee_23-2148452691.jpg" },
        { id: "t4", name: "Sarah Jenkins", role: "CIO", company: "JenkinsCapital", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/bearded-man-red-tie-shirt-wearing-glasses-looking-camera-smiling-presenting-copy-space-with-arm-his-handstanding-orange-background_141793-110723.jpg" },
        { id: "t5", name: "Robert Wu", role: "Founder", company: "WuAssets", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-modern-male_23-2148514900.jpg" }
      ]}
      kpiItems={[
        { value: "100%", label: "Client Satisfaction" },
        { value: "4.9/5", label: "Average Rating" },
        { value: "500+", label: "Global Reviews" }
      ]}
      title="Trusted by Leaders"
      description="What our clients say about our professional service."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "How secure is my portfolio?", content: "We use industry-leading cold storage and multi-sig protocols." },
        { id: "q2", title: "Can I trade institutional size?", content: "Yes, our Institutional plan is designed for large OTC trades." },
        { id: "q3", title: "Is my data protected?", content: "We maintain rigorous data privacy and encryption standards." }
      ]}
      sideTitle="Common Questions"
      sideDescription="Clear, concise answers to help you get started."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{ variant: "sparkles-gradient" }}
      tag="Ready to Start?"
      title="Join the Elite Network"
      description="Sign up for early access to our institutional platform."
      mediaAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/high-tech-office-ready-stock-trading_482257-121465.jpg"
      imageAlt="High tech office ready for stock trading"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        { title: "Platform", items: [{ label: "Trading", href: "#" }, { label: "Security", href: "#" }] },
        { title: "Company", items: [{ label: "About", href: "#" }, { label: "Career", href: "#" }] },
        { title: "Legal", items: [{ label: "Privacy", href: "#" }, { label: "Terms", href: "#" }] }
      ]}
      bottomLeftText="© 2024 NovaCrypto"
      bottomRightText="All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}