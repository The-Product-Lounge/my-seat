export interface EventCardDetailsProps {
	/**
	 * Event thumbnail image URL
	 * @default ""
	 * @example "https://via.placeholder.com/150"
	 * @type string
	 */
	thumbnail?: string;

	/**
	 * Event title
	 * @type string
	 * @example "Event Title"
	 */
	title: string;

	/**
	 * Start Date of the event
	 * @default ""
	 * @type string
	 */
	startDate?: string;

	/**
	 * End Time of the event
	 * @default ""
	 * @type string
	 */
	endDate?: string;
}

const EventCardDetailsComponent: React.FC<EventCardDetailsProps> = (props) => {
	return (
		<>
			{Object.entries(props).map(([key, value]) => (
				<p key={key}>
					{key}: {JSON.stringify(value)}
				</p>
			))}
		</>
	);
};

export { EventCardDetailsComponent };
