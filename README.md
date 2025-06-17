### Ngx-Admin Angular 14 application from akveo.com

This is modified and more lightweight version of original application to practice UI Automation with Playwright.

The original repo is here: https://github.com/akveo/ngx-admin

## CHANGES MADE TO RUN THE APPLICATION

### Dependency Issues and Fixes

1. Angular Material Integration
   - Added `@angular/material@14.2.7` to match Angular 14 version
   - Added Material modules to tables.module.ts:
     - MatTableModule
     - MatIconModule
     - MatButtonModule
     - MatSortModule
     - MatPaginatorModule
     - MatFormFieldModule
     - MatInputModule

2. Babel Configuration
   - Added Babel runtime and configuration:
     - Added `@babel/runtime@^7.27.6`
     - Added `@babel/plugin-transform-runtime@^7.27.4`
     - Added `@babel/preset-env@^7.24.0`
     - Created `.babelrc` file with proper configuration

3. TypeScript and Type Definitions
   - Fixed module declaration conflict in `typings.d.ts`
   - Updated `@types/ws` to version `7.4.7` for TypeScript 4.6.4 compatibility

4. Removed Problematic Dependencies
   - Removed `d3-sankey` and `d3-array` due to build issues
   - Removed `@swimlane/ngx-charts` as it depended on d3 packages
   - Updated `charts.module.ts` to remove NgxChartsModule
   - Updated `angular.json` to remove d3 references from allowedCommonJsDependencies

### Configuration Changes

1. Angular Configuration
   - Updated `angular.json` to include necessary Material styles
   - Added Material theme import to `styles.scss`
   - Configured proper module imports in `tables.module.ts`

2. Build Configuration
   - Used `--legacy-peer-deps` flag for npm install to handle dependency conflicts
   - Added proper Babel configuration for ES modules support

These changes were necessary to resolve dependency conflicts, TypeScript errors, and build issues while maintaining compatibility with Angular 14.

## FRESH INSTALL STEPS

1. Clone the repository
   ```bash
   git clone [repository-url]
   cd [repository-name]
   ```

2. Install dependencies
   ```bash
   npm install --legacy-peer-deps
   ```
   Note: The `--legacy-peer-deps` flag is required due to Angular 14 dependency conflicts.

3. Start the application
   ```bash
   npm start
   ```

4. Access the application
   - Open your browser and navigate to `http://localhost:4200`
   - The application should be running with all the changes applied

Note: If you encounter any build issues, make sure you have:
- Node.js version compatible with Angular 14
- All the required dependencies listed in package.json
- Proper Angular CLI version (^14.2.10)


### Install Playwright browsers:
   ```bash
   npx playwright install
   ```

### Running Tests
You can run tests in different ways:

1. Run all tests in all browsers:
   ```bash
   npx playwright test
   ```

2. Run tests in a specific browser:
   ```bash
   # Run in Chrome
   npx playwright test --project="Google Chrome"
   
   # Run in Firefox
   npx playwright test --project="Firefox"
   
   # Run in Edge
   npx playwright test --project="Microsoft Edge"
   ```

3. Run tests in headed mode (with browser UI):
   ```bash
   npx playwright test --headed
   ```

4. Run a specific test file:
   ```bash
   npx playwright test tests/specs/forms.spec.ts
   ```

5. Run tests in debug mode:
   ```bash
   npx playwright test --debug
   ```

### Viewing Test Reports
After running tests, you can view the HTML report:
```bash
npx playwright show-report
```

### Additional Options
- Run tests in parallel: `npx playwright test --workers=4`
- Run tests with retries: `npx playwright test --retries=2`
- Run tests in specific directory: `npx playwright test tests/specs/`