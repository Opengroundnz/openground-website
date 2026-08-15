# Images: what is in place, what is still wanted

Grey dashed boxes on the site are labelled SVGs in `images/placeholders/`.
To replace one: drop the real photo into `images/`, then swap the `src` in the page listed below.

## Photography in place

| Slot | File | Source |
|---|---|---|
| Home, the office | `bhive-exterior.jpg` + `bhive-staircase.jpg` | The Y12 assembly deck |
| Home, the year timeline | `session-whiteboard.jpg` | OG, restored from git at Will's request 15 Aug |
| About, board + operations | `will-montague-brown.jpg` | Will's Profile Zoomed.jpg (Desktop), supplied 15 Aug |
| For Students, Year 12 Term 1 | `session-teaching.jpg` | OG-8, Steve talking the cohort through a session |
| For Students, Year 12 Term 2 | `mentor-conversation.jpg` | Supplied by Will 15 Aug, student and mentor one-on-one |
| For Students, Year 12 Term 3 | `guest-speaker.jpg` | OG-6, guest speaker with students |
| For Students, Year 12 Term 4 | `showcase-panel.jpg` + `showcase-speaker.jpg` + `showcase-crowd.jpg` | Showcase Night trio from the Y12 assembly deck |
| For Students, Year 13 steps 1-5 | `y13-start-learning.jpg`, `y13-mentorship.jpg`, `y13-guest-speakers.jpg`, `y13-dragons-den.jpg`, `y13-go-to-market.jpg` | Steps 1-4 are the photos freed from the old Webflow SVG borders; step 5 is the live site's notebook composition rebuilt on Pavlova |
| For Students, joining | `student-writing.jpg` | OG-2, student working through a session sheet |
| About, story column | `logo-glass.jpg`, `session-working.jpg` | the logo on glass, OG-3 (the exterior shot came off About 15 Aug; it lives on home now) |
| Get Involved, left rail | `worksheet-bw.jpg` | OG, black and white session sheet detail |

Removed in the August 2026 passes because they duplicated better frames of the same
room: `mentor-huddle.jpg`, `cohort-pitch.jpg`, `bhive-floor.jpg`, `bhive-cohort.jpg`,
`students-smiling.jpg`. They are still in git history if any are wanted back
(`session-whiteboard.jpg` was restored that way on 15 Aug).
`OG-7.jpg` was not used: it is the same moment as `OG-6.jpg`, which is the warmer frame.

## Logos in place

- Supporter strip: `images/logos/westlake-boys.png` (Westlake chatbot repo) and
  `images/logos/caivo.png` (CAIVO Clear TIGHT, brand folder in Drive), greyscale at rest.
- School cards: `westlake-boys-crest.png`, `westlake-girls-crest.png`,
  `rosmini-crest.png`, `carmel-crest.png` in `images/logos/`, all cut from the
  Y12 assembly deck (FINAL) media with transparent backgrounds.

## Still wanted

| Placeholder file | Where it appears | What to supply |
|---|---|---|
| `ph-logo-smales-farm.svg` | Home, supporter strip | Smales Farm logo, horizontal, transparent |
| `ph-brett-hollister.svg` | About, board | Brett Hollister headshot, square |
| `ph-dale-viljoen.svg` | About, operations | Dale Viljoen headshot, square |
| `ph-adam-bone.svg` | About, operations | Adam Bone headshot, square |
| `ph-smale-seat.svg` | (unused until named) | Smale family trustee headshot, square |
| (no placeholder, nice-to-have) | For Students, Term 4 | A real Showcase Night or prize giving photo with a full room |
| (no placeholder, nice-to-have) | About, story column | A posed cohort group shot |
| (no placeholder, nice-to-have) | For Students, Year 13 | Year 13 borrows three frames from Year 12 (`mentor-support`, `student-pitch`) and the wider library. The two tabs are never on screen together, but Year 13 would be stronger with its own shoot, especially a real Dragon's Den. |

## Other pending swaps

- **Hero video (home):** vertical placeholder in the hero. When Adam delivers the
  highlight reel, follow the `HIGHLIGHT REEL` comment in `index.html`.
- **Success story links:** the LinkedIn / company chips on `success-stories.html` are `#`
  placeholders tagged with `data-todo` attributes. Supply the URLs and drop them in.
- **Photography style:** per the brand style guide, photos should be natural, eye level,
  soft light, and work in black and white. Portraits render greyscale on the site
  automatically (colour returns on hover).
