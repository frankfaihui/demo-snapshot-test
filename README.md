# Snapshot Testing Demo

This project demonstrates how Jest snapshot testing works in a React application. Snapshot tests are a useful tool for detecting unintended UI changes in your components.

## What are Snapshot Tests?

Snapshot tests capture a component's rendered output and compare it against a previously saved version. When a component changes, the test will fail - forcing you to either:
1. Update the snapshot if the change was intentional
2. Fix the component if the change was unintended

## Demo Instructions

This demo includes a `BaseButton` component with code that's commented out. To see snapshot testing in action:

1. First run the existing tests:
   ```
   npm run test
   ```

2. Uncomment the code in `src/components/BaseButton.tsx` which changes the button implementation from using `StyledButton` to `NewButton` with different styling.

3. Run the tests again to see them fail:
   ```
   npm run test
   ```
   The test will fail because the rendered component no longer matches the saved snapshot.

4. Update the snapshots to accept the new implementation:
   ```
   npm run test:update
   ```
   This will update the stored snapshot with the new rendering of the button. You can also use VS Code's diff tool to visually compare the changes between the old and new snapshots.

5. Run tests again to confirm they pass with the updated snapshot:
   ```
   npm run test
   ```

