import x from "hyperaxe";
const header = x(".header");

var { body, h1, a, ul, li, button } = require('hyperaxe');

var siteNav = (...links) =>
    x('nav.site')(links.map(link =>
            x('li.link')({ href: link.href }, link.text)
    )
)

const siteNavigation = siteNav(
    { href: '#apps', text: 'apps' },
    { href: '#games', text: 'games' }
)

var li_fat = x('li.text-3xl.text-center')

const onclick = () => {
    console.log('clicked')
}

document.body = body(
    siteNavigation,
    header(
        x("h1.text-center.text-3xl.underline")("TlDr News"),
        button({ onclick }, 'click it!'),
        ul(
            li_fat("one"),
            li_fat("two"),
            li_fat("three")
        ),
        a({ href: '#' }, 'click')
    )
);

