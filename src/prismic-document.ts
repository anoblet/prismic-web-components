import { css, customElement, html, LitElement, property } from "lit-element";
import { unsafeHTML } from "lit-html/directives/unsafe-html";
import PrismicDOM from "prismic-dom";
import * as Prismic from "prismic-javascript/dist/prismic-javascript.browser";

@customElement("prismic-document")
export class PrismicDocument extends LitElement {
    @property({ type: Object }) data: any;
    @property({ type: String }) repository: any;
    @property({ type: String }) type: any;
    template: any;

    toText = PrismicDOM.RichText.asText;

    toHtml(data) {
        return unsafeHTML(PrismicDOM.RichText.asHtml(data));
    }

    async firstUpdated() {
        const api = await Prismic.getApi(
            `https://${this.repository}.prismic.io/api/v2`
        );
        const document = await api.getSingle(this.type);
        this.data = document.data;
    }

    public static get styles() {
        return css`
            :host {
                display: grid;
                grid-gap: 1rem;
                grid-template-columns: max-content auto;
            }

            :host > * {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        `;
    }

    public render() {
        return this.template.bind(this)();
    }
}
