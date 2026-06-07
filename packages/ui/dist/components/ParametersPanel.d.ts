import React from "react";
import { SocketDocsPayloadSchema } from "../types";
interface ParametersPanelProps {
    schema?: SocketDocsPayloadSchema;
    responseSchema?: SocketDocsPayloadSchema;
}
declare const ParametersPanel: ({ schema, responseSchema }: ParametersPanelProps) => React.JSX.Element;
export default ParametersPanel;
