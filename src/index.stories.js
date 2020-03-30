import "./index.ts";
import { html } from "lit-html";
import { centered } from "@webcomponents-dev/decorators-lit";

export default {
    decorators: [centered]
};

export const story1 = () => html`
    <prismic-document
        repository="anoblet"
        type="home"
        .template=${function() {
            return html`
                ${this.text(this.data.title)} ${this.html(this.data.rich_text)}
            `;
        }}
    ></prismic-document>
`;
