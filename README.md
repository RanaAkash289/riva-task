Manager List Software

Project Setup:
  Make sure Node.js and npm are installed before running the project.
  
  Install the project dependencies:
    **npm install**
    
  Start the development server:
    **npm run dev**

The terminal will display the local URL where the application can be opened in the browser.

Running Tests
  Unit tests are included for both a Vue component and the recipient search logic.
  
  Run the tests using:
    **npm run test:unit**
    
  The component test checks that recipient information is displayed correctly and that the expected event is emitted when the Edit button is clicked.
  
  The business logic test checks the recipient search functionality, including searching by name, searching by email, and handling an empty search value.


Production Build

  To create a production build, run:
    **npm run build**
    
  The generated production files will be available in the dist folder.


Project Structure

src/
  assets/
    main.css

  components/
    BulkActions.vue
    RecipientForm.vue
    RecipientRow.vue
    RecipientTable.vue
    SearchBar.vue

  data/
    sampleRecipients.js

  stores/
    recipientStore.js

  utils/
    recipientFilters.js

  App.vue
  main.js


**State Management: Pinia
Data Storage: LocalStorage**

Assumptions
- Each recipient has a unique ID.
- Name, email, company, and status are required when adding a recipient.
- Recipient status is limited to Active and Inactive.
- Search is performed using the recipient name or email.
- Search is case-insensitive.
- Select All applies to the recipients currently visible in the table.
- No backend API or database is required for this assignment.


Trade-offs
I kept the project focused on the required functionality and Vue fundamentals instead of adding additional libraries or unnecessary complexity.
I used Pinia for recipient state management because it works well with Vue 3 and keeps the store actions easy to follow.
The application currently uses in-memory state, so changes are not saved after a browser refresh. The assignment allows local state, localStorage, or static data, so I kept the implementation simple and used the provided sample data as the initial state.
For delete confirmation, I used the browser confirmation dialog instead of creating a separate modal component. This keeps the implementation smaller while still preventing accidental deletion.


Testing
The project includes tests for:
- Recipient search and filtering logic
- RecipientRow component rendering
- Edit event emitted by RecipientRow


Possible Improvements
With more time, I would consider adding:
- localStorage persistence
- More detailed form validation
- Duplicate email validation
- A custom confirmation modal
- Additional unit tests for Pinia store actions
- More accessibility improvements
- Additional responsive styling for smaller screens


Author

Akash Rana
