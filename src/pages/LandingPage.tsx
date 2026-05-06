import {
  Shield,
  Zap,
  Timer,
  Sparkles,
  ChevronDown,
  Check,
  Phone,
  Baby,
  Stethoscope,
  Key,
  Glasses,
  Watch,
  Building2,
  Home,
  GraduationCap,
  Hotel,
  ShoppingBag,
  Utensils,
  Mail,
  ArrowRight,
  Droplets,
  Leaf,
  Sun,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

/* ---------- tiny FAQ accordion ---------- */
function FaqItem({
  q,
  a,
}: {
  q: string;
  a: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left font-medium text-base md:text-lg hover:text-primary transition-colors"
      >
        {q}
        <ChevronDown
          className={`size-5 shrink-0 ml-4 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-5 text-muted-foreground leading-relaxed text-sm md:text-base">
          {a}
        </p>
      )}
    </div>
  );
}

/* ---------- reusable stat card ---------- */
function StatCard({
  value,
  label,
  icon: Icon,
}: {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="text-center p-6">
      <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10 mb-3">
        <Icon className="size-6 text-primary" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
        {value}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* ━━━ NAVBAR ━━━ */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="container">
          <div className="flex h-16 items-center justify-between">
            <a
              href="/"
              className="flex items-center gap-2.5 font-bold text-lg hover:opacity-80 transition-opacity"
            >
              <div className="size-9 rounded-xl bg-gradient-to-br from-violet-600 to-violet-500 flex items-center justify-center shadow-lg shadow-violet-500/20">
                <Sun className="size-5 text-white" />
              </div>
              <span>
                UVC <span className="text-primary">SteriBox</span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
              <a href="#features" className="hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="hover:text-foreground transition-colors">
                How It Works
              </a>
              <a href="#specs" className="hover:text-foreground transition-colors">
                Specs
              </a>
              <a href="#applications" className="hover:text-foreground transition-colors">
                Applications
              </a>
              <a href="#faq" className="hover:text-foreground transition-colors">
                FAQ
              </a>
            </nav>

            <Button size="sm" className="shadow-lg shadow-primary/20" asChild>
              <a href="#contact">
                Get a Quote
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* ━━━ HERO ━━━ */}
      <section className="relative flex flex-col items-center justify-center px-4 py-20 md:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(270_80%_90%/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(270_80%_90%/0.15)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold text-primary uppercase tracking-wider">
            <Shield className="size-3.5" />
            Hospital-Grade Sterilization
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]">
            Kill 99.9% of Germs
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
              in Minutes, Not Hours
            </span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The UVC SteriBox uses powerful ultraviolet-C light inside a
            crystal-clear acrylic chamber to disinfect phones, keys, baby items,
            medical tools, and more — with zero chemicals and zero residue.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Button size="lg" className="text-base h-12 px-8 shadow-xl shadow-primary/25" asChild>
              <a href="#contact">
                Request a Quote
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base h-12 px-8"
              asChild
            >
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="size-4 text-primary" />
              <span>99.9% Kill Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="size-4 text-primary" />
              <span>Chemical-Free</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="size-4 text-primary" />
              <span>Auto Shut-Off Safety</span>
            </div>
          </div>
        </div>

        {/* Product visual — stylized acrylic box */}
        <div className="relative mt-16 w-full max-w-md mx-auto">
          <div className="relative aspect-square max-w-[320px] mx-auto">
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-violet-500/20 to-transparent blur-2xl animate-uv-pulse" />
            {/* Box body */}
            <div className="relative rounded-3xl border-2 border-violet-300/40 bg-gradient-to-b from-white/80 to-violet-50/60 backdrop-blur-sm shadow-2xl shadow-violet-500/10 overflow-hidden h-full">
              {/* UV light effect inside */}
              <div className="absolute inset-4 rounded-2xl border border-violet-200/50 bg-gradient-to-b from-violet-100/40 to-violet-200/20 flex flex-col items-center justify-center gap-4">
                {/* UV rays animation */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute inset-x-0 h-1/3 bg-gradient-to-b from-violet-400/15 to-transparent animate-uv-scan" />
                </div>
                {/* Items inside the box */}
                <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 p-6">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="size-14 rounded-xl bg-white/80 shadow-md flex items-center justify-center">
                      <Phone className="size-7 text-violet-600" />
                    </div>
                    <span className="text-[10px] text-violet-600/70 font-medium">Phone</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="size-14 rounded-xl bg-white/80 shadow-md flex items-center justify-center">
                      <Key className="size-7 text-violet-600" />
                    </div>
                    <span className="text-[10px] text-violet-600/70 font-medium">Keys</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="size-14 rounded-xl bg-white/80 shadow-md flex items-center justify-center">
                      <Watch className="size-7 text-violet-600" />
                    </div>
                    <span className="text-[10px] text-violet-600/70 font-medium">Watch</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="size-14 rounded-xl bg-white/80 shadow-md flex items-center justify-center">
                      <Glasses className="size-7 text-violet-600" />
                    </div>
                    <span className="text-[10px] text-violet-600/70 font-medium">Glasses</span>
                  </div>
                </div>
                {/* UV label */}
                <div className="relative z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-600/90 text-white text-xs font-semibold">
                  <Sun className="size-3" />
                  UV-C Active
                </div>
              </div>
              {/* Top strip */}
              <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-violet-400 via-purple-500 to-violet-400" />
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ TRUST STATS ━━━ */}
      <section className="py-12 border-y bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <StatCard value="99.9%" label="Sterilization Rate" icon={Shield} />
            <StatCard value="<10min" label="Full Cycle Time" icon={Timer} />
            <StatCard value="254nm" label="UV-C Wavelength" icon={Sparkles} />
            <StatCard value="0" label="Chemicals Used" icon={Leaf} />
          </div>
        </div>
      </section>

      {/* ━━━ FEATURES ━━━ */}
      <section id="features" className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
              Why UVC SteriBox
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Advanced Protection, Zero Compromise
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Engineered with hospital-grade UV-C technology inside a sleek,
              transparent acrylic chamber you can trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-background to-muted/50 border p-7 transition-all hover:shadow-lg hover:border-primary/30">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 size-24 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" />
              <div className="relative">
                <div className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 mb-5">
                  <Zap className="size-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  99.9% Germ Elimination
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  UV-C light at 254nm wavelength destroys the DNA of bacteria,
                  viruses, and mold — achieving hospital-level sterilization in
                  every cycle.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-background to-muted/50 border p-7 transition-all hover:shadow-lg hover:border-primary/30">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 size-24 rounded-full bg-cyan-500/5 blur-2xl transition-all group-hover:bg-cyan-500/10" />
              <div className="relative">
                <div className="inline-flex size-12 items-center justify-center rounded-xl bg-cyan-500/10 mb-5">
                  <Droplets className="size-6 text-cyan-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  100% Chemical-Free
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  No sprays, no wipes, no residue. UV-C is a physical
                  disinfection process that's safe for food items, baby
                  products, and sensitive electronics.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-background to-muted/50 border p-7 transition-all hover:shadow-lg hover:border-primary/30">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 size-24 rounded-full bg-emerald-500/5 blur-2xl transition-all group-hover:bg-emerald-500/10" />
              <div className="relative">
                <div className="inline-flex size-12 items-center justify-center rounded-xl bg-emerald-500/10 mb-5">
                  <Timer className="size-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Fast Auto Cycles
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Choose from multiple timed modes — 5, 10, or 15 minute
                  sterilization cycles with automatic shut-off for
                  worry-free operation.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-background to-muted/50 border p-7 transition-all hover:shadow-lg hover:border-primary/30">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 size-24 rounded-full bg-amber-500/5 blur-2xl transition-all group-hover:bg-amber-500/10" />
              <div className="relative">
                <div className="inline-flex size-12 items-center justify-center rounded-xl bg-amber-500/10 mb-5">
                  <Shield className="size-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Safety Interlocks
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The UV-C lamp automatically shuts off when the lid is opened
                  mid-cycle, preventing any accidental exposure to UV radiation.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-background to-muted/50 border p-7 transition-all hover:shadow-lg hover:border-primary/30">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 size-24 rounded-full bg-rose-500/5 blur-2xl transition-all group-hover:bg-rose-500/10" />
              <div className="relative">
                <div className="inline-flex size-12 items-center justify-center rounded-xl bg-rose-500/10 mb-5">
                  <Sparkles className="size-6 text-rose-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Crystal-Clear Acrylic
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Premium acrylic enclosure lets you see the sterilization
                  process in action while blocking harmful UV rays from
                  escaping the chamber.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-background to-muted/50 border p-7 transition-all hover:shadow-lg hover:border-primary/30">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 size-24 rounded-full bg-indigo-500/5 blur-2xl transition-all group-hover:bg-indigo-500/10" />
              <div className="relative">
                <div className="inline-flex size-12 items-center justify-center rounded-xl bg-indigo-500/10 mb-5">
                  <Leaf className="size-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Eco-Friendly Design
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Low power consumption (under 40W), long-lasting UV-C lamp
                  rated for 10,000+ hours, and zero disposable waste. Better for
                  your wallet and the planet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ HOW IT WORKS ━━━ */}
      <section id="how-it-works" className="py-20 md:py-28 bg-muted/30 border-y">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Three Steps to Total Sterilization
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              No learning curve. No special training. Just open, place, and
              press start.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="relative text-center">
              <div className="inline-flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-6 shadow-lg shadow-primary/25">
                1
              </div>
              <h3 className="font-semibold text-lg mb-3">Open the Chamber</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Lift the acrylic lid to reveal the spacious UV-reflective
                interior with adjustable trays.
              </p>
              {/* Connector */}
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px border-t-2 border-dashed border-primary/20" />
            </div>

            {/* Step 2 */}
            <div className="relative text-center">
              <div className="inline-flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-6 shadow-lg shadow-primary/25">
                2
              </div>
              <h3 className="font-semibold text-lg mb-3">Place Your Items</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Arrange phones, keys, masks, tools, or baby items on the trays.
                Close the lid securely.
              </p>
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px border-t-2 border-dashed border-primary/20" />
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="inline-flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-6 shadow-lg shadow-primary/25">
                3
              </div>
              <h3 className="font-semibold text-lg mb-3">Press Start</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Select your cycle time and press go. The UV-C lamp activates and
                automatically shuts off when done. 99.9% germ-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ SPECS ━━━ */}
      <section id="specs" className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
              Technical Specifications
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Built to Professional Standards
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Every component is engineered for maximum sterilization
              performance and long-term reliability.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl border overflow-hidden bg-card shadow-sm">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ["UV-C Wavelength", "254 nm (germicidal peak)"],
                    ["Sterilization Rate", "99.9% against bacteria & viruses"],
                    ["Cycle Times", "5 / 10 / 15 minutes (selectable)"],
                    ["Chamber Material", "Premium UV-blocking acrylic"],
                    ["Interior Surface", "Reflective coating for 360° coverage"],
                    ["Lamp Type", "Philips UV-C quartz tube"],
                    ["Lamp Life", "10,000+ working hours"],
                    ["Power Consumption", "35W (standard) / 60W (large)"],
                    ["Power Input", "230V AC, 50Hz"],
                    ["Safety Features", "Auto shut-off on lid open, timer control"],
                    ["Certifications", "CE, FCC, RoHS compliant"],
                    ["Available Sizes", "Compact (5L) / Standard (17L) / Large (35L)"],
                  ].map(([label, value], i) => (
                    <tr
                      key={label}
                      className={`${i % 2 === 0 ? "bg-muted/30" : ""} border-b last:border-b-0`}
                    >
                      <td className="px-6 py-4 font-medium text-foreground whitespace-nowrap">
                        {label}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ APPLICATIONS ━━━ */}
      <section id="applications" className="py-20 md:py-28 bg-muted/30 border-y">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
              Applications
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Protect Every Space That Matters
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              From personal everyday items to professional medical equipment —
              the UVC SteriBox adapts to any environment.
            </p>
          </div>

          {/* Items you can sterilize */}
          <div className="mb-16">
            <h3 className="text-center text-lg font-semibold mb-8 text-muted-foreground">
              What You Can Sterilize
            </h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {[
                { icon: Phone, label: "Phones & Tablets" },
                { icon: Key, label: "Keys & Wallets" },
                { icon: Baby, label: "Baby Bottles & Toys" },
                { icon: Stethoscope, label: "Medical Instruments" },
                { icon: Glasses, label: "Eyeglasses" },
                { icon: Watch, label: "Watches & Jewelry" },
                { icon: ShoppingBag, label: "Groceries" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-background border shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
                >
                  <Icon className="size-4 text-primary" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Where to use */}
          <div>
            <h3 className="text-center text-lg font-semibold mb-8 text-muted-foreground">
              Ideal For
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {[
                { icon: Home, label: "Homes" },
                { icon: Stethoscope, label: "Clinics" },
                { icon: Building2, label: "Offices" },
                { icon: Hotel, label: "Hotels" },
                { icon: GraduationCap, label: "Schools" },
                { icon: Utensils, label: "Restaurants" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-background border shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
                >
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ FAQ ━━━ */}
      <section id="faq" className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <FaqItem
              q="Is UV-C light safe?"
              a="UV-C light is completely safe when used inside an enclosed chamber like the SteriBox. The acrylic enclosure blocks all UV radiation from escaping. The built-in safety interlock automatically turns off the UV-C lamp if the lid is opened during a cycle, preventing any accidental exposure."
            />
            <FaqItem
              q="How long does sterilization take?"
              a="A full sterilization cycle takes between 5 and 15 minutes depending on the mode you select. The 10-minute cycle is recommended for everyday items and provides more than enough UV-C dosage to eliminate 99.9% of bacteria and viruses."
            />
            <FaqItem
              q="What items can I sterilize?"
              a="You can sterilize virtually any non-living item that fits inside the chamber: phones, tablets, keys, wallets, baby bottles, pacifiers, toothbrushes, jewelry, watches, face masks, medical instruments, glasses, remote controls, and even small groceries. UV-C is safe for electronics and food-grade items."
            />
            <FaqItem
              q="How often do I need to replace the UV-C lamp?"
              a="The Philips UV-C lamp is rated for over 10,000 working hours. For typical home use (a few cycles per day), this translates to several years before replacement is needed. Replacement lamps are readily available and easy to swap in."
            />
            <FaqItem
              q="Does UV-C kill viruses like COVID-19?"
              a="Yes. UV-C light at 254nm wavelength has been scientifically proven to inactivate SARS-CoV-2 (the virus that causes COVID-19), along with influenza, E. coli, Salmonella, and many other pathogens. It disrupts the DNA/RNA of microorganisms, rendering them unable to replicate."
            />
            <FaqItem
              q="What sizes are available?"
              a="The UVC SteriBox comes in three sizes: Compact (5L) for personal items like phones and keys, Standard (17L) for households and small offices, and Large (35L) for clinics, hotels, and commercial use. Custom sizes are also available for bulk orders."
            />
            <FaqItem
              q="How much power does it use?"
              a="The SteriBox is very energy-efficient, consuming only 35W for the standard model (comparable to a light bulb). Even with multiple daily cycles, the electricity cost is negligible — just a few cents per month."
            />
          </div>
        </div>
      </section>

      {/* ━━━ CONTACT / CTA ━━━ */}
      <section
        id="contact"
        className="relative py-20 md:py-28 overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]" />

        <div className="relative container text-center text-white">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ready to Upgrade Your Hygiene?
            </h2>
            <p className="text-violet-100 text-lg leading-relaxed">
              Whether you need one unit for your home or a fleet for your
              business, we're here to help. Get in touch for pricing, bulk
              orders, or custom solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-white text-violet-700 hover:bg-violet-50 text-base h-12 px-8 shadow-xl"
                asChild
              >
                <a href="mailto:info@uvcsteribox.com">
                  <Mail className="size-4" />
                  Contact Us
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-base h-12 px-8 bg-transparent"
                asChild
              >
                <a href="https://wa.me/6738000000" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>

            <p className="text-violet-200 text-sm pt-4">
              Bulk pricing available for orders of 10+ units
            </p>
          </div>
        </div>
      </section>

      {/* ━━━ FOOTER ━━━ */}
      <footer className="py-10 border-t bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 font-bold text-lg">
              <div className="size-8 rounded-lg bg-gradient-to-br from-violet-600 to-violet-500 flex items-center justify-center">
                <Sun className="size-4 text-white" />
              </div>
              <span>
                UVC <span className="text-primary">SteriBox</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} UVC SteriBox. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#features" className="hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#specs" className="hover:text-foreground transition-colors">
                Specs
              </a>
              <a href="#faq" className="hover:text-foreground transition-colors">
                FAQ
              </a>
              <a href="#contact" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
