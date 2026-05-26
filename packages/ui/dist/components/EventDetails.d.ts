interface EventDetailsProps {
    gatewayName: string;
    eventName: string;
    summary: string;
    description: string;
    auth?: 'JWT' | 'API_KEY' | 'BASIC' | 'NONE';
}
declare const EventDetails: ({ gatewayName, eventName, summary, description, auth }: EventDetailsProps) => import("react/jsx-runtime").JSX.Element;
export default EventDetails;
