Flowdock Refined makes subtle tweaks to the [Flowdock Desktop client](https://www.flowdock.com/download) to make it easier to see important information.

## Installation

```bash
$ npm -g install flowdock-refined
```

This will automatically install it to the Flowdock desktop client. If you already have custom styling for Flowdock it will back up your changes first.

## Chat Improvements

* __Highlights what you wrote with a blue background.__
* Larger padding between "breaks in time".
* Cleaner text area for typing.
* More clear when you are editing previous messages.
* Smaller Send and Upload buttons, both moved to the right.
* Black and white avatars when people are away.

## Flow Improvements

* Unifies a few different text styles and fonts used by the flow to one style.
* __Easy to see see Github repo names.__
* Hides redundant usernames.
* Hides unnecessary commit hashes.
* Hides unneeded times.
* Hides unnecessary #-tags caused by PR (closes #37 makes Flowdock create a #37 tag).
* For commits, displays inline files modified/added/removed.
* Includes full commit messages and comments instead of hiding them.
* Displays real urls instead of the word "Original".

## Tab Improvements

* Easier to see which tab is active
* More modern tab style

## Bonus
* Larger emoji, especially :shipit:.
* Round avatars, because _why not_.
* Provides an avatar for Jenkins.
* Easier to read tabs.

## Make your own changes

You can make your own _additional_ changes by modifying `~/Library/Application Support/Flowdock/custom.css`.
`flowdock-refined` will create this file for you but will never change it.

You can also make pull requests back to this repo.

## Limitations

The Flowdock desktop app currently only allows custom CSS, not custom JavaScript.
**Please vote to [enable custom JavaScript](http://flowdock.uservoice.com/forums/36827-general/suggestions/5519689-userscript-or-plugin-capability-in-desktop-client)
so we can make a lot more improvements.**

## Inspiration

Inspired by my Opower co-worker [Nowell Strite](https://github.com/nowells) and
Shopify's [Flowdock Styles](https://github.com/Shopify/flowdock_styles).

## Disclaimer

This is **not** a product of [Flowdock](http://www.flowdock.com).