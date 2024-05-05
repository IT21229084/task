const fs = require('fs');

// Function to generate the README content
function generateREADME() {
    return `
# NASA Open APIs Web UI

This project is a web user interface that utilizes various NASA Open APIs to display information about Earth, Mars, and space in general. It features different pages for different functionalities, including the home page, EPIC (Earth Polychromatic Imaging Camera) page, APOD (Astronomy Picture of the Day) page, and Mars page. The project is developed using Vite.js for fast and efficient development.

## Table of Contents

- [Setup](#setup)
- [Build](#build)
- [Run](#run)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Setup

To set up this project locally, follow these steps:

1. Clone this repository to your local machine:

   \`\`\`bash
   git clone https://github.com/your-username/nasa-open-apis-ui.git
   \`\`\`

2. Navigate to the project directory:

   \`\`\`bash
   cd nasa-open-apis-ui
   \`\`\`

3. Install dependencies using npm:

   \`\`\`bash
   npm install
   \`\`\`

## Build

To build the project for production, run:

\`\`\`bash
npm run build
\`\`\`

This will generate a \`dist\` folder with the compiled and optimized assets ready for deployment.

## Run

To run the project locally in development mode, execute:

\`\`\`bash
npm run dev
\`\`\`

This will start a local development server at \`http://localhost:3000\`, where you can view and test the web UI.

## Usage

Once the project is set up and running, you can access different pages of the web UI:

- **Home Page:** Provides an overview and navigation to different sections.
- **EPIC Page:** Displays images captured by the Earth Polychromatic Imaging Camera.
- **APOD Page:** Shows the Astronomy Picture of the Day along with its description.
- **Mars Page:** Provides information and images related to Mars.

Feel free to explore each page and interact with the content displayed.

## Contributing

Contributions to this project are welcome. If you have any ideas, suggestions, or improvements, please feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
`;
}
