
const nots = [
    {
        user: {
            name:'Mark Webber',
            img: 'avatar-mark-webber.webp'
        },
        text: 'reacted to your recent post <post>My first tournament today!</post>',
        time: new Date (Date.now() - (1 * 60 * 1000)),
        new:true
    },
    {
        user: {
            name: 'Angela Gray',
            img: 'avatar-angela-gray.webp'
        },
        text: 'followed your',
        time: new Date (Date.now () - (5 * 60 * 1000)),
        new:true
    },
    {
        user: {
            name: 'Jacob Thompson',
            img: 'avatar-jacob-thompson.webp'
        },
        text: 'has joined your group <group>Chess Club</group>',
        time: new Date (Date.now() - (1 * 24 * 60 * 60 * 1000)),
        new:true
    },
    {
        user: {
            name: 'Rizky Hasanuddin',
            img: 'avatar-rizky-hasanuddin.webp'
        },
        text: 'sent you a private message',
        msg: 'Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.',
        time: new Date (Date.now() - (5 * 24 * 60 * 60 * 1000)),
        new:false
    },
    {
        user: {
            name: 'Kimberly Smith',
            img: 'avatar-kimberly-smith.webp'
        },
        text: 'commented on your picture',
        img: 'image-chess.webp',
        time: new Date (Date.now () - (1 * 7 * 24 * 60 * 60 * 1000)),
        new:false
    },
    {
        user: {
            name: 'Nathan Peterson',
            img: 'avatar-nathan-peterson.webp'
        },
        text: 'reacted to your recent post <post>5 end-game strategies to increase your win rate</post>',
        time: new Date (Date.now () - (2 * 7 * 24 * 60 * 60 * 1000)),
        new:false,
    },
    {
        user: {
            name: 'Anna Kim',
            img: 'avatar-anna-kim.webp'
        },
        text: 'left the group <group>Chess Club</group>',
        time: new Date (Date.now() - (2 * 7 * 24 * 60 * 60 * 1000))
    }
]
