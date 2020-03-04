class Events extends HTMLElement {

    constructor() {
        super();

        let template = document.getElementById('eventview');
        let templateContent = template.content;

        console.log('events view')

        const shadow = this.attachShadow({
                mode: 'open'
            })
            .appendChild(templateContent.cloneNode(true));
    }

    connectedCallback() {

        var sr = this.shadowRoot;
        var eventscomponent = sr.getElementById('ALLEVENTS');
        var eventid = eventscomponent.getAttribute('eventid');

        console.log('EVENTID: ' + eventid);

        eventscomponent.addEventListener(eventid, e => {
            console.log(e.detail)
        });
    }
}

try {
    customElements.define('events-element', Events);
} catch (err) {
    const h3 = document.createElement('h3')
    h3.innerHTML = err
    document.body.appendChild(h3)
}
