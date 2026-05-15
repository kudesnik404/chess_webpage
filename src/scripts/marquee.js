export function createMarquee(items = []) {
    const section = document.createElement('div');
    section.className = 'marquee';

    const list = document.createElement('ul');
    list.className = 'marquee__text';

    items.forEach((text) => {
        const li = document.createElement('li');
        li.textContent = text;
        list.appendChild(li);
    });

    section.appendChild(list);

    return section;
}