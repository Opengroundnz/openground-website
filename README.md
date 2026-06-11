# Openground Website

Static clone of [openground.co.nz](https://www.openground.co.nz), migrated off Webflow hosting. Openground is a charitable trust running entrepreneurship programmes for secondary school students in Auckland, New Zealand.

## Pages

| File | Live URL |
|---|---|
| `index.html` | `/` |
| `about.html` | `/about` |
| `for-students.html` | `/for-students` |
| `success-stories.html` | `/success-stories` |
| `get-involved.html` | `/get-involved` (contains the contact form) |
| `thank-you.html` | form success page |

Assets live under `cdn.prod.website-files.com/` and `d3e54v103j8qbb.cloudfront.net/` (folder names kept from the original Webflow CDN paths so the cloned HTML needed minimal rewriting). All assets are local; the site makes no calls back to Webflow.

## Hosting

Target: Netlify free tier, deployed from this repo (publish directory = repo root). Merge to `main` = deploy.

## Contact form

The form on `get-involved.html` is a native [Netlify Form](https://docs.netlify.com/forms/setup/) (`name="contact"`, `data-netlify="true"`, honeypot spam field). Submissions appear in the Netlify dashboard; configure email notifications to admin@openground.co.nz under Site settings → Forms → Form notifications. It will NOT work on plain static previews (GitHub Pages, local file). The Webflow JS form handler was disabled by removing the `w-form` wrapper class on that block only.

## How to update the site

Edit the HTML, open a pull request, merge. The HTML is plain and static; any AI coding assistant (Claude Code etc.) can make changes from a plain-English request.

## Cutover checklist (do NOT point DNS here until complete)

- [ ] Netlify account created under an Openground-owned login, site connected to this repo
- [ ] Form tested end to end on the Netlify URL; notification email arriving at admin@openground.co.nz
- [ ] Check where the old Webflow form notifications went, so nothing is missed during the switch
- [ ] Pretty URLs: add Netlify redirects (or restructure to `about/index.html` style) so `/about` etc. keep working exactly as on Webflow (SEO)
- [ ] Custom domain added in Netlify, DNS switched, HTTPS issued
- [ ] Old Webflow site kept live until the new one is verified, then cancel the Webflow site plan
