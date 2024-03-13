// Imports
import Card from "@mui/material/Card";

/**
 * Interface for the EventBackground component,
 * have an imageURL prop as a string
 */
interface EventBackgroundProps {
	/**
	 * The url of the background image
	 */
	url: string;
}

/**
 * EventBackground component
 */
export const EventBackground = ({ url }: EventBackgroundProps) => (
	<Card>Example {url}</Card>
);
