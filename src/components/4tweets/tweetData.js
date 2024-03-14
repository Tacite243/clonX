import tweetAvatar1 from '../../assets/Profile-CNN.svg'
import tweetAvatar2 from '../../assets/Tweet-Profile-Photo.png'
import tweetAvatar3 from '../../assets/image.png'

const tweetCollection = [
    {
        innetText: `President Joe Biden touted a new agreement reached with the European 
        Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both 
        strengthen the US steel industry and combat the global climate crisis.`,
        author: {
            title: 'CNN',
            tag: '@CNN',
            ms: '7m'
        },
        hasImage: false,
        avatarImage: tweetAvatar1,
        action: {
            msg: '57',
            replie: '144',
            like: '184'
        }
    },
    {
        innetText: `Gardening boomed during the pandemic. Six Black writers share how it has 
        helped them re-establish, and reimagine, a connection to cultivation and the land`,
        author: {
            title: 'The New York Times',
            tag: '@nytimes',
            ms: '2h'
        },
        hasImage: true,
        avatarImage: tweetAvatar2,
        action: {
            msg: '19',
            replie: '48',
            like: '482'
        }
    },
    {
        innetText: `BIG NEWS lol jk still Twitter`,
        author: {
            title: 'Tweeter',
            tag: '@Tweeter',
            ms: 'Oct29'
        },
        hasImage: false,
        avatarImage: tweetAvatar3,
        action: {
            msg: '6.8K',
            replie: '36.6K',
            like: '267.1K'
        }
    },
    {
        innetText: `hello literally everyone`,
        author: {
            title: 'Tweeter',
            tag: '@Tweeter',
            ms: 'Oct4'
        },
        hasImage: false,
        avatarImage: tweetAvatar3,
        action: {
            msg: '118.7K',
            replie: '785.4K',
            like: '3.3M'
        }
    },
];

export default tweetCollection;