(function ($) {
  $(function () {
    // Materialize Function Initialization
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    // Mentor list
    mentors = [];
    mentors[0] = {
      'name': "Ajay Tripathi",
      'photo': 'https://graph.facebook.com/100011762773105/picture?type=large&redirect=true&width=250&height=250',
      'cover': 'https://preview.ibb.co/i2MCxT/ffp_cover_crop.jpg',
      'title': 'Developer',
      'short_description': 'Hello, I am Ajay, This is a small description section. ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat velit delectus distinctio reprehenderit quis aperiam fuga officia possimus, minima explicabo, dolore vero expedita dignissimos error! Deleniti quisquam expedita est repellat.',
      'motto': '3rd Year, B.tech - Computer Science',
      'description': 'Worked in Web Development, Python, JavaScript, Git, DevOps; Planning to explore IoT and ML in the remaining two years of my B.Tech.',
      'twitter-link': 'https://twitter.com/atb00ker',
      'facebook-link': 'https://www.facebook.com/atb00ker',
      'linkedin-link': 'https://www.linkedin.com/in/atb00ker/',
      'email': 'ajay39in@gmail.com',
      'website-link': 'https://atb00ker.github.io'
    };

    mentors_list_container = document.getElementById('mentors_list');
    for (x in mentors) {
      html = '<div class="col s12 m6 l4"><div class="card-container"><div class="card"><div class="front"><div class="cover"><img src="' + mentors[x]['cover'] + '"/></div><div class="user"><img class="img-circle" src="' + mentors[x]['photo'] + '"/></div><div class="content"><div class="main"><h3 class="name">' + mentors[x]['name'] + '</h3><p class="profession">' + mentors[x]['title'] + '</p><p class="description-text text-center">' + mentors[x]['short_description'] + '</p></div></div></div><div class="back"><div class="header"><h5 class="motto">' + mentors[x]['motto'] + '</h5></div><div class="content"><div class="main"><h4 class="text-center">' + mentors[x]['title'] + '</h4><p class="text-center">' + mentors[x]['description'] + '</p></div></div><div style="margin: 20px"class="footer"><div class="social-links text-center">';
      if (mentors[x]['facebook-link'])
        html += '<a target="_blank" href="' + mentors[x]['facebook-link'] + '" title="Facebook"><i class="fa fa-facebook fa-fw"></i></a>';
      if (mentors[x]['email'])
        html += '<a target="_blank" href="mailto:' + mentors[x]['email'] + '" title="Mail"><i class="fa fa-envelope"></i></a>';
      if (mentors[x]['twitter-link'])
        html += '<a target="_blank" href="' + mentors[x]['twitter-link'] + '" title="Twitter"><i class="fa fa-twitter fa-fw"></i></a>';
      if (mentors[x]['website-link'])
        html += '<a target="_blank" href="' + mentors[x]['website-link'] + '" title="Website"><i class="fa fa-link"></i></a>';
      if (mentors[x]['linkedin-link'])
        html += '<a target="_blank" href="' + mentors[x]['linkedin-link'] + '" title="Linkedin"><i class="fa fa-linkedin"></i></a>';
      html += '</div></div></div></div></div></div>';

      mentors_list_container.innerHTML += html;

    }

  }); // end of document ready
})(jQuery); // end of jQuery name space



