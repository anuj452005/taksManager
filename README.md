# File Management Application

A simple web-based file management application built with Express.js and EJS templates that allows users to create, view, edit, and delete text files.

## Features

- Create new text files with custom titles and content
- View a list of all saved files
- View the content of individual files
- Edit file titles and content
- Delete files

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **EJS** - Templating engine
- **TailwindCSS** - Utility-first CSS framework (via CDN)

## Project Structure

```
third/
├── files/            # Directory where text files are stored
├── views/            # EJS template files
│   ├── index.ejs     # Home page with file list and creation form
│   ├── file-view.ejs # Page for viewing individual file content
│   └── edit_file.ejs # Page for editing file content
├── public/           # Static assets
├── index.js          # Main application file
└── package.json      # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```
   cd third
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the application:
   ```
   node index.js
   ```
5. Open your browser and navigate to `http://localhost:3000`

## Usage

### Creating a File
1. Enter a title in the title field
2. Enter content in the text area
3. Click "Create Task"

### Viewing Files
- All files are displayed on the home page
- Click "Read More" to view the full content of a file

### Editing a File
1. Navigate to a file's view page
2. Click "Edit"
3. Modify the title and/or content
4. Click "Save Changes"

### Deleting a File
1. Navigate to a file's view page
2. Click "Delete"
3. Confirm the deletion when prompted


