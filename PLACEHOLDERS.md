# Images: what is in place, what is still wanted

Grey dashed boxes on the site are labelled SVGs in `images/placeholders/`.
To replace one: drop the real photo into `images/`, then swap the `src` in the page listed below.

## Photography in place

| Slot | File | Source |
|---|---|---|
| Home, the office | `bhive-exterior.jpg` + `bhive-staircase.jpg` | The Y12 assembly deck |
| Home, the year timeline | `session-whiteboard.jpg` | OG, restored from git at Will's request 15 Aug |
| About, board + operations | `will-montague-brown.jpg` | Will's Profile Zoomed.jpg (Desktop), supplied 15 Aug |
| About, board | `brett-hollister.jpg` | supplied 15 Aug (300x300, smaller than the others; ask for a larger file if it looks soft) |
| About, operations | `dale-viljoen.jpg`, `adam-bone.jpg` | supplied 15 Aug, confirmed by Will: Dale wears glasses, Adam's is the black and white studio portrait |
| For Students, Year 12 Term 1 | `session-teaching.jpg` | OG-8, Steve talking the cohort through a session |
| For Students, Year 12 Term 2 | `mentor-conversation.jpg` | Supplied by Will 15 Aug, student and mentor one-on-one |
| For Students, Year 12 Term 3 | `speaker-presenting.jpg` | A7402040 original, 4:3 crop chosen by Will 15 Aug |
| For Students, Year 12 Term 4 | `showcase-speaker.jpg` + `showcase-crowd.jpg` | Will speaking at Showcase Night, and the networking after. Both from the Y12 assembly deck. The Polo panel shot was tried and rejected 15 Aug |
| For Students, Year 13 steps 1-5 | `y13-start-learning.jpg`, `y13-mentorship.jpg`, `y13-guest-speakers.jpg`, `y13-dragons-den.jpg`, `y13-go-to-market.jpg` | Steps 1-4 are the photos freed from the old Webflow SVG borders; step 5 is the live site's notebook composition rebuilt on Pavlova |
| About, story column | `logo-glass.jpg`, `session-working.jpg` | the logo on glass, OG-3 (the exterior shot came off About 15 Aug; it lives on home now) |
| Get Involved, left rail | `worksheet-bw.jpg` | OG, black and white session sheet detail |

Removed in the August 2026 passes because they duplicated better frames of the same
room: `mentor-huddle.jpg`, `cohort-pitch.jpg`, `bhive-floor.jpg`, `bhive-cohort.jpg`,
`students-smiling.jpg`, `guest-speaker.jpg`, `student-writing.jpg`, `showcase-speaker.jpg`. They are still in git history if any are wanted back
(`session-whiteboard.jpg` was restored that way on 15 Aug).
`OG-7.jpg` was not used: it is the same moment as `OG-6.jpg`, which is the warmer frame.

## Logos in place

- Supporter strip: `smales-farm.png` (supplied by Will 15 Aug),
  `westlake-boys.png` (the full lockup from westlake.ibcdn.nz/img/wbhs-logo.png; the
  wordmark in the source file is white and vanished on the light strip, so the text
  side was recoloured to the brand ink. The crest is untouched. Swap in an official
  dark-text version if Westlake supplies one) and
  `caivo.png` (CAIVO Clear TIGHT, brand folder in Drive). All greyscale at rest.
- School cards: `westlake-girls-crest.png`, `rosmini-crest.png`, `carmel-crest.png`
  in `images/logos/`, cut from the Y12 assembly deck (FINAL) media with transparent
  backgrounds. Both Westlake cards use the Girls crest at Will's direction (15 Aug).

## Still wanted

| Placeholder file | Where it appears | What to supply |
|---|---|---|
| `ph-smale-seat.svg` | (unused until named) | Smale family trustee headshot, square |
| (no placeholder, nice-to-have) | For Students, Term 4 | A real Showcase Night or prize giving photo with a full room |
| (no placeholder, nice-to-have) | About, story column | A posed cohort group shot |
| (no placeholder, nice-to-have) | For Students, Year 13 | Year 13 borrows three frames from Year 12 (`mentor-support`, `student-pitch`) and the wider library. The two tabs are never on screen together, but Year 13 would be stronger with its own shoot, especially a real Dragon's Den. |

## Other pending swaps

- **Hero video (home):** done 29 Aug. Adam's vertical reel is self-hosted at
  `assets/video/og-highlight-reel.mp4` (720x1280, 13MB, 109s) with a poster frame at
  `images/highlight-reel-poster.jpg`. Self-hosted rather than a YouTube embed so there is
  no third-party player on a page aimed at school students; `preload="none"` means nothing
  downloads until someone presses play. Source master is `OG v4.mov` (2160x3840, 607MB).
  Re-encode from that master if a larger version is ever wanted.
  `images/placeholders/ph-highlight-reel.svg` is now unused.
- **Success story links:** wired to real URLs on 15 Aug (LinkedIn x4, The Next Something,
  CAIVO, Clean Properties, WriteWise). Only `data-todo="olly-chargergogo"` remains.
  Corrected after Will checked them: the agency is **thenextsomething.co** (not
  nextsomething.co, which does not resolve) and Olly's profile is
  `linkedin.com/in/oliver-linton-nz` (he has several; this is the one he confirmed).
  ChargerGoGo has closed, so that chip was removed and the present-tense mention
  dropped from his story copy.
- **Google Form (2027):** done 28 Aug. The Student branch callout on get-involved.html now
  links to the register-interest form (`forms.gle/udXYXjhoVX9qLUZm9`). The 2027 *application*
  form does not exist yet, so the copy promises an emailed application later rather than an
  application now. Swap the button through to the real application form once it is built.
  No `data-todo` placeholders remain on the site.
- **Photography style:** per the brand style guide, photos should be natural, eye level,
  soft light, and work in black and white. Portraits now render in full colour;
  Bill's tribute portrait is the one held in black and white (Will, 15 Aug).

## Removed at the 27 Aug catch up (pre go-live)

- **Supporter logo strip** ("Backed by the best", home page): pulled because Smales Farm,
  Westlake Boys and CAIVO had not agreed to their logos being used. Logo files are still in
  `images/logos/`; restore the section from git history once permission is in writing.
- **Fourth trustee card** ("To Be Announced", about page): the question-mark bubble for the
  Smale family seat. The board grid is now `grid-3`. `ph-smale-seat.svg` stays unused.
