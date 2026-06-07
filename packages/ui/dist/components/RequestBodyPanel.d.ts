import { SocketDocsPayloadSchema } from "../types";
interface RequestBodyPanelProps {
    payload: string;
    schema?: SocketDocsPayloadSchema;
    responseSchema?: SocketDocsPayloadSchema;
    emits?: string;
    onChange: (val: string) => void;
    onSend: () => void;
}
declare const RequestBodyPanel: ({ payload, schema, responseSchema, emits, onChange, onSend }: RequestBodyPanelProps) => import("react/jsx-runtime").JSX.Element;
export default RequestBodyPanel;
