// Types.
import { PropsWithChildren } from "react";

// Enclose any text in this component and it will be turned to the app's primary color.
export default function TextHighlight({ children }: PropsWithChildren) {
  return <span className="text-primary">{children}</span>;
}
