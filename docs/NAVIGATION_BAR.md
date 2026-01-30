# Navigation Bar – Library & Hover Behavior

## 1. Library and components

The main links and dropdown sublinks are implemented with **MUI (Material-UI)**:

- **Components used:** `Menu`, `MenuItem`, `Button`, `Box`, `Paper` from `@mui/material`
- **Dropdown behavior:** Each main link (Products, Services, Our Work) uses a **`Menu`** component anchored to a **`Button`**. Sublinks are **`MenuItem`**s inside the `Menu`. MUI `Menu` is built on **Popover** and uses a **Grow** transition by default.

## 2. Library version

From `package.json`:

- **`@mui/material`:** `^7.3.2`
- **`@mui/icons-material`:** `^7.3.2`

So the project is on **MUI v7** (e.g. 7.3.x).

## 3. Known hover/delay behavior

- **Default transition:** `Menu` uses the **Grow** transition with a non‑zero duration, so the dropdown can feel like it opens with a short delay or animation.
- **Keyboard:** There is a known issue (e.g. [mui/material-ui#10847](https://github.com/mui/material-ui/issues/10847)) where `MenuItem` highlight can have an undesired delay when using the keyboard; setting transition duration to 0 avoids that.
- **Hover:** MUI does not document a specific “hover delay” bug, but the perceived slowness usually comes from:
  - The **Grow** transition (enter/exit) on the `Menu`
  - Any **close delay** (e.g. timeouts) used so the pointer can move from the button to the menu (which is rendered in a **portal**)

## 4. Fixes applied and recommendations

### Already done in this project

1. **Instant open/close animation**
   - `transitionDuration={0}` on all `Menu` components.
   - `slotProps={{ transition: { timeout: 0 } }}` so the **Grow** transition is effectively disabled. Sublinks appear as soon as the menu is open.

2. **No gap between main link and sublinks**
   - In `PaperProps.sx`, `mt: 1.5` was changed to **`mt: 0`** for every dropdown so the menu sits directly under the button.

3. **Short close delay**
   - A small close delay (e.g. **20 ms**) is still used so that when the mouse leaves the button, the menu does not close before the pointer can move into the dropdown (because the menu is rendered in a portal). This keeps hover usable without a visible “slow” feel.

### If it still feels slow

- **Update MUI:** Ensure you’re on a recent 7.3.x patch:
  ```bash
  npm update @mui/material @mui/icons-material
  ```
- **Reduce or remove close delay:** In `LinksBar.js`, set `MENU_CLOSE_DELAY_MS` to `0` for immediate close when the pointer leaves. Try this only after removing the gap; with `mt: 0`, the menu is easier to reach, so `0` may still work.
- **Avoid focus delay:** If you use keyboard or auto‑focus, you can set `disableAutoFocusItem={true}` on `Menu` to avoid focus-related delay when opening.

### Summary

- **Library:** MUI (`@mui/material`) **Menu** (and related components).
- **Version:** **v7.3.2** (and compatible `@mui/icons-material`).
- **Cause of “slow” hover:** Default **Grow** transition and optional close delay.
- **Fixes:** `transitionDuration={0}`, `slotProps.transition.timeout: 0`, and **`mt: 0`** (no gap) are applied; a small close delay (20 ms) remains for reliable hover. Adjust or remove that delay if you want even snappier behavior.
