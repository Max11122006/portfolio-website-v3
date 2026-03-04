# PORTFOLIO_EXPERIENCE_SPEC.md

## Core Objective

Build an immersive, highly interactive engineering portfolio using:

- Next.js (App Router)
- TypeScript
- TailwindCSS
- Framer Motion
- Three.js or React Three Fiber (for controlled 3D elements)

This is NOT a normal scrolling website.

It should feel like entering a digital engineering lab.

If it feels like a normal portfolio layout, rebuild it.

---

# 1. Experience Concept

The website behaves like a dynamic engineering workspace.

As the user scrolls:

- Systems activate
- Circuit paths animate
- Projects connect visually
- Background transforms
- Components respond

Scrolling should feel like powering up layers of a system.

---

# 2. Global Interactive System

## Dynamic Breadboard World

Instead of static backgrounds:

Create a full-screen interactive breadboard / circuit environment.

Features:

- Subtle animated circuit lines across the background
- Nodes that light up as sections enter viewport
- Mouse movement causes nearby nodes to react
- Lines connect featured projects dynamically
- Background shifts depth slightly on scroll (parallax layers)

When user scrolls down:
- More of the “system” activates
- Additional circuit paths illuminate

This must feel intentional, not chaotic.

---

# 3. Scroll = System Activation

Scrolling should trigger staged transformations.

## Stage 1 – Landing (Idle System)

Hero appears minimal.

Background:
- Very faint grid
- Few inactive nodes

As user scrolls 10–20%:
- Circuit lines begin animating
- Nodes light up
- Name subtly morphs into thinner weight
- Subheading slides in from opposite direction

---

## Stage 2 – Projects Activation

When reaching Featured Projects:

- Circuit lines connect each project card
- Cards appear as powered modules
- Hovering a card increases brightness of connected lines
- Clicking zooms into that module with a smooth transition

Cards should feel like plug-in modules on a board.

---

## Stage 3 – Systems Map View

Mid-scroll:

Transform layout into a systems diagram.

Projects reposition slightly (animated layout shift).
Thin animated lines connect:

- Car → Mechanical systems
- 3D Printer → Fabrication systems
- GitHub → Software systems

Add subtle floating labels near connections.

---

## Stage 4 – GitHub Engine Room

GitHub section should feel like entering a digital core.

Background shifts to:

- Slightly denser grid
- Faster but subtle data-line animations

Each project card:

- Expands dynamically on hover
- Displays tech stack as animated tags
- GitHub icon pulses gently

---

# 4. 3D or Depth Layer

Include one subtle 3D element:

Option A:
Floating wireframe satellite or aircraft model in hero.

Option B:
Rotating abstract mechanical object made of lines and nodes.

It must:

- Rotate slowly
- React slightly to mouse
- Not dominate performance

This gives immediate visual identity.

---

# 5. Real Project Pages

When clicking Car or 3D Printer:

Transition into an immersive project view.

## Car Page

- Animated vertical timeline of modifications
- Scroll-driven animation where car outline gets highlighted in sections
- Diagnostic notes appear as expandable “system logs”

Make it feel like a technical breakdown interface.

---

## 3D Printer Page

- Animated layer lines appearing as you scroll
- Exploded diagram-style layout
- Sections slide in from different directions

---

# 6. Cursor & Micro-Interactions

Optional but encouraged:

- Custom minimal cursor (small glowing node)
- Hovering over elements creates connection line to nearest node
- Buttons feel like switches being activated

---

# 7. Motion Rules

- No bounce animations
- No oversaturated colors
- Motion must feel engineered, not playful
- Smooth, physics-based transitions only

---

# 8. Performance Constraints

Even with heavy interaction:

- Maintain high performance
- Lazy-load heavy components
- Use dynamic imports for 3D sections
- Avoid massive SVGs
- Optimize animation loops

---

# 9. Emotional Outcome

User reaction should be:

"This is different."
"This feels built, not templated."
"This person experiments."

If it looks like a standard portfolio with fade-ins, it has failed.

---

# Final Instruction

Design this as an interactive system experience, not a static page.

Prioritize uniqueness, controlled motion, and immersive transitions.
