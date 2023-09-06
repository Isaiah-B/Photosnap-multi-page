import { AppLink } from "../../components/cta/cta.component";
import StoriesGrid from "../../components/stories-grid/stories-grid.component";
import StoryCard from "../../components/story-card/story-card.component";

import storiesList from '../../../data';

import {
  StoriesHero,
  StoriesHeroAuthor,
  StoriesHeroContent,
  StoriesMobileImage,
} from "./stories.styles";

export default function StoriesPage() {
  return (
    <main>
      <StoriesMobileImage />
      <StoriesHero>
        <StoriesHeroContent>
          <h4>Last month's featured story</h4>

          <h1>Hazy Full Moon of Appalachia</h1>

          <StoriesHeroAuthor>
            <span>March 2nd 2020</span>
            <span className="hero-author">by John Appleseed</span>
          </StoriesHeroAuthor>

          <p>
            The dissected plateau area, while not actually made up of geological mountains, 
            is popularly called "mountains," especially in eastern Kentucky and West Virginia, 
            and while the ridges are not high, the terrain is extremely rugged.
          </p>
          
          <AppLink to={'#'} linkType="link-dark">Read the story</AppLink>
        </StoriesHeroContent>
      </StoriesHero>

      <StoriesGrid>
        {
          storiesList.map((storyData) => (
            <StoryCard
              key={storyData.title}
              title={storyData.title}
              author={storyData.author}
              images={storyData.images}
            />
          ))
        }
      </StoriesGrid>
    </main>
  );
}