
const nots = [
    {
        user: {
            name:'Mark Webber',
            img: 'avatar-mark-webber.webp'
        },
        type: 'post-react',
        post: 'My first tournament today!',
        time: new Date (Date.now() - (1 * 60 * 1000)),
        new:true
    },
    {
        user: {
            name: 'Angela Gray',
            img: 'avatar-angela-gray.webp'
        },
        type: 'follow',
        time: new Date (Date.now () - (5 * 60 * 1000)),
        new:true
    },
    {
        user: {
            name: 'Jacob Thompson',
            img: 'avatar-jacob-thompson.webp'
        },
        type: 'group-join',
        group: 'Chess Club',
        time: new Date (Date.now() - (1 * 24 * 60 * 60 * 1000)),
        new:true
    },
    {
        user: {
            name: 'Rizky Hasanuddin',
            img: 'avatar-rizky-hasanuddin.webp'
        },
        type: 'msg',
        msg: 'Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.',
        time: new Date (Date.now() - (5 * 24 * 60 * 60 * 1000)),
        new:false
    },
    {
        user: {
            name: 'Kimberly Smith',
            img: 'avatar-kimberly-smith.webp'
        },
        type: 'picture-comment',
        img: 'image-chess.webp',
        time: new Date (Date.now () - (1 * 7 * 24 * 60 * 60 * 1000)),
        new:false
    },
    {
        user: {
            name: 'Nathan Peterson',
            img: 'avatar-nathan-peterson.webp'
        },
        type: 'post-react',
        post: '5 end-game strategies to increase your win rate',
        time: new Date (Date.now () - (2 * 7 * 24 * 60 * 60 * 1000)),
        new:false,
    },
    {
        user: {
            name: 'Anna Kim',
            img: 'avatar-anna-kim.webp'
        },
        type: 'group-left',
        group: 'Chess Club',
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

                 

                if (diff >= 24)
                {
                    type = ' day';
                     diff /= 24;

                     

                     if (diff >= 7)
                    {
                        type = ' week';
                        diff /= 7;

                        if (diff > 1)
                            type += 's';
                    } else if (diff > 1)
                        type += 's';

                } else if (diff > 1)
                    type += 's';
            } 
        }
    }

    return `${diff.toFixed(0)}${type}`;
}

function getText (not)
{
    switch (not.type)
    {
        case 'post-react':
            return `reacted to your recent post <span class='post'>${not.post}</post>`
            
        case "follow":
            return 'followed you'
           
        case "group-join":
        return `has joined your group <span class='group'>${not.group}</span>`
      
        case "msg":
        return `sent you a private message`;

        case "picture-comment":
        return 'commented on your picture';

        case 'group-left':
        return `left the group <span class='group'>${not.group}</span>`
    }

    return '';
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
                <p class='not__text'><span class='not__name'>${not.user.name}</span>${getText (not)}</p>
                <p class='not__time'>${getTime (not.time)} ago</p>
                ${not.msg ? `<p class='not__msg'>${not.msg}</p>` : ''}
            </div>
            ${not.img ? `<img src='./assets/images/${not.img}' alt='Notification image' class='not__img'/>` : ''}
        </div>`).join ('');
}

render ();