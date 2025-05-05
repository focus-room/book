---
sidebar_position: 1
---

# Setting Up Your Focus-Room

Creating the right environment is crucial for a successful Focus-Room experience.

## Physical Setup

A Focus-Room requires thoughtful arrangement of space:

- **Choose the right room size**: Large enough for all participants to have personal space, but small enough to create a sense of community
- **Individual workstations**: Each person needs a defined area with:
  - A comfortable chair and desk
  - Adequate lighting
  - Minimal distractions in their field of vision
- **Central timer display**: Placed where everyone can easily see it
- **Dividers (optional)**: Subtle separations between spaces that maintain the feeling of a shared environment

## Digital Alternative

For remote teams, you can create a virtual Focus-Room:

- **Video conferencing tool**: Keep cameras on but microphones muted during focus sessions
- **Shared timer application**: Everyone should see the same timer countdown
- **Digital status indicators**: Show when people are in deep focus mode

## Essential Equipment

- **Timer system**: Either a physical timer board or a digital timer application
- **Signal for transitions**: A gentle sound to indicate when focus/break periods begin and end
- **Session guidelines**: Visible reminders of the Focus-Room principles

## Room Atmosphere

- **Temperature**: Keep the room slightly cool (68-72°F / 20-22°C) to maintain alertness
- **Sound level**: Quiet environment or consistent background noise (white noise works well)
- **Lighting**: Natural light is ideal, but ensure even, non-flickering artificial lighting if needed

In the next section, we'll discuss how to establish effective rules and protocols for your Focus-Room sessions.

## Create your first Doc

Create a Markdown file at `docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

A new document is now available at [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## Configure the Sidebar

Docusaurus automatically **creates a sidebar** from the `docs` folder.

Add metadata to customize the sidebar label and position:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

It is also possible to create your sidebar explicitly in `sidebars.js`:

```js title="sidebars.js"
export default {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```
