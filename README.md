# Countries Explorer  

A web application to explore country data using React, Next.js, and a custom RESTful API. This project leverages React-Bootstrap for a responsive design and SWR for efficient data fetching.  

## Features  
- Browse country data with dynamic routing.  
- View detailed information about each country, including native names, population, and region.  
- Pre-rendered "About" page with developer information and a highlighted country.  
- Responsive UI built with React-Bootstrap.  
- SWR-powered data fetching for seamless updates.  

## Technologies Used  
- **Frontend:** React, Next.js, SWR, React-Bootstrap, Bootstrap 5.  
- **Backend:** Custom RESTful API built with Node.js and Express.  
- **Deployment:** Vercel.  

## Setup Instructions  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/Ashwin-BN/countries-explorer.git  
   cd countries-explorer  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. Start the development server:  
   ```bash  
   npm run dev  
   ```  

4. Open the application in your browser at `http://localhost:3000`.  

## Usage  
### Navigation  
- Use the top navigation bar to access:  
  - **Countries:** Home page displaying a list of countries.  
  - **About:** Developer information with details of my homeland.  

### API Integration  
- The app fetches data from the `/api/countries` endpoint, with support for pagination and specific country lookups.  

### Detailed Country View  
- Access a country's detailed information by navigating to `/country/[id]`.  

## Components Overview  
- **`MainNav.js`**: Responsive navigation bar featuring "Countries" and "About" links.  
- **`Layout.js`**: Application layout wrapper with a consistent design.  
- **`PageHeader.js`**: Reusable component for page headings.  
- **`CountryDetails.js`**: Displays detailed information for a selected country.  

## Future Enhancements  
- Add search functionality for filtering countries by name, region, or population.  
- Include graphs or charts for a visual representation of country statistics.  
- Improve accessibility features for a more inclusive user experience.  

## License  
This project is licensed under the [MIT License](LICENSE).  
