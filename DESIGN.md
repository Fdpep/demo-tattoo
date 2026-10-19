# Tattooart — Dark editorial redesign

Source branch: `redesign-dark-editorial`.
The original site remains at the root of `main`. The `/redesign/` folder in `main` is a publication copy of this branch; GitHub Pages continues serving `main` without a configuration change.

## Design
- Dark photographic hero and portfolio-first navigation.
- Full-width art-book section with existing 3D opening, page turns, zoom and touch navigation. Left leaf contains existing project title, category and description; no invented works.
- Ivory asymmetric photographic gallery without unnecessary category filters.
- Large artist portrait and restrained typography; no green frame or continuous glow.
- Existing forms, uploads, consultation slots, review carousel, FAQs, contacts and demonstration manager preserved.
- Public design consolidated in `style.css`; established form/manager styles extracted into `studio.css`.
- Local storage key/schema unchanged. Forms still explicitly save locally and do not send data to the studio. Privacy text is factual for the local demo, not a finalized production legal notice.

## Verification
Automated checks cover book opening/closing, page navigation, transition locking, boundaries, editorial metadata and reduced motion; existing manager regression covers sample data, project notes, agenda conflicts, reminder updates/cancellations and simulated messages. Core customer form/upload logic is unchanged. All original top-level files on main must retain their hashes when publishing the new subdirectory.

## Updating the preview
Commit new source to `redesign-dark-editorial`, then update only `redesign/` on `main` with the matching files. Do not replace main's root files or change Pages' publishing branch. No build dependencies are required.
