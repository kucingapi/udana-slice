import { EndCardSection } from "../components/EndCardSection"
import { GridCardBusinessSection } from "../components/GridCardBusinessSection"
import { ProcessSection } from "../components/ProcessSection"
import { WelcomeSection } from "../components/WelcomeSection"
export const Home = () =>{
	return (
		<>
			<WelcomeSection />
			<ProcessSection />
			<GridCardBusinessSection />
			<EndCardSection />
		</>
	)
}