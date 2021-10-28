import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import { BreweriesData } from "../components/BreweriesData"
import { EndCardSection } from "../components/EndCardSection"
import { GridCardBusinessSection } from "../components/GridCardBusinessSection"
import { ProcessSection } from "../components/ProcessSection"
import { WelcomeSection } from "../components/WelcomeSection"
export const Home = () =>{
	return (
		<>
			
			<Router>
				<Switch>
					<Route path="/data">
						<BreweriesData/>
					</Route>
					<Route path="/">
						<WelcomeSection />
						<ProcessSection />
						<GridCardBusinessSection />
						<EndCardSection />
					</Route>
				</Switch>
			</Router>
		</>
	)
}