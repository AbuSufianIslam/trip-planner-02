// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

var Promise = require("bluebird");
var {db, Hotel, Restaurant, Place, Activity} = require('./models');

var data = {
  hotel: [
    {
      name: "Andaz Wall Street",
      place: {
        address: "75 Wall St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-74.007624, 40.705137]
      },
      num_stars: 4,
      amenities: "Pool, Free Wi-Fi"
    },
    {
      name: "Hotel Mulberry",
      place: {
        address: "52 Mulberry St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-73.999542, 40.715317]
      },
      num_stars: 4.5,
      amenities: "Free Wi-Fi"
    },
    {
      name: "The Ritz-Carlton New York, Battery Park",
      place: {
        address: "Two West Street",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-74.017241, 40.705417]
      },
      num_stars: 4.5,
      amenities: "24 hour Gym, Paid Wi-Fi"
    },
    {
      name: "Wall Street Inn",
      place: {
        address: "9 S William St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-74.010273, 40.704581]
      },
      num_stars: 4,
      amenities: "Free Wi-Fi"
    },
    {
      name: "Smyth TriBeCa",
      place: {
        address: "85 West Broadway",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-74.009301, 40.715076]
      },
      num_stars: 3.5,
      amenities: "24 hour Gym"
    },
    {
      name: "Double Tree",
      place: {
        address: "8 Stone St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-74.01235, 40.703961]
      },
      num_stars: 3.5,
      amenities: "24 hour Gym"
    },
    {
      name: "Hotel 91",
      place: {
        address: "91 E Broadway",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-73.993624, 40.713427]
      },
      num_stars: 3.5,
      amenities: "Free Wi-Fi"
    },
    {
      name: "Conrad New York Hotel",
      place: {
        address: "102 N End Ave",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-74.015841, 40.714985]
      },
      num_stars: 3.5,
      amenities: "Paid Wi-Fi, Dogs Allowed"
    },
    {
      name: "Millenium Hilton Hotel",
      place: {
        address: "55 Church St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-74.010392, 40.711597]
      },
      num_stars: 3.5,
      amenities: "Paid Wi-Fi"
    },
    {
      name: "US Pacific Hotel",
      place: {
        address: "106 Bowery",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-73.995231, 40.717873]
      },
      num_stars: 2,
      amenities: "Accepts Credit Cards"
    },
    {
      name: "Gild Hall, a Thompson Hotel",
      place: {
        address: "15 Gold Street",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-74.007108, 40.707894]
      },
      num_stars: 4,
      amenities: "Paid Wi-Fi"
    },
    {
      name: "W New York",
      place: {
        address: "123 Washington Street",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-74.013997, 40.709102]
      },
      num_stars: 3.5,
      amenities: "Pool, 24 hour Gym, Paid Wi-Fi"
    },
    {
      name: "New York Marriott Downtown",
      place: {
        address: "85 W St at Albany St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-73.989568, 40.731131]
      },
      num_stars: 3.5,
      amenities: "24 hour Gym, Paid Wi-Fi"
    },
    {
      name: "Cosmopolitan Hotel",
      place: {
        address: "95 W Broadway",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-74.008922, 40.715681]
      },
      num_stars: 3.5,
      amenities: "Free Wif-Fi"
    },
    {
      name: "Club Quarters",
      place: {
        address: "140 Washington St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-74.01394, 40.70963]
      },
      num_stars: 4,
      amenities: "Free Wif-Fi"
    }
  ],
  restaurant: [
    {
      name: "Bouley",
      place: {
        address: "75 Wall St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-74.01394, 40.705137]
      },
      cuisine: "French",
      price: 4
    },
    {
      name: "Marc Forgione",
      place: {
        address: "134 Reade St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-74.009567, 40.716526]
      },
      cuisine: "Seafood",
      price: 3
    },
    {
      name: "Tamarind",
      place: {
        address: "99 Hudson St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-74.008929, 40.718977]
      },
      cuisine: "Indian",
      price: 3
    },
    {
      name: "Hop Lee Restaurant",
      place: {
        address: "16 Mott St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-73.998509, 40.71423]
      },
      cuisine: "Chinese",
      price: 2
    },
    {
      name: "Jungsik",
      place: {
        address: "2 Harrison St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-74.0089, 40.718679]
      },
      cuisine: "Korean",
      price: 4
    },
    {
      name: "The Capital Grille",
      place: {
        address: "120 Broadway",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-74.010846, 40.708475]
      },
      cuisine: "Steakhouses, American",
      price: 4
    },
    {
      name: "Pylos",
      place: {
        address: "128 E 7th St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-73.984152, 40.726096]
      },
      cuisine: "Greek",
      price: 3
    },
    {
      name: "Joe's Shanghai",
      place: {
        address: "9 Pell St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-73.997761, 40.714601]
      },
      cuisine: "Shanghainese, Dim Sum",
      price: 2
    },
    {
      name: "Cafe Katja",
      place: {
        address: "79 Orchard St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-73.990565, 40.717719]
      },
      cuisine: "German, Austrian",
      price: 2
    },
    {
      name: "Rosanjin",
      place: {
        address: "141 Duane St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-74.007724, 40.716403]
      },
      cuisine: "Japanese",
      price: 3
    },
    {
      name: "Kittichai",
      place: {
        address: "60 Thompson St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-74.003242, 40.724014]
      },
      cuisine: "Thai",
      price: 4
    },
    {
      name: "Bianca Restaurant",
      place: {
        address: "5 Bleecker St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-73.992662, 40.725495]
      },
      cuisine: "Italian",
      price: 2
    },
    {
      name: "Rayuela",
      place: {
        address: "165 Allen St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-73.989756, 40.721266]
      },
      cuisine: "Spanish, Latin American",
      price: 3
    },
    {
      name: "Mas Farmhouse",
      place: {
        address: "39 Downing St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-74.003875, 40.729269]
      },
      cuisine: "New American, French",
      price: 4
    },
    {
      name: "Xe Lua",
      place: {
        address: "86 Mulberry St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-73.998626, 40.716544]
      },
      cuisine: "Vietnamese",
      price: 1
    }
  ],
  activity: [
    {
      name: "Mahayana Temple Buddhist Association",
      place: {
        address: "133 Canal St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-73.995315, 40.716291]
      },
      age_range: "All"
    },
    {
      name: "South Street Seaport",
      place: {
        address: "19 Fulton St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-74.003602, 40.707119]
      },
      age_range: "All"
    },
    {
      name: "National September 11th Memorial & Museum",
      place: {
        address: "1 Albany St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-74.013157, 40.709189]
      },
      age_range: "All"
    },
    {
      name: "Battery Park",
      place: {
        address: "State St & Battery Pl",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-74.014334, 40.704531]
      },
      age_range: "All"
    },
    {
      name: "Staten Island Ferry Whitehall Terminal",
      place: {
        address: "4 S St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-74.0130686, 40.70103]
      },
      age_range: "All"
    },
    {
      name: "Chinatown Ice Cream Factory",
      place: {
        address: "65 Bayard St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-73.99819, 40.715323]
      },
      age_range: "All"
    },
    {
      name: "Blue Man Group",
      place: {
        address: "434 Lafayette St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-73.992104, 40.729373]
      },
      age_range: "All"
    },
    {
      name: "Scott's Pizza Tours",
      place: {
        address: "244 5th Ave",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-73.987708, 40.74461]
      },
      age_range: "All"
    },
    {
      name: "Apple Store",
      place: {
        address: "103 Prince St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-73.999144, 40.724918]
      },
      age_range: "All"
    },
    {
      name: "Brooklyn Bridge Park",
      place: {
        address: "Pier 1",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-73.996563, 40.702225]
      },
      age_range: "All"
    },
    {
      name: "Ellis Island Immigration Museum",
      place: {
        address: "Ellis Island",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-74.040317, 40.699297]
      },
      age_range: "All"
    },
    {
      name: "Washington Square Park",
      place: {
        address: "1 Washington Sq E",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-73.998649, 40.732204]
      },
      age_range: "All"
    },
    {
      name: "Union Square Holiday Market",
      place: {
        address: "Union Sq & W 14th St",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-73.987995, 40.733615]
      },
      age_range: "All"
    },
    {
      name: "Strand Bookstore",
      place: {
        address: "828 Broadway",
        city: "New York",
        state: "NY",
        phone: "123-456-7890",
        location: [-73.99087, 40.733274]
      },
      age_range: "All"
    }
  ]
};

db
  .sync({ force: true })
  .then(function() {
    console.log("Dropped old data, now inserting data");
    return Promise.map(Object.keys(data), function(name) {
      return Promise.map(data[name], function(item) {
        return db.model(name).create(item, {
          include: [Place]
        });
      });
    });
  })
  .then(function() {
    console.log("Finished inserting data");
  })
  .catch(function(err) {
    console.error("There was totally a problem", err, err.stack);
  })
  .finally(function() {
    db.close(); // uses promises but does not return a promise. https://github.com/sequelize/sequelize/pull/5776
    console.log("connection closed"); // the connection eventually closes, we just manually do so to end the process quickly
    return null; // silences bluebird warning about using non-returned promises inside of handlers.
  });
