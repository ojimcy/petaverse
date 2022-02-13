const menus = [
    {
        id: 1,
        name: 'Home',
        links: '/',
       
    },
    {
        id: 2,
        name: 'Explore',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'All',
                links: '/explore-01'
            },
            {
                id: 2,
                sub: 'Live Auctions',
                links: '/live-auctions'
            },
        ],
    },
    {
        id: 3,
        name: 'Activity',
        links: '/activity-01',
    },
    {
        id: 4,
        name: 'Community',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'Blog',
                links: '/blog'
            },
            {
                id: 2,
                sub: 'About',
                links: '/about'
            },
            {
                id: 3,
                sub: 'Help Center',
                links: '/help-center'
            }
        ],
    },
    {
        id: 5,
        name: 'Create',
        links: '/create-item',
    },
    
]

export default menus;