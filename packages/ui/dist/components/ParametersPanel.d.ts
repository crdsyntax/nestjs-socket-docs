import { SocketDocsPayloadSchema } from "../types";
interface ParametersPanelProps {
    schema?: SocketDocsPayloadSchema;
    responseSchema?: SocketDocsPayloadSchema;
}
declare const ParametersPanel: ({ schema, responseSchema }: ParametersPanelProps) => import("react/jsx-runtime").JSX.Element;
export default ParametersPanel;
