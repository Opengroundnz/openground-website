# Website refresh handover (branch: jarvis/website-refresh)

Context for continuing this work in a new session. Written 6 Aug 2026 after the
full UI rebuild, last updated 15 Aug 2026. Everything needed to continue lives in
this file, PLACEHOLDERS.md, and the code.

## State

All six pages rebuilt as clean semantic HTML on a hand-built design system:

- `assets/og.css`: the design system. Brand tokens from the Openground Style Guide v1.0:
  Hokey Pokey `#F5BE57`, Vegemite `#191919`, Pavlova `#F2E8DD`, Lupin Purple `#A574BD`,
  Blue Pinkgill `#3D6AF6`. Epilogue for headlines, Poppins for body. Playful editorial
  feel: hard offset shadows (`--shadow-pop`), colour-blocked sections, full-colour portraits
  (Bill's tribute is the one held in black and white), reveal-on-scroll (`.rv` + IntersectionObserver with a 1.6s safety
  fallback), a marquee ticker, mobile off-canvas nav.
- `assets/og.js`: nav, reveals, quote rotator, Year 12/13 switch, Get Involved form
  branching (role radios `I-would-like-to-be` toggle the student/supporter branches).
- `assets/marks/`: hand-authored brand SVGs (ring, burst, asterisk, spark, scribble,
  underline, arrow-loop).
- Webflow CSS/JS and jQuery are no longer referenced by any page (the old asset
  folders remain in the repo for the images/logos still in use).
- Bump the `og.css?v=N` query on every CSS change (cache busting). Currently v21.
- Home page order (Will, 15 Aug): hero, ticker, track-record stats (3), testimonials
  (no photo), the year as a mini timeline (`.steps--mini .steps--terms`), the office
  (two B:HIVE shots in `.duo`, Year 12 only), success stories, New for 2027 (real
  school crests), CTA band. The supporter strip was pulled on 27 Aug, see below. The mentors/partners cards were removed at Will's direction on 15 Aug.
  All general CTAs read "Get involved".
- **No inline `style=` attributes.** They were all moved into named classes on
  14 Aug; keep it that way, it is the main thing that stopped the markup reading
  as machine-generated.
- Layout classes worth knowing: `.split` (copy beside a form/media), `.term` +
  `.term--flip` (alternating photo rows, photo always takes the wider 7fr column),
  `.stagger` (reveal delays via nth-child, no per-element inline delays),
  `.frame--43 / --tall / --video` (ratio frames whose children self-fill),
  `.measure*` + `.centred` (line-length caps), `.lead-person`, `.team-card`,
  `.tribute`, `.price`, `.pullquote`.

## Non-negotiable constraints

1. **Netlify form contract** on get-involved.html: form `name="contact"`,
   `data-netlify="true"`, honeypot `bot-field`, hidden `form-name` input, POST to
   `/thank-you`. Break any of these and submissions silently vanish. Submissions
   email admin@openground.co.nz. Fields were restructured at Will's direction on
   15 Aug: role radios `I-would-like-to-be` (Student/Supporter), supporter
   checkboxes `Support-as` (tick all that apply), `Why-Openground` replaces
   `Business-Idea`, `School` is free text, `Year-Level` runs Year 9 to 13, and
   `How-would-you-like-to-be-involved`, `Age` and `Caregiver-Email` are gone.
   Netlify re-registers fields on deploy.
   **Required fields inside a branch must use `data-req`, not `required`.** A
   `required` control inside a `hidden` branch blocks submit and cannot be focused
   to show the error, so `og.js` adds and removes `required` as branches toggle.
   Phone and the role radios are always visible, so they carry plain `required`.
2. **Pretty URLs**: internal links are extensionless (`/about`); `netlify.toml`
   carries the redirects. Any new page needs netlify.toml + sitemap.xml updates.
3. **No refund messaging anywhere. Hard rule.** No "Term 1 free" (policy died 29 Jul 2026).
4. **No em or en dashes. British NZ English.**
5. **Never push to main.** Branch, PR, Will merges, Netlify deploys from main.
6. No external CDN dependencies beyond Google Fonts and youtube-nocookie embeds.
7. **Heading order must not skip levels** (h1 to h2 to h3). Footer column headings
   are `h3`. The Impeccable detector flags any regression.

## Content decisions already applied (do not revert)

- $1,500 fee is mentioned inside the small "There is an application process." card
  (no big price block; Will killed it 15 Aug). Scholarship wording, per Will 15 Aug:
  limited, for genuine financial hardship, evidence requested.
- Applying requires a business idea (it can change in Term 1). FAQ updated 15 Aug;
  do not restore "no idea needed" to application copy (registering interest is different).
