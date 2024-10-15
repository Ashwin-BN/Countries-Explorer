import { Container, Row, Col } from 'react-bootstrap';

export default function CountryDetails({ country }) {
    const errImg = "https://placehold.co/600x400?text=Photo+Not+Available";
    return (
      <Container>
        <Row>
          {/* Left Column for the Country Image */}
          <Col lg>
            <img
              onError={(event) => {
                event.target.onerror = null;
                event.target.src = errImg;
              }}
              className="img-fluid w-100"
              src={
              country.coatOfArms ? country.coatOfArms : errImg
                }
              alt="Country Coat of Arms"
            />
            <br />
            <br />
          </Col>
  
          {/* Right Column for Country Details */}
          <Col lg>
          <h2>{country.name}</h2>
                    <br />
                    <p><b>Native Name:</b> {country.nativeName || 'N/A'}</p>
                    <p><b>𝛼2/𝛼3 Code:</b> {country.a2code || 'N/A'}/{country.a3code || 'N/A'}</p>
                    <p><b>Capital:</b> {country.capital || 'N/A'}</p>
                    <p><b>Languages:</b> {country.languages || 'N/A'}</p>
                    <p><b>Population:</b> {country.population.toLocaleString() || 'N/A'}</p>
                    <p><b>Area:</b> {country.area ? `${country.area.toLocaleString()} Km² (${(country.area * 0.386102).toLocaleString()} sq mi)` : 'N/A'}</p>
                    <p><b>Latitude/Longitude:</b> ({country.latlng})</p>
                    <p><b>Top-Level Domain:</b></p>
                    <ul>
                        {country.tld.length > 0 ? country.tld.map(domain => <li key={domain}>{domain}</li>) : <li>N/A</li>}
                    </ul>
                    <p><b>Currencies:</b></p>
                    <ul>
                        {Array.isArray(country.currencies) && country.currencies.length > 0 
                            ? country.currencies.map(currency => <li key={currency.code}>{currency.name} ({currency.symbol})</li>)
                            : <li>N/A</li>}
                    </ul>
                    
                    <p><b>Continents:</b> {country.continents || 'N/A'}</p>
                    <p><b>Region/Subregion:</b> {country.region || 'N/A'} / {country.subregion || 'N/A'}</p>
                    <p><b>Map on Google:</b> <a href={country.googleMaps} target="_blank" rel="noopener noreferrer">{country.googleMaps}</a></p>
                    <br />
                </Col>
            </Row>
        </Container>
    );
}