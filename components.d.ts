// stencil-components.d.ts
import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "nav-header": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "header-transparent"?: string;
        "is-loggedin"?: string;
        "asset-path"?: string;
        // Add any other props your component accepts
      };
      "card-details": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        assetPath?: string;
        selectedCard?: any;
        cardsAvailable?: any;
      };
    }
  }
}
