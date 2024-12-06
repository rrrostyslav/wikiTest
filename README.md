# Project Description:

## Test Case Automated

This project automates the testing of the functionality that changes the interface language on the Wikipedia website for authorized users. The test performs the following steps:

| Steps |                                             Steps to perform                                              |                                                                                                   Expected result |
| :---- | :-------------------------------------------------------------------------------------------------------: | ----------------------------------------------------------------------------------------------------------------: |
| 1     |                                       Go to the main Wikipedia site                                       |                                                                                                                   |
| 2     |                          Fill out the authorization form with valid credentials                           |                                                                                        Redirects to the main site |
| 3     |      Confirm authorization and check that theusername is displayed at the top of the navigation bar.      |                        The username displayed at the top of the navigation bar is the same as the one you entered |
| 4     |                                In the navigation menu, select Preferences.                                |                                                                                 Redirects to the Preferences site |
| 5     | Go to the interface language selection and select “uk - українська” from the list of available languages. |                                           The new language is displayed as the selected language in the settings. |
| 6     |              Click on "Save" button and Check that the page title is displayed in Ukrainian               | The web application interface is displayed in Ukrainian: Menus, headings, and buttons are localized in Ukrainian. |

The test automatically reverts the language back to English (`en - English`) to avoid affecting subsequent tests.

## How to Use the Project

### Step 1: Environment Setup

1. Clone the repository:

   `git clone https://github.com/rrrostyslav/test_wikipedia.git`

2. Navigate into the project directory:

   `cd <your_folder>`

3. Install Playwright with the Chromium browser:

   `npx playwright install chromium`

4. Install all dependencies:

   `npm install`

5. Create a `.env` file in the root directory of the project containing your Wikipedia login credentials:

   `WIKI_USERNAME=your_username`
   `WIKI_PASSWORD=your_password`

### Step 2: Running the Tests with Docker

1. Build and run the Docker container with the following command:

   `docker-compose up --build`

   This command sets up the environment, installs dependencies, and executes the tests inside the Docker container.

2. To run the tests without Docker, use:

   `npx playwright test`

### Step 3: Viewing the Report

1. After running the tests in Docker, the results are stored in HTML format in the `Docker_reports` folder within the project directory.

2. Open the report in a browser by navigating to the `Docker_reports` folder and opening the HTML file.
