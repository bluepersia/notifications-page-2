
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
        text: 'followed you',
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
];

const counter = document.querySelector ('.nots__counter');
const list = document.querySelector('.nots__list');

document.querySelector ('.nots__mark').addEventListener ('click', markAll);

function countNew () 
{
    return nots.reduce ((prev, curr) => curr.new ? prev + 1 : prev, 0);
}

function markAll () 
{
    nots.forEach (el => el.new = false);
    render ();
}

function getTime (time) 
{
    let diff = Date.now () - time;
    let type = 'ms';

    if (diff => 1000)
    {
        type = 's';
        diff /= 1000;

        if (diff >= 60)
        {
            type ='m';
            diff /= 60;

            if (diff >= 60)
            {
                type = ' hour';
                 diff /= 60;

                 if (diff > 1)
                    type += 's';

                if (diff >= 24)
                {
                    type == ' day';
                     diff /= 24;

                     if (diff > 1)
                        type += 's';

                     if (diff >= 7)
                    {
                        type == ' week';
                        diff /= 7;

                        if (diff > 1)
                            type += 's';
                    } 

                }
            } 
        }
    }

    return `${diff.toFixed(0)}${type}`;
}

function render () 
{
    const newCount = countNew ();

    counter.textContent = newCount;

    if (newCount <= 0)
        counter.style.display ='none';


    list.innerHTML = nots.map (not => `
        <div class='not ${not.new && 'not--new'}'>
            <img src='./assets/images/${not.user.img}' alt='${not.user.name}' class='not__img-avatar'/>
            <div class='not__main'>
                <p class='not__text'><span class='not__name'>${not.user.name}</span>${not.text.replace ('<group>', `<span class='group'>`).replace ('</group>', '</span>').replace ('<post>', `<span class='post'>`).replace ('</post>', '</span>')}</p>
                <p class='not__time'>${getTime (not.time)}</p>
                ${not.msg ? `<p class='not__msg'>${not.msg}</p>` : ''}
            </div>
            ${not.img ? `<img src='./assets/images/${not.img}' alt='Notification image' class='not__img'/>` : ''}
        </div>`).join ('');
}

render ();