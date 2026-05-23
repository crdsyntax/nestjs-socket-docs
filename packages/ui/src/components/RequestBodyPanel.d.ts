interface RequestBodyPanelProps {
    payload: string;
    onChange: (val: string) => void;
    onSend: () => void;
}
declare const RequestBodyPanel: ({ payload, onChange, onSend }: RequestBodyPanelProps) => import("react/jsx-runtime").JSX.Element;
export default RequestBodyPanel;
