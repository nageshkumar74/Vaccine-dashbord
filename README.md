Vaccine Dashboard Full-Stack Application
Project Overview
This repository contains a full-stack Vaccine Dashboard application, comprising:

Backend API built with Node.js, Express, and TypeScript providing RESTful endpoints to query vaccine data and summary KPIs.

Frontend UI built with React and Next.js (or similar framework), consuming backend APIs for dynamic visualization and interaction.

The application enables filtering vaccine data by region, brand, and year, and displays aggregated market insights such as market size, average price, and growth estimates.

Backend Overview
Features
RESTful API using TypeScript and Express.js

Asynchronous loading of JSON data using native Node.js APIs (fs/promises)

Filtering and KPI summary endpoints with strict type safety

CORS support and JSON body parsing middleware

Modular architecture with separated route and controller layers

Tech Stack
Node.js v22+, Express.js

TypeScript

JSON data file as a simple datastore

GitHub repository for version control

Backend Setup & Run
Navigate to backend directory:

bash
cd vaccine-dashbord-backend
Install dependencies:

bash
npm install
Compile backend code:

bash
npm run build
Start development server:

bash
npm run dev
Default port:

text
http://localhost:5000
Frontend Overview
Features
Responsive React frontend with Next.js (or React framework of choice)

Fetches vaccine data and KPI summaries dynamically from backend APIs

Filters UI to select region, brand, and year

Displays data in tables, charts, and summary cards

Tech Stack
React.js with Next.js for server-side rendering

Fetch API / Axios for asynchronous data loading

Modern CSS for layout and styling

Frontend Setup & Run
Navigate to frontend directory:

bash
cd vaccine-dashboard-frontend
Install dependencies:

bash
npm install
Run development server:

bash
npm run dev
Default port:

text
http://localhost:3000
API Endpoints
Backend

/apivaccines - GET endpoint to get vaccine data filtered by query params: region, brand, year.

/apisummary - GET endpoint to get KPIs (market size, average price, CAGR) filtered similarly.

Project Structure
Backend
text
/vaccine-dashbord-backend
  /src
    /controllers
      vaccineController.ts
      summaryController.ts
    /routes
      vaccineRoutes.ts
      summaryRoutes.ts
    app.ts
  /data
    vaccines.json
  dist/
  package.json
  tsconfig.json
  .gitignore
Frontend
text
/vaccine-dashboard-frontend
  /pages
    index.tsx
  /components
  package.json
  tsconfig.json
  .gitignore
Important Notes
Backend uses ES Module syntax and requires Node.js v22+ for native JSON file reading.

JSON data loaded dynamically to avoid ES module import restrictions.

Make sure backend is running before starting frontend for API availability.

Both backend and frontend fully typed with TypeScript.

Use environment variables if deploying to different servers/ports for flexibility.
