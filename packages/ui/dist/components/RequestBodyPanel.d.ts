interface RequestBodyPanelProps {
    payload: string;
    schema?: any;
    responseSchema?: any;
    emits?: string;
    onChange: (val: string) => void;
    onSend: () => void;
}
declare const RequestBodyPanel: ({ payload, schema, responseSchema, emits, onChange, onSend }: RequestBodyPanelProps) => import("react/jsx-runtime").JSX.Element;
export default RequestBodyPanel;
