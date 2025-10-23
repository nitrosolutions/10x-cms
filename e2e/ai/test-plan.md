
  <TEST_SCENARIO_1>
    ## Objective: Authenticate User
    ## Test Group: Authentication
    ## Dependencies / Preconditions:
      - User account "10xadmin" must exist.
      - Must be logged out.
    ## Setup Steps (if needed beyond starting page):
      - None required beyond navigating to the initial page.
    ## Test Suite: authentication.noauth.spec.ts
    ## User Workflow Steps:
      1. Navigate to the login page: `localhost:3000/login`
      2. Enter valid username "10xadmin" into the username field.
      3. Enter valid password "10xpassword" into the password field.
      4. Click the "Login" button.
    ## Expected Outcomes / Assertions:
      - User is redirected to the main dashboard: `localhost:3000/home`
    ## Dynamic Data Considerations:
      - None.
    ## Potential Challenges:
      - None.
  </TEST_SCENARIO_1>

  <TEST_SCENARIO_2>
    ## Objective: Create a new collection named "Notes"
    ## Test Group: Collection Management
    ## Dependencies / Preconditions:
      - User must be logged in.
    ## Setup Steps (if needed beyond starting page):
      - User must be logged in.
    ## Test Suite: collection.auth.spec.ts
    ## User Workflow Steps:
      1. Navigate to the collections page: `localhost:3000/collections`
      2. Click the "Create New Collection" button.
      3. Enter "Notes" into the "Collection Name" field.
      4. Enter "Title" into the first "Field Name" field.
      5. Click the "Add Field" button.
      6. Enter "Description" into the second "Field Name" field.
      7. Change the second field type from "Text (Short)" to "Text (Long)".
      8. Click the "Add Field" button.
      9. Enter "Date" into the third "Field Name" field.
      10. Change the third field type from "Text (Short)" to "Date".
      11. Click the "Create Collection" button.
    ## Expected Outcomes / Assertions:
      - A success notification appears.
      - The new collection named "Notes" is visible on the Collections page.
    ## Dynamic Data Considerations:
      - The Collection ID is dynamic and needs to be captured from either the success notification, or after loading the Collections page.
    ## Potential Challenges:
      - Capturing the dynamic Collection ID.
  </TEST_SCENARIO_2>

  <TEST_SCENARIO_3>
    ## Objective: Add an item to the "Notes" collection
    ## Test Group: Collection Management
    ## Dependencies / Preconditions:
      - User must be logged in.
      - The "Notes" collection must exist.
    ## Setup Steps (if needed beyond starting page):
      - Create the "Notes" collection if it does not exist.
    ## Test Suite: collection.auth.spec.ts
    ## User Workflow Steps:
      1. Navigate to the collection details page: `localhost:3000/collections/{collectionId}` (replace `{collectionId}` with the actual ID).
      2. Click the "Add New Item" button.
      3. Enter "Movies" into the "Title" field.
      4. Enter "- Terminator 2 - Terminator 3" into the "Description" field.
      5. Enter "01.01.2024" into the "Date" field.
      6. Click the "Save Item" button.
    ## Expected Outcomes / Assertions:
      - A success notification appears.
      - The new item is added to the collection and visible in the table.
    ## Dynamic Data Considerations:
      - None.
    ## Potential Challenges:
      - Date picker interaction may require specific handling.
  </TEST_SCENARIO_3>

  <TEST_SCENARIO_4>
    ## Objective: Edit an item in the "Notes" collection
    ## Test Group: Collection Management
    ## Dependencies / Preconditions:
      - User must be logged in.
      - The "Notes" collection must exist.
      - At least one item must exist in the "Notes" collection.
    ## Setup Steps (if needed beyond starting page):
      - Create the "Notes" collection if it does not exist.
      - Add an item to the "Notes" collection if none exists.
    ## Test Suite: collection.auth.spec.ts
    ## User Workflow Steps:
      1. Navigate to the collection details page: `localhost:3000/collections/{collectionId}` (replace `{collectionId}` with the actual ID).
      2. Click the "Edit" button on the item with title "Movies".
      3. Click the "Update Item" button.
    ## Expected Outcomes / Assertions:
      - A success notification appears.
      - The item data is updated and visible in the table. Since the user did not change anything, ensure the item data remains unchanged.
    ## Dynamic Data Considerations:
      - None.
    ## Potential Challenges:
      - Locating the "Edit" button based on the item title.
  </TEST_SCENARIO_4>

  <TEST_SCENARIO_5>
    ## Objective: Delete an item in the "Notes" collection
    ## Test Group: Collection Management
    ## Dependencies / Preconditions:
      - User must be logged in.
      - The "Notes" collection must exist.
      - At least one item must exist in the "Notes" collection.
    ## Setup Steps (if needed beyond starting page):
      - Create the "Notes" collection if it does not exist.
      - Add an item to the "Notes" collection if none exists.
    ## Test Suite: collection.auth.spec.ts
    ## User Workflow Steps:
      1. Navigate to the collection details page: `localhost:3000/collections/{collectionId}` (replace `{collectionId}` with the actual ID).
      2. Click the "Delete" button on the item with title "Movies".
      3. Click "OK" on the confirmation popup.
    ## Expected Outcomes / Assertions:
      - A success notification appears.
      - The item is removed from the collection and no longer visible in the table.
    ## Dynamic Data Considerations:
      - None.
    ## Potential Challenges:
      - Locating the "Delete" button based on the item title.
      - Handling the confirmation popup.
  </TEST_SCENARIO_5>

  <TEST_PLAN_OVERVIEW>
    ## Suggested Page Objects:
      - LoginPage
      - DashboardPage
      - CollectionsPage
      - CollectionDetailsPage
      - NewCollectionModal
      - NewItemModal
      - EditItemModal

    ## Suggested Test Suites:
      - authentication.spec.ts
      - collection.spec.ts

    ## General Notes / Strategy:
      - Use a login fixture to handle authentication before running collection management tests.
      - Use unique names for created collections and items to avoid conflicts (e.g., "note-${Date.now()}").
      - Create a helper function to capture the dynamic collection ID after creation.
  </TEST_PLAN_OVERVIEW>

  <SELECTOR_REQUIREMENTS>
    ## Essential Elements for Stable Selectors:
    To facilitate reliable test automation, please ensure stable and unique identifiers (e.g., data-testid attributes) are added for the following key UI elements observed during the workflows:
    - Login button
    - Username input field
    - Password input field
    - Collections link in the navigation bar
    - Create New Collection button
    - Collection Name input field
    - Field Name input fields in the Create Collection modal
    - Dropdown for selecting the field type in the Create Collection modal
    - Add Field button in the Create Collection modal
    - Create Collection button in the Create Collection modal
    - View Collection button after creating a collection
    - Add New Item button on the Collection Details page
    - Title input field in the Add New Item modal
    - Description input field in the Add New Item modal
    - Date input field in the Add New Item modal
    - Save Item button in the Add New Item modal
    - Edit button on the item row in the Collection Details table
    - Delete button on the item row in the Collection Details table
    - OK button on the confirmation popup
    - The success notification container.
  </SELECTOR_REQUIREMENTS>
