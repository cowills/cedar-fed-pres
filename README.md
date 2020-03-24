

Here's a copy of my presentation in case of Skype screen share issues: https://cowills.github.io/cedar-fed-pres/
Also pasting a HUGE amount of relevant links in the thread below:

## Cedar Docs
https://rei.github.io/rei-cedar-docs/ Cedar doc site
https://rei.github.io/rei-cedar-docs/getting-started/as-a-developer/ Getting started as a developer guide. End to end walkthrough on using Cedar. Note: This is not a "for beginners guide", this document will always contain the current recommended Cedar usage.

## Cedar Repos
https://github.com/rei/rei-cedar-tokens
https://github.com/rei/rei-cedar
https://github.com/rei/cedar-icons
https://github.com/rei/rei-cedar-component-variables/
https://github.com/rei/rei-cedar-docs

## Cedar demo/staging/dev pages
https://rei.github.io/rei-cedar-tokens/ - Tokens page, just spits out all the tokens and thats it
https://rei.github.io/rei-cedar-component-variables/#/ - Component variables dev/demo page
http://cedar-docs.rei-cloud.com/rei-cedar-docs/ - staging version of our doc site, shows whatever is on next
https://rei.github.io/rei-cedar - cedar kitchen sink, a deployed version of our dev environment


## Cedar User Support
`#cedar-user-support` channel on slack
https://rei.slack.com/archives/CA58YCGN4/p1581702916101400 - If you need help with cedar, supplying as much of this info as possible will allow us to help you faster

## REI tools

https://git.rei.com/projects/FEDPAGES/repos/climber-details-page/browse - climber-details-page is a reference implementation for shared components/FED pages
https://git.rei.com/projects/CLIMB/repos/climbers-site/browse/climbers-site - climbers-site is a reference implementation for crampon micro-sites

https://git.rei.com/projects/FEDPACK/repos/rei-febs/browse - febs source code
https://git.rei.com/projects/FEDPACK/repos/rei-febs/browse/CHANGELOG.md - febs changelog
https://github.com/rei/vunit - vunit, REI testing tool for Vue and vanilla JS

## Vue Tips
https://vuejs.org/v2/guide/components-slots.html - Vue Slots tutorial
https://vuejs.org/v2/guide/components-custom-events.html - Emitting custom events
https://vuejs.org/v2/guide/state-management.html - Flux state management
https://thoughtbot.com/blog/reusable-oo-composition-vs-inheritance - Composition vs. Inheritance
https://www.sandimetz.com/blog/2016/1/20/the-wrong-abstraction - Duplication is far cheaper than the wrong abstraction

## REI Shared Component Tips
https://confluence.rei.com/display/FED/Update+A+Shared+Component - How to release a new version of a shared component
https://confluence.rei.com/display/FED/Test+a+Shared+Component+Without+Publishing - Loading a shared component as a git dependency/testing updates to a component



I am also going to follow up on these action items:

- Work with alpine to get the chairlift template updated: https://git.rei.com/projects/ALP/repos/npm-package-template/browse (ideally making this pull in the @rei/component template somehow)
- Create confluence page that outlines how to generate a new shared component, and what is required in the package.json for a shared component
- Publish CLI tool for updating git dependencies
