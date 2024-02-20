export interface EventCardDetailsProps {
	/**
	 * Event thumbnail image URL
	 * @default ""
	 * @example "https://via.placeholder.com/150"
	 * @type string
	 * @required
	 */
	thumbnail: string;

	/**
	 * Event title
	 * @default ""
	 * @type string
	 * @required
	 */
	title: string;

	/**
	 * Start Date of the event
	 * @default ""
	 * @type string
	 * @required
	 */
	startDate: string;

	/**
	 * End Time of the event
	 * @default ""
	 * @type string
	 * @required
	 */
	endDate: string;
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
