import { ways } from '../data'
import WayToTuch from './WayToTuch'

export default function TeachingSection() {
    
    return (
        <section>
          <ul>
            {ways.map((way) => (
              <WayToTuch key={way.title}{...way}/>
            ))}
            {/* <WayToTuch title={ways[0].title} description={ways[0].description}/>
            <WayToTuch title={ways[1].title} description={ways[1].description}/>
            <WayToTuch title={ways[2].title} description={ways[2].description}/>
            <WayToTuch {...ways[3]}/> */}
          </ul>
        </section>

    )
}