# Nuxt Website Evaluation: Norman's 7 Design Principles

Here is an evaluation of the Nuxt website's adherence to Don Norman's 7 design principles, based on the provided codebase. 

### 1. Discoverability
*   **Current State:** Key actions like "Play Now" and external resources are prominent in [AppHeader.vue](file:///home/connorhsm/github/twohoursonelife/web/frontend/app/components/AppHeader.vue) and [index.vue](file:///home/connorhsm/github/twohoursonelife/web/frontend/app/pages/index.vue). The mobile menu is easily discoverable via a standard hamburger icon.
*   **Recommendation:** Introduce anchor links in the header navigation to allow users to quickly discover and scroll to specific homepage sections (e.g., `#about` or `#community`).

### 2. Feedback
*   **Current State:** Defined button states (`hover:bg-brand-600`, `active:scale-95`) in [app.config.ts](file:///home/connorhsm/github/twohoursonelife/web/frontend/app/app.config.ts) provide excellent and immediate visual feedback. The mobile menu effectively auto-closes upon navigation.
*   **Recommendation:** Include a global loading bar (like `<NuxtLoadingIndicator />` in [app.vue](file:///home/connorhsm/github/twohoursonelife/web/frontend/app/app.vue)) to provide feedback during route transitions.

### 3. Conceptual Model
*   **Current State:** The website follows a widely understood modern layout. The [first-time-playing.vue](file:///home/connorhsm/github/twohoursonelife/web/frontend/app/pages/first-time-playing.vue) page presents an excellent conceptual model by breaking a complex onboarding process into four clear, numbered steps.
*   **Recommendation:** Ensure that navigating to [download.vue](file:///home/connorhsm/github/twohoursonelife/web/frontend/app/pages/download.vue) reinforces this model, perhaps by displaying a breadcrumb or progress indicator to remind the user they are on "Step 2".

### 4. Affordances
*   **Current State:** Core components like `UButton` have distinct boundaries, padding, and drop shadows, making their clickability obvious. Inline links utilise underlines or colour transitions.
*   **Recommendation:** If any large layout blocks or cards act as navigation elements, ensure they explicitly use a `cursor-pointer` utility so the affordance of clickability is clear before the user hovers.

### 5. Signifiers
*   **Current State:** Excellent use of standard Lucide icons (`i-lucide-monitor`, `i-lucide-terminal`) to visually signify platform-specific content and actions.
*   **Recommendation:** Add an external link signifier (e.g., `i-lucide-external-link`) to the Wiki, Twotech, and Discord links in [AppHeader.vue](file:///home/connorhsm/github/twohoursonelife/web/frontend/app/components/AppHeader.vue#L26) to explicitly indicate that these links will open in a new tab and navigate away from the primary site.

### 6. Mappings
*   **Current State:** Logical spatial mapping is used throughout, particularly in [first-time-playing.vue](file:///home/connorhsm/github/twohoursonelife/web/frontend/app/pages/first-time-playing.vue#L63-L96), where the Windows and Linux guides are perfectly paired with their corresponding platform icons.
*   **Recommendation:** Carry this exact visual mapping over to the [download.vue](file:///home/connorhsm/github/twohoursonelife/web/frontend/app/pages/download.vue) page, ensuring platform-specific downloads and their respective requirements are grouped spatially.

### 7. Constraints
*   **Current State:** The mobile menu effectively constrains navigation options behind a toggle to prevent visual clutter. The onboarding guide limits users to a linear, step-by-step path to reduce cognitive load.
*   **Recommendation:** Implement basic user-agent OS detection to constrain user choices on the download page. Highlighting or pre-selecting the correct download for the user's current operating system reduces the likelihood of error.
