Frontend Technical Test submission for [TeamITG](https://teamitg.com/)

[Preview link](https://itg-fe-test.vercel.app/)

## Tech stack
Same as initial, no addition packages used

## Changes I'd make
- If not for _"We prefer native Browser Api over JS libraries"_ 
    - I would have used [Tanstack (React) Query](https://tanstack.com/query) for data loading as it's the industry-standard, elegantly handles edge-cases and caching
    - I would have used [Radix UI](https://www.radix-ui.com/primitives/docs/components/dialog) primitives for the dialog (modal) component as it's covers all necessary edge-cass and a11y
- If not for _"No CSS framework allowed"_
    - I would have used TailwindCSS to create more scalable CSS but happy to stick with the project stack

## Notes
- All tests are passing
- Couldn't match font to design as it seems to be a propriety landrover font so used the closest free match
- Didn't identify a good use case for Redux in this project other than storing the data but as mentioned above Tanstack Query would have been better for this to cache data. If there were filters, etc for the vehicles then I would have implemented a store. Maybe something like Zustand as I prefer the API over Redux
- Used a placeholder as fallback for broken images however in a real project we might want to handle this better in accordance with brand guidelines
