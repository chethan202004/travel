var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var places = [
    {
      title: 'Taj Mahal, Agra',
      text: 'One of the Seven Wonders of the World, this white marble mausoleum is a symbol of love and a masterpiece of Mughal architecture.',
      image: 'https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWElMjB0b3VyaXNtfGVufDB8fDB8fHww',
      url: 'https://www.google.com/maps?q=tajmahal'
    },
    {
      title: 'Jaipur, Rajasthan',
      text: 'Known as the Pink City, Jaipur is famous for its historic palaces, forts, and vibrant bazaars.',
      image: 'https://images.unsplash.com/photo-1602339752474-f77aa7bcaecd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGphaXB1cnxlbnwwfHwwfHx8MA%3D%3D',
      url: 'https://www.google.com/maps?q=jaipur'
    },
    {
      title: 'Kerala Backwaters',
      text: 'A network of serene lakes, canals, and rivers in the southern state of Kerala, offering houseboat cruises and stunning natural scenery.',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      url: 'https://www.google.com/maps?q=Kerala'
    },
    {
      title: 'Varanasi, Uttar Pradesh',
      text: 'One of the oldest living cities in the world, Varanasi is a spiritual hub for Hindus, famous for its ghats along the Ganges River',
      image: 'https://t4.ftcdn.net/jpg/04/08/25/05/240_F_408250543_MVaEVGeWxb4FiFy7mEGKj8nfYkwoAZON.jpg',
      url: 'https://www.google.com/maps?q=varanasi'
    },
    {
      title: 'Goa',
      text: 'Known for its beautiful beaches, vibrant nightlife, and Portuguese-influenced architecture, Goa is a popular destination',
      image: 'https://plus.unsplash.com/premium_photo-1697729594707-0fc9e51c8eed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdvYXxlbnwwfHwwfHx8MA%3D%3D',
      url: 'https://www.google.com/maps?q=goa'
    },

  ];

  res.render('india', { places });
});

router.get('/karnataka', function(req, res) {
  var places = [
    {
      title: 'Mysore',
      text: ' Famous for its majestic Mysore Palace, Chamundi Hill, and vibrant Dasara festival.',
      image: 'https://stock.adobe.com/in/images/mysore-palace-india/56391170',
      url: 'https://www.google.com/maps?q=tajmahal'
    },
    {
      title: 'Coorg (Kodagu)',
      text: 'Known for its coffee plantations, scenic landscapes, and trekking opportunities.',
      image: 'https://stock.adobe.com/in/images/sculpture-art-and-architecture-created-in-namdroling-nyingmapa-monastery-mysore-india/267342588',
      url: 'https://www.google.com/maps?q=jaipur'
    },
    {
      title: 'Hampi',
      text: 'A UNESCO World Heritage Site renowned for its ancient temples, ruins, and boulder-strewn landscapes.',
      image: 'https://stock.adobe.com/in/images/sunset-over-the-temple-in-old-city-hampi/304498495',
      url: 'https://www.google.com/maps?q=Kerala'
    },
    {
      title: 'Gokarna',
      text: ' A laid-back coastal town known for its pristine beaches and religious significance.',
      image: 'https://t4.ftcdn.net/jpg/04/80/92/03/240_F_480920340_QHSYyrRwu3l9pRAMz5veBrokFAsWdP6Y.jpg',
      url: 'https://www.google.com/maps?q=varanasi'
    },
    {
      title: 'Chikmagalur',
      text: 'Known for its coffee estates, scenic hills, and trekking spots like Mullayanagiri, the highest peak in Karnataka.',
      image: 'https://plus.unsplash.com/premium_photo-1697729594707-0fc9e51c8eed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdvYXxlbnwwfHwwfHx8MA%3D%3D',
      url: 'https://www.google.com/maps?q=goa'
    }
  ];

  res.render('karnataka', { places });
});



router.get('/ai', (req, res) => {
  res.render('ai');
});

module.exports = router;
