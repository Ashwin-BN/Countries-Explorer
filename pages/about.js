import Link from 'next/link';
import { Card } from 'react-bootstrap';
import CountryDetails from '@/components/CountryDetails';
import PageHeader from '@/components/PageHeader';

export async function getStaticProps() {
    const countryID = "66e8d89ac47e5c809976f44d";
    const res = await fetch(`https://web-am5m77tj4-ashwin-bns-projects.vercel.app/api/countries/${countryID}`);
    const country = await res.json();
  
    // Return the country data as props
    return {
      props: {country}
    };
  }
  
  export default function About(props) {
    return (
      <>
        <PageHeader text="About the Developer : Ashwin B N" />
        
        <Card className='bg-white'>
          <Card.Body>
            <p>
              <strong style={{fontStyle: 'italic'}}>Hey there!</strong> I'm Ashwin B N, a developer currently pursuing Computer Programming & Analysis at Seneca Polytechnic College.
              I'm all about building cool web apps, trying out new tech, and have a love for sports and photography.
            </p>
            <p>
            This app gives you a glimpse into countries from all around the globe — you'll find details like their languages, population, area, and more. 
            And of course, I couldn't forget to give a shout-out to my home country, India!
            </p>
            <p>
            <Link href={`/country/${props.country._id}`} passHref legacyBehavior>
              <a>{props.country.name}</a>
              </Link>
              {" "}
                is such a vibrant and diverse place, known for its rich history, amazing food, and bustling cities. 
              With over a billion people, countless languages, and a landscape that stretches from mountains to beaches, there's always something exciting happening. 
              It's a place that's both ancient and fast-moving at the same time.
            </p>
          </Card.Body>
          {/* Country Details */}
        <CountryDetails country={props.country} />
        </Card>
  
      </>
    );
  }
  