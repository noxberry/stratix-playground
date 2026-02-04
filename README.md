## Stratix Playground

- Create a "layout" component within the "ui" library, consisting of the following elements: topbar, sidebar, and body.
  - The topbar should be sticky.
  - The sidebar should support collapsed (4rem width) and expanded (20rem width) states, including a toggle button at the bottom of the sidebar.
  - Use ngrx to control sidebar collapsed state

- Complete the styling for the button component within the "ui" library.
  - Incorporate the specified "Colors."
  - Incorporate the specified "Button Sizes."
  - Add options for "radius" and "round" styles.

- Create a Devices page that displays devices in a table view with the following columns: Device Name, Model, Status, Contact Name, Business Address, Status, Actions.
  - Introduce a delay of a few seconds for data loading.
  - Utilize the `<ui-busy>` component to display a loader during data fetching.
  - Sort devices based on the "name" field.
  - The Actions column should include a "large"-sized button; upon clicking the button, update the device status to "active" (implement using any suitable mock/fake method).

- Utilize NgRx for managing all actions.
- Good luck!


## Colors

- Primary: rgb(0, 141, 211)
- Complementary: rgb(117, 197, 138)
- Reflect: rgb(40, 43, 46)
- Base: rgb(254, 253, 255)


## Button Sizes

- Small: 1.5rem
- Medium: 1.75rem
- Large: 2rem
- XLarge: 2.5rem


## Run Tasks

To run the dev server for your app, use:

```sh
npx nx serve playground
```

To create a production bundle:

```sh
npx nx build playground
```

To see all available targets to run for a project, run:

```sh
npx nx show project playground
```


## Add New Projects

To generate a new application, use:

```sh
npx nx g @nx/angular:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/angular:lib mylib
```