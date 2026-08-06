# Website refresh handover (branch: jarvis/website-refresh)

Context for continuing this work in a Cloud session. Written 6 Aug 2026 after the
full UI rebuild commit. Cloud sessions have no local filesystem access, so
everything needed to continue lives in this file, PLACEHOLDERS.md, and the code.

## State

All six pages rebuilt as clean semantic HTML on a hand-built design system:

- `assets/og.css`: the design system. Brand tokens from the Openground Style Guide v1.0:
  Hokey Pokey `#F5BE57`, Vegemite `#191919`, Pavlova `#F2E8DD`, Lupin Purple `#A574BD`,
  Blue Pinkgill `#3D6AF6`. Epilogue for headlines, Poppins for body. Playful editorial
  feel: inline logo-style marks replacing the letter "o" in headlines (`.om` classes),
  hard offset shadows (`--shadow-pop`), colour-blocked sections, B&W portraits that
  colour on hover, reveal-on-scroll (`.rv` + IntersectionObserver with a 1.6s safety
  fallback), a marquee ticker, mobile off-canvas nav.
- `assets/og.js`: nav, reveals, quote rotator, Year 12/13 switch, Get Involved form
  branching (persona quick-pick buttons sync the real `#Interest` select).
- `assets/marks/`: hand-authored brand SVGs (ring, burst, asterisk, spark, scribble,
  underline, arrow-loop).
- Webflow CSS/JS and jQuery are no longer referenced by any page (the old asset
  folders remain in the repo for the images/logos still in use).
- Bump the `og.css?v=N` query on every CSS change (cache busting).

## Non-negotiable constraints

1. **Netlify form contract** on get-involved.html: form `name="contact"`,
   `data-netlify="true"`, honeypot `bot-field`, hidden `form-name` input, POST to
   `/thank-you`, and the exact existing field names. Break any of these and
   submissions silently vanish. Submissions email admin@openground.co.nz.
2. **Pretty URLs**: internal links are extensionless (`/about`); `netlify.toml`
   carries the redirects. Any new page needs netlify.toml + sitemap.xml updates.
3. **No refund messaging anywhere. Hard rule.** No "Term 1 free" (policy died 29 Jul 2026).
4. **No em or en dashes. British NZ English.**
5. **Never push to main.** Branch, PR, Will merges, Netlify deploys from main.
6. No external CDN dependencies beyond Google Fonts and youtube-nocookie embeds.

## Content decisions already applied (do not revert)

- $1,500 fee public, invoiced on acceptance. Scholarship line (approved wording):
  "Scholarships are available. If cost is the only thing stopping you, come and talk to us."
- Dragon's Den removed from the Year 12 framing (5 Aug 2026 decision; it belongs to
  the separate in-school Westlake programme).
- Year 13: "runs as a course during school time... details announced during 2027".
  The old "two to three timetabled periods" claim is unverified; do not restore it.
- "150+ mentors and guest speakers" removed as unsupported (2026 has 12 active
  mentor pairings; ~150 is the size of the whole contact database). Current copy:
  "every student gets a mentor".
- Contact address is admin@openground.co.nz everywhere (info@ is Webflow-era).
- No "backed by Westlake" branding (5 Aug decision: Westlake branding off all
  Openground material). Trust line: registered charitable trust, B:HIVE, since 2022.
- Board: Will Montague-Brown, Paul Fordham, Brett Hollister (Advancement and
  Development Manager at Westlake Boys, appointed 2026), fourth seat held for the
  Smale family (TBA). Operations: Steve Anderson (Programme Coordinator),
  Dale Viljoen (Fractional CTO), Adam Bone (Fractional CMO).
- Verified proof stats: $20k+/month (Oliver Linton's two companies), WriteWise in
  24 schools (Leon Grootscholten, 2025), running since 2022, 1:1 mentor pairing.
  Do not invent numbers beyond these.

## Open items awaiting Will

1. **Bill Smale tribute wording** (about.html): must have Will's explicit sign-off
   before merge. Do not publish anything about Bill without it.
2. **Image placeholders**: 12 labelled SVGs, see PLACEHOLDERS.md for the full list
   and specs. Will supplies the photos.
3. **Alumni link URLs** on success-stories.html: chips are `#` with `data-todo`
   attributes (olly-linkedin, olly-clean-properties, olly-chargergogo, polo-linkedin,
   polo-portfolio, leon-linkedin, leon-writewise, will-linkedin, will-caivo).
4. **Sessions line**: "Monday to Thursday, 3:30 to 5pm" is on the home page and the
   For Students FAQ; Will to confirm before merge.
5. **Highlight reel**: when Adam delivers the vertical reel, follow the
   `HIGHLIGHT REEL SWAP` comment in index.html (frame--video to frame--tall, swap src).
6. Optional: TVNZ Breakfast appearance (two 2026 students, May 2026) is a strong
   proof point, currently left off pending clip rights and Will's call.

## Local preview (Mac only, not Cloud)

Any static server works; pretty URLs need extensionless mapping
(`npx serve` does this out of the box):

```bash
npx serve -l 8890 .
```

## Definition of done

Will reviews page by page, supplies the open items above, then: push branch,
open PR against main with a summary of content changes and flagged items,
task "Refresh Openground website" in the CAIVO Brain moves with it. Will merges.
