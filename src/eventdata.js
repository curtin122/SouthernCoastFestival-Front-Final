import treeoflife from '../static/images/treeoflife.jpg'
import texbbq from '../static/images/bbq-food.jpg'
import anza from '../static/images/anza-earring-stall.jpg'
import djduo from '../static/images/dj-duo-entertainment.jpg'
import swirl from '../static/images/bakery-food.jpg'
import luminous from '../static/images/lantern-stall.jpg'
import lanterns from '../static/images/making_lantern_activity.jpg'
import loaded from '../static/images/loadedpotato-food.jpg'
import vine from '../static/images/soap-stall.jpg'
import alisa from '../static/images/alisa-music-entertainment.jpg'

const data = [
    { 
        _id: '1',
        eventdisplayname: 'Tree of Life',
        eventcatergory: 'Entertainment',
        eventoperationdatetimestart: '18:00',
        eventoperationdatetimeend: '22:00',
        eventdescription: 'Witness the mesmerizing light show projected onto the tree while relaxing with your drinks',
        eventimage: treeoflife,
        eventstallnumber: '1',
        eventtag: ['adult only']
    },
    { 
        _id: '2',
        eventdisplayname: 'Tex BBQ',
        eventcatergory: 'Food',
        eventoperationdatetimestart: '',
        eventoperationdatetimeend: '',
        eventdescription: 'Inspired by Texas, Tex BBQ is cooking up a storm with briskets and pulled pork. Don`t forget the mac and cheese!',
        eventimage: texbbq,
        eventstallnumber: '4',
        eventtag: ['food']
    },
    { 
        _id: '3',
        eventdisplayname: 'Anza Earrings',
        eventcatergory: 'Shop',
        eventoperationdatetimestart: '',
        eventoperationdatetimeend: '',
        eventdescription: 'Handmade selection of earrings, perfect for any occasion.',
        eventimage: anza,
        eventstallnumber: '40',
        eventtag: ['']
    },
    { 
        _id: '4',
        eventdisplayname: 'DJ Lucy & Cara',
        eventcatergory: 'Entertainment',
        eventoperationdatetimestart: '15:00',
        eventoperationdatetimeend: '22:00',
        eventdescription: 'Geelong locals DJs Lucy and Cara keeping the vibe going between musical and talents acts.',
        eventimage: djduo,
        eventstallnumber: '10',
        eventtag: ['music']
    },
    { 
        _id: '5',
        eventdisplayname: 'Swirl Bakery',
        eventcatergory: 'Food',
        eventoperationdatetimestart: '',
        eventoperationdatetimeend: '',
        eventdescription: 'Swirl Bakery will be bringing over 20 kinds of baked goods to the showground.',
        eventimage: swirl,
        eventstallnumber: '13',
        eventtag: ['gluten-free', 'gourmet']
    },
    { 
        _id: '6',
        eventdisplayname: 'Luminous Lanterns',
        eventcatergory: 'Shop',
        eventoperationdatetimestart: '',
        eventoperationdatetimeend: '',
        eventdescription: 'lluminate your space with captivating collection of beautifully designed lanterns.',
        eventimage: luminous,
        eventstallnumber: '45',
        eventtag: []
    },
    { 
        _id: '7',
        eventdisplayname: 'Make Lanterns',
        eventcatergory: 'Entertainment',
        eventoperationdatetimestart: '15:00',
        eventoperationdatetimeend: '22:00',
        eventdescription: 'Light up your night even more with lantern making class. $10 per person.',
        eventimage: lanterns,
        eventstallnumber: '11',
        eventtag: ['activity', 'family-friendly']
    },
    { 
        _id: '8',
        eventdisplayname: 'Loaded',
        eventcatergory: 'Food',
        eventoperationdatetimestart: '',
        eventoperationdatetimeend: '',
        eventdescription: 'Load your potatoes however you want! Vegan options available.',
        eventimage: loaded,
        eventstallnumber: '21',
        eventtag: ['vegan']
    },
    { 
        _id: '9',
        eventdisplayname: 'Vine Soaps',
        eventcatergory: 'Shop',
        eventoperationdatetimestart: '',
        eventoperationdatetimeend: '',
        eventdescription: 'Indulge in our luxurious, all-natural soaps that leave your skin feeling soft and refreshed.',
        eventimage: vine,
        eventstallnumber: '47',
        eventtag: []
    },
    { 
        _id: '10',
        eventdisplayname: 'Music by Alisa',
        eventcatergory: 'Entertainment',
        eventoperationdatetimestart: '18:00',
        eventoperationdatetimeend: '18:45',
        eventdescription: 'Alisa will showcase her soulful voice, blending contemporary pop with classic melodies.',
        eventimage: alisa,
        eventstallnumber: '10',
        eventtag: ['music', 'stage']
    }
]

export default data