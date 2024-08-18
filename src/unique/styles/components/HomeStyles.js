import styled from 'styled-components';
import { Button, Card } from 'react-bootstrap'; // Import Button and Card from react-bootstrap

export const HomeContainer = styled.div`
  // Add styles for the home container
`;

export const PromoSection = styled.div`
  // Add styles for the promotional section
`;

export const PromoImage = styled.img`
  width: 100%;
  height: auto;
  // Add other image styles
`;

export const PromoTitle = styled.h1`
  font-size: 2.5rem;
  margin-top: 20px;
  // Add other styles for title
`;

export const PromoSubtitle = styled.p`
  font-size: 1.25rem;
  color: #666;
  // Add other styles for subtitle
`;

export const PromoButton = styled(Button)` // Use the imported Button component
  background-color: #dc3545;
  border: none;
  &:hover {
    background-color: #c82333;
  }
`;

export const FeaturedTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  // Add other styles for title
`;

export const CategoryCard = styled(Card)` // Use the imported Card component
  // Add styles for category cards
`;

export const TestimonialsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  // Add other styles for title
`;

export const ExclusiveOffersSection = styled.div`
  // Add styles for exclusive offers section
`;
