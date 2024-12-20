import useSWR from 'swr';
import { useState, useEffect } from 'react';
import { Pagination, Accordion } from 'react-bootstrap';
import CountryDetails from '@/components/CountryDetails';
import PageHeader from '@/components/PageHeader';

export default function Home() {
  // State values
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  // Fetching data using SWR
  const { data, error } = useSWR(`https://web-am5m77tj4-ashwin-bns-projects.vercel.app/api/countries?page=${page}&perPage=10`);

  // Update pageData when data changes
  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  // Functions to change page
  const previous = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const next = () => {
    setPage(page + 1);
  };

  // Handle error 
  if (error) return <div>Error loading countries</div>;
  
  return (
    <>
      {/* Page Header */}
      <PageHeader text="Browse Countries : Sorted by Number of Ratings" />

      {/* Accordion to display country details */}
      <Accordion>
        {pageData.map((country) => (
          <Accordion.Item eventKey={country._id} key={country._id}>
            <Accordion.Header>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src={country.flag} alt={`Flag of ${country.name}`} style={{ width: '50px' }} />
              <strong>{country.name}</strong>
              <span>{`(${country.nativeName})`}</span>
              <span>{country.continents}</span>
            </div>
          </Accordion.Header>
            <Accordion.Body>
              <CountryDetails country={country} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      {/* Pagination */}
      <Pagination>
        <Pagination.Prev onClick={previous} disabled={page === 1} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </>
  );
}
