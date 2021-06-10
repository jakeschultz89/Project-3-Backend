const { Crew } = require('./models');
const { Dragon } = require('./models');
const { Rocket } = require('./models');

Crew.create([
    {
        "name": "Robert Behnken",
        "agency": "NASA",
        "image": "https://imgur.com/0smMgMH.png",
        "wikipedia": "https://en.wikipedia.org/wiki/Robert_L._Behnken"
    },
    {
        "name": "Douglas Hurley",
        "agency": "NASA",
        "image": "https://i.imgur.com/ooaayWf.png",
        "wikipedia": "https://en.wikipedia.org/wiki/Douglas_G._Hurley"
    },
    {
        "name": "Shannon Walker",
        "agency": "NASA",
        "image": "https://imgur.com/9z4tRIO.png",
        "wikipedia": "https://en.wikipedia.org/wiki/Shannon_Walker"
    },
    {
        "name": "Soichi Noguchi",
        "agency": "JAXA",
        "image": "https://imgur.com/7B1jxl8.png",
        "wikipedia": "https://en.wikipedia.org/wiki/Soichi_Noguchi"
    },
    {
        "name": "Victor J. Glover",
        "agency": "NASA",
        "image": "https://imgur.com/Vv5Hgzh.png",
        "wikipedia": "https://en.wikipedia.org/wiki/Victor_J._Glover"
    },
    {
        "name": "Michael S. Hopkins",
        "agency": "NASA",
        "image": "https://imgur.com/Dfg8OJ2.png",
        "wikipedia": "https://en.wikipedia.org/wiki/Michael_S._Hopkins"
    },
    {
        "name": "Shane Kimbrough",
        "agency": "NASA",
        "image": "https://imgur.com/nwxqtcT.png",
        "wikipedia": "https://en.wikipedia.org/wiki/Shane_Kimbrough"
    },
    {
        "name": "K. Megan McArthur",
        "agency": "NASA",
        "image": "https://imgur.com/0VNXcdM.png",
        "wikipedia": "https://en.wikipedia.org/wiki/K._Megan_McArthur"
    },
    {
        "name": "Thomas Pesquet",
        "agency": "ESA",
        "image": "https://imgur.com/5iColcZ.png",
        "wikipedia": "https://en.wikipedia.org/wiki/Thomas_Pesquet"
    },
    {
        "name": "Akihiko Hoshide",
        "agency": "JAXA",
        "image": "https://imgur.com/GefuPYs.png",
        "wikipedia": "https://en.wikipedia.org/wiki/Akihiko_Hoshide"
    },
    {
        "name": "Raja Chari",
        "agency": "NASA",
        "image": "https://imgur.com/uKj6DOF.png",
        "wikipedia": "https://en.wikipedia.org/wiki/Raja_Chari"
    },
    {
        "name": "Thomas Marshburn",
        "agency": "NASA",
        "image": "https://imgur.com/9RmQJZw.png",
        "wikipedia": "https://en.wikipedia.org/wiki/Thomas_Marshburn"
    },
    {
        "name": "Matthias Maurer",
        "agency": "ESA",
        "image": "https://imgur.com/yBPw4mX.png",
        "wikipedia": "https://en.wikipedia.org/wiki/Matthias_Maurer"
    },
    {
        "name": "Jared Isaacman",
        "agency": "SpaceX",
        "image": "https://imgur.com/BpdQrMv.png",
        "wikipedia": "https://en.wikipedia.org/wiki/Jared_Isaacman"
    },
    {
        "name": "Hayley Arceneaux",
        "agency": "SpaceX",
        "image": "https://imgur.com/ll7TlwD.png",
        "wikipedia": "https://en.wikipedia.org/wiki/Hayley_Arceneaux",
    },
    {
        "name": "Sian Proctor",
        "agency": "SpaceX",
        "image": "https://imgur.com/gcnGDC6.png",
        "wikipedia": "https://en.wikipedia.org/wiki/Sian_Proctor"
    },
    {
        "name": "Christopher Sembroski",
        "agency": "SpaceX",
        "image": "https://imgur.com/mC9naw6.png",
        "wikipedia": "https://en.wikipedia.org/wiki/Christopher_Sembroski"
    }
], (err, results) => {
    console.log(results);
});

Dragon.create([
    {
        "name": "Dragon 1",
        "crew_capacity": 0,
        "first_flight": "2010-12-08",
        "flickr_images": "https://i.imgur.com/9fWdwNv.jpg",
        "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_Dragon",
        "description": "Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS)."
    },
    {
        "name": "Dragon 2",
        "crew_capacity": 7,
        "first_flight": "2019-03-02",
        "flickr_images": "https://farm9.staticflickr.com/8588/16661791299_a236e2f5dc_b.jpg",
        "wikipedia": "https://en.wikipedia.org/wiki/Dragon_2",
        "description": "Dragon 2 (also Crew Dragon, Dragon V2, or formerly DragonRider) is the second version of the SpaceX Dragon spacecraft, which will be a human-rated vehicle. It includes a set of four side-mounted thruster pods with two SuperDraco engines each, which can serve as a launch escape system or launch abort system (LAS). In addition, it has much larger windows, new flight computers and avionics, and redesigned solar arrays, and a modified outer mold line from the initial cargo Dragon that has been flying for several years."
    }
], (err, results) => {
    console.log(results);
});

Rocket.create([
    {
        "name": "Falcon 1",
        "first_flight": "2006-03-24",
        "flickr_images": "https://imgur.com/DaCfMsj.jpg",
        "country": "Republic of the Marshall Islands",
        "company": "SpaceX",
        "wikipedia": "https://en.wikipedia.org/wiki/Falcon_1",
        "description": "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth."
    },
    {
        "name": "Falcon 9",
        "first_flight": "2010-06-04",
        "flickr_images": "https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg",
        "country": "United States",
        "company": "SpaceX",
        "wikipedia": "https://en.wikipedia.org/wiki/Falcon_9",
        "description": "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit."
    },
    {
        "name": "Falcon Heavy",
        "first_flight": "2018-02-06",
        "flickr_images": "https://farm5.staticflickr.com/4711/40126461411_aabc643fd8_b.jpg",
        "country": "United States",
        "company": "SpaceX",
        "wikipedia": "https://en.wikipedia.org/wiki/Falcon_Heavy",
        "description": "With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost."
    },
    {
        "name": "Starship",
        "first_flight": "2021-12-01",
        "flickr_images": "https://live.staticflickr.com/65535/48954138922_9c42173f08_b.jpg",
        "country": "United States",
        "company": "SpaceX",
        "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_Starship",
        "description": "Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon."
    }
], (err, results) => {
    console.log(results);
});

//fakeX