import { useRouter } from 'next/router';
import useSWR from 'swr';
import CountryDetails from '@/components/CountryDetails';
import Error from 'next/error'; 
import PageHeader from '@/components/PageHeader';

export default function Country() {
    const router = useRouter();
    const { id } = router.query;
  
    // Use SWR to fetch the country data
    const { data, error, isLoading } = useSWR(id ? `https://web-am5m77tj4-ashwin-bns-projects.vercel.app/api/countries/${id}` : null);
  
    // Handle loading state
    if (isLoading) return null;
  
    // Handle errors or no data
    if (error || !data) {
      return <Error statusCode={404} />;
    }
  
    // Render the country details
    return (
      <div>
        <PageHeader text={data.name} /> 
        <CountryDetails country={data} />
      </div>
    );
  }
  