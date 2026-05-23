interface EventDetailsProps {
    gatewayName: string;
    eventName: string;
    summary: string;
    description: string;
}
declare const EventDetails: ({ gatewayName, eventName, summary, description, }: EventDetailsProps) => import("react/jsx-runtime").JSX.Element;
export default EventDetails;
