import Card from '../../components/Card';
import { accomodations } from '../../models/accomodations';
import { BackgroundColor, BackgroundImg, Body, BreakLine, Gallery, Heading, Section } from './Home.style';


const Home = () => {

	return (
		<Body>
			<Section>
				<BackgroundImg data-testid="img" />
                <BackgroundColor />
                <Heading>Chez vous,<BreakLine /> partout et ailleurs</Heading>
			</Section>
			<Gallery>
				{accomodations.map((accomodation) => (
					<Card
						key={accomodation.id}
						id={accomodation.id}
						title={accomodation.title}
						cover={accomodation.cover}
					/>
				))}
			</Gallery>
		</Body>
	);
};

export default Home;

