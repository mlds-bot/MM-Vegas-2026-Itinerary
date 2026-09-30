# MinchMod • Vegas 2026
A mobile-first, dark itinerary for the team's October 19–22 FABTECH trip.

## Upload to GitHub Pages
1. Extract the ZIP on your computer.
2. Open your GitHub repository. Use a NEW repository if you want to keep the existing vendor scout separate.
3. Choose **Add file → Upload files**.
4. Upload the CONTENTS of the `vegas-itinerary` folder: `index.html`, `style.css`, `app.js`, `itinerary.js`, `manifest.json`, `README.md`, and the complete `assets` folder. Do not upload the ZIP itself. `index.html` must be at the repository root, not inside an extra folder.
5. Commit the upload.
6. Go to **Settings → Pages → Build and deployment**. Select **Deploy from a branch**, **main**, **/(root)**, and Save.
7. Wait for deployment, then open the URL shown in Pages. Share that URL with the team.

No build command, npm install, API key or backend needed. All asset paths are relative and work in GitHub project Pages.

## Use on a phone
Open the published URL in Safari on iPhone or Chrome on Android. Use the browser's **Add to Home Screen** option. The half-day chapters have a fixed Previous / Overview / Next bar. Maps and official booking links open externally.

## Make changes
Edit `itinerary.js` to change times, notes, restaurants and links. Upload/commit the updated file to GitHub. If you want the separate vendor scout accessible here, fill in `TRIP.scoutUrl` with its published URL.

Restaurant favourites and checklist ticks save ONLY on each person's browser. They do not sync to other travelers. This is a shared, read-mostly itinerary; the trip manager edits the source file to publish final decisions. Flights are user-supplied; activity times, restaurant choices, checkout and reservations are provisional.

Seven half-day chapters: Mon PM, Tue AM, Tue PM, Wed AM, Wed PM, Thu AM, Thu PM. Home and Overview are additional screens. Hash routing permits direct chapter links without GitHub 404s.

## Images and connectivity
The included collage was generated with the built-in image tool for this project. It is atmospheric artwork, not a geographic reference or a photo of a particular restaurant. Prompt: a cinematic photographic montage of Red Rock Canyon, Hoover Dam, Vegas Strip/Fremont neon, a luxury seafood tower and an industrial welding robot, with dark shadows, warm amber and teal, without text or logos. Asset: `assets/vegas-collage.webp`.

Google Fonts enhance the design; system font fallbacks apply without them. Maps, official links and fonts require connectivity. No offline service worker is included in this first version, so updates are not trapped by a stale app cache.

Official planning sources checked September 30, 2026:
- https://www.fabtechexpo.com/attend (Wed/Thu 9 AM–5 PM)
- https://www.blm.gov/programs/national-conservation-lands/nevada/red-rock-canyon (timed entry)
- https://www.recreation.gov/timed-entry/10075177
- Restaurant and attraction official links are embedded in `itinerary.js`.