- Dragon's Den removed from the Year 12 framing (5 Aug 2026 decision; it belongs to
  the separate in-school Westlake programme).
- Year 13: "runs as a course during school time... details announced during 2027".
  The old "two to three timetabled periods" claim is unverified; do not restore it.
- "150+ mentors and guest speakers" was removed on 5 Aug as unsupported (12 active
  pairings; ~150 is the whole contact database). On 15 Aug Will explicitly asked for
  it back as a home stat; the copy says "in the network", which matches what the
  ~150 actually is. Same day, from Will: "100+ students taken through the programme"
  (he floated 150+; 100+ is the conservative number used).
- Contact address is admin@openground.co.nz everywhere (info@ is Webflow-era).
- No "backed by Westlake" branding of Openground's own identity (5 Aug decision).
  The 15 Aug exception (a "Backed by the best" supporter strip with Westlake Boys,
  Smales Farm and CAIVO) was **removed on 27 Aug** at the Will and Steve catch up:
  none of the three had agreed to their logos being used. The logo files remain in
  `images/logos/`; restore the section from git history only once permission is in
  writing.
- Board: Will Montague-Brown, Paul Fordham, Brett Hollister (Advancement and
  Development Manager at Westlake Boys, and a director of Thrive Nation and School
  Solutions, appointed 2026). The fourth "To Be Announced" card for the Smale family
  seat was removed on 27 Aug and the grid dropped to three columns; re-add it only
  when there is a name. Operations: Steve Anderson (Programme Coordinator),
  Dale Viljoen (Fractional CTO), Adam Bone (Fractional CMO).
- Verified proof stats: $20k+/month (Oliver Linton's two companies), WriteWise in
  24 schools (Leon Grootscholten, 2025), running since 2022, 1:1 mentor pairing.
  Do not invent numbers beyond these.

## Design review status

Run `npx impeccable@latest detect *.html assets/og.css` (needs Node 22+, use
`/opt/homebrew/opt/node@22/bin` on Will's MacBook). It reports **0 findings** as of
14 Aug. It previously caught, and these are fixed, do not reintroduce:
a thick left border on story outcome lines (the classic AI-generated-UI tell),
skipped heading levels, a flat type scale, and low-contrast muted text on dark.

## Photography

See PLACEHOLDERS.md for the full slot-by-slot map. Two rules learned the hard way:

- **Both years now use photography.** Year 13's old "illustrations" were photos
  wrapped in border-drawing SVGs; on 15 Aug Will asked for full-bleed images, so the
  embedded photos were extracted (`images/y13-*.jpg`) and Go to Market uses the live
  site's notebook composition. (The 14 Aug generic-photo swap he rejected is a
  different thing; these are the same artworks, borderless.)
- Prefer variety of scale and subject over repeated wide shots of the same room.

## Open items awaiting Will

1. **Bill Smale tribute wording** (about.html): must have Will's explicit sign-off
   before merge. Do not publish anything about Bill without it.
2. **Headshots**: Brett, Dale and Adam supplied 15 Aug and in place, with Dale and
   Adam confirmed the right way round. Only the Smale family trustee seat is still a
   placeholder, pending the name. Brett's file is 300x300, softer than the rest.
3. **Link todos: done.** `google-form-2027` now points at the register-interest
   Google Form (the 2027 *application* form does not exist yet, so the copy promises
   an emailed application later). ChargerGoGo has closed, so Olly's mentions were
   dropped from both success-stories.html and the home page card.
4. **Sessions line**: "Monday to Thursday, 3:30 to 5pm" is on the home page and the
   For Students FAQ; Will to confirm before merge.
5. **Highlight reel: done.** Adam delivered it 29 Aug. Self-hosted at
   `assets/video/og-highlight-reel.mp4`, click to play, `object-fit: contain` so it
   keeps its shape in fullscreen. See PLACEHOLDERS.md.
6. Optional: TVNZ Breakfast appearance (two 2026 students, May 2026) is a strong
   proof point, currently left off pending clip rights and Will's call.

## Local preview (Mac only, not Cloud)

Any static server works; pretty URLs need extensionless mapping
(`npx serve` does this out of the box):

```bash
npx serve -l 8890 .
```

The preview server used in-session sends `Cache-Control: no-store`; without that the
browser happily serves a stale copy and it looks like your edits did nothing.

## Definition of done

Will reviews page by page, supplies the open items above, then: push branch,
open PR against main with a summary of content changes and flagged items,
task "Refresh Openground website" in the CAIVO Brain moves with it. Will merges.
